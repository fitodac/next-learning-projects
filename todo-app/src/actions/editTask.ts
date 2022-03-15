'use server'
import { revalidateTag } from 'next/cache'

export const editTask = async ({ id, task }: { id: number; task: string }) => {
	try {
		const res = await fetch(`${process.env.BASEPATH}/api/`, {
			method: 'PATCH',
			body: JSON.stringify({ id, task }),
		})
		revalidateTag('todo_collection')
		return await res.json()
	} catch (err) {
		console.log('Error:', err)
	}
}
