import Database from '../../../database/db'

const allAvos = async (req, res) => {
	try {
		const db = new Database();
		const allEntries = await db.getAll();

		res.statusCode = 200
		res.setHeader("Content-type", "application/json")
		res.end( JSON.stringify({ data: allEntries, length: allEntries.length }) )
	} catch (e){
		console.error(e)
		res.end(
			JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
		)
	}
}

export default allAvos