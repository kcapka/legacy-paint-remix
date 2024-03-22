import {motion} from 'framer-motion';
import Button from './Button';
import { Link } from '@remix-run/react';

export default function Footer() {
    return (
        <div>
            <section className="roller-bg py-[150px] default-px flex flex-col items-center">
                <motion.h1 className="text-2xl md:text-4xl text-center mb-10 text-white"
                initial={{
                opacity: 0,
                y: 100
                }}
                whileInView={{
                opacity: 1,
                y: 0
                }}
                transition={{
                duration: 1
                }}
                viewport={{
                once: true
                }}>
                Get your painting project started today.
                </motion.h1>
                <Link to="/contact">
                <Button>Get A Quote</Button>
                </Link>
            </section>

            <div className="text-[#a8a6a2] bg-dark flex items-center flex-col default-px py-20">
            <h1 className="text-2xl mb-5">Legacy Painting Company, LLC</h1>
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
                <p className="text-white mb-2">Stephen@LegacyPaintSD.com</p>
                <p className="text-white">(602)739-6604</p>
            </div>
        </div>
        
    )
}