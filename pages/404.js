import React from 'react'
import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div>
        <h1>404 error</h1>
        <h4>Sorry, there nothing to show here</h4>
        <Link href='/'>Go to Home</Link>
    </div>
  )
}
