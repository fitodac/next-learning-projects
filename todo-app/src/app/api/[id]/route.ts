import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'
import { NextRequest, NextResponse } from 'next/server'

let db: Database<sqlite3.Database, sqlite3.Statement> | null = null
const filename: string = './src/database/todo.sqlite'

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id?: number } }
): Promise<Response> {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	} else {
		throw new Error('Database connection could not be established')
	}

	if (
		typeof params.id !== 'number' ||
		params.id === null ||
		params.id === undefined
	) {
		return NextResponse.json(
			{
				error: { message: 'Invalid ID' },
			},
			{ status: 500 }
		)
	}

	try {
		await db.run('DELETE FROM todo WHERE id = ?', params.id)

		return NextResponse.json(
			{
				message: 'Success',
			},
			{ status: 200 }
		)
	} catch (err) {
		console.log(`Error: ${err}`)

		return NextResponse.json(
			{
				error: { message: err },
			},
			{ status: 500 }
		)
	}
}
