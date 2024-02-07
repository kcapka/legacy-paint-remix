import { Link } from "@remix-run/react";
import {useState} from 'react';

export default function Header() {
    const [isActive, setIsActive] = useState(false);


    function handleToggle() {
        if (isActive===true) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    return (
        <>
            <nav className="default-px h-20 md:h-32 flex items-center justify-between bg-[rgba(214,214,214,1)] shadow-md fixed w-[100vw] z-20">
                <Link to="/">
                    <img src="/images/legacy-logo.svg" alt="Legacy Painting Logo" className="cursor-pointer md:w-[198px] w-[120px]"/>     
                </Link>
                    <ul className="hidden md:flex items-center justify-between  [&_li]:lg:mr-7 [&_li]:md:mr-3 [&_li]:cursor-pointer md:text-lg lg:text-xl">
                        <li className="link-with-underline">Our Services</li>
                        <li className="link-with-underline">Portfolio</li>
                        <li className="link-with-underline">Reviews</li>
                        <li className="link-with-underline">About</li>
                        <li className="link-with-underline">Contact</li>
                    </ul>
                    <div className="justify-between [&_img]:mr-7 hidden md:flex">
                        <img src="/images/x-logo.svg" alt="X Logo" className="cursor-pointer"/>
                        <img src="/images/linkedin-logo.svg" alt="LinkedIn Logo" className="cursor-pointer"/>
                    </div>
                    <div className="flex items-center flex-col justify-center md:hidden w-[32px] h-[32px] [&_span]:duration-300" onClick={handleToggle}>
                        <span className={`${isActive===true ? "rotate-45 translate-y-[11px]": "" } h-[3px] w-[30px] bg-black m-1`}></span>
                        <span className={`${isActive===true ? "opacity-0 w-[0px]" : ""} h-[3px] w-[30px] bg-black m-1`}></span>
                        <span className={`${isActive===true ? "rotate-[-45deg] translate-y-[-11px]" : ""} h-[3px] w-[30px] bg-black m-1`}></span>
                    </div>
            </nav>
            <section className={`${isActive ? "right-0" : "right-[-100%]"} fixed h-[100svh] bg-black text-white w-[200px] pl-10 top-0 duration-300 shadow-md z-10 mt-20`}>
                    <ul className="[&_li]:mb-5 text-xl pt-16">
                        <Link to="/">
                            <li onClick={handleToggle}>Home</li>
                        </Link>
                        <Link to="/services">
                            <li onClick={handleToggle}>Our Services</li>
                        </Link>
                        <li onClick={handleToggle}>Portfolio</li>
                        <li onClick={handleToggle}>Reviews</li>
                        <li onClick={handleToggle}>About</li>
                        <li onClick={handleToggle}>Contact</li>
                    </ul>
            </section>
        </>
    )
}