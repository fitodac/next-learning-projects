'use server'
import { revalidateTag } from 'next/cache'

export const getDoneTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/?q=done`, {
			next: { tags: ['todo_collection_done'] },
		})
		revalidateTag('todo_collection_done')
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
