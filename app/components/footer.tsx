import {motion, useMotionValue, animate} from 'framer-motion';
import useMeasure from 'react-use-measure'
import Button from './Button';
import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';

export default function Footer() {

    const fastSpeed = 10;
    const slowSpeed = 25;

    const [duration, setDuration] = useState(fastSpeed);

    let [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width ;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });

        }

        return controls?.stop

    }, [xTranslation, width, duration, rerender]);

    return (
        <div>
            
            <div className='h-20 bg-button flex items-center overflow-hidden text-white' 
                onMouseEnter={() => {
                    setMustFinish(true);
                    setDuration(slowSpeed);
                }} 
                onMouseLeave={() => {
                    setMustFinish(true);
                    setDuration(fastSpeed);
                }}>
                    <motion.div className='flex items-center gap-8 text-4xl min-w-[875px]' ref={ref} style={{x: xTranslation}}>
                        <p>Get your painting project started today!</p>
                        <Link to='/contact'>
                            <p className='underline cursor-pointer'>Get A Quote</p>
                        </Link>
                    </motion.div>
                    <motion.div className='flex items-center gap-8 text-4xl min-w-[875px]' ref={ref} style={{x: xTranslation}}>
                        <p>Get your painting project started today!</p>
                        <Link to='/contact'>
                            <p className='underline cursor-pointer'>Get A Quote</p>
                        </Link>
                    </motion.div>
                    <motion.div className='flex items-center gap-8 text-4xl min-w-[875px]' ref={ref} style={{x: xTranslation}}>
                        <p>Get your painting project started today!</p>
                        <Link to='/contact'>
                            <p className='underline cursor-pointer'>Get A Quote</p>
                        </Link>
                    </motion.div>
                    <motion.div className='flex items-center gap-8 text-4xl min-w-[875px]' ref={ref} style={{x: xTranslation}}>
                        <p>Get your painting project started today!</p>
                        <Link to='/contact'>
                            <p className='underline cursor-pointer'>Get A Quote</p>
                        </Link>
                    </motion.div>
                </div>

            <div className="text-button bg-light flex items-center flex-col default-px py-20">



                <p className="tet-2xl md:text-4xl mb-5">Legacy Painting Company, LLC</p>
                <ul className="flex text-xl mb-5 [&_li]:cursor-pointer">
                    <Link to="/about">
                        <li className="mr-5 underline">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="mr-5 underline">Contact</li>
                    </Link>
                    <Link to="/reviews">
                        <li className='underline'>Reviews</li>
                    </Link>
                </ul>
                <p className="md:text-xl mb-2">Stephen@LegacyPaintSD.com</p>
                <p className="md:text-xl">(602)739-6604</p>
            </div>
        </div>
        
    )
}