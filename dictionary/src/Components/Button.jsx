import styles from './../Styles/Button.module.css';

export default function Button(props) {
    return (
        <button className={styles.button} onClick={() => {
            props.showTranslation(); props.Count();
        }}> {props.title}</button >
    )
}