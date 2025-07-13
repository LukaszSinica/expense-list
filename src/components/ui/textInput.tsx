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
        <label className="block text-sm font-bold mb-2" htmlFor={name}>
            {label}
        </label>
        <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" 
        id={name} 
        name={name}
        type={type} 
        placeholder={props.placeholder}
        required
        />
    </div>
  )
}
