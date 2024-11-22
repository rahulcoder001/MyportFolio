import Image from "next/image"
import telvindlogo from "/public/telvind.svg"
import mongoDB from "/public/mongodb.png"
import mysql from "/public/mysql.png"

import "./style.css";

export function AboutMe({ setAbout}:any) {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }} className=" Varela_round mt-5 mx-auto z-50 w-[1300px] rounded-xl p-3">
      <div className="flex justify-between"><div></div><div onClick={()=>{setAbout(false)}} className="p-1 rounded-full bg-slate-700"><CrossIcon /></div></div>
      <div className="flex border-white mt-3">
        <div className="w-1/2 border-white">
          <p style={{ color: "#1788ae" }} className="text-2xl font-bold Varela_round ml-10">ABOUT ME</p>
          <p className="Varela_round p-3 px-10">"I am a dedicated full-stack developer with junior-level engineering expertise, skilled in creating user-focused and scalable applications. With a passion for learning and problem-solving, I strive to align technology solutions with business goals. My aim is to contribute to your company's growth through innovative development."</p>
          <p style={{ color: "#1788ae" }} className="text-2xl font-bold Varela_round ml-10">FULL STACK</p>
          <p style={{ color: "#1788ae" }} className="text-xl font-bold Varela_round ml-10 mt-5">FRONTEND</p>
          <div className="flex ml-10 gap-5 mt-5">
            <div className="tooltip-container"><span className="tooltip-text">React</span><ReactIcon /></div>
            <div className="tooltip-container"><NextIcon /><span className="tooltip-text">Next.js</span></div>
            <div className="tooltip-container"><Image src={telvindlogo} alt="telvind" height={40} width={40} /><span className="tooltip-text">TailwindCSS</span></div>
            <div className="tooltip-container"><BostTrap /><span className="tooltip-text">Bootstrap</span></div>
          </div>

          <p style={{ color: "#1788ae" }} className="text-xl font-bold Varela_round mt-5 ml-10">BACKEND</p>
          <div className="flex ml-10 gap-5 mt-5">
            <div className="tooltip-container"><NodeJs /><span className="tooltip-text">Node.js</span></div>
            <div className="tooltip-container"><ExpressJs /><span className="tooltip-text">Express.js</span></div>
          </div>

          <p style={{ color: "#1788ae" }} className="text-xl font-bold mt-5 Varela_round ml-10">DATABASE</p>
          <div className="flex ml-10 gap-5 mt-5">
            <div className="tooltip-container"><Image src={mongoDB} alt="mongoDB" height={40} width={40} /><span className="tooltip-text">MongoDB</span></div>
            <div className="tooltip-container"><Mysql /><span className="tooltip-text">PostgreSQL</span></div>
            <div className="tooltip-container"><Image src={mysql} alt="mysql" height={40} width={40} /><span className="tooltip-text">MySQL</span></div>
          </div>

          <p style={{ color: "#1788ae" }} className="text-xl font-bold Varela_round mt-5 ml-10">DevOps</p>
          <div className="flex ml-10 gap-5 mt-5">
            <div className="tooltip-container"><AWS /><span className="tooltip-text">AWS</span></div>
            <div className="tooltip-container"><Docker /><span className="tooltip-text">Docker</span></div>
            <div className="tooltip-container"><Github /><span className="tooltip-text">GitHub</span></div>
          </div>
        </div>
        <div className="w-1/2 border-white">
  <p style={{ color: "#1788ae" }} className="text-2xl font-bold Varela_round ml-10">
    MY SKILLS
  </p>
  <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-10 mx-10 p-3">
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #JavaScript
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #HTML
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #CSS
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #ReactJS
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #Next.js
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #MongoDB
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #C++ Programing
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #C
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #Express.js
    </span>
    <span className="border-2 rounded-3xl border-white p-2 text-sm text-center">
      #TypeScript
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Node.js
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #React
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Tailwind CSS
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #SQL
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #NoSQL
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #PostgreSQL
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Docker
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #GIT
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Nginx
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #MySQL
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #C Programming
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #GitHub
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Bootstrap
    </span>
    <span className="border-2 font-semibold rounded-3xl border-white p-2 text-sm text-center">
      #Python
    </span>
  </div>
