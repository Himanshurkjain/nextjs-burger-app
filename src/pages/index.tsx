
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


  return (
    <>
     <DocumentHead title="Burger App Home Page" name="description" content="List all the burgers which can be ordered"></DocumentHead>
      <main>
        
        <div className={theme === 'dark'  ? styles.dark : styles.light}>
          <div className={styles.container} >{products.length ? products.map(product => <Burger key={product.id} {...product}></Burger>) : <span>Burgers not found, please search again.</span>}</div>
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
