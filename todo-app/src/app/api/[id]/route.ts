import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db = null
const filename: string = './src/database/todo.sqlite'

export async function DELETE(
	req: Request,
	{ params }: { params: { id?: number } }
) {
	if (!db) {
		db = await open({
			filename,
			driver: sqlite3.Database,
		})
	}

	try {
		await db.run('DELETE FROM todo WHERE id = ?', params.id)
	} catch (err) {
		console.log(`Error: ${err}`)
	}

	return new Response(
		JSON.stringify(
			{ message: 'success' },
			{ headers: { 'content-type': 'application/json' }, status: 200 }
		)
	)
}
