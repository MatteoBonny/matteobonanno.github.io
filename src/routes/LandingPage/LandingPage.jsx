import React, { useRef, useState, useEffect } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import ImageBox from '../../components/ImageBox/ImageBox';
import data from '../../data/data.json';  // Carica i dati JSON

function HorizontalScrollLoop({ phrase }) {
    const horizontalScrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = horizontalScrollRef.current;
        let scrollSpeed = 1;
        let requestID;

        const startScrolling = () => {
            scrollContainer.scrollLeft += scrollSpeed;

            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
            requestID = requestAnimationFrame(startScrolling);
        };

        requestID = requestAnimationFrame(startScrolling);

        return () => {
            cancelAnimationFrame(requestID);
        };
    }, []);

    return (
        <div
            ref={horizontalScrollRef}
            className="font-Favela-r h-20 w-full bg-[#c04abc] whitespace-nowrap overflow-hidden flex items-center pointer-events-none"
        >
            {Array(22).fill().map((_, index) => (
                <span key={index} className="text-white inline-block px-24 text-3xl leading-none">{phrase}</span> 
            ))}
        </div>
    );
}

export default function LandingPage() {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [works, setWorks] = useState([]);  // Stato per i dati caricati
    const [loading, setLoading] = useState(true);  // Stato di caricamento

    // Carica i dati dal file JSON
    useEffect(() => {
        setWorks(Object.values(data));
        setLoading(false);
    }, []);

    // Gestione movimento cursore
    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setCursorPosition({ x: clientX, y: clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    if (loading) {
        return <div>Caricamento...</div>;  // Mostra "Caricamento" finché i dati non sono caricati
    }

    return (
        <>
            <div
                className={`fixed z-[30] pointer-events-none transition-opacity duration-[0.1s] ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                style={{
                    left: `${cursorPosition.x - 50}px`,
                    top: `${cursorPosition.y - 50}px`,
                    width: '120px',
                    height: '120px',
                    backgroundColor: 'orange',
                    borderRadius: '50%',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                }}
            >
                VIEW
            </div>

            <BaseLayout>
                <GridLayout>
                <div data-scroll data-scroll-speed={-6} className="font-favela bg-transparent col-span-full h-fit h-screen text-4xl sm:text-6xl md:text-7xl lg:text-6xl text-center uppercase px-4 sm:px-8 md:px-16 lg:px-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-24 sm:pb-32 md:pb-48 lg:pb-64 leading-[42px] sm:leading-[56px] md:leading-[64px] lg:leading-[92px] 2xl:text-9xl 2xl:font-black 2xl:leading-[180px]">
                    Behind every smooth app and powerful platform, there’s a builder. I’m the one who turns complex problems into simple, elegant solutions. Explore the code that makes the digital world come alive.
                </div>

                    <div className="h-fit z-10 bg-black col-span-full font-semibold text-8xl text-center uppercase leading-none mt-[350px] cursor-none">
                        <HorizontalScrollLoop phrase="• Some of my best works •" />

                        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ cursor: 'none' }} className="w-full px-12 py-12">
                            <div className="grid grid-cols-12 gap-4">
                                {works.slice(0, 2).map((work, index) => (
                                    <ImageBox
                                        key={index}
                                        image={work.image}
                                        video={work.video}
                                        title={work.title}
                                        link={`/work/${work.title}`}
                                    />
                                ))}
                            </div>

                            <div className="grid grid-cols-12 gap-4 mt-4">
                                {works.slice(2, 4).map((work, index) => (
                                    <ImageBox
                                        key={index}
                                        image={work.image}
                                        video={work.video}
                                        title={work.title}
                                        link={`/work/${work.title}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <HorizontalScrollLoop phrase="• Let's talk about your next project •" />
                    </div>
                </GridLayout>
            </BaseLayout>
        </>
    );
}

