import React from 'react'
import LogoImage from './LogoImage'
import Header from './Header'

export default function AboutContainer() {
  return (
    <div>
      <Header></Header>
      <div id="main" className="min-h-[85vh] w-[100vw] md:w-[100vw] bg-[#252525] flex justify-center items-center text-white text-bold">
        <div >Verbesserung der Filmseite, durch Komponenten usw.</div>
      </div>
    </div>

  )
}
//A