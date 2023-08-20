import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import DualButton from '@/components/DualButton'
import Input from '@/components/Input'
import InputField from '@/components/InputField'
import TextArea from '@/components/TextArea'
import Toggle from '@/components/Toggle'
import Badge from '@/components/Badge'
import Dropdown from '@/components/Dropdown'

export default function Home() {
  return (
    <>
      <InputField placeholder='Enter email' label='Email' />
    </>
  )
}