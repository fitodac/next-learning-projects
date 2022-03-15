'use client'
import { useState, useRef } from 'react'
import gsap from 'gsap'
import { addTask } from '@/actions'

export const Form = () => {
	const [btnDisabled, setBtnDisabled] = useState(false)
	const [task, setTask]: [string, Function] = useState('')
	const inputTask: any = useRef(null)

	const showForm = () => {
		gsap.to('#addItemButton', {
			translateX: '50%',
			opacity: 0,
		})

		gsap.to('#todoForm', {
			left: 0,
			opacity: 1,
		})

		setBtnDisabled(true)
		inputTask.current?.focus()
	}

	const hideForm = () => {
		gsap.to('#todoForm', {
			left: '-100%',
			opacity: 0,
		})

		gsap.to('#addItemButton', {
			translateX: 0,
			opacity: 1,
		})

		setTimeout(() => {
			setBtnDisabled(false)
			setTask('')
		}, 600)
	}

	const handleChange = (e) => {
		setTask(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = await addTask(task)
		if (res?.message) hideForm()
	}

	return (
		<>
			<button
				className={`w-full h-full transition-color ${
					!btnDisabled ? 'hover:bg-indigo-700/70' : ''
				}`}
				onClick={showForm}
				id="addItemButton"
				disabled={btnDisabled}
			>
				Add to list
			</button>

			<form
				className="bg-slate-800 divide-x divide-slate-900 w-full h-full -left-full top-0 absolute flex opacity-0"
				id="todoForm"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="task"
					className="bg-transparent px-3 flex-1 focus:outline-none focus:bg-slate-700/50"
					placeholder="New task..."
					value={task}
					onChange={handleChange}
					autoComplete="off"
					ref={inputTask}
				/>

				<button type="button" className="text-sm px-3" onClick={hideForm}>
					Cancel
				</button>

				<button className="text-sm font-semibold px-3">Add</button>
			</form>
		</>
	)
}
