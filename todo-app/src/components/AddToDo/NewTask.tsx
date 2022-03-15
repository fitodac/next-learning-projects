import { Form } from './Form'

export const NewTask = async () => {
	return (
		<div className="px-6 lg:px-0">
			<div className="bg-indigo-700/50 text-white/70 text-center w-full h-12 rounded-md select-none relative overflow-hidden">
				<Form />
			</div>
		</div>
	)
}
