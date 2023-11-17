import Database from '../../../database/db'

const allAvos = async (req, res) => {
	try {
		const db = new Database();
		const avoId = String(req.query.id)
		const avo = await db.getById(avoId)

		res.statusCode = 200
		res.setHeader("Content-type", "application/json")
		res.end( JSON.stringify(avo) )
	} catch (e){
		console.error(e)
		res.end(
			JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
		)
	}
}

export default allAvos