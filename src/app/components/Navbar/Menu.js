import styles from "./Navbar.module.css"

const Menu = () => {
    return (
        <ul className={styles.container}>
        <li className={styles.container}><a>Home</a></li>
        <li className={styles.container}><a>About</a></li>
        <li className={styles.container}><a>Contact</a></li>
    </ul>
    )
}

export default Menu;