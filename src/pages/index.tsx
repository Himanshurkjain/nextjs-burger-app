
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Burger from "@/components/burger/burger";
import { BurgerProps } from "@/components/burger/burger";
import DocumentHead from "@/components/head/DocumentHead";
import { useTheme } from '@/store/ThemeContext';
import getBurgersData from "@/lib/databaseHelper";
import { getSession } from "next-auth/react";
import {  GetServerSidePropsContext } from 'next';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export type HomeProps = {
  products: BurgerProps[];
}

export default function Home(props: HomeProps) {
  const { theme } = useTheme();
  const { products } = props;
  const [val ,setVal] = useState("");
  const [burgers, setBurgers] = useState(products);

  useEffect(() => {
    // can also add deboucing
    setBurgers(products.filter(burger => {
      return burger.name.toLowerCase().includes(val.toLocaleLowerCase()); 
    }));
  }, [val]);

  return (
    <>
     <DocumentHead title="Burger App Home Page" name="description" content="List all the burgers which can be ordered"></DocumentHead>
      <main>
        <div className={theme === 'dark' && burgers.length ? styles.dark : styles.light}>
           <input value={val} onChange={(event) => setVal(event.target.value)} placeholder="Search Burger"></input>
          <div className={styles.container} >{burgers.length ? burgers.map(product => <Burger key={product.id} {...product}></Burger>) : <h2 style={{color: 'red'}}>Burgers not found, please search again.</h2>}</div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const session  = await getSession({req: context.req});

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  const burgers = await getBurgersData();

  return {
    props: {
      products: burgers
    }
  }
}
