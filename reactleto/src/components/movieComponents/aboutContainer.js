import React from 'react'

export default function aboutContainer() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="style.css" />
        <title>LETOFILMS ETS. 2005</title>
      </head>
      <body className="bg-[#585858] relative flex flex-col items-center overflow-x-hidden">
        <div className="relative w-[100vw] h-[15vh] bg-black flex items-center" id="header">
          <div id="img" className="mr-[100px]">
            <a href="index.html">
              <img src="logo.png" alt="LETOFILMS ETS. 2005" srcset="" width="380px" className="m-1 max-h-[15vh] min-ml-[40px]" />
            </a>
          </div>
          <a href="index.html" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[60%] md:top-[35%] flex items-center justify-center text-white">home</a>
          <a href="about.html" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[10%] md:top-[35%] md:right-[30%] flex items-center justify-center text-white">about</a>
        </div>
        <div id="main" className="min-h-[85vh] h-full w-[100vw] md:w-[90vw] bg-[#252525] flex flex-col items-center justify-center md:items-start relative pl-7 pr-7 text-white text-bold">
          Hallo, ich bin Leto. Dies ist eine Filmseite designed mit FIGMA und erstellt mit HTML, CSS und JS. Props gehen raus an Daniel, der gefühlt bei der ganzen Seite mitgeholfen hat :D
        </div>
      </body>
    </html>
  )
}