</div>

      </div>
    </div>
  );
}



const CrossIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const ReactIcon  = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
    <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
  </svg>
)

const NextIcon = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<linearGradient id="wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1" x1="32" x2="32" y1="54" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWa_AU6Wc7r56Fxz_gr1)" d="M54,32c0,5.75-2.2,10.98-5.8,14.9l-0.171,0.187L43,40.646V21h-7v10.686L27.663,21H21v22h7	V32.59l14.66,18.66C39.51,53,35.87,54,32,54c-12.15,0-22-9.85-22-22s9.85-22,22-22S54,19.85,54,32z"></path><linearGradient id="wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2" x1="32" x2="32" y1="58" y2="6" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="url(#wNc8qMg_PMLZF-NebSkXWb_AU6Wc7r56Fxz_gr2)" d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8	C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z M41,41.336V23h-3v14.496L26.683,23H23v18h3V26.81	L44.37,50.2c0.771-0.523,1.509-1.097,2.212-1.714L41,41.336z"></path>
</svg>
)

const BostTrap = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
   <linearGradient id="GdeByWRAcrxkNrB1xXKVla_ZMc42tPbG32H_gr1" x1="32" x2="32" y1="57" y2="7" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="none" stroke="url(#GdeByWRAcrxkNrB1xXKVla)" strokeMiterlimit="10" strokeWidth="2" d="M62,30.45v3.1	c-2.77,0.31-4.93,2.4-5.95,5.67c-1.02,3.31-1.16,7.37-1.05,10.51c0.11,3.26-2.43,6.27-5.87,6.27H14.87c-3.44,0-5.98-3.01-5.87-6.27	c0.11-3.14-0.03-7.2-1.05-10.51C6.93,35.95,4.77,33.86,2,33.55v-3.1c2.77-0.31,4.93-2.4,5.95-5.67C8.97,21.47,9.11,17.41,9,14.27	C8.89,11.01,11.43,8,14.87,8h34.26c3.44,0,5.98,3.01,5.87,6.27c-0.11,3.14,0.03,7.2,1.05,10.51C57.07,28.05,59.23,30.14,62,30.45z"></path><linearGradient id="GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2" x1="32" x2="32" y1="53" y2="11" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#GdeByWRAcrxkNrB1xXKVlb_ZMc42tPbG32H_gr2)" d="M14.87,53c-0.95,0-1.599-0.465-1.976-0.854c-0.599-0.619-0.925-1.462-0.896-2.314	c0.11-3.134-0.005-7.677-1.181-11.495C9.942,35.533,8.351,33.342,6.303,32c2.048-1.341,3.639-3.529,4.511-6.326	c1.18-3.829,1.295-8.372,1.185-11.51c-0.028-0.848,0.298-1.691,0.896-2.31C13.271,11.465,13.92,11,14.87,11h34.26	c0.95,0,1.599,0.465,1.976,0.854c0.599,0.619,0.925,1.462,0.896,2.314c-0.11,3.134,0.005,7.677,1.181,11.495	c0.875,2.804,2.467,4.995,4.515,6.337c-2.048,1.341-3.639,3.529-4.511,6.326c-1.18,3.829-1.295,8.372-1.185,11.51	c0.028,0.848-0.298,1.691-0.896,2.31C50.729,52.535,50.08,53,49.13,53H14.87z M36.713,31.135c2.657-0.428,4.744-2.891,4.744-5.65	c0-3.93-3.105-6.485-7.829-6.485H23l0,25.99h10.689c5.66,0,9.07-2.769,9.07-7.35c0-3.461-2.433-5.955-6.047-6.352V31.135z M32.631,22.298c2.993,0,4.693,1.334,4.693,3.746c0,2.576-1.975,4.011-5.558,4.011H27v-7.757H32.631z M27,41.692V33.14h5.6	c3.909,0,5.935,1.435,5.935,4.245c0,2.81-1.975,4.306-5.701,4.306H27z"></path>
  </svg>
)

