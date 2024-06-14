import React from 'react'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Analitycs from '@/components/analitycs';

export default function Page() {

  return (
    <main className="md:border-2 sm:border-0 bg-gray-100 md:w-1/3 sm:w-full h-screen flex flex-col justify-between">
    <Header/>
    <Analitycs/>
    <Footer/>
  </main>
  )
}
