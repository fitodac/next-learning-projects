'use server'
import { revalidateTag } from 'next/cache'

export const deleteTask = async (id: number) => {
	try {
		await fetch(`${process.env.BASEPATH}/api`, {
			method: 'DELETE',
			body: JSON.stringify({id})
		})
		revalidateTag('todo_collection')
		revalidateTag('todo_collection_done')
	} catch (err) {
		console.log('Error:', err)
	}
}
