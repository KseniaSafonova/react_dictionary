import styles from './../Styles/Header.module.css'

export default function Header(props) {
    return (
        <div className={styles.header}>
            {props.children}
        </div>
    )
}