const NodeJs = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<linearGradient id="7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1" x1="32" x2="32" y1="57.81" y2="6.19" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#e6abff"></stop><stop offset="1" stopColor="#6dc7ff"></stop></linearGradient><path fill="url(#7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1)" d="M29.12,33.97h-2.6c-0.2,0-0.4,0.04-0.58,0.11l0.02-5.32c1.31,4.13,6.05,4.98,10.53,5.42	c7.02,0.69,7.02,1.62,7.02,2.23c0,0.9,0,2.56-5.73,2.56c-5.3,0-6.27-1.08-6.65-3.32C30.97,34.68,30.11,33.97,29.12,33.97z M32,6.19	L10,19.01v25.98l7.04,4.1c0.85,0.5,1.62,0.11,1.9-0.06c0.29-0.16,0.96-0.65,0.96-1.64l0.09-27.9c0.01-0.83,0.68-1.5,1.51-1.5l3,0.02	c0.83,0,1.5,0.67,1.49,1.5l-0.01,4.3C27.17,20.17,31.12,18,36.87,18c7.74,0,11.75,2.88,12.25,8.81c0.04,0.46-0.12,0.93-0.44,1.28	c-0.33,0.35-0.78,0.54-1.24,0.54h-2.58c-0.95,0-1.8-0.62-2.03-1.54c-0.49-2.01-1.44-3.08-5.97-3.08c-4.76,0-4.76,1.5-4.76,2.13	c0,0.82,0,1.26,10.79,2.52c4.01,0.47,7.23,3.85,7.11,7.89C49.84,41.85,45.29,45,37.75,45v-0.03c-4.86,0-8.41-1.09-10.56-3.24	c-0.51-0.51-0.94-1.08-1.27-1.69L25.9,47.4c0,2.12-0.82,4.08-2.27,5.53L32,57.81l22-12.82V19.01L32,6.19z"></path><linearGradient id="7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2" x1="32" x2="32" y1="61.97" y2="2.027" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#c822ff"></stop><stop offset="1" stopColor="#1a6dff"></stop></linearGradient><path fill="url(#7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2)" d="M26.904,36.014c0.072,1.75,0.655,3.184,1.735,4.267c1.754,1.756,4.831,2.646,9.147,2.646	v0.026c3.813-0.005,10.168-0.885,10.168-6.689c0-3.789-2.003-5.091-9.315-6.062c-6.379-0.844-8.585-1.278-8.585-4.058	c0-4.178,5.122-4.178,6.804-4.178c4.962,0,7.089,1.187,7.96,4.62h2.219c-0.547-4.521-3.703-6.539-10.168-6.539	c-5.862,0-9.224,2.267-9.224,6.222c0,3.727,2.283,5.209,9.049,5.877c6.795,0.665,8.867,1.661,8.867,4.264	c0,4.087-4.16,4.611-7.784,4.611c-6.276,0-8.077-1.752-8.66-5.007H26.904z M58,18.44v27.12c0,1.07-0.57,2.06-1.49,2.6l-23,13.4	c-0.47,0.27-0.99,0.41-1.51,0.41s-1.04-0.14-1.51-0.41l-10.99-6.4c0.83-0.17,1.64-0.47,2.41-0.91h0.01l9.58,5.58	c0.31,0.19,0.69,0.19,1,0l23-13.4c0.31-0.18,0.5-0.51,0.5-0.87V18.44c0-0.36-0.19-0.69-0.5-0.87l-23-13.4c-0.31-0.19-0.69-0.19-1,0	l-23,13.4C8.19,17.75,8,18.08,8,18.44v27.12c0,0.36,0.19,0.69,0.5,0.87l3.682,2.15l3.784,2.203c1.224,0.713,2.699,0.711,3.946-0.005	c1.242-0.714,1.984-1.982,1.984-3.393L22,19.996l2,0.008l-0.104,27.385c0,2.131-1.117,4.048-2.987,5.123	c-0.938,0.539-1.962,0.808-2.983,0.808c-1.022,0-2.042-0.27-2.968-0.81l-3.78-2.202L7.49,48.16C6.57,47.62,6,46.63,6,45.56V18.44	c0-1.07,0.57-2.06,1.49-2.6l23-13.4c0.93-0.55,2.09-0.55,3.02,0l23,13.4C57.43,16.38,58,17.37,58,18.44z"></path>
</svg>
)

