"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Page = () => {
    const handleSubmit =()=>{

    }
  return (
    <div  className='flex items-center justify-center flex-col gap-5 py-10'> 
<h2 className='text-6xl font-extrabold'>Redeem Code</h2>
        <Input placeholder='Enter code here' className='w-1/3'/>
        <Button className='w-1/3' onClick={handleSubmit}>Redeem</Button>
    </div>
  )
}

export default Page