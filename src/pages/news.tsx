import React, { useState } from "react"

import Layout from "../components/Layout"
import useNews from "../hooks/useNews"
import styles from "../styles/News.module.css"

const News = () => {
    const onSuccess = () => {}
    const onError = (error) => {
        console.log(error?.message)
    }

    const { isLoading, data } = useNews(onSuccess, onError)

    return (
        <Layout>
            <div className={styles.container_news}>
                <div className={styles.sidebar_left}>Sidebar</div>
                <div className={styles.content_area}>
                    {isLoading
                        ? ""
                        : data?.map((newsTitle) => {
                              return <div key={newsTitle}>{newsTitle}</div>
                          })}
                </div>
            </div>
        </Layout>
    )
}

export default News
