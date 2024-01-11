import { type NextRequest } from 'next/server'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db = null
const filename: string = './src/database/todo.sqlite'

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

	const todos = await db.all(sql)

	return new Response(JSON.stringify(todos), {
		headers: { 'content-type': 'application/json' },
		status: 200,
	})
}

export async function POST(req: Request) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	const { task } = await req.json()
	await db.run('INSERT INTO todo (task, done) VALUES (?, ?)', task, false)

	return new Response(
		JSON.stringify(
			{ message: 'success' },
			{
				headers: { 'content-type': 'application/json' },
				status: 200,
			}
		)
	)
}

export async function PATCH(req: NextRequest) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	const { id, task, done } = await req.json()

	if (task !== undefined && task !== null) {
		await db.run(`UPDATE todo SET task = ? WHERE id = ?`, task, id)
	}
	if (done !== undefined && done !== null) {
		await db.run(`UPDATE todo SET done = ? WHERE id = ?`, done, id)
	}

	return new Response(
		JSON.stringify(
			{ message: 'success' },
			{ headers: { 'content-type': 'application/json' }, status: 200 }
		)
	)
}
