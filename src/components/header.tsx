import React from 'react'
import ClearExpenses from './clearExpenses'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between p-8 h-12 shadow-gray shadow-md items-center">
        <div>dark screen</div>
        <Link href="/">Expenses</Link>
        <ClearExpenses/>
    </header>
  )
}
