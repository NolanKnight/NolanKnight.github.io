import React, {useEffect} from "react";
import styles from "./page.module.scss";

function Page({ title, heading, children }) {
    useEffect(() => {
        document.title = title + " · Nolan Knight";
    }, [title]);
    return (
        <>
            <h1 className={styles.heading1}>{heading}</h1>
            <div className={styles.body}>{children}</div>
        </>
    );
}

export default Page;
