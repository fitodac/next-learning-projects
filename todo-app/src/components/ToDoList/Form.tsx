'use client'
import { useState, useRef } from 'react'
import { editTask } from '@/actions'

export const Form = (props: { id: number; task: string; action: Function }) => {
	const [task, setTask]: [string, Function] = useState(props.task)
	const inputTask: any = useRef(null)

	const hideForm = () => {
		console.log('hideForm')
		props.action()
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await editTask({ id: props.id, task })
		await props.action()
	}

	return (
		<form
			className="divide-x divide-slate-900 w-full h-full flex"
			id="todoForm"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="task"
				className="bg-transparent px-3 flex-1 focus:outline-none focus:bg-slate-700/50"
				value={task}
				onChange={handleChange}
				autoComplete="off"
				ref={inputTask}
			/>

			<button type="button" className="text-sm px-3" onClick={hideForm}>
				Cancel
			</button>

			<button className="text-sm font-semibold px-3">Save</button>
		</form>
	)
}