const ExpressJs = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1" x1="30.982" x2="30.982" y1="21.203" y2="43.514" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLa_2ZOaTclOqD4q_gr1)" d="M45.758,32.346L56.964,47h-0.85c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684	C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.654L32.271,18h0.85c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377	C53.838,18.49,54.829,18,55.879,18h0.85L45.758,32.346z M28.527,40h0.638c0,0,0,0,0,0c-2.348,6.085-9.292,9.631-15.896,7.256	C8.215,45.437,5,40.444,5,35.073L5,29.5c0-7.29,6.273-13.143,13.705-12.443C25.182,17.667,30,23.361,30,29.866L30,34H19v0H7l0,1.109	c0,4.501,2.671,8.705,6.9,10.248c4.807,1.754,9.835-0.235,12.389-4.116C26.789,40.481,27.616,40,28.527,40z M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2" x1="44.5" x2="44.5" y1="16" y2="49" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLb_2ZOaTclOqD4q_gr2)" d="M56.729,18L45.758,32.347L56.964,47h-0.85	c-1.051,0-2.041-0.49-2.68-1.324L44.5,33.992l-8.935,11.684C34.927,46.51,33.937,47,32.886,47h-0.85l11.206-14.653L32.271,18h0.85	c1.051,0,2.041,0.49,2.68,1.324l8.7,11.377l8.7-11.377C53.838,18.49,54.829,18,55.879,18H56.729 M60.776,16h-4.047h-0.85	c-1.663,0-3.258,0.788-4.268,2.109L44.5,27.408l-7.111-9.299C36.379,16.788,34.783,16,33.121,16h-0.85h-4.047l2.458,3.215	l10.042,13.132L30.447,45.785L27.989,49h4.047h0.85c1.663,0,3.258-0.789,4.268-2.109l7.346-9.606l7.346,9.606	C52.856,48.211,54.451,49,56.114,49h0.85h4.047l-2.458-3.215L48.276,32.346l10.042-13.132L60.776,16L60.776,16z"></path><linearGradient id="Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3" x1="17.54" x2="17.54" y1="15" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#Ptgyoqd6DQJu9ZUJIh3sLc_2ZOaTclOqD4q_gr3)" d="M17.5,17c0.397,0,0.8,0.019,1.205,0.057	C25.182,17.667,30,23.361,30,29.866V34H19v0H7v1.109c0,4.501,2.671,8.705,6.9,10.248C15.1,45.796,16.314,46,17.5,46	c3.563,0,6.872-1.847,8.789-4.758C26.789,40.481,27.616,40,28.527,40h0.638c0,0,0,0,0,0c-1.847,4.785-6.535,8-11.665,8	c-1.394,0-2.82-0.237-4.231-0.745C8.215,45.437,5,40.444,5,35.073V29.5C5,22.607,10.607,17,17.5,17 M7,32h21v-2.5	C28,23.71,23.29,19,17.5,19S7,23.71,7,29.5V32 M17.5,15L17.5,15c-3.868,0-7.508,1.509-10.249,4.251C4.51,21.992,3,25.632,3,29.5	v5.573c0,6.348,3.855,12,9.592,14.065C14.184,49.71,15.835,50,17.5,50c5.951,0,11.389-3.729,13.531-9.28l1.05-2.72l-2.915,0	l-0.638,0c-1.565,0-3.026,0.801-3.91,2.142C23.052,42.522,20.324,44,17.5,44c-0.986,0-1.967-0.175-2.915-0.521	C11.509,42.356,9.362,39.416,9.042,36H19l11,0l2,0v-2v-4.134c0-7.607-5.758-14.109-13.108-14.8C18.43,15.022,17.962,15,17.5,15	L17.5,15z M9,30v-0.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5V30H9L9,30z"></path>
</svg>
)

const Mysql = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#fff" d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"></path><path fill="#0277bd" d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"></path><path fill="#0277bd" d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"></path><path fill="#0277bd" d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"></path>
</svg>
)

