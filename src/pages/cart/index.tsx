import styles from "./cart.module.css";
import CartContext from "@/store/cart-context"
import { useContext } from "react";
import { BurgerProps } from "@/components/burger/burger";
import { MdDeleteForever } from "react-icons/md";
import currencyConvertor, {getTotalAmount} from "../../lib/utility/helper";
import { useTheme } from '@/store/ThemeContext';

export type CartItem = {
    quantity: number
} & BurgerProps

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const { theme } = useTheme();

    return <div className={`${styles.container} ${theme === 'dark'? styles.dark : styles.light}`}>
        <h1 className={styles.heading}>Shopping Cart</h1>
        <div>{cartCtx?.cartItems.map((item: CartItem) => <div key={item.id} className={styles.item}>
            <div className={styles.pair}>
                <img className={styles['circular-image']} src={item.image} alt={item.name} />
                <div>{item.name} {item.quantity && `(${item.quantity})`}</div>
            </div>
            <div className={styles.pair}>
                <div style={{
                    marginRight: '10px'
                }}>{currencyConvertor(item.price, item.quantity)}</div>
                <MdDeleteForever size={25} color="red" onClick={() => cartCtx.removeItems(item)}/>
                <button onClick={() => {cartCtx.addItems(item, true)}}>Add Item</button>
                <button onClick={() => {cartCtx.removeItems(item, true)}}>Remove Item</button>
            </div>
        </div>)}</div>
        <div className={styles.total}>
            <div>Total: </div>
            <div>{getTotalAmount(cartCtx?.cartItems)}</div>
        </div>
    </div>
}