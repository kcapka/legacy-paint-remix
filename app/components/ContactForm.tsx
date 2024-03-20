import { motion } from 'framer-motion';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function ContactForm() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] =useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    function handleExit() {
        setLoading(false);
        setSubmitted(false);
        setSuccess(false);
        setError(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitted(true);
        emailjs
        .sendForm('service_4x9q38v', 'template_au5t8go', form.current, {
            publicKey: '6p33gsXN6qedXk0kZ',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setLoading(false);
            setSuccess(true);
            },
            (error) => {
            console.log('FAILED...', error.text);
            setLoading(false);
            setError(true);
            },
        );
    };

    return (
        <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        viewport={{once: true}} className=''>
            <h1 className="text-4xl font-normal mb-10">Complete the estimate form below for the fastest quote possible.</h1>
            <form ref={form} onSubmit={sendEmail} className="[&_input]:border-none [&_input]:shadow-lg [&_input]:outline-none [&_textarea]:outline-none [&_input]:p-3 [&_input]:rounded [&_label]:text-xl [&_label]:py-3">
                <div className="flex mb-5 [&_input]:bg-[#F5F5F5]">
                    <div className="flex flex-col mr-5">
                        <label>First Name *</label>
                        <input type="text" name="first-name" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name *</label>
                        <input type="text" name="last-name" required />
                    </div>
                </div>
                <div className="flex flex-col mb-5 [&_input]:bg-[#F5F5F5]">
                    <label>Phone *</label>
                    <input type='text' name="phone" required />
                </div>
                <div className="flex flex-col mb-5 [&_input]:bg-[#F5F5F5]">
                    <label>Email *</label>
                    <input type='email' name="email" required />
                </div>
                <div className='[&_input]:bg-[#F5F5F5]'>
                    <div className="flex flex-col mb-5">
                        <label>Address Line 1 *</label>
                        <input type="text" name="address-1" required />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label>Address Line 2</label>
                        <input type="text" name="address-2" />
                    </div>
                    <div className="flex flex-col md:flex-row mb-5">
                        <div className="flex flex-col md:mr-5">
                            <label>City *</label>
                            <input type="text" name="city" required />
                        </div>
                        <div className="flex flex-col md:mr-5">
                            <label>State *</label>
                            <input type="text" name="state" required />
                        </div>
                        <div className="flex flex-col">
                            <label>Zip *</label>
                            <input type="text" name="zip" required />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-5">
                    <label>Describe your painting project (Include # of rooms & bathrooms) *</label>
                    <textarea name="message" className="bg-[#F5F5F5] border-none rounded p-3"></textarea>
                </div>
                <div className="flex flex-col mb-5 [&_input]:bg-[#F5F5F5]">
                    <label>How many sq. ft. is the property being painted?</label>
                    <input type="text" name="square-ft" />
                </div>
                <div className="flex flex-col mb-5 [&_input]:bg-[#F5F5F5]">
                    <label>Is your project an exterior job, interior job or both?</label>
                    <input type="text" name="int-or-ext" />
                </div>
                <div className='flex justify-center mt-10'>
                    <input type="submit" value='Submit' className='h-[75px] w-[200px] cursor-pointer bg-button text-white md:text-xl hover:bg-[#888683] duration-300 shadow-inner inline-block ' />
                </div>
                
                
                

            </form>

            {submitted && (
                <section 
                className='fixed top-0 left-0 w-[100svw] h-[100svh] flex justify-center items-center'>
                    <motion.div className='flex justify-center items-center bg-white border text-2xl rounded w-[350px] h-[100px] shadow-lg'
                    initial={{x: '-200%', opacity: 0}}
                    animate={{x: 0, opacity: 1}}>
                        <img src="images/icons/x-solid-black.svg" alt="Close" className='absolute top-2 right-2 w-4 cursor-pointer' onClick={handleExit} />
                        {loading && (
                            <p>Sending...</p>
                        )}
                        {success && (
                            <p>Sent!</p>
                        )}
                        {error && (
                            <p>Uh oh, something went wrong! Try again.</p>
                        )}
                    </motion.div>
                </section>
            )}
            
        </motion.div>
    )
}