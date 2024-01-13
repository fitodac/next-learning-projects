import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'
import { NextRequest, NextResponse } from 'next/server'

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null
const filename: string = './public/database/todo.sqlite'

export async function GET(req: NextRequest) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	const searchParams = req.nextUrl.searchParams
	const q = searchParams.get('q')

	let sql = 'SELECT * FROM todo'
	if (q === 'done') {
		sql += ' WHERE done = true'
	} else {
		sql += ' WHERE done = false'
	}

	try {
		const response = await db.all(sql)
		return NextResponse.json(response, { status: 200 })
	} catch (err) {
		console.log('GET ERROR: ', err)
		return NextResponse.json(
			{
				error: { message: err },
			},
			{ status: 500 }
		)
	}
}

export async function POST(req: NextRequest) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	try {
		const { task } = await req.json()
		await db.run('INSERT INTO todo (task, done) VALUES (?, ?)', task, false)

		return NextResponse.json(
			{
				message: 'success',
			},
			{ status: 200 }
		)
	} catch (err) {
		return NextResponse.json(
			{
				error: { message: err },
			},
			{ status: 500 }
		)
	}
}

export async function PATCH(req: NextRequest) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	const { id, task, done } = await req.json()

	try {
		if (task !== undefined && task !== null) {
			await db.run(`UPDATE todo SET task = ? WHERE id = ?`, task, id)
		}
		if (done !== undefined && done !== null) {
			await db.run(`UPDATE todo SET done = ? WHERE id = ?`, done, id)
		}

		return NextResponse.json(
			{
				message: 'success',
			},
			{ status: 200 }
		)
	} catch (err) {
		return NextResponse.json(
			{
				error: { message: err },
			},
			{ status: 500 }
		)
	}
}

export async function DELETE(req: NextRequest) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	const { id } = await req.json()

	try {
		await db.run('DELETE FROM todo WHERE id = ?', id)

		return NextResponse.json(
			{
				message: 'Success',
			},
			{ status: 200 }
		)
	} catch (err) {
		return NextResponse.json(
			{
				error: { message: err },
			},
			{ status: 500 }
		)
	}
}
