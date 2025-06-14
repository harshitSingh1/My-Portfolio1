import React, { useEffect, useRef, useState } from 'react';
import SmallFishSwarm from './SmallFishSwarm';
import Clownfish from './seaCreatures/Clownfish';
import Anglerfish from './seaCreatures/Anglerfish';
import Squid from './seaCreatures/Squid';
import Lanternfish from './seaCreatures/Lanternfish';
import DeepSeaShrimp from './seaCreatures/DeepSeaShrimp';
import Octopus from './seaCreatures/Octopus';
import GiantIsopod from './seaCreatures/GiantIsopod';
import DeepSeaAnglerCrab from './seaCreatures/DeepSeaAnglerCrab';
import Turtle from './seaCreatures/Turtle';

// Import your images
import rockPlant1 from '../assets/images/rock-plant1.gif';
import rockPlant4 from '../assets/images/rock-plant4.png';
import rockPlant5 from '../assets/images/rock-plant5.png';
import plant2 from '../assets/images/plant2.gif';
import plants3 from '../assets/images/plants3.png';
import treasure from '../assets/images/treasure.gif';
import crab1 from '../assets/images/crab1.gif';
import starfish1 from '../assets/images/starfish1.gif';
import fish1 from '../assets/images/fish1.gif';
import octopusImage from '../assets/images/octopus.png'; // Renamed to avoid conflict with imported component

const FloatingBubble = ({ top, left, right, size, opacity, delay }) => (
    <div
        className={`absolute w-${size} h-${size} rounded-full bg-white animate-float-up-down`}
        style={{ top, left, right, opacity, animationDelay: delay }}
    />
);

const ImageMarineAnimal = ({ src, alt, className, style, animationClass = 'animate-float-slow', size = 'w-24 h-auto' }) => (
    <img
        src={src}
        alt={alt}
        className={`absolute pointer-events-auto ${size} ${animationClass} ${className}`}
        style={style}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100?text=Error"; }}
    />
);

const ImageSeabedElement = ({ src, alt, className, style, size = 'w-32 h-auto', animationClass = '' }) => (
    <img
        src={src}
        alt={alt}
        className={`absolute pointer-events-auto ${size} ${animationClass} ${className}`}
        style={style}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100?text=Error"; }}
    />
);

