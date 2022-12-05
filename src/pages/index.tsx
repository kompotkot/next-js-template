import React, { useState } from "react"
import type { NextPage } from "next"

import Layout from "../components/Layout"
import styles from "../styles/Index.module.css"

const Index = () => {
    return (
        <Layout>
            <div className={styles.container_index}>
                <p>Just a template.</p>
            </div>
        </Layout>
    )
}

export default Index
