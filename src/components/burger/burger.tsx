import styles from "./burger.module.css";
import Image from 'next/image';
import Link from "next/link";
import currencyConvertor from "@/pages/utility/helper";
import { useTheme } from '@/store/ThemeContext';

export type BurgerProps = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    calorie: number;
    slug: string;
    _id?: string;
  }

export default function Burger({ id ,name, price, description, image }: BurgerProps) {
  const { theme } = useTheme();

    return <Link href={`/burger-details/${id}`} className={`${styles.container} ${theme === 'dark'? styles.dark : styles.light}`}>
    <Image
       src={image}
       alt={name}
       width={300}
       height={300}
       style={{ borderRadius: '10px' }}
     />
     <div className={styles['burger-details']}>
       <h4>{name}</h4>
       <div>{currencyConvertor(price)}</div>
       <div>{description}</div>
   </div>
   </Link>
}