const DeepSeaBackground = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const deepSeaRef = useRef(null);
    const animalContainerRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / totalHeight, 1);
            setScrollProgress(progress);

            animalContainerRefs.current.forEach((animalDiv, i) => {
                if (animalDiv) {
                    const speedFactor = parseFloat(animalDiv.dataset.parallaxSpeed) || 0.1;
                    const movementScale = parseFloat(animalDiv.dataset.parallaxScale) || 25;

                    const offsetY = scrollY * speedFactor;
                    const offsetX = Math.sin(scrollY / (150 + (i % 10) * 10 + i) * movementScale);
                    const rotation = Math.sin(scrollY / (200 + (i % 10) * 15 + i * 0.5)) * 2;

                    animalDiv.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addAnimalRef = (el) => {
        if (el && !animalContainerRefs.current.includes(el)) {
            animalContainerRefs.current.push(el);
        }
    };

    const verticalOffset = `-${scrollProgress * 400}vh`;

    return (
        <>
            <style>
                {`
                @keyframes float-up-down {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); opacity: 0.8; }
                }

                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.9; }
                }

                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes wiggle {
                    0%, 100% { transform: translateX(0) rotate(0deg); }
                    25% { transform: translateX(-5px) rotate(-2deg); }
                    75% { transform: translateX(5px) rotate(2deg); }
                }

                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-5px) translateX(5px); }
                    50% { transform: translateY(0) translateX(0); }
                    75% { transform: translateY(5px) translateX(-5px); }
                }

                @keyframes sway {
                    0%, 100% { transform: rotateZ(-3deg); }
                    50% { transform: rotateZ(3deg); }
                }

                @keyframes shimmer {
                    0% { opacity: 0.1; }
                    50% { opacity: 0.25; }
                    100% { opacity: 0.1; }
                }
                .animate-shimmer {
                    animation: shimmer 5s infinite ease-in-out;
                }

                @keyframes swim-gentle {
                    0% { transform: translate(0, 0) scaleX(1); } /* Start at origin, facing right */
                    48% { transform: translate(100px, 0) scaleX(1); } /* Move right significantly */
                    50% { transform: translate(100px, 0) scaleX(-1); } /* At max right, flip immediately */
                    98% { transform: translate(0, 0) scaleX(-1); } /* Move back to origin, facing left */
                    100% { transform: translate(0, 0) scaleX(1); } /* At origin, flip back to right for next cycle */
                }
                .animate-swim-gentle {
                    animation: swim-gentle 10s linear infinite; /* Longer duration for visibility */
                }

                @keyframes slow-pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.02); opacity: 0.95; }
                }

                @keyframes subtle-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }

                @keyframes octopus-float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(15px, -10px) rotate(3deg); }
                    50% { transform: translate(0, 0) rotate(0deg); }
                    75% { transform: translate(-15px, 10px) rotate(-3deg); }
                }

                @keyframes animate-water-flow {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 100% 0%; }
                }
                .water-flow-overlay {
                    animation: animate-water-flow 60s linear infinite;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='waterGrid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0H10V1H0ZM0 9V10H10V9Z' fill='%23ffffff' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23waterGrid)'/%3E%3C/svg%3E");
                    background-size: 200px 200px;
                    opacity: 0.1;
                }
                `}
            </style>

            <div ref={deepSeaRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="fixed top-0 left-0 w-full h-full water-flow-overlay pointer-events-none z-minus-5"></div>

                <div
                    className="fixed top-0 left-0 w-full h-[calc(100vh-80px)] pointer-events-none z-0 transition-opacity duration-1000"
                    style={{
                        opacity: 1 - scrollProgress * 2,
                        background: 'radial-gradient(ellipse at top, rgba(160, 231, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
                    }}
                />

                <SmallFishSwarm />

                <div className="relative w-full h-[500vh]" style={{ transform: `translateY(${verticalOffset})` }}>
                    <div className="relative w-full h-[calc(100vh-80px)]" style={{ background: 'linear-gradient(to bottom, #003f5c 0%, #001f2d 100%)', paddingTop: '80px' }}>
                        <div ref={addAnimalRef}><Clownfish /></div>
                        <div ref={addAnimalRef}><Clownfish className="absolute top-1/5 left-10 w-32 h-20" animationClass="animate-swim-left-right" /></div>
                        <div ref={addAnimalRef}><Clownfish className="absolute bottom-1/4 right-10 w-28 h-16" animationClass="animate-swim-right-left" /></div>
                        <FloatingBubble top="75%" left="33.33%" size="6" opacity={0.3} />
                        <FloatingBubble top="66.67%" right="50%" size="4" opacity={0.2} delay="0.3s" />
                        <FloatingBubble top="80%" left="20%" size="5" opacity={0.25} delay="0.6s" />
                    </div>

                    <div className="relative w-full h-screen" style={{ background: 'linear-gradient(to bottom, #001f2d 0%, #000b14 100%)' }}>
                        <div ref={addAnimalRef}><Anglerfish /></div>
                        <div ref={addAnimalRef}><Squid /></div>
                        <div ref={addAnimalRef}><Lanternfish className="absolute top-1/3 left-10 w-36 h-16" /></div>
                        <div ref={addAnimalRef}><DeepSeaShrimp className="absolute bottom-1/3 right-10 w-24 h-24" /></div>
                        <FloatingBubble top="75%" left="33.33%" size="5" opacity={0.2} />
                        <FloatingBubble top="66.67%" right="50%" size="3" opacity={0.15} delay="0.3s" />
                        <FloatingBubble top="80%" left="20%" size="4" opacity={0.18} delay="0.6s" />
                    </div>

                    <div className="relative w-full h-[140vh]" style={{ background: 'linear-gradient(to bottom, #000b14 0%, #000005 100%)', paddingTop: '40vh', paddingBottom: '40vh' }}>
                        <div ref={addAnimalRef} className="relative top-0"><Lanternfish /></div>
                        <div ref={addAnimalRef} className="relative top-28"><DeepSeaShrimp /></div>
                        <div ref={addAnimalRef} className="relative top-56"><Octopus /></div>
                        <div ref={addAnimalRef} className="absolute top-1/4 right-10 w-40 h-28"><GiantIsopod /></div>
                        <FloatingBubble top="75%" left="33.33%" size="4" opacity={0.15} />
                        <FloatingBubble top="66.67%" right="50%" size="3" opacity={0.10} delay="0.3s" />
                        <FloatingBubble top="80%" left="20%" size="3" opacity={0.12} delay="0.6s" />
                    </div>

                    <div className="relative w-full h-[140vh]" style={{ background: 'linear-gradient(to bottom, #000005 0%, #000000 100%)', paddingTop: '40vh', paddingBottom: '40vh' }}>
                        <div ref={addAnimalRef} className="relative top-0 left-100"><GiantIsopod /></div>
                        <div ref={addAnimalRef} className="relative top-20 left-90"><DeepSeaAnglerCrab /></div>
                        <div ref={addAnimalRef} className="relative bottom-60 right-70"><Turtle /></div>
                        <div ref={addAnimalRef} className="absolute left-10 w-32 h-56"><Octopus /></div>
                        <FloatingBubble top="75%" left="33.33%" size="3" opacity={0.10} />
                        <FloatingBubble top="66.67%" right="50%" size="2" opacity={0.08} delay="0.3s" />
                        <FloatingBubble top="80%" left="20%" size="2" opacity={0.09} delay="0.6s" />
                    </div>

                    <div
                        className="fixed bottom-0 left-0 w-full h-screen flex flex-col justify-end items-center transition-opacity duration-1000"
                        style={{
                            zIndex: scrollProgress > 0.75 ? 10 : -10,
                            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.75) * 4)),
                            transform: `translateY(${scrollProgress > 0.9 ? `${(scrollProgress - 0.9) * -100}px` : '0px'})`,
                            background: 'transparent',
                        }}
                    >
                        <div className="relative w-full h-[350px]">
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#000000] via-[#00050d] to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full h-[150px] z-0 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(to top, #0A0A10 0%, #000005 60%, transparent 100%), linear-gradient(to right, #000000 0%, #000005 70%, #000000 100%)',
                                }}>
                                <div className="absolute bottom-0 left-0 w-full h-full"
                                    style={{
                                        background: 'linear-gradient(to bottom, #2C2C30 0%, #1A1A1E 100%)',
                                        opacity: 0.8,
                                        mixBlendMode: 'multiply'
                                    }}></div>

                                <div className="absolute w-[220px] h-[60px] bg-gray-600 rounded-full bottom-0 left-[5%] transform skew-x-12 -rotate-3 z-10 opacity-90" style={{ boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.6)' }}></div>
                                <div className="absolute w-[180px] h-[50px] bg-[#3A3A40] rounded-full bottom-0 right-[10%] transform -skew-x-8 rotate-5 z-10 opacity-90" style={{ boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.6)' }}></div>
                                <div className="absolute w-[130px] h-[40px] bg-[#1F2F3F] rounded-full bottom-0 left-1/4 transform skew-x-10 rotate-2 z-10 opacity-90" style={{ boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.6)' }}></div>
                                <div className="absolute w-[280px] h-[70px] bg-[#3B2C2A] rounded-full bottom-0 left-[45%] transform -skew-x-15 rotate-7 z-10 opacity-90" style={{ boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.6)' }}></div>
                                <div className="absolute w-[150px] h-[45px] bg-[#2E3C2B] rounded-full bottom-0 right-[5%] transform skew-x-6 -rotate-4 z-10 opacity-90" style={{ boxShadow: 'inset 0 -8px 15px rgba(0,0,0,0.6)' }}></div>

                                {Array.from({ length: 50 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full"
                                        style={{
                                            width: `${Math.random() * 12 + 6}px`,
                                            height: `${Math.random() * 12 + 6}px`,
                                            bottom: `${Math.random() * 15}px`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.4 + 0.2,
                                            transform: `rotate(${Math.random() * 360}deg)`,
                                            zIndex: 1,
                                            boxShadow: 'inset 0 -2px 3px rgba(0,0,0,0.3)',
                                            background: `linear-gradient(to bottom right, 
                                                ${['#4A4A50', '#3A3A40', '#1F2F3F', '#3B2C2A', '#2E3C2B'][Math.floor(Math.random() * 5)]} 0%, 
                                                ${['#2A2A30', '#1A1A20', '#0F1F2F', '#1B0C0A', '#0E1C0B'][Math.floor(Math.random() * 5)]} 100%)`
                                        }}
                                    ></div>
                                ))}

                                <div className="absolute w-[100px] h-[20px] bg-[#3B2C2A] rounded-full bottom-[10px] left-[20%] transform rotate-10 opacity-70 z-10"></div>
                                <div className="absolute w-[80px] h-[15px] bg-[#2E3C2B] rounded-full bottom-[5px] right-[25%] transform rotate-5 opacity={70} z-10"></div>
                                <div className="absolute w-[150px] h-[30px] bg-[#1F2F3F] rounded-full bottom-[8px] left-[60%] transform -rotate-15 opacity-70 z-10"></div>

                            </div>

                            {/* Seabed elements */}
                            <ImageSeabedElement src={rockPlant1} alt="Underwater Rock Plant" className="left-[8%] bottom-[-7%] w-[200px] h-auto" style={{ zIndex: 2 }} animationClass="subtle-float" />
                            <ImageSeabedElement src={rockPlant4} alt="Underwater Rock Plant 4" className="right-[-2%] bottom-[-2%] w-[250px] h-auto" style={{ zIndex: 2 }} animationClass="subtle-float" />
                            <ImageSeabedElement src={rockPlant5} alt="Underwater Rock Plant 5" className="left-[35%] bottom-[-1%] w-[300px] h-auto" style={{ zIndex: 1 }} animationClass="subtle-float" />
                            <ImageSeabedElement src={plant2} alt="Underwater Plant 2" className="right-[36%] bottom-[0%] w-[100px] h-auto" style={{ zIndex: 2 }} animationClass="sway" />
                            <ImageSeabedElement src={plant2} alt="Underwater Plant 2" className="right-[30%] bottom-[0%] w-[100px] h-auto" style={{ zIndex: 2 }} animationClass="sway" />
                            <ImageSeabedElement src={plants3} alt="Underwater Plants" className="right-[15%] bottom-[-5%] w-[150px] h-auto" style={{ zIndex: 2 }} animationClass="sway" />
                            <ImageSeabedElement src={treasure} alt="Sunken Treasure Chest" className="right-[10%] bottom-[-3%] w-[80px] h-auto" style={{ zIndex: 1 }} animationClass="pulse-slow" />
                            <ImageSeabedElement src={rockPlant4} alt="Underwater Rock Plant 4" className="left-[-2%] bottom-[-2%] w-[250px] h-auto" style={{ zIndex: 1 }} animationClass="subtle-float" />

                            <FloatingBubble top="60%" left="10%" size="4" opacity={0.15} delay="0.1s" />
                            <FloatingBubble top="70%" left="40%" size="3" opacity={0.1} delay="0.5s" />
                            <FloatingBubble top="55%" right="15%" size="5" opacity={0.2} delay="0.8s" />
                            <FloatingBubble top="65%" right="30%" size="2" opacity={0.08} delay="0.3s" />
                            <FloatingBubble top="75%" left="25%" size="3" opacity={0.12} delay="1s" />

                            <ImageMarineAnimal src={crab1} alt="Deep Sea Crab" className="left-[13%] bottom-[12%] w-[80px] h-auto" style={{ zIndex: 4 }} animationClass="wiggle" />
                            <ImageMarineAnimal src={starfish1} alt="Deep Sea Starfish" className="right-[45%] bottom-[3%] w-[70px] h-auto" style={{ zIndex: 4 }} animationClass="slow-pulse" />
                            <ImageMarineAnimal src={fish1} alt="Deep Sea Fish" className="left-[60%] bottom-[15%] w-[100px] h-auto" style={{ zIndex: 5 }} animationClass="animate-swim-gentle" />
                            <ImageMarineAnimal src={octopusImage} alt="Deep Sea Octopus" className="left-[25%] bottom-[-2%] w-[120px] h-auto" style={{ zIndex: 6 }} animationClass="octopus-float" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeepSeaBackground;