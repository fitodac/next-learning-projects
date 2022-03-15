import gsap from 'gsap'

export const showItemBody = (itemBody) => {
	gsap.to(itemBody.current, {
		translateX: 0,
		duration: 0.4,
	})
}

export const hideItemBody = (itemBody) => {
	gsap.to(itemBody.current, {
		translateX: '-100%',
		duration: 0.4,
	})
}

export const showEditActions = ({ editActions, itemBody }) => {
	gsap.set(editActions.current, { translateX: 200 })

	hideItemBody(itemBody)

	gsap.to(editActions.current, {
		visibility: 'visible',
		opacity: 1,
		translateX: 0,
		duration: 0.4,
	})
}

export const hideEditActions = ({ editActions, itemBody }) => {
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
