import { useAnimate, useInView } from 'framer-motion';
import { useEffect } from 'react';

export default function Specialties() {

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    const handleAnimate = async () => {
      
    }

    
    useEffect(() => {
        if (isInView) {
            handleAnimate();
        }
    }, [isInView])

    

    return (
        <></>
    )
}