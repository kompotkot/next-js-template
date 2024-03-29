import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

import styles from "../styles/Layout.module.css"

const LOGO_NAME = "logo name"
const DEVELOPER_NAME = "© 2022 kompotkot"

const Layout = ({ children, title = "Template" }) => {
    const [accountName, setAccountName] = useState<string>("unknown")

    const [lightTheme, setLightTheme] = useState<number>(1)

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
                <li className={styles.nav_first}>
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
                            <li className={styles.nav_first}>
                                <Link href="/">
                                    <h1>{LOGO_NAME}</h1>
                                </Link>
                            </li>
                            <li className={styles.nav_menu}>
                                <Link href="/news">
                                    <p>News</p>
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
                            <li className={styles.nav_theme}>
                                <img
                                    className={styles.icon}
                                    onClick={() => switchTheme()}
                                    src={
                                        lightTheme
                                            ? "sun-dark.svg"
                                            : "moon-light.svg"
                                    }
                                    alt="Settings"
                                />
                            </li>
                        </ul>
                    </nav>
                    {accountNavShown && accountNav}
                </header>
                <main className={styles.main}>{children}</main>
                <footer
                    className={styles.footer}
                    style={{
                        backgroundColor: backgroundShadowColor[lightTheme],
                    }}
                >
                    <div className={styles.column_1}>
                        <h3>{LOGO_NAME}</h3>
                        <p>{DEVELOPER_NAME}</p>
                    </div>
                    <div className={styles.column_2}>
                        <Link href="/">
                            <img
                                className={styles.social_link}
                                src={
                                    lightTheme
                                        ? "discord-dark.svg"
                                        : "discord-light.svg"
                                }
                                alt="Discord"
                            />
                        </Link>
                        <Link href="/">
                            <img
                                className={styles.social_link}
                                src={
                                    lightTheme
                                        ? "youtube-dark.svg"
                                        : "youtube-light.svg"
                                }
                                alt="YouTube"
                            />
                        </Link>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Layout
