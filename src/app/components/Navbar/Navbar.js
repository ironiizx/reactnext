import Menu from "./Menu";
import styles from "./Navbar.module.css"


const Navbar = (props) => {
        const {title} = props
        
            return (
                <header className={styles.container}>
                    <h1>{title}</h1>
                    <nav className={styles.menu}>
                    <Menu />
                    </nav>
                </header>
            );
        };

export default Navbar;