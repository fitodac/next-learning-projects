import gsap from 'gsap'
import { setDoneTask } from '@/actions'

export const Check = ({ id }: { id: number }) => {
	return (
		<button
			className="text-slate-900 p-3 transition-all select-none hover:text-green-600/60 group"
			onClick={() => setDoneTask(id)}
		>
			<i className="ri-checkbox-circle-fill ri-xl hidden group-hover:block" />
			<i className="ri-checkbox-blank-circle-fill ri-xl group-hover:hidden" />
		</button>
	)
}
