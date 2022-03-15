import { ListItem } from './ListItem'
import { getTasks } from '@/actions'

export const List = async () => {
	const data = await getTasks()

	return (
		<>
			{data && (
				<div className="px-6 space-y-2 lg:px-0">
					{data.reverse().map((e: dataObjectType) => (
						<ListItem key={`task-${e.id}`} {...e} />
					))}
				</div>
			)}
		</>
	)
}
