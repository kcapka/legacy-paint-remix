import StaggerText from "~/components/animations/StaggerText";
import { motion } from 'framer-motion';


export default function Services() {
    return (
        <div>
            <section className="h-[100svh] services-bg flex pt-[275px] items-center flex-col text-center default-px">
                <h1 className="text-white text-4xl md:text-8xl text-shadow mb-10"><StaggerText>Our Services</StaggerText></h1>
                <motion.p className="text-2xl text-white"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.8, duration: 1}}><em>Quality is not an act, it is a habit. </em>-Aristotle</motion.p>
            </section>

        </div>
    )
};