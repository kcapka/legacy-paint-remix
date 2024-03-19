import { motion } from 'framer-motion';
import ContactForm from '~/components/ContactForm';
import StaggerText from '~/components/animations/StaggerText';

export default function Contact() {
    return (
        <div>
            <section className="min-h-[80svh] bg-dark flex flex-col justify-center default-py default-px">
                <h1 className="text-4xl md:text-6xl text-light md:max-w-[80%] mb-10 text-shadow"><StaggerText>Get Your Free Quote Today.</StaggerText></h1>
                <motion.p className="text-xl md:text-3xl text-light md:font-thin"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}>Call or Text: (602) 739-6604</motion.p>
                <motion.p className="text-xl md:text-3xl text-light md:font-thin"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}>Email: Stephen@LegacyPaintSD.com</motion.p>
            </section>
            <section className='default-px default-py '>
                <ContactForm />
            </section>
        </div>
    )
}