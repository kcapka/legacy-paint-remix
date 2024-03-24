import { Link } from "@remix-run/react";
import {useState, useEffect} from 'react';
import Button from "./Button";

export default function Header() {
    /* for mobile */
    const [isActive, setIsActive] = useState(false);


    function handleToggle() {
        if (isActive===true) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    /* for desktop */
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    let top;

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    if (!visible && !isActive) {
        top = 'top-[-112px]';
    } else {
        top = 'top-0';
    }

    return (
        <>
            <nav className={`default-px min-h-24 md:min-h-28 flex items-center justify-between ${isActive ? "bg-black" : "bg-light"} shadow-md fixed ${top} w-[100vw] z-20 duration-300`}>
                <Link to="/">
                    <img src="/images/Legacy-Painting-Logo.png" alt="Legacy Painting Logo" className="cursor-pointer md:w-[150px] w-[200px]"/>     
                </Link>
                    <ul className="hidden md:flex items-center justify-between  [&_li]:lg:mr-7 [&_li]:md:mr-3 [&_li]:cursor-pointer md:text-lg">
                        <Link to="/services">
                            <li className="link-with-underline">Our Services</li>
                        </Link>
                        <Link to="/portfolio">
                            <li className="link-with-underline">Portfolio</li>
                        </Link>
                        <Link to="/reviews">
                            <li className="link-with-underline">Reviews</li>
                        </Link>
                        <Link to="/about">
                            <li className="link-with-underline">About</li>
                        </Link>
                        <Link to="/contact">
                            <li className="link-with-underline">Contact</li>
                        </Link>
                    </ul>
                    <div className="hidden md:block">
                        <Link to="/contact">
                            <Button className="text-base">Call Us Today (602) 739.6604</Button>
                        </Link>
                    </div>

                    {/* mobile menu toggle */}
                    <div className={`${isActive ? "[&_span]:bg-white" : "[&_span]:bg-black"} flex items-center flex-col justify-center md:hidden w-[32px] h-[32px] [&_span]:duration-300 cursor-pointer`} onClick={handleToggle}>
                        <span className={`${isActive===true ? "rotate-45 translate-y-[10px]": "" } h-[2px] w-[30px] m-1`}></span>
                        <span className={`${isActive===true ? "opacity-0 w-[0px]" : "w-[30px]"} h-[2px] m-1`}></span>
                        <span className={`${isActive===true ? "rotate-[-45deg] translate-y-[-10px]" : ""} h-[2px] w-[30px] m-1`}></span>
                    </div>
            </nav>
            {/* mobile nav */}
            <section className={`block md:hidden ${isActive ? "top-0" : "top-[-120%]"} fixed h-[100svh] bg-black text-white w-full text-center left-0 duration-100 shadow-md z-20 mt-20`}>
                    <ul className="[&_li]:pt-5 [&_li]:cursor-pointer text-xl pt-16 [&_li]:border-b [&_li]:pb-5 [&_li]:duration-200">
                        <Link to="/">
                            <li onClick={handleToggle} className="border-t hover:bg-[#888683]">Home</li>
                        </Link>
                        <Link to="/services">
                            <li onClick={handleToggle} className="hover:bg-[#888683]">Our Services</li>
                        </Link>
                        <Link to="/portfolio">
                            <li onClick={handleToggle} className="hover:bg-[#888683]">Portfolio</li>
                        </Link>
                        <Link to="reviews">
                            <li onClick={handleToggle} className="hover:bg-[#888683]">Reviews</li>
                        </Link>
                        <Link to="about">
                            <li onClick={handleToggle} className="hover:bg-[#888683]">About</li>
                        </Link>
                        <Link to="contact">
                            <li onClick={handleToggle} className="hover:bg-[#888683]">Contact</li>
                        </Link>
                    </ul>
                    <div className="flex justify-center mt-10">
                        <Link to="/contact">
                            <Button>Call Us Today (602) 739.6604</Button>
                        </Link>
                    </div>
            </section>
        </>
    )
}