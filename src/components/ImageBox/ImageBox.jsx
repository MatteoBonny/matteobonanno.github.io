// import { Link } from 'react-router-dom';

// export default function ImageBox(props) {
//     return (
//         <div className="flex flex-col w-full col-span-full lg:col-span-6">
//             <div className="pb-4 w-fit text-left text-xl font-bold text-white">
//                 {props.title}
//             </div>
//             <Link to={props.link} className=" relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out aspect-video">
//                 <img src={props.image} alt={props.title} className="w-full h-full object-cover transition-opacity duration-500 ease-in-out rounded-lg" />
//                 <div className="text-white absolute inset-0 flex items-center justify-center text-2xl font-bold opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out">
//                 </div>
//             </Link>
//         </div>
//     );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ImageBox({ image, video, title, link }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="flex flex-col w-full col-span-full lg:col-span-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{cursor: 'none'}}
            
        >
            <div className="pb-4 w-fit text-left text-xl font-bold text-white" >
                {title}
            </div>

            {/* Avvolgi immagine e video nel tag Link per rendere tutto cliccabile */}
            <Link to={link}>
                <div className="relative rounded-lg overflow-hidden transition-transform duration-500 ease-in-out aspect-video">
                    {/* Transizione dell'immagine */}
                    <img
                        style={{cursor: 'none'}}
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
                            isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    />

                    {/* Transizione del video */}
                    <video
                        style={{cursor: 'none'}}
                        src={video}
                        autoPlay
                        muted
                        loop
                        className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>
            </Link>
        </div>
    );
}
