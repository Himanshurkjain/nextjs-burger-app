import { CartItem } from "../../pages/cart";

enum CURRENCY  {
    DOLLAR = '$'
}

export default function currencyConvertor(amount: number, quantity: number = 1, currency: string = 'DOLLAR') {
    console.log("here here", amount, quantity, (amount * quantity) / 100);
    return `${CURRENCY.DOLLAR} ${(amount * quantity)/100}`;
}


export function getTotalAmount(items: CartItem[]) {
    const amount = items.reduce((total, item) => {
        return total = total + (item.price * item.quantity)/100;
    }, 0);
    return `${CURRENCY.DOLLAR} ${amount}`;
}