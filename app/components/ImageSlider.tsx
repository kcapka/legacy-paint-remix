import { useState } from "react"
import { motion } from "framer-motion";


const images = [
    {
        src: "/images/portfolio/port-1.jpeg"
    },
    {
        src: "/images/portfolio/port-2.jpeg"
    },
    {
        src: "/images/portfolio/port-3.jpeg"
    },
    {
        src: "/images/portfolio/port-4.jpeg"
    },
    {
        src: "/images/portfolio/port-5.jpeg"
    },
    {
        src: "/images/portfolio/port-6.jpeg"
    },
    {
        src: "/images/portfolio/port-7.jpeg"
    },
    {
        src: "/images/portfolio/port-8.jpeg"
    },
]



export default function ImageSlider() {

    
    const [currentImage, setCurrentImage] = useState(0);

    function handleNext() {
        if(currentImage === images.length - 1) {
            return;
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    function handlePrevious() {
        if(currentImage === 0) {
            return;
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    const firstImage = currentImage === 0 ? true : false;
    const lastImage = currentImage === images.length - 1 ? true : false;

    return(
        <div className="flex flex-col items-center">
            <div className=" flex justify-center items-center mb-10">

                <motion.div onClick={handlePrevious} className={`h-[75px] w-[75px] rounded-full bg-dark flex items-center justify-center flex-col p-3 ${!firstImage ? 'cursor-pointer' : ''} mr-10 drop-shadow-2xl`}
                whileHover={!firstImage ? {scale: 1.1} : {}}
                whileTap={!firstImage ? {scale: 0.9} : {}}
                whileInView={firstImage ? {opacity: 0.5} : {opacity: 1}}>
                    <img src="/images/icons/arrow-left-solid.svg" alt="left arrow" />
                </motion.div>

                <div className="w-[1000px] h-[600px] overflow-hidden shadow-2xl border border-dark bg-white">
                    {images.map((image, index) => (
                        <motion.img src={image.src} alt={`Portfolio image ${index +1}`} className={`${currentImage === index ? 'block' : 'hidden'} w-[1000px]`} initial={{opacity: 0}} whileInView={{opacity:1}} transition={{duration: 1}}/>
                    ))}
                </div>

                <motion.div onClick={handleNext} className={`h-[75px] w-[75px] rounded-full bg-dark flex items-center justify-center flex-col p-3 ${lastImage ? '' : 'cursor-pointer'} ml-10 drop-shadow-2xl`}
                whileHover={!lastImage ? {scale: 1.1} : {}}
                whileTap={!lastImage ? {scale: 0.9} : {}}
                whileInView={lastImage ? {opacity: 0.5} : {opacity: 1}}>
                    <img src="/images/icons/arrow-right-solid.svg" alt="left arrow" />
                </motion.div>

            </div>

            <p className="text-white text-2xl bg-dark px-5 py-1 rounded-lg drop-shadow-2xl">{`${currentImage + 1}/${images.length}`}</p>

        </div>
        
    )
}