import Head from "next/head";

type DocumentHead = {
    title: string;
    name: string;
    content: string;
}

export default function DocumentHead({title, name, content}: DocumentHead) {


    return (<Head>
            <title>{title}</title>
            <meta name={name} content={content} />
      </Head>) 
}