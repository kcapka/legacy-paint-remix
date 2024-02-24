import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
    initial: {
        x: '-100%'
        
    },
    animate: {
        x: 0,
        
        transition: {
            type: 'spring',
            stiffness: 90,
        }
    }
}


export default function HeroFadeIn (props:any) {

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