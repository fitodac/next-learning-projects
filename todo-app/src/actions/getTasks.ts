export const getTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api`, {
			next: { tags: ['todo_collection'] },
		})

		const response = await res.json()
		return await response
	} catch (err) {
		console.log('getTasks error:', err)
		return []
	}
}
