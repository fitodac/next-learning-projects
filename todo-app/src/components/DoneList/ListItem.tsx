'use client'
import { useRef } from 'react'
import { deleteTask, setUndoneTask } from '@/actions'
import gsap from 'gsap'

export const ListItem = ({ id, task }: dataObjectType) => {
	const item = useRef(null)

	const remove = () => {
		gsap.to(item.current, {
			opacity: 0,
			height: 0,
			margin: 0,
			duration: 0.4,
		})

		setTimeout(() => deleteTask(id), 500)
	}

	return (
		<div
			className="bg-slate-800/30 relative overflow-hidden rounded-md"
			id={`task-${id}`}
			ref={item}
		>
			<div className="bg-inherit items-center flex relative z-10 group">
				<div className="text-slate-300/40 px-4 py-3 whitespace-nowrap text-ellipsis flex-1 overflow-hidden">
					{task}
				</div>

				<div className="flex gap-x-3 justify-end items-center px-2 inset-0 absolute">
					<button
						className="bg-slate-500 text-slate-900 text-sm font-semibold px-2 py-0.5 
													opcity-0 invisible select-none transition-all rounded-md
													group-hover:visible group-hover:opacity-100 hover:bg-slate-300"
						onClick={() => setUndoneTask(id)}
					>
						Undone
					</button>

					<button
						className="bg-slate-500 text-slate-900 text-sm font-semibold px-2 py-0.5 
													opcity-0 invisible select-none transition-all rounded-md
													group-hover:visible group-hover:opacity-100 hover:bg-slate-300"
						onClick={remove}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}
