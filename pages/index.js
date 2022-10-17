import Head from 'next/head'
import styles from '../styles/Home.module.css'
import get from "../services/api";
import {useEffect, useState} from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
      Router.push('/users')
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Inaproduct Social</title>
        <meta name="description" content="Social media untuk Inaproduct" />
        <link rel="icon" href="/favicon_inaproduct.png" />
      </Head>
    </div>
  )
}
