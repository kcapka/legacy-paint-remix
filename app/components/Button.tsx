import {motion} from 'framer-motion';

export default function Button ({children}:any) {
    return (
        <motion.button className="py-5 px-10 bg-button text-white md:text-xl hover:bg-[#888683] duration-300 shadow-inner"
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 0.5
        }}>
            {children}
        </motion.button>
    )
}