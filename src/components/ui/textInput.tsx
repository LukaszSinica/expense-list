import React, { InputHTMLAttributes } from 'react'


interface TextInputInterface {
    label: string,
    name: string,
    type: string,
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>, TextInputInterface {
    label: string,
    name: string,
    type: string,
}


export default function TextInput({label, name, type, ...props}: TextInputProps) {
  return (
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor={name}>
            {label}
        </label>
        <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white leading-tight focus:outline-none focus:shadow-outline" 
        id={name} 
        name={name}
        type={type} 
        placeholder={props.placeholder}
        required
        />
    </div>
  )
}
