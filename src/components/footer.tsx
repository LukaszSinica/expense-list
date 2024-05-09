import Link from 'next/link'
import React from 'react'

export default function Footer({backButton = false}) {
  return (
    <footer className="flex justify-between p-8 h-12 shadow-gray shadow-md items-center">
        <div>Analitycs</div>
        <Link href="/addexpense">Add Expense</Link>
        {backButton ? <Link href="/">Go back</Link> : <Link href="/changelog">Changelog</Link>}
    </footer>
  )
}
