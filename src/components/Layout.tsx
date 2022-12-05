import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

import styles from "../styles/Layout.module.css"

const Layout = ({ children, title = "Template", accountName }) => {
    const [lightTheme, setLightTheme] = useState<number>(0)
    const [textMainColor, setTextMainColor] = useState(["white", "#141A26"])
    const [backgroundMainColor, setBackgroundMainColor] = useState([
        "#141A26",
        "white",
    ])

    const [accountNavShown, setAccountNavShown] = useState<boolean>(false)

    const switchTheme = () => {
        lightTheme === 0 ? setLightTheme(1) : setLightTheme(0)
    }

    useEffect(() => {
        setTextMainColor(["white", "#141A26"])
        setBackgroundMainColor(["#141A26", "white"])
    }, [])

    const accountNav = (
        <nav
            className={styles.inner_nav}
            onMouseEnter={() => setAccountNavShown(true)}
            onMouseLeave={() => setAccountNavShown(false)}
        >
            <ul className={styles.site_nav}>
                <li className={styles.nav_menu}>
                    <Link href="/settings">
                        <p>Account settings</p>
                    </Link>
                </li>
                <li className={styles.nav_menu}>
                    <Link href="/logout">
                        <p>Logout</p>
                    </Link>
                </li>
                <li className={styles.nav_menu} onClick={() => switchTheme()}>
                    <p>Switch theme</p>
                </li>
            </ul>
        </nav>
    )

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Template of next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body
                style={{
                    color: textMainColor[lightTheme],
                    backgroundColor: backgroundMainColor[lightTheme],
                }}
            >
                <div className={styles.container}>
                    <header>
                        <nav>
                            <ul className={styles.site_nav}>
                                <li className={styles.nav_logo}>
                                    <Link href="/">
                                        <h1>Logo name</h1>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="/messages">
                                        <p>Messages</p>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="/photos">
                                        <p>Photos</p>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="/music">
                                        <p>Music</p>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="/videos">
                                        <p>Videos</p>
                                    </Link>
                                </li>
                                <li className={styles.nav_menu}>
                                    <Link href="/places">
                                        <p>Places</p>
                                    </Link>
                                </li>
                                <li
                                    className={styles.nav_right}
                                    onClick={() =>
                                        setAccountNavShown(!accountNavShown)
                                    }
                                >
                                    <p>{accountName}</p>
                                </li>
                            </ul>
                        </nav>
                        {accountNavShown && accountNav}
                    </header>
                    <main className={styles.main}>{children}</main>
                    <footer className={styles.footer}>
                        <p>© 2022 kompotkot</p>
                    </footer>
                </div>
            </body>
        </>
    )
}

export default Layout
