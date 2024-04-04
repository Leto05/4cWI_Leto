import React from 'react'
import LogoImage from './LogoImage'
export default function Header() {
    return (
        <div className="relative w-[100vw] h-[15vh] bg-black flex items-center" id="header">
            <div id="img" className="mr-[100px]">
                <a href="index">
                    <LogoImage></LogoImage>
                </a>
            </div>
            <a href="index" className="absolute bg-[#252525] w-[10%] h-[30%] right-[5%] top-[60%] md:top-[35%] flex items-center justify-center text-white rounded-[10px]">
                home
            </a>
            <a href="about" className="absolute bg-[#252525] w-[10%] h-[30%] right-[20%] top-[60%] md:top-[35%] flex items-center justify-center text-white rounded-[10px]">
                about
            </a>
        </div>
    )
}
