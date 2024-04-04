import React from 'react'

export default function Button({ search, onClick }) {
    return (
        <button type="button" id="search-button" className="bg-[#3B3B3B] md:w-[15vw] ml-[50px] rounded-[10px] h-[100%] mt-7" onClick={() => onClick()}>
            {search}
        </button>
    )
}
