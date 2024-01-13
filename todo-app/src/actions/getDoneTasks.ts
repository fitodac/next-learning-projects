export const getDoneTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/?q=done`, {
			next: { tags: ['todo_collection_done'] },
		})

		const response = await res.json()
		return await response
	} catch (err) {
		console.log('getDoneTasks error:', err)
		return []
	}
}
