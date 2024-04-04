import React from 'react'

export default function Movie({ movie, imageUri }) {
    console.log(imageUri);
    return (
        <div className='border p-6 bg-[#3B3B3B]'>
            <img src={imageUri} alt='Bild' />
            <div className='font-bold text-white '>{movie.title}</div>
            <div className='font-bold text-white'>{movie.release_date}</div>
        </div>
    )
}
