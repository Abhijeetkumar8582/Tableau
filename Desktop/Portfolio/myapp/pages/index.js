import Head from 'next/head'
import Script from 'next/Script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './Component/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <button type="button" class="btn btn-primary my-5 mx-4">Primary</button>
      <button type="button" class="btn btn-secondary mx-4">Secondary</button>
      <button type="button" class="btn btn-success mx-4">Success</button>
      <button type="button" class="btn btn-danger mx-4">Danger</button>
      <button type="button" class="btn btn-warning mx-4">Warning</button>
      <button type="button" class="btn btn-info mx-4">Info</button>
      <button type="button" class="btn btn-light mx-4">Light</button>
      <button type="button" class="btn btn-dark mx-4">Dark</button>
    </>
  )
}
