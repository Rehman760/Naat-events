import React from 'react'
import Link from 'next/link'
import style  from '@/styles/Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
        <p> copyright &copy; this is Naat website</p>
        <p>
            <Link href='/about'>About this website</Link>
        </p>

    </footer>
  )
}

export default Footer