import React from 'react'
import InputField from '@/components/elements/InputField'
import Button from '@/components/elements/Button'

import Image from 'next/image'

import Google from '@/public/google.svg'
import Basket from '@/public/basket.svg'

export default function Home({ onNext }) {
  return (
    <div className='flex w-screen h-screen'> 
        <div action="" className='bg-white w-[39%] flex items-center justify-center py-20'>
            <div className='flex flex-col justify-between items-center gap-14'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col g-4'>
                        <h2 className='text-display-md font-bold text-gray-800'>Create an account</h2>
                        <p className='text-md font-normal text-gray-500'>Let's get started to building the perfect resume!</p>
                    </div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-4'>
                            <InputField placeholder='Enter email' label='Email' />
                            <InputField placeholder='Enter name' label='Name' />
                            <InputField placeholder='Enter password' label='Password' />
                        </div>
                        <div id="btns" className='flex flex-col gap-4'>
                            <Button variant={'primary'} size={'md'} onClick={onNext}>Create my account</Button>
                            <Button variant={'secondary'} size={'md'}>
                                <div className='flex gap-4'>
                                    <Image src={Google}/>
                                    Sign up with Google
                                </div>                            
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='text-gray-400'>Already have an account?
                    <span className='text-blue-gray-600 cursor-pointer'> Sign in</span>
                </div>
            </div>
        </div>
        <div className="bg-blue-gray-100 w-[61%] flex justify-center">
            <div className='w-[576px] flex flex-col gap-6 pt-[32.6%] '>
                <div id="text" className='text-text-xl font-semibold text-gray-800'>
                    “This is the new era of building resumes, we’ve been told to create resumes again and again everytime we are applying for a different position. This will end that misery once and for all!”
                </div>
                <div id="icons" className='flex justify-between items-center '>
                    <div className='flex gap-4'>
                        <img src="https://images.unsplash.com/photo-1677103216895-59fb1b6a4fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="" className='rounded-full h-[46px] w-[46px] object-cover'/>
                        <div className='flex flex-col gap-1'>
                            <h5 className='text-text-md font-medium text-gray-800'>Areeb Sajjad</h5>
                            <h5 className='text-text-xs font-normal text-gray-500'>CEO, Basket Co</h5>
                        </div>
                    </div>
                    <Image src={Basket}/>
                </div>
            </div>
        </div>
    </div>   
    )
}
