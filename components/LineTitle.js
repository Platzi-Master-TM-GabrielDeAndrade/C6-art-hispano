import React from 'react'
import styles from "../styles/components/LineTitle.module.scss";


export default function LineTitle({text}) {
    return (
        <div className ={styles.products_Line}>
            <div className ={styles.products_title}>                 
                <p>{text}</p>
            </div>
        </div>
    )
}
