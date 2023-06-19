import React from 'react'
import Link from 'next/link'
import  style  from '@/styles/Header.module.css'
function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}>
        <Link href='/'>
         <> Naat Events</>
        </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/events'> 
             <> events</>
              </Link>
            </li>
          </ul>
        </nav>

    </header>
  )
}

export default Header