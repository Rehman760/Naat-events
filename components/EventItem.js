import Link from 'next/link'
import React from 'react'
import styles from '@/styles/EventItem.module.css'
import Image from 'next/image'


function EventItem({evt}) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image src={evt.image ? evt.image: '/images/event-default.png'} width={170} height={100}/>
        </div>
        <div className={styles.info}>
            <span>
                {evt.date} at the {evt.time}
            </span>
            <h3>{evt.description}</h3>
        </div>
        <div className={styles.link}>
            <Link href={`/events/${evt.slug}`} className='btn'>
                details
                
            </Link>
  
        </div>
        
    </div>
  )
}

export default EventItem