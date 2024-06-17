import React from 'react'
import ClearExpenses from './clearExpenses'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ThemeSwitcher = dynamic(() => import('../components/themeToggler'))

export default function Header() {
  return (
    <header className="flex justify-between p-8 h-12 shadow-gray shadow-md items-center">
      <ThemeSwitcher/>
      <Link href="/" className='font-bold text-xl'>Expenses</Link>
      <ClearExpenses />
    </header>
  )
}
