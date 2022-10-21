import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Characters from '../components/Characters/Characters';

export default function Home() {
  return (
    <>
      {/* Components */}
      <Header />
      <Characters />
      <Footer />
    </>
  )
}
