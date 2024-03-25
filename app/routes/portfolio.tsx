import { useState } from "react"
import ImageSlider from "~/components/ImageSlider"
import { motion } from 'framer-motion';
import StaggerText from "~/components/animations/StaggerText";
import type { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
      {title: "Legacy Painting | Portfolio"},
    ]
  }

const images = [
    {
        src: "/images/portfolio/port-1.jpeg",
        id: 0
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

export default function Portfolio() {

    const [sliderVisible, setSliderVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    function handleImageClick(i:any) {
        setSliderVisible(true);
        setCurrentImage(i);
    }

    function handleExit() {
        setSliderVisible(false);
    }

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




    return (
        <div>
            <section className="min-h-[80svh] bg-dark flex flex-col justify-center default-py default-px">
                <h1 className="text-4xl md:text-6xl text-light md:max-w-[80%] mb-10 text-shadow"><StaggerText>Our commitment to our customers is shown in our attention to detail.</StaggerText></h1>
                <motion.p className="text-xl md:text-3xl text-light md:font-thin"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}>Review some of our most recent painting projects in the San Diego area. </motion.p>
            </section>

            {/* Pop up slideshow */}
            <motion.section className={`${sliderVisible ? 'md:block hidden' : "hidden"} default-py default-px min-h-[100svh] fixed top-0 left-0 w-full z-30 bg-[rgba(0,0,0,0.9)] flex items-center justify-center`}>

                {/* exit button */}
                <motion.div className="h-[75px] w-[75px] rounded-full bg-dark flex items-center justify-center flex-col p-3 drop-shadow-2xl absolute top-20 right-20 cursor-pointer"
                initial={{scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                onClick={handleExit}>
                    <img src="/images/icons/x-solid.svg" alt="x" className="w-5" />
                </motion.div>
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
            </motion.section>

            {/* Grid gallery */}
            <section className="default-px default-py  bg-button flex justify-center">
                <div className="max-w-[1200px] grid md:grid-cols-2 grid-cols-1 gap-10">
                    {images.map((image, i) => (
                        <motion.img src={image.src} alt="portfolio-image" onClick={() => handleImageClick(i)} className="cursor-pointer"
                        initial={{scale: 1, opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{opacity: {duration: 1}}}
                        whileHover={{scale: 1.05}} />
                    ))}
                </div>
            </section>
        </div>
    )
}