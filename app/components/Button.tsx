import {motion} from 'framer-motion';

export default function Button ({children}:any) {
    return (
        <motion.button className="py-5 px-10 bg-button text-white md:text-xl hover:bg-[#888683] duration-300 shadow-inner inline-block w-[fit-content]">
            {children}
        </motion.button>
    )
}