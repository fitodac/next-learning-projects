'use server'

export const getTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/`, {
			next: { tags: ['todo_collection'] },
		})
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
