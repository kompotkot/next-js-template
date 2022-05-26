import React, { useState } from "react"
import type { NextPage } from "next"

import Layout from "../components/Layout"

const Index: NextPage = () => {
	const [loading, setLoading] = useState<boolean>(true)

	return <Layout>{loading && <p>loading..</p>}</Layout>
}

export default Index
