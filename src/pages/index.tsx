
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Burger from "@/components/burger/burger";
import { BurgerProps } from "@/components/burger/burger";
import DocumentHead from "@/components/head/DocumentHead";
import { useTheme } from '@/store/ThemeContext';
import getBurgersData from "@/lib/databaseHelper";

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
      <main >
          <div className={`${styles.container} ${theme === 'dark'? styles.dark : styles.light}`} >{products.map(product => <Burger key={product.id} {...product}></Burger>)}</div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const burgers = await getBurgersData();
  return {
    props: {
      products: burgers
    }
  }
}
