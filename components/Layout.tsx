import React, { useEffect } from "react"
import Head from "next/head"

import { Container, Header, Body, Footer } from "../styles/layout"

const Layout = ({ children }) => {
	useEffect(() => {
		return () => {}
	}, [])
	return (
		<div>
			<Head>
				<title>Template</title>
				<meta name="description" content="Template of next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Header>header</Header>
				<Body>{children}</Body>
				<Footer>footer</Footer>
			</Container>
		</div>
	)
}

export default Layout
