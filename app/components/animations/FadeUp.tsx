import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 40,
        }
    }
}


export default function FadeUp (props:any) {

    const element = props.children;

    return (
            <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView='animate'
                viewport={{
                    once: true
                }}
                >{element}</motion.div>
    )
}