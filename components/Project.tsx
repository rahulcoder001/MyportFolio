import Image from "next/image";
import Link from "next/link";
import animequiz from "/public/animequiz.png"
import rmpay from "/public/rmpay.png"
import blog from "/public/blog.png"

export function Project(){
    return <div className=" Varela_round max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[40px] border-2 border-t-0 rounded-b-xl relative z-10 font-bold px-4 Varela_round py-2 w-max mx-auto text-center text-[#1788ae] border-[#1788ae]">Latest Works</h2>
      <div className='border-2 border-[#1788ae] absolute h-full hidden sm:block left-1/2'></div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
           <div className="h-[1px] left-1/4 right-1/2 bg-[#fc815c] absolute top-1/2 hidden sm:block"></div>
           <div className="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2  z-10 hover:scale-110 ease-in-out duration-100 bg-white hidden sm:block"></div>
           <Link href="https://animequiz.rahullearning.online/"className="flex w-full  relative justify-center sm:justify-start">
                 <div className="flex group flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                      <Image src={animequiz} alt='p1' className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"/>
                      <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">AnimeQuiz<ProCode/></span>
                </div>
           </Link>
           <div className='w-full '>
                <h3 className="text-[#fc815c] font-bold text-2xl md:text-4xl">AnimeQuiz</h3>
                <span className="text-[#fc815c] text-base md:text-lg">(Quiz Playing Platform)</span>
                <p className="text-justify text-sm md:text-base text-black mt-2">Developed an end-to-end working AnimeQuiz application where user can play quiz on its favourite Anime and here rank of the anime decide by its number of membership</p>
                <ul className="flex flex-wrap text-black gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Next.js</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Typescript</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Telvind CSS</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#JavaScript</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#NodeJs</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#MongoDB</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#NextAuth</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Node-Mailer</li>
                </ul>
           </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative ">
           <div className='w-full '>
                <h3 className="text-[#639] font-bold text-2xl md:text-4xl">RMpay</h3>
                <span className="text-[#639] text-base md:text-lg">(Money Transfer Platform)</span>
                <p className="text-justify text-sm text-black md:text-base mt-2">Developed an end-to-end working payment application enhancing user experience and security, here you can select the number of your friend and send the money after that you can also see your transection histry</p>
                <ul className="flex flex-wrap text-black gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#NextJs</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Telvind CSS</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#JavaScript</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#TypeScript</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#NodeJs</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#MongoDB</li>

                </ul>
           </div>
           <div className="h-[1px] right-1/4 left-1/2 bg-[#639] absolute top-1/2 hidden sm:block"></div>
           <div className="w-4 h-4 rounded-full border-[3px] border-[#639] absolute left-1/2 -translate-x-1/2  z-10 hover:scale-110 ease-in-out duration-100 bg-white hidden sm:block"></div>
           <Link href="https://rmpay.rahullearning.online/"className="flex w-full  relative justify-center sm:justify-start ">
                 <div className="flex group flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 xl:ml-52">
                      <Image src={rmpay} alt='p1' className="max-w-[400px]  w-full ml-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"/>
                      <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#639] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">RmPay<ProCode/></span>
                </div>
           </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
           <div className="h-[1px] left-1/4 right-1/2 bg-[#47afa1] absolute top-1/2 hidden sm:block"></div>
           <div className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2  z-10 hover:scale-110 ease-in-out duration-100 bg-white hidden sm:block"></div>
           <Link href="https://blog.rahullearning.online/"className="flex w-full  relative justify-center sm:justify-start">
                 <div className="flex group flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
                      <Image src={blog} alt='p1' className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"/>
                      <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">UBLOG<ProCode/></span>
                </div>
           </Link>
           <div className='w-full '>
                <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">UBlog</h3>
                <span className="text-[#47afa1] text-base md:text-lg">(Bloging Platform)</span>
                <p className="text-justify text-sm md:text-base text-black mt-2">Created a blogging website for users to share and manage their posts.</p>
                <ul className="flex flex-wrap text-black gap-2 mt-2">
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#ReactJs</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Express</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#TypeScript</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#Nodejs</li>
                    <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">#MongoDB</li>
                </ul>
           </div>
      </div>
    </div>
}

const ProCode = () =>(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-external-link"
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    ></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
  )