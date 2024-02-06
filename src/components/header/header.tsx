import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { signOut } from "next-auth/react";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import styles from "../../styles/Home.module.css";
import CartIcon from "../cart-icon/CartIcon";
import CartContext from "@/store/cart-context";
import { useContext } from "react";

export default function Header() {
    const cartCtx = useContext(CartContext);


    return <div className={styles['header-container']}><Link href="/" className={styles['home-icon']}><FaHome color="white" size="30"/><div>BURGER</div></Link>  
        <div style={{ display: "flex"}}>
            <CartIcon itemCount={cartCtx.itemCount}></CartIcon>
            <button className={styles['logout-btn']} onClick={() => signOut({ callbackUrl: '/auth' })}>Log Out</button>
            <ThemeToggle></ThemeToggle>
        </div>
    </div>
}