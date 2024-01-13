import { List, NewTask, DoneList } from '@/components'

export default function Home() {
	return (
		<main className="max-w-xl min-h-screen mx-auto py-10">
			<div className="space-y-6">
				<h1 className="font-bold px-6 lg:px-0">ToDo list</h1>
				<NewTask />
				<List />
				<DoneList />
			</div>
		</main>
	)
}
