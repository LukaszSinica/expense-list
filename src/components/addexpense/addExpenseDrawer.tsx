"use client"
import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import AddExpense from '@/components/addexpense/addExpense'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddExpenseDrawer() {
    const [open, setOpen] = React.useState(false)

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
                <FontAwesomeIcon icon={faPlus} className='w-5 h-5'/>
            </DrawerTrigger>
            <DrawerContent className="w-full md:w-1/3 mx-auto mb-8">
                <AddExpense setOpen={setOpen}/>
            </DrawerContent>
        </Drawer>
    )
}
