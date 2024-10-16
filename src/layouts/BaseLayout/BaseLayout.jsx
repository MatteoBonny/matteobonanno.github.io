// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import { useRef } from "react";



// export default function BaseLayout({children, isMenuOpen}) {
// const scrollRef = useRef(null);  
// const containerRef = useRef(null);
    
//     return(
//         <LocomotiveScrollProvider
//         options={{ smooth: true }}
//         containerRef={containerRef}
//         watch={[isMenuOpen]}  
//         onUpdate={(scroll) => (scrollRef.current = scroll)}  
//         >

//         <Navbar />
//         <div data-scroll-container ref={containerRef} className="w-full flex flex-col justify-start items-center p-0 m-0">
//                 {children}
//         <Footer />
//         </div>
//        </LocomotiveScrollProvider>
//     );
// }



// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import { useRef } from "react";
// import { useLocation } from "react-router-dom"; // Importa useLocation

// export default function BaseLayout({ children, isMenuOpen }) {
//   const scrollRef = useRef(null);  
//   const containerRef = useRef(null);
//   const location = useLocation(); // Ottieni l'URL corrente

//   return (
//     <LocomotiveScrollProvider
//       options={{ smooth: true }}
//       containerRef={containerRef}
//       watch={[isMenuOpen]}
//       onUpdate={(scroll) => (scrollRef.current = scroll)}
//     >
//       <Navbar />
      
//       <div
//         data-scroll-container
//         ref={containerRef}
//         className="w-full flex flex-col justify-start items-center p-0 m-0"
//       >
//         {children}

//         {/* Mostra il footer solo se non siamo nella pagina /logo */}
//         {location.pathname !== '/logo' && <Footer />}
//       </div>
//     </LocomotiveScrollProvider>
//   );
// }




import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useRef } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation

export default function BaseLayout({ children, isMenuOpen }) {
  const scrollRef = useRef(null);  
  const containerRef = useRef(null);
  const location = useLocation(); // Ottieni l'URL corrente

  // Condizione per attivare/disattivare LocomotiveScroll
  const isWorkPage = location.pathname.startsWith('/work');

  return (
    <>
      <Navbar />
      {isWorkPage ? (
        // Se siamo nella pagina "work", non usiamo LocomotiveScroll
        <div className="w-full flex flex-col justify-start items-center p-0 m-0">
          {children}
          <Footer />
        </div>
      ) : (
        // Se non siamo nella pagina "work", attiviamo LocomotiveScroll
        <LocomotiveScrollProvider
          options={{ smooth: true }}
          containerRef={containerRef}
          watch={[isMenuOpen]}
          onUpdate={(scroll) => (scrollRef.current = scroll)}
        >
          <div
            data-scroll-container
            ref={containerRef}
            className="w-full flex flex-col justify-start items-center p-0 m-0"
          >
            {children}
            {location.pathname !== '/logo' && <Footer />}
          </div>
        </LocomotiveScrollProvider>
      )}
    </>
  );
}
