"use client"
import Link from "next/link";
import { useState } from "react";



export function Menu() {
    const [menu, setMenu] = useState<boolean>(false);
  
    return (
      <div className="flex justify-center z-50 items-center relative">
        {/* Animated Menu Items */}
        <ul
          className={`absolute right-10 flex gap-5 text-white p-2 transition-all duration-700 ease-in-out ${
            menu ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-[200%] pointer-events-none"
          }`}
        >
          <Link href={"tel:8318297569"}><ChatIcon /></Link>
          <Link href={"https://wa.me/8318297569?text=Hi,I have work for you?"}><WhatsappIcon /></Link>
          <a href="/Resume.pdf" download>
          <IconCV />
          </a>
        </ul>
  
        {/* Menu/Cross Icon */}
        <button
          aria-expanded={menu}
          aria-label={menu ? "Close menu" : "Open menu"}
          className="cursor-pointer flex justify-center items-center relative"
          onClick={() => setMenu(!menu)}
        >
          {/* Menu Icon */}
          <div
            className={`absolute transition-transform duration-500 ${
              menu ? "rotate-0 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <MenuIcon />
          </div>
  
          {/* Cross Icon */}
          <div
            className={`absolute transition-transform duration-500 ${
              menu ? "rotate-90 opacity-100" : "rotate-0 opacity-0"
            }`}
          >
            <CrossIcon />
          </div>
        </button>
      </div>
    );
  }
  

const IconCV = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 40 40"
    >
      <path
        d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C9.96 2 13.92 2 18 2 C18 13.88 18 25.76 18 38 C8.1 38 -1.8 38 -12 38 C-12 26.12 -12 14.24 -12 2 C-8.04 2 -4.08 2 0 2 C0 1.34 0 0.68 0 0 Z M2 2 C2 2.66 2 3.32 2 4 C2.66 4 3.32 4 4 4 C4 3.34 4 2.68 4 2 C3.34 2 2.68 2 2 2 Z"
        fill="#EEF4FA"
        transform="translate(17,0)"
      />
      <path
        d="M0 0 C1.98 0 3.96 0 6 0 C6 0.66 6 1.32 6 2 C9.96 2 13.92 2 18 2 C18 13.88 18 25.76 18 38 C8.1 38 -1.8 38 -12 38 C-12 26.12 -12 14.24 -12 2 C-8.04 2 -4.08 2 0 2 C0 1.34 0 0.68 0 0 Z M2 2 C2 2.66 2 3.32 2 4 C2.66 4 3.32 4 4 4 C4 3.34 4 2.68 4 2 C3.34 2 2.68 2 2 2 Z M-11 3 C-11 14.22 -11 25.44 -11 37 C-1.76 37 7.48 37 17 37 C17 25.78 17 14.56 17 3 C14.69 3 12.38 3 10 3 C9.67 4.32 9.34 5.64 9 7 C5.04 7 1.08 7 -3 7 C-3.33 5.68 -3.66 4.36 -4 3 C-6.31 3 -8.62 3 -11 3 Z"
        fill="#4888C7"
        transform="translate(17,0)"
      />
      <path
        d="M0 0 C2.31 0 4.62 0 7 0 C7 0.66 7 1.32 7 2 C5.35 2 3.7 2 2 2 C2 11.9 2 21.8 2 32 C9.92 32 17.84 32 26 32 C26 22.1 26 12.2 26 2 C24.35 2 22.7 2 21 2 C21 1.34 21 0.68 21 0 C23.31 0 25.62 0 28 0 C28 11.22 28 22.44 28 34 C18.76 34 9.52 34 0 34 C0 22.78 0 11.56 0 0 Z"
        fill="#B5DBFD"
        transform="translate(6,3)"
      />
      <path
        d="M0 0 C0.99 0 1.98 0 3 0 C3.33 0.66 3.66 1.32 4 2 C5.32 2 6.64 2 8 2 C8.33 1.34 8.66 0.68 9 0 C9.99 0 10.98 0 12 0 C12 1.65 12 3.3 12 5 C8.04 5 4.08 5 0 5 C0 3.35 0 1.7 0 0 Z"
        fill="#81B9ED"
        transform="translate(14,3)"
      />
      <path
        d="M0 0 C1.65 0 3.3 0 5 0 C5.66 1.32 6.32 2.64 7 4 C4.03 4 1.06 4 -2 4 C-1.34 2.68 -0.68 1.36 0 0 Z"
        fill="#9FCFFD"
        transform="translate(13,18)"
      />
      <path
        d="M0 0 C1.98 0.495 1.98 0.495 4 1 C3.67 2.32 3.34 3.64 3 5 C1.68 4.67 0.36 4.34 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z"
        fill="#A3D1FD"
        transform="translate(14,12)"
      />
    </svg>
  );

  const ChatIcon = ()=>(
    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-phone"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path></svg
          >
  
  )

  const CrossIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 40 40">
  <path fill="#dff0fe" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"></path><path fill="#4788c7" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z"></path>
  </svg>
  )

  const MenuIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 40 40">
      <path fill="#c2e8ff" d="M1.5 18.5H38.5V21.5H1.5z"></path><path fill="#7496c4" d="M38,19v2H2v-2H38 M39,18H1v4h38V18L39,18z"></path><path fill="#c2e8ff" d="M1.5 8.5H38.5V11.5H1.5z"></path><path fill="#7496c4" d="M38,9v2H2V9H38 M39,8H1v4h38V8L39,8z"></path><g><path fill="#c2e8ff" d="M1.5 28.5H38.5V31.5H1.5z"></path><path fill="#7496c4" d="M38,29v2H2v-2H38 M39,28H1v4h38V28L39,28z"></path></g>
    </svg>
  )

  const WhatsappIcon = () =>(
    <svg aria-hidden="true"focusable="false"data-prefix="fab"data-icon="whatsapp"className="svg-inline--fa fa-whatsapp fa-w-14"role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
  )