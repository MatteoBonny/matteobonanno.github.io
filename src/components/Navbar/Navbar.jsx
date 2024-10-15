// import { Link } from "react-router-dom"; 
// import { useEffect, useState } from "react";
// import { useLocomotiveScroll } from "react-locomotive-scroll"; 


// export default function Navbar() {
//     const { scroll } = useLocomotiveScroll();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };


//     return (
//         <>
//             <nav className="bg-transparent p-4 fixed w-full z-50 top-0 left-0 flex justify-between items-center">
//                 <div className="text-black text-2xl font-bold">
//                     <Link to="/">Logo</Link>
//                 </div>

//                 <div>
//                     <button 
//                         onClick={toggleMenu} 
//                         className="text-black text-xl font-semibold focus:outline-none">
//                         {isMenuOpen ? 'Close' : 'Menu'}
//                     </button>
//                 </div>
//             </nav>

//             <div
//                 className={`no-scroll fixed top-0 left-0 h-full w-full h-screen bg-yellow-500 text-black flex flex-col justify-center transition-transform duration-500 z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
//             >   
//                 <ul className="space-y-4 text-4xl font-semibold w-full">
//                     <li className="border-b-2 border-black w-full px-2">
//                         <Link to="/work/work1" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
//                             <span className="before:content-['•'] before:absolute before:left-0 px-2">Work</span>
//                         </Link>
//                     </li>
//                     <li className="border-b-2 border-black w-full px-2">
//                         <Link to="/page2" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
//                             <span className="before:content-['•'] before:absolute before:left-0 px-2">testo 2</span>
//                         </Link>
//                     </li>
//                     <li className="border-b-2 border-black w-full px-2">
//                         <Link to="/logo" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
//                             <span className="before:content-['•'] before:absolute before:left-0 px-2">Logo</span>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </>
//     );
// }


import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll"; 


export default function Navbar() {
    const { scroll } = useLocomotiveScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="bg-transparent p-4 fixed w-full z-50 top-0 left-0 flex justify-between items-center">
                <div className="text-black text-2xl font-bold mix-blend-difference">
                    <Link to="/"><img src="/img/logo.svg" className="h-6  mix-blend-difference"></img></Link>
                </div>

                <div>
                    <button 
                        onClick={toggleMenu} 
                        className="text-black text-xl font-semibold focus:outline-none">
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>

            <div
                className={`no-scroll fixed top-0 left-0 h-full w-full h-screen bg-yellow-500 text-black flex flex-col justify-center transition-transform duration-500 z-40 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >   
                <ul className="space-y-4 text-4xl font-semibold w-full">
                    <li className="border-b-2 border-black w-full px-2">
                        <Link to="/work/work1" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
                            <span className="before:content-['•'] before:absolute before:left-0 px-2">Work</span>
                        </Link>
                    </li>
                    {/* <li className="border-b-2 border-black w-full px-2">
                        <Link to="/page2" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
                            <span className="before:content-['•'] before:absolute before:left-0 px-2">testo 2</span>
                        </Link>
                    </li> */}
                    <li className="border-b-2 border-black w-full px-2 hidden md:block">
                        <Link to="/logo" onClick={toggleMenu} className="hover:text-gray-400 text-left block w-full pl-4 relative pb-2">
                            <span className="before:content-['•'] before:absolute before:left-0 px-2">Logo</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}