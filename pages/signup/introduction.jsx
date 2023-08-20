import React from 'react'
import InputField from '@/components/InputField'
import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import SignupFooter from '@/components/SignupFooter'


export default function Introduction() {
  return (

      <div className='w-screen min-h-screen bg-white px-20 pt-10'>

        <div id="headings" className='flex flex-col gap-4'>
          <h2 className='text-display-md font-bold text-gray-800 font-pd'>Introduction</h2>
          <p className='text-text-md font-normal text-gray-500'>Give us a brief about yourself!</p>
        </div>
        
        <form className='pt-6 flex gap-[7rem]'>

          <div className='flex flex-col gap-6 w-[50%]'>
            <div className='flex gap-6'>
              <InputField placeholder='Enter First Name' label='First Name' />
              <InputField placeholder='Enter Last Name' label='Last Name' />
            </div>
            <TextArea label={'Bio'} placeholder={'Write a short bio about yourself'}/>
            <div className='flex gap-6'>
              <InputField placeholder='Enter Linkedin profile link' label='Linkedin link' />
              <InputField placeholder='Enter Portfolio link' label='Portfolio link (optional)' />
            </div>
          </div>

          <div className='flex flex-col gap-6 flex-wrap w-[50%]'>
            <div className='flex gap-6'>
              <InputField placeholder='Enter City' label='City' />
              <InputField placeholder='Enter Postal Code' label='Postal Code (if applicable)' />
            </div>
            <div className='w-[48%]'>
              <InputField placeholder='Enter Phone Number' label='Phone Number'/>
            </div>
          </div>

        </form>

        {/* below things are common */}
        <div className='absolute top-6 right-20'>
          <Button size={'sm'} variant={'tertiary'} >Skip to Resume Builder</Button>
        </div>

        <SignupFooter/>

      </div>
    )
}
