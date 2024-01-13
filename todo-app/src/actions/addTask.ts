'use server'
import { revalidateTag } from 'next/cache'

export const addTask = async (task: string) => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api`, {
			body: JSON.stringify({ task }),
			method: 'POST',
		})
		revalidateTag('todo_collection')
		return await res.json()
	} catch (err) {
		console.log('error:', err)
	}
}
