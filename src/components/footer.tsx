import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

export default function Footer({backButton = false}) {
  return (
    <footer className="flex justify-between p-8 h-12 shadow-gray shadow-md items-center border-t-2">
        <Link href="/history">
          <FontAwesomeIcon icon={faBoxArchive} className='w-5 h-5'/>
        </Link>
        <Link href="/addexpense">
          <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
        </Link>
        {backButton ? 
          <Link href="/">
            <FontAwesomeIcon icon={faArrowLeft} className='w-5 h-5'/>
          </Link> 
          : 
          <Link href="/changelog">
            <FontAwesomeIcon icon={faClipboard} className='w-5 h-5'/>
          </Link>
        }
    </footer>
  )
}
