'use server'
import { revalidateTag } from 'next/cache'

export const deleteTask = async (id: number) => {
	try {
		await fetch(`${process.env.BASEPATH}/api/${id}`, {
			method: 'DELETE',
		})
		revalidateTag('todo_collection')
	} catch (err) {
		console.log('Error:', err)
	}
}
