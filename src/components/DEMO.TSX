// import React, { useState, useEffect } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Button } from './ui/moving-border';

// export const Hero: React.FC = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             setMousePosition({
//                 x: event.clientX,
//                 y: event.clientY,
//             });
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     // Size of the circle
//     const circleSize = 800;

//     return (
//         <div className="w-screen flex justify-center items-center px-10 pt-32 relative ">
//             <div
//                 className="top-0 left-0 absolute z-[-1] w-[800px] h-[800px] rounded-full opacity-50 blur-[800px]"
//                 style={{
//                     transform: `translate(${mousePosition.x - circleSize / 2}px, ${mousePosition.y - circleSize / 2}px)`,
//                     background: "radial-gradient(50% 50% at 50% 50%, #CFA4FF 0%, #6639BA 100%)"

//                 }}
//             ></div>
//             <div className="w-full flex flex-col justify-center items-center gap-y-6">
//                 <div className="w-full relative flex flex-col justify-center items-center gap-y-8">
//                     <p className="flex flex-col gap-y-7 justify-between items-center">
//                         <span className="flex justify-between items-center text-center md:text-[56px] text-3xl font-500">
//                             We Bring To You The Next
//                         </span>
//                         <span className="md:text-[56px] text-3xl font-medium font-['Red Hat Display']">
//                             Big Thing
//                         </span>
//                     </p>
//                     <div className="z-[-3] h-[1000px] w-[70%] top-[120px] absolute bg-[url('/images/backgrounds/Grid.svg')] bg-contain bg-no-repeat"></div>
//                     <div className="w-[33vw] text-center text-[#F1F1EF] text-[18px] font-normal font-['Satoshi Variable']">
//                         <p>
//                             A world of cyber security to learn, compete, and grow. Some more content about what we offer will come here.
//                         </p>
//                     </div>
//                 </div>
//                 <Button borderRadius="1000px" className="bg-black rounded-full gap-3 text-white">
//                     Get Started Now
//                     <FaArrowRight />
//                 </Button>
//             </div>
//         </div>
//     );
// };



// import React, { useState, useEffect } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Button } from './ui/moving-border';

// export const Hero: React.FC = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             setMousePosition({
//                 x: event.clientX,
//                 y: event.clientY,
//             });
//         };

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     // Size of the circle
//     const circleSize = 800;

//     return (
//         <div className="w-screen flex justify-center items-center px-10 pt-32 relative overflow-hidden">
//             <div className="w-full h-full absolute top-0 left-0 bg-[url('/images/backgrounds/Grid.svg')] bg-cover z-[-2]"></div>
//             <div className="w-full h-full absolute top-0 left-0 bg-black z-[-1]"
//                 style={{
//                     WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, black ${circleSize}px)`,
//                     maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, black ${circleSize}px)`,
//                 }}
//             ></div>
//             <div className="w-full flex flex-col justify-center items-center gap-y-6">
//                 <div className="w-full relative flex flex-col justify-center items-center gap-y-8">
//                     <p className="flex flex-col gap-y-7 justify-between items-center">
//                         <span className="flex justify-between items-center text-center md:text-[56px] text-3xl font-500">
//                             We Bring To You The Next
//                         </span>
//                         <span className="md:text-[56px] text-3xl font-medium font-['Red Hat Display']">
//                             Big Thing
//                         </span>
//                     </p>
//                     <div className="z-[-3] h-[1000px] w-[70%] top-[120px] absolute bg-[url('/images/backgrounds/Grid.svg')] bg-contain bg-no-repeat"></div>
//                     <div className="w-[33vw] text-center text-[#F1F1EF] text-[18px] font-normal font-['Satoshi Variable']">
//                         <p>
//                             A world of cyber security to learn, compete, and grow. Some more content about what we offer will come here.
//                         </p>
//                     </div>
//                 </div>
//                 <Button borderRadius="1000px" className="bg-black rounded-full gap-3 text-white">
//                     Get Started Now
//                     <FaArrowRight />
//                 </Button>
//             </div>
//         </div>
//     );
// };
