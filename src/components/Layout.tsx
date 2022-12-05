import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

import styles from "../styles/Layout.module.css"

const Layout = ({ children, title = "Template", accountName }) => {
    const [lightTheme, setLightTheme] = useState<number>(0)

    const [language, setLanguage] = useState<string>("EN")

    const [accountNavShown, setAccountNavShown] = useState<boolean>(false)
    const [settingsNavShown, setSettingsNavShown] = useState<boolean>(false)

    const switchTheme = () => {
        lightTheme === 0 ? setLightTheme(1) : setLightTheme(0)
    }
    const switchLanguage = () => {
        language === "RU" ? setLanguage("EN") : setLanguage("RU")
    }

    useEffect(() => {}, [])

    const textMainColor = ["white", "#141A26"]
    const backgroundMainColor = ["#141A26", "white"]
    const backgroundShadowColor = ["#161d2b", "#f5f5f5"]

    const accountNav = (
        <nav
            className={styles.inner_nav}
            onMouseEnter={() => setAccountNavShown(true)}
            onMouseLeave={() => setAccountNavShown(false)}
            style={{ backgroundColor: backgroundShadowColor[lightTheme] }}
        >
            <ul className={styles.site_nav}>
                <li className={styles.nav_menu}>
                    <Link href="/account">
                        <p>Account settings</p>
                    </Link>
                </li>
                <li className={styles.nav_menu}>
                    <Link href="/logout">
                        <p>Logout</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )

    const settingsNav = (
        <nav
            className={styles.inner_nav}
            onMouseEnter={() => setSettingsNavShown(true)}
            onMouseLeave={() => setSettingsNavShown(false)}
            style={{ backgroundColor: backgroundShadowColor[lightTheme] }}
        >
            <ul className={styles.site_nav}>
                {/* <li
                    className={styles.nav_menu}
                    onClick={() => switchLanguage()}
                >
                    <p>Switch language: {language}</p>
                </li> */}
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
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Nunito"
                />
            </Head>
            <div
                className={styles.container}
                style={{
                    color: textMainColor[lightTheme],
                    backgroundColor: backgroundMainColor[lightTheme],
                }}
            >
                <header>
                    <nav>
                        <ul
                            className={styles.site_nav}
                            style={{
                                backgroundColor:
                                    backgroundShadowColor[lightTheme],
                            }}
                        >
                            <li className={styles.nav_logo}>
                                <Link href="/">
                                    <h1>logo name</h1>
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
                                className={styles.nav_account}
                                onMouseEnter={() => setAccountNavShown(true)}
                                onMouseLeave={() => setAccountNavShown(false)}
                            >
                                <p>{accountName}</p>
                            </li>
                            <li
                                className={styles.nav_settings}
                                onMouseEnter={() => setSettingsNavShown(true)}
                                onMouseLeave={() => setSettingsNavShown(false)}
                            >
                                <img
                                    className={styles.icon}
                                    src={
                                        lightTheme
                                            ? "setting-gear-dark.svg"
                                            : "setting-gear-light.svg"
                                    }
                                    alt="Settings"
                                />
                            </li>
                        </ul>
                    </nav>
                    {accountNavShown && accountNav}
                    {settingsNavShown && settingsNav}
                </header>
                <main className={styles.main}>{children}</main>
                <footer
                    className={styles.footer}
                    style={{
                        backgroundColor: backgroundShadowColor[lightTheme],
                    }}
                >
                    <p>© 2022 kompotkot</p>
                </footer>
            </div>
        </>
    )
}

export default Layout
