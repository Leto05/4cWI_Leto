import React from 'react'

export default function Button({ search, onClick }) {
    return (
        <button type="button" id="search-button" className="bg-[#3B3B3B] w-[20vw] md:w-[10vw] h-[100%] ml-[50px] rounded-[10px]" onClick={() => onClick()}>
            {search}
        </button>
    )
}
