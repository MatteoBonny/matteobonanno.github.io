// import React from 'react';
// import Footer_Button from "../Footer_Button/Footer_Button"; // Assicurati che il percorso sia corretto

// export default function Footer() {
//     return (
//         <footer className="bg-gray-100 py-12 text-center w-full z-20">
//             <h2 className="text-4xl md:text-5xl font-bold mb-8">COME TO SAY HELLO</h2>
//             <div className="flex justify-center space-x-4 flex-wrap mb-12">
//                 <Footer_Button text="Email" link="mailto:matteobonanno6@gmail.com" />
//                 <Footer_Button text="Instagram" link="https://instagram.com" />
//                 <Footer_Button text="Linkedin" link="https://linkedin.com" />
//             </div>

//             <div className="flex justify-center items-center space-x-4">
//                 <img src="/img/io.jpeg" alt="Logo" className="w-20" />
//                 <p className="text-sm">Developed by Matteo Bonanno</p>
//             </div>
//         </footer>
//     );
// }


import React from 'react';
import Footer_Button from "../Footer_Button/Footer_Button"; // Assicurati che il percorso sia corretto

export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 sm:py-12 text-center w-full z-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">COME TO SAY HELLO</h2>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap mb-8 sm:mb-12">
                <Footer_Button text="Email" link="mailto:matteobonanno6@gmail.com" />
                <Footer_Button text="Instagram" link="https://instagram.com" />
                <Footer_Button text="Linkedin" link="https://linkedin.com" />
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <img src="/img/io.jpeg" alt="Logo" className="w-16 sm:w-20 rounded-full" />
                <p className="text-xs sm:text-sm">Developed by Matteo Bonanno</p>
            </div>
        </footer>
    );
}
