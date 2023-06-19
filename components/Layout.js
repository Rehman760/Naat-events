import Head from 'next/head'
import { title } from 'process'
import { useRouter } from 'next/router'
import React from 'react'
import  style  from '@/styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import ShowCase from './ShowCase'

function Layout({title,description,keywords,children}) {
  const router=useRouter()
  return (
    <div>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name='keywords' content={keywords}/>
      
    </Head>
    <Header />
    {router.pathname==='/' && <ShowCase />}
    <div  className={style.container}>{children}</div>
    <Footer />
    </div>
    
  )
}

export default Layout

Layout.defaultProps={
    title:"DJ Events",
    description:"latest naat events",
    keywords:"naat,qirat,islamic"
}