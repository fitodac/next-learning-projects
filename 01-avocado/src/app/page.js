'use client'

import { useEffect, useMemo, useState } from 'react'
// import Image from 'next/image'

const n = 0

export default function Home() {

	const [productList, setProductList] = useState([])

	useMemo(() => {
		window
			.fetch(`/api/avo/`)
			.then((res) => res.json())
			.then((data) => setProductList(data))
	}, [n])

	useEffect(() => {
		// window
		// 	.fetch(`/api/avo/`)
		// 	.then((res) => res.json())
		// 	.then((data) => setProductList(data))

		// if (id) {
    //   window
    //     .fetch(`/api/avo/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setProduct(data))
	}, [])

  return (
    <main>
			<h1>Hola mundo</h1>

			<pre>{JSON.stringify(productList, null, 2)}</pre>
		</main>
  )
}
