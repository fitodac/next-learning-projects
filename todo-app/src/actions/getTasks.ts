'use server'
import { revalidateTag } from 'next/cache'

export const getTasks = async () => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/`, {
			next: { tags: ['todo_collection'] },
		})
		revalidateTag('todo_collection')
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
