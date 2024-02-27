import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
    initial: {
        //x: '-100%',
        scale: 0
    },
    animate: {
        //x: 0,
        scale: 1,
        transition: {
            type: 'spring'
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