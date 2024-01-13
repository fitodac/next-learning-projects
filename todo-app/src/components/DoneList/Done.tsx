import { ListItem } from './ListItem'
import { getDoneTasks } from '@/actions'

export const DoneList = async () => {
	const data: [] = await getDoneTasks()

	console.log(await typeof data)

	if (data && !data.length) return <></>

	return (
		<div className="pt-5">
			<div className="font-semibold space-x-2 px-6 lg:px-0">
				<i className="ri-check-line ri-xl" />
				<span>Done</span>
			</div>

			<div className="mt-3">
				<div className="px-6 space-y-2 lg:px-0">
					{data.map((e: dataObjectType) => (
						<ListItem key={`task-${e.id}`} {...e} />
					))}
				</div>
			</div>
		</div>
	)
}
