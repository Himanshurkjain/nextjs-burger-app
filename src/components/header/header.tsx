import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { signOut } from "next-auth/react";
import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import styles from "../../styles/Home.module.css";
import CartIcon from "../cart-icon/CartIcon";
import CartContext from "@/store/cart-context";
import { useContext } from "react";
import styled from 'styled-components';

const HeaderContainer =  styled.div`
    color: white;
    background-color: rgb(16, 15, 15);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
`;


const LogoutButton = styled.button`
    color: white;
    background-color: #f39c12;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 10px;
    border-radius: 5px;
`;

export default function Header() {
    const cartCtx = useContext(CartContext);


    return <HeaderContainer><Link href="/" className={styles['home-icon']}><FaHome color="white" size="30"/><div>BURGER</div></Link>  
        <div style={{ display: "flex"}}>
            <CartIcon itemCount={cartCtx.itemCount}></CartIcon>
            <LogoutButton className={styles['logout-btn']} onClick={() => signOut({ callbackUrl: '/auth' })}>Log Out</LogoutButton>
            <ThemeToggle></ThemeToggle>
        </div>
    </HeaderContainer>
}