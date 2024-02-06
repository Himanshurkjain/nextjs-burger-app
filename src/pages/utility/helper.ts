import { BurgerProps } from "@/components/burger/burger";
import { CartItem } from "../cart";

enum CURRENCY  {
    DOLLAR = '$'
}

export default function currencyConvertor(amount: number, quantity: number = 1, currency: string = 'DOLLAR') {
    return `${CURRENCY.DOLLAR} ${amount * 0.01 * quantity}`;
}


export function getTotalAmount(items: CartItem[]) {
    const amount = items.reduce((total, item) => {
        return total = total + item.price * item.quantity * 0.01;
    }, 0);
    return `${CURRENCY.DOLLAR} ${amount}`;
}