import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import styles from "~/styles/index.module.css";
import  {ArticleCarosel, Article } from "~/components/ArticleCarosel";
import { setRandomGradientBackground } from "~/utils";
import {mockArticleData, fetchArticleDb } from "~/utils";

const Blog: NextPage = () => {
    const [darkText] = useState<string>("text-zinc-100");
    const [articlesMockData, setArticlesMockData] = useState<Article[]>(mockArticleData);
    useEffect(() => {
        setRandomGradientBackground();
        fetchArticleDb().then((data) => {
            console.log(data);
            setArticlesMockData(data);
        })
        
    }, []);
    return (
        <>
            <Head>
                <title>Parz3val:  Blogs </title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${darkText} ${styles.main_container} h-screen flex flex-col`}>
                <Header />
                <div className="flex-grow">
                <ArticleCarosel articles={articlesMockData}/>
                </div>
                <Footer />
            </main>
        </>
    );
};
export default Blog