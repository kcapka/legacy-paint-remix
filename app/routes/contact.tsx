import { motion } from 'framer-motion';
import ContactForm from '~/components/ContactForm';
import StaggerText from '~/components/animations/StaggerText';

export default function Contact() {
    return (
        <div>
            <section className="min-h-[80svh] bg-dark default-py default-px flex justify-center">
                <div className='flex flex-col justify-center xl:w-[1200px]'>
                    <h1 className="text-4xl md:text-6xl text-light md:max-w-[80%] mb-10 text-shadow"><StaggerText>Get Your Free Quote Today.</StaggerText></h1>
                    <motion.p className="text-xl md:text-3xl text-light md:font-thin"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}>Call or Text: (602) 739-6604</motion.p>
                    <motion.p className="text-xl md:text-3xl text-light md:font-thin"
                    initial={{opacity: 0, y: 100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}>Email: Stephen@LegacyPaintSD.com</motion.p>
                </div>
            </section>

            <section className='default-px default-py'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <motion.div className='mb-16 md:mb-0'
                    initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>
                        <h1 className='text-2xl font-bold mb-5 md:mb-10'>Schedule A Free Consultation</h1>
                        <p className='text-lg max-w-[600px] mb-5'>Contact us today and our team will quickly be able to set up a consultation. We are here to help solve any of your paint needs! Call us today or fill out the form below.</p>
                        <div className='md:w-[600px] md:h-[325px] overflow-hidden shadow-lg'>
                            <img src="images/handshake.jpeg" alt="handshake" />
                        </div>
                        
                    </motion.div>
                    <motion.div className=''
                    initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>
                        <h1 className='text-2xl font-bold mb-5 md:mb-10'>Request A Contactless Quote</h1>
                        <p className='text-lg max-w-[600px] mb-5'>Get in touch with us to learn more about our contactless quotes & pricing. You will just need to answer a few questions on a call and send us photos to get an accurate estimate.</p>
                        <div className='md:w-[600px] md:h-[325px] overflow-hidden shadow-lg'>
                            <img src="images/meeting.jpeg" alt="virtual meeting" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='default-px default-py flex justify-center'>
                <ContactForm />
            </section>

        </div>
    )
}