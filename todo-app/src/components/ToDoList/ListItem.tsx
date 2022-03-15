'use client'
import { useRef } from 'react'
import { showEditActions, hideEditActions } from './helpers/actions'
import { Check, Form } from '.'

export const ListItem = ({ id, task }: dataObjectType) => {
	const itemBody = useRef(null)
	const editActions = useRef(null)

	return (
		<div
			className="bg-slate-800 relative overflow-hidden rounded-md"
			id={`task-${id}`}
		>
			<div
				className="bg-inherit items-center flex relative z-10 group"
				ref={itemBody}
			>
				<Check id={id} />

				<div className="px-4 py-3 whitespace-nowrap text-ellipsis flex-1 overflow-hidden">
					{task}
				</div>

				<button
					className="text-slate-400 text-center px-3 py-3 transition-all select-none 
											invisible opacity-0 hover:text-white 
											group-hover:visible group-hover:opacity-100"
					onClick={() => showEditActions({ editActions, itemBody })}
				>
					<i className="ri-pencil-fill ri-lg" />
				</button>
			</div>

			{/* Edit Actions */}
			<div
				className="h-full w-full flex top-0 absolute inset-0 opacity-0 invisible"
				ref={editActions}
			>
				<Form
					id={id}
					task={task}
					action={() => hideEditActions({ editActions, itemBody })}
				/>
			</div>
		</div>
	)
}
