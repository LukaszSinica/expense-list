import React from 'react'
import Header from '@/components/header';
import Footer from '@/components/footer';
import History from '@/components/history';

export default function Page() {
  return (
    <main className="md:border-2 sm:border-0 bg-gray-100  dark:bg-slate-800 md:w-1/3 sm:w-full h-screen flex flex-col justify-between">
      <Header/>
      <div className="flex-1 overflow-y-auto">
        <History/>
      </div>
      <Footer backButton={true}/>
    </main>
)
}
