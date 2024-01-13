import gsap from 'gsap'

export const showItemBody = (itemBody: React.RefObject<HTMLDivElement>) => {
	gsap.to(itemBody.current, {
		translateX: 0,
		duration: 0.4,
	})
}

export const hideItemBody = (itemBody: React.RefObject<HTMLDivElement>) => {
	gsap.to(itemBody.current, {
		translateX: '-100%',
		duration: 0.4,
	})
}

export const showEditActions = ({
	editActions,
	itemBody,
}: {
	editActions: React.RefObject<HTMLDivElement>
	itemBody: React.RefObject<HTMLDivElement>
}) => {
	gsap.set(editActions.current, { translateX: 200 })

	hideItemBody(itemBody)

	gsap.to(editActions.current, {
		visibility: 'visible',
		opacity: 1,
		translateX: 0,
		duration: 0.4,
	})
}

export const hideEditActions = ({
	editActions,
	itemBody,
}: {
	editActions: React.RefObject<HTMLDivElement>
	itemBody: React.RefObject<HTMLDivElement>
}) => {
	gsap.to(editActions.current, {
		translateX: 200,
		opacity: 0,
		duration: 0.4,
	})

	showItemBody(itemBody)

	gsap.set(editActions.current, {
		visibility: 'hidden',
		delay: 0.5,
	})
}
