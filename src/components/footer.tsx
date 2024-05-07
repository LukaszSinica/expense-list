import Link from 'next/link'
import React from 'react'

export default function Footer({backButton = false}) {
  return (
    <footer className="flex justify-between p-12 h-28">
        <div>Analitycs</div>
        <div>add expense</div>
        {backButton ? <Link href="/">Go back</Link> : <Link href="/changelog">Changelog</Link>}
    </footer>
  )
}
