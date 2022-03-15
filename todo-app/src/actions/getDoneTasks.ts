'use server'

export const getDoneTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/?q=done`, {
			next: { tags: ['todo_collection_done'] },
		})
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