const AWS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<linearGradient id="0QVtQmKaR0uEiMy4kXJm_a_wU62u24brJ44_gr1" x1="32.002" x2="32.002" y1="53.326" y2="33.119" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#0QVtQmKaR0uEiMy4kXJm_a_wU62u24brJ44_gr1)" d="M18.037,26.712c0,0.796,0.085,1.44,0.235,1.913c0.171,0.473,0.383,0.989,0.681,1.548 c0.107,0.172,0.149,0.344,0.149,0.495c0,0.215-0.128,0.429-0.404,0.645l-1.341,0.903c-0.192,0.129-0.383,0.193-0.553,0.193 c-0.213,0-0.425-0.108-0.639-0.301c-0.299-0.323-0.553-0.667-0.767-1.011c-0.213-0.365-0.425-0.773-0.66-1.268 c-1.66,1.977-3.747,2.967-6.259,2.967c-1.788,0-3.215-0.516-4.257-1.548C3.18,30.216,2.648,28.84,2.648,27.12 c0-1.827,0.639-3.311,1.937-4.428c1.299-1.117,3.023-1.677,5.215-1.677c0.724,0,1.469,0.064,2.256,0.172 c0.787,0.108,1.596,0.28,2.448,0.473v-1.569c0-1.633-0.34-2.773-1-3.44c-0.681-0.667-1.831-0.989-3.469-0.989 c-0.745,0-1.511,0.085-2.299,0.28c-0.788,0.193-1.553,0.429-2.299,0.731c-0.34,0.151-0.596,0.236-0.745,0.28 c-0.149,0.043-0.256,0.064-0.34,0.064c-0.299,0-0.447-0.215-0.447-0.667v-1.053c0-0.344,0.043-0.601,0.149-0.752 c0.107-0.151,0.299-0.301,0.596-0.452c0.745-0.387,1.639-0.709,2.683-0.968c1.043-0.28,2.149-0.408,3.32-0.408 c2.533,0,4.385,0.58,5.577,1.741c1.171,1.161,1.767,2.924,1.767,5.288v6.965L18.037,26.712 C18.037,26.711,18.037,26.712,18.037,26.712z M9.394,29.979c0.703,0,1.427-0.129,2.192-0.387c0.767-0.257,1.448-0.731,2.023-1.376 c0.34-0.408,0.596-0.86,0.724-1.376c0.128-0.516,0.213-1.14,0.213-1.871v-0.903c-0.617-0.151-1.277-0.28-1.959-0.365 c-0.681-0.085-1.341-0.129-2.001-0.129c-1.427,0-2.469,0.28-3.172,0.86s-1.043,1.397-1.043,2.472c0,1.011,0.256,1.763,0.788,2.279 C7.67,29.721,8.416,29.979,9.394,29.979z M26.487,32.301c-0.383,0-0.639-0.064-0.809-0.215c-0.171-0.129-0.319-0.429-0.447-0.839 L20.228,14.63c-0.128-0.429-0.192-0.709-0.192-0.86c0-0.344,0.171-0.537,0.511-0.537h2.087c0.404,0,0.681,0.064,0.831,0.215 c0.171,0.129,0.297,0.429,0.425,0.839l3.576,14.232l3.32-14.232c0.107-0.429,0.235-0.709,0.404-0.839 c0.171-0.129,0.468-0.215,0.852-0.215h1.703c0.404,0,0.681,0.064,0.852,0.215c0.171,0.129,0.319,0.429,0.404,0.839l3.363,14.404 l3.683-14.404c0.128-0.429,0.277-0.709,0.425-0.839c0.171-0.129,0.447-0.215,0.831-0.215h1.98c0.34,0,0.532,0.172,0.532,0.537 c0,0.108-0.021,0.215-0.043,0.344c-0.021,0.129-0.064,0.301-0.149,0.537l-5.129,16.617c-0.128,0.429-0.277,0.709-0.447,0.839 c-0.169,0.129-0.447,0.215-0.809,0.215h-1.831c-0.404,0-0.681-0.064-0.852-0.215c-0.171-0.151-0.319-0.429-0.404-0.86 l-3.299-13.866l-3.277,13.845c-0.107,0.429-0.235,0.709-0.404,0.86c-0.171,0.151-0.468,0.215-0.852,0.215H26.487z M53.839,32.881 c-1.107,0-2.213-0.129-3.277-0.387c-1.064-0.257-1.895-0.537-2.448-0.86c-0.34-0.193-0.575-0.408-0.66-0.601 c-0.085-0.193-0.128-0.408-0.128-0.601v-1.096c0-0.452,0.171-0.667,0.489-0.667c0.128,0,0.256,0.021,0.383,0.064 c0.128,0.043,0.319,0.129,0.532,0.215c0.724,0.323,1.511,0.58,2.341,0.752c0.852,0.172,1.681,0.257,2.533,0.257 c1.341,0,2.384-0.236,3.108-0.709c0.724-0.473,1.107-1.161,1.107-2.043c0-0.601-0.192-1.096-0.575-1.505 c-0.383-0.408-1.107-0.773-2.149-1.117l-3.087-0.968c-1.553-0.495-2.703-1.225-3.405-2.193c-0.703-0.945-1.064-1.999-1.064-3.117 c0-0.903,0.192-1.699,0.575-2.387c0.383-0.688,0.895-1.289,1.532-1.763c0.639-0.495,1.363-0.86,2.213-1.117 c0.852-0.256,1.745-0.364,2.683-0.364c0.468,0,0.957,0.021,1.427,0.085c0.489,0.064,0.936,0.151,1.384,0.236 c0.425,0.108,0.831,0.215,1.213,0.344s0.681,0.257,0.895,0.387c0.299,0.172,0.511,0.344,0.639,0.537 c0.128,0.172,0.192,0.408,0.192,0.709v1.011c0,0.452-0.171,0.688-0.489,0.688c-0.171,0-0.447-0.085-0.809-0.257 c-1.213-0.559-2.576-0.839-4.087-0.839c-1.213,0-2.171,0.193-2.831,0.601s-1,1.032-1,1.913c0,0.601,0.213,1.117,0.639,1.527 c0.425,0.408,1.213,0.817,2.341,1.183l3.023,0.968c1.532,0.495,2.64,1.183,3.299,2.064c0.659,0.881,0.979,1.892,0.979,3.009 c0,0.924-0.192,1.763-0.553,2.493c-0.383,0.731-0.895,1.376-1.553,1.892c-0.66,0.537-1.448,0.924-2.363,1.204 C55.924,32.731,54.924,32.881,53.839,32.881z"></path><linearGradient id="0QVtQmKaR0uEiMy4kXJm_b_wU62u24brJ44_gr2" x1="32" x2="32" y1="29.23" y2="14.674" gradientTransform="matrix(1 0 0 -1 0 66)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#0QVtQmKaR0uEiMy4kXJm_b_wU62u24brJ44_gr2)" d="M57.862,43.329 c-7.003,5.224-17.177,7.997-25.926,7.997c-12.26,0-23.308-4.579-31.652-12.189c-0.66-0.601-0.064-1.419,0.724-0.945 c9.025,5.288,20.157,8.492,31.673,8.492c7.769,0,16.305-1.633,24.158-4.988C58.011,41.159,59.011,42.469,57.862,43.329z M60.778,39.976c-0.895-1.161-5.917-0.559-8.195-0.28c-0.681,0.085-0.788-0.516-0.171-0.968c4.001-2.837,10.579-2.021,11.345-1.075 c0.767,0.968-0.213,7.611-3.959,10.792c-0.575,0.495-1.128,0.236-0.873-0.408C59.778,45.909,61.672,41.115,60.778,39.976z"></path>
</svg>
)

