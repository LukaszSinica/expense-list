import { changelogData } from '@/app/lib/changelogs'
import React from 'react'

export default function Changelog() {

  const changelogs = changelogData.map((changelog, key) => 
    <div key={key} className="shadow-gray shadow-md px-12 py-4 hover:bg-gray-200">
        <div className='text-sm font-extralight'>{changelog.date}</div>
        {changelog.change.map((description, key) => <li key={key} className="list-disc" >{description}</li>)}
    </div>
  ).reverse()
  return (
    <main className="flex-grow shadow-gray shadow-md">{changelogs}</main>
  )
}
