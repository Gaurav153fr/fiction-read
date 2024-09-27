"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    const handleSubmit =()=>{

    }
  return (
    <div  className='flex items-center justify-center flex-col gap-5 py-10'> 
<h2 className='text-6xl font-extrabold'>Buy Coins</h2>
        {/* <Input placeholder='Enter code here' className='w-1/3' disabled/>
        <Button className='w-1/3' onClick={handleSubmit} disabled>Not available</Button>
        <Button className='w-1/3' onClick={handleSubmit} disabled>Paypal</Button> */}
<p>Coin purchases through PayPal are currently unavailable, but they will be back shortly! In the meantime, please join our Discord server for instructions on how to buy coins</p>
        <div>

          <Link href="https://discord.gg/jHFydAvNrb" className={buttonVariants({variant: 'outline'})} target='_blank'>Join discord to follow instruction</Link>
        </div>
    </div>
  )
}

export default Page