const Docker = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
<linearGradient id="qkynU2Y8rOH~aZc8I2lvda_GOHWqwnSE8Sv_gr1" x1="32.253" x2="32.253" y1="19" y2="55" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#qkynU2Y8rOH~aZc8I2lvda_GOHWqwnSE8Sv_gr1)" d="M23.649,55c-5.569,0.016-10.503-1.053-13.569-2.926c-2.772-1.689-4.897-4.426-6.313-8.134 c-1.234-3.362-1.809-6.648-1.764-10.058c-0.001-0.759,0.299-1.486,0.846-2.033C3.396,31.302,4.123,31,4.896,31H43.49 c0.211-0.009,1.491-0.215,2.669-0.661c-0.897-1.902-1.095-4.049-0.567-6.274c0.326-1.358,0.875-2.639,1.632-3.81l0.573-0.826 c0.297-0.426,0.872-0.555,1.32-0.295l0.843,0.485c0.387,0.228,3.513,2.169,4.5,6.021c0.556-0.061,1.116-0.092,1.674-0.095 c3.385,0,5.101,1.219,5.411,1.463c0,0,0,0,0,0.001l0.58,0.458c0.333,0.263,0.463,0.707,0.326,1.107l-0.24,0.702 c-0.451,1.142-1.133,2.15-1.99,2.961c-1.19,1.176-2.648,2.614-7.103,2.732c-0.897,2.271-2.919,6.724-6.196,10.427 c-1.909,2.156-4.143,3.981-6.64,5.425c-3.022,1.708-6.279,2.889-9.687,3.513C28.121,54.794,25.972,55,23.649,55z M48.916,21.325 l-0.03,0.044c-0.616,0.952-1.075,2.024-1.347,3.159c-0.501,2.114-0.212,4.045,0.859,5.736c0.147,0.232,0.192,0.516,0.125,0.782 s-0.243,0.493-0.483,0.627c-1.697,0.943-4.009,1.307-4.511,1.325L4.896,33c-0.239,0-0.464,0.093-0.633,0.263 c-0.169,0.169-0.262,0.394-0.261,0.633C3.96,37.114,4.48,40.079,5.64,43.239c1.25,3.271,3.096,5.674,5.482,7.128 c2.759,1.686,7.359,2.639,12.523,2.633c2.199,0,4.236-0.196,6.588-0.633c3.19-0.584,6.237-1.688,9.057-3.282 c2.303-1.331,4.37-3.02,6.135-5.015c3.497-3.949,5.527-8.99,6.066-10.441c0.146-0.393,0.477-0.66,0.941-0.651 c0.031,0,0.062,0,0.093,0c4.1,0,5.16-1.046,6.282-2.154c0.682-0.646,1.195-1.403,1.523-2.227l-0.025-0.02 c-0.062-0.048-1.351-1.032-4.167-1.032c-0.768,0.004-1.545,0.07-2.307,0.199c-0.267,0.042-0.538-0.02-0.754-0.178 c-0.218-0.158-0.362-0.397-0.401-0.664c-0.533-3.64-3.592-5.479-3.723-5.555L48.916,21.325z"></path><linearGradient id="qkynU2Y8rOH~aZc8I2lvdb_GOHWqwnSE8Sv_gr2" x1="27.777" x2="27.777" y1="9" y2="51" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#qkynU2Y8rOH~aZc8I2lvdb_GOHWqwnSE8Sv_gr2)" d="M23.534,51c-4.726,0-8.972-0.874-11.367-2.339c-2.003-1.221-3.571-3.288-4.664-6.147 c-0.93-2.538-1.415-4.96-1.492-7.514l37.591-0.002c0.736-0.027,3.386-0.452,5.409-1.576l0.533-0.296 c-0.602,1.578-2.489,6.086-5.617,9.619c-1.623,1.833-3.522,3.385-5.646,4.612c-2.601,1.471-5.437,2.499-8.406,3.042 C27.637,50.815,25.719,51,23.649,51H23.534z M13,28v-4c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C12.552,29,13,28.552,13,28z M20,28v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C19.552,29,20,28.552,20,28z M27,28v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C26.552,29,27,28.552,27,28z M34,28v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C33.552,29,34,28.552,34,28z M20,21v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C19.552,22,20,21.552,20,21z M27,21v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C26.552,22,27,21.552,27,21z M34,21v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C33.552,22,34,21.552,34,21z M34,14v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C33.552,15,34,14.552,34,14z M41,28v-4c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h4 C40.552,29,41,28.552,41,28z"></path>
</svg>
)

const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 64 64">
  <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
  </svg>
)