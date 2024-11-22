import Link from "next/link";


export function Info({setAbout}:any){
    return       <div className="flex -mt-10 relative justify-between items-center pointer-events-none">
    <div className="w-full px-4 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative">
      <BigIcon />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="pointer-events-none text-4xl md:text-[64px] font-['Spartan']">Rahul Singh</h1>
        <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">FULL Stack Developer</p>
        <button
          onClick={() => {
            setAbout(true);
          }}
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold pointer-events-auto bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"
        >
          About Me
          <LeftIcon />
        </button>
      </div>
    </div>
    <ul className="ml-auto space-y-6 text-[#b0b2c3] pointer-events-auto absolute right-8">
      <li>
        <Link href="https://www.linkedin.com/in/rahul-singh-8417442b3/" target="_blank">
          <Linkdin />
        </Link>
      </li>
      <li>
        <Link href="https://x.com/Rahulsingh38967" target="_blank">
          <Twiter />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/rahulcoder001">
          <Instagram />
        </Link>
      </li>
      <li>
        <Link href="mailto:21012003rs@gmail.com">
          <Youtube />
        </Link>
      </li>
    </ul>
  </div>
}

const Youtube = () =>(
  <svg
              className="w-7 hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              ></path>
            </svg>
  )
const Instagram = () =>(
  <svg className="invert" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 72 72">
  <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
  </svg>
)
const Twiter = () =>(
    <svg
    className="w-7 hover:text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
    />
  </svg>
  )
const Linkdin = () =>(
    <svg
    className="w-7 hover:text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
    />
  </svg>
  )
const BigIcon = () => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(0,0,139)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(0,191,255)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g
        transform="translate(0, 512) scale(0.1, -0.1)"
        fill="url(#gradient)"
        stroke="none"
      >
        <path d="M3179 4299 c-432 -63 -832 -328 -1141 -754 -165 -226 -284 -445 -578 -1060 -365 -763 -506 -1003 -723 -1231 -206 -217 -400 -316 -584 -300 -69 6 -73 6 -88 -18 -21 -32 -12 -61 23 -74 101 -39 432 -49 602 -19 335 61 603 200 836 434 223 225 421 563 694 1188 146 333 205 453 275 560 160 245 350 353 655 371 184 11 326 -40 445 -160 222 -225 234 -621 26 -857 -65 -75 -165 -136 -287 -178 l-109 -36 0 -35 c0 -48 22 -56 183 -71 410 -37 784 92 968 334 54 71 124 214 148 303 42 157 58 431 35 601 -69 521 -440 908 -953 998 -95 16 -329 19 -427 4z m384 -104 c388 -58 700 -305 828 -654 56 -154 72 -256 72 -446 0 -180 -15 -296 -54 -416 -93 -282 -314 -453 -656 -504 -123 -19 -247 -20 -219 -2 256 163 383 450 332 746 -36 209 -142 375 -309 486 -242 160 -684 118 -943 -89 -171 -137 -271 -302 -489 -806 -382 -883 -639 -1231 -1064 -1445 -138 -69 -341 -123 -516 -138 -40 -4 -46 -3 -31 7 221 134 429 362 616 676 77 128 245 461 577 1140 218 446 341 650 522 869 354 429 860 647 1334 576z" />
        <path d="M3128 2835 c-412 -67 -750 -375 -860 -783 -27 -100 -29 -296 -5 -394 46 -185 138 -346 279 -486 197 -195 414 -303 703 -349 149 -23 445 -14 626 21 326 62 725 210 1043 387 134 74 146 84 146 119 0 55 -16 57 -188 22 -596 -120 -1118 -122 -1468 -6 -43 14 -119 47 -169 73 -169 87 -308 255 -360 435 -37 126 -16 288 52 406 90 155 266 318 463 428 36 20 68 41 72 46 15 22 8 65 -12 76 -33 18 -226 21 -322 5z m97 -103 c-6 -4 -37 -28 -70 -53 -316 -235 -457 -531 -386 -810 137 -536 713 -771 1651 -674 74 8 158 17 185 20 48 6 45 4 -60 -43 -368 -165 -737 -253 -1060 -253 -328 0 -575 79 -788 252 -154 126 -276 306 -324 479 -27 100 -25 301 5 403 61 214 206 409 396 532 120 79 211 114 381 149 37 7 79 6 70 -2z" />
      </g>
    </svg>
  );

  const LeftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width="44"
      height="44"
      viewBox="0 0 100 100"
      className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-100"
    >
      <g transform="translate(0,-952.36218)">
        <path
          d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
          fill="#fff"
          fillOpacity="1"
          stroke="white"
          strokeWidth="2"
        />
      </g>
    </svg>
  );