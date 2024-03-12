import React from 'react'

export default function Movie({ movie }) {
    return (
        <div className='border'>
            <h1>Movie</h1>
            <div className='font-bold'>{movie.title}</div>
        </div>
    )
}
