import React, { useState } from "react"
import type { NextPage } from "next"

import Layout from "../components/Layout"
import styles from "../styles/Index.module.css"

const Index: NextPage = () => {
    const [accountName, setAccountName] = useState<string>("unknown")

    return (
        <Layout accountName={accountName}>
            <div className={styles.container}>
                <div className={styles.sidebar_left}>Sidebar</div>
                <div className={styles.content_area}>Content area</div>
            </div>
        </Layout>
    )
}

export default Index
