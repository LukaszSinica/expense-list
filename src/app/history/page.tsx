import React from 'react'
import Footer from '@/components/footer';
import History from '@/components/history';

export default function Page() {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <History/>
      </div>
      <Footer backButton={true}/>
    </>
)
}
