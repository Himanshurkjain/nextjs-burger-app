import { BurgerProps } from "@/components/burger/burger";
import Image from 'next/image';
import styles from './burger.details.module.css';
import Link from "next/link";
import ButtonLink from "@/components/button-link/buttonLink";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
import { useRouter } from 'next/router';
import currencyConvertor from "../../lib/utility/helper";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTheme } from '@/store/ThemeContext';
import {  GetStaticPropsContext } from 'next';
import getBurgersData, {getBurgerDetails} from '@/lib/databaseHelper';


export type BurgerDetailsProps = {
    selectedBurger: BurgerProps
}



export default function BurgerDetails({ selectedBurger }: BurgerDetailsProps) {

    const {image, name, price, description, calorie} = selectedBurger;
    const cartCtx = useContext(CartContext);
    const router = useRouter();
    const { theme } = useTheme();

    function addToCart() {
        cartCtx.addItems({
            ...selectedBurger,
            id: selectedBurger['_id']
        });
        router.push('/cart');
    }

    if (!selectedBurger) {
        return <p>Loading ...</p>
    }

    return <div className={`${styles.container} ${theme === 'dark'? styles.dark : styles.light}`}>
        <Link href="/" style={{
            fontSize: "18px",
            textDecoration: 'none',
            display: "flex",
            alignItems: "center",
            color: "#f39c12"
        }}><FaArrowLeftLong />  <div style={{marginLeft: "4px"}}>Go Back</div></Link>
        <div className={styles['burger-container']}> 
            <Image
                src={image}
                alt={name}
                objectPosition="center"
                style={{
                    borderRadius: '2%'
                }}
                width={600}
                height={600}
            />
            <h1>{name}</h1>
            <div className={styles['detail-row']}>{currencyConvertor(price)}</div>
            <div className={styles['detail-row']}>{description}</div>
            <div>Nutrition: {calorie} calories</div>
            <ButtonLink onClickHandler={addToCart}>Add to Cart</ButtonLink>
        </div>
    </div>
}

export async function getStaticPaths() {
  const burgers = await getBurgersData();

  const burgerIds = burgers.map((burger) => {
    return {
        params: {id : burger.id.toString()}
    }
  })

    return {
        paths: burgerIds,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { params } = context;
    const burgerId = params?.id as string;

    const details = await getBurgerDetails(burgerId);

    return {
        props: {
            selectedBurger: details
        }
    }
}