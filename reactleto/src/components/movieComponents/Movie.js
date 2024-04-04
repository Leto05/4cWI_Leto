import { useState } from 'react';
import React from 'react'
import Button from './Button';

export default function Movie({ movie, imageUri, overview }) {
    const [isClicked, setIsClicked] = useState(true);
    console.log(imageUri);
    return (
        <div className='border p-6 bg-[#3B3B3B] font-bold text-white '>
            {isClicked &&
                <div onClick={() => setIsClicked(!isClicked)}>
                    <div className="w-full overflow-hidden">
                        <img src={imageUri} alt='' className='w-full h-full' />
                    </div>
                    <div classname='absolute insert-x-0 bottom-0'>
                        <h2 className="flex justify-center font-bold text-l pt-5 ">{movie.title}</h2>
                    </div>
                </div>}
            {!isClicked && <div className="" onClick={() => setIsClicked(!isClicked)}>
                <div className='bg-[#3B3B3B]'>
                    <img src={imageUri} alt='Bild' />
                    <div className='font-bold text-white '>{movie.title}</div>
                    <div className='font-bold text-white'>{movie.release_date}</div>
                    <div className='font-bold text-white'>{movie.overview}</div>
                </div>
            </div>}
        </div>
    )
}