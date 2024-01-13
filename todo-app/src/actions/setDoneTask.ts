'use server'
import { revalidateTag } from 'next/cache'

export const setDoneTask = async (id: number) => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api`, {
			method: 'PATCH',
			body: JSON.stringify({ id, done: 1 }),
		})
		revalidateTag('todo_collection')
		// revalidateTag('todo_collection_done')
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}

export const setUndoneTask = async (id: number) => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/`, {
			method: 'PATCH',
			body: JSON.stringify({ id, done: 0 }),
		})
		revalidateTag('todo_collection')
		// revalidateTag('todo_collection_done')
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
