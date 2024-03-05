import React from 'react'

export default function indexContainer() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="index.js" defer></script>
        <link rel="stylesheet" href="style.css" />
        <title>LETOFILMS ETS. 2005</title>
      </head>
      <body className="bg-[#585858] relative flex flex-col items-center overflow-x-hidden">
        <div className="relative w-[100vw] h-[15vh] bg-black flex items-center" id="header">
          <div id="img" className="mr-[100px]">
            <a href="index.html">
              <img src="LogoHD.png" alt="LETOFILMS ETS. 2005" srcset="" width="380px" className="m-1 max-h-[15vh] min-ml-[40px]" />
            </a>
          </div>
          <a href="index.html" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[60%] md:top-[35%] flex items-center justify-center text-white">
            home
          </a>
          <a href="about.html" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[10%] md:top-[35%] md:right-[30%] flex items-center justify-center text-white">
            about
          </a>
        </div>
        <div id="main" className="min-h-[85vh] h-full w-[100vw] md:w-[90vw] bg-[#252525] flex flex-col items-center md:items-start relative pl-7 pr-7">
          <div id="search" className="flex items-center justify-center md:justify-start mt-5 w-[100%]">
            <div className="bg-[#D9D9D9] h-[5vh] min-h-[40px] w-[50vw] md:w-[30vw] rounded-[10px] relative left-5">
              <input type="text" className="w-[100%] h-[100%] rounded-[10px] bg-transparent text-[30px]" placeholder="Title" id="search-input" />
            </div>
            <div className="text-white h-[5vh] min-h-[40px]">
              <button type="button" className="bg-[#3B3B3B] w-[20vw] md:w-[10vw] h-[100%] ml-[50px] rounded-[10px]">
                Search
              </button>
            </div>
          </div>

          <div id="Title" className="mt-[30px] ml-[50px]">
            <div className="text-white text-[40px] font-bold">Top Movies</div>
          </div>
          <div id="list" className="flex flex-col md:flex-row items-center md:justify-center md:flex-wrap text-white w-[100%]"></div>
        </div>
      </body>
    </html>
  )
}
