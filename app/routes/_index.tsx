import type { MetaFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";
import { motion } from "framer-motion";
import StaggerText from "~/components/animations/StaggerText";
import HeroFadeIn from "~/components/animations/HeroFadeIn";


export const meta: MetaFunction = () => {
  return [
    { title: "Legacy Painting" },
  ];
};

export default function Index() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0,
    transition: {
      duration: 1,
      type: 'spring'
    }},
  }

  return (
    <div className="min-h-[100svh]">
      <section className="home-page-bg h-[100svh] flex items-center justify-center pt-20 default-px">
        <HeroFadeIn>
        <div className="custom-blur inline-block p-5 md:p-8 shadow-xl max-w-[700px]">
          <h1 className="text-4xl md:text-6xl drop-shadow mb-2 md:mb-5">Professional home and business painting services.</h1>
          <h2 className="text-2xl mb-4 md:mb-7">Find out why we are a top rated San Diego business.</h2>
          <div className="flex justify-center">
            <Link to="/services">
              <button className="p-5 bg-[#a8a6a2] text-white md:text-xl hover:bg-[#888683] duration-300 shadow-inner">Our Services</button>
            </Link>
          </div>
        </div>
        </HeroFadeIn>
      </section>
      <section className="flex flex-col md:flex-row bg-[#383838] text-white default-px py-20">
        <div className="mb-10 md:mb-0 flex-1 md:pr-32">
          <motion.p className="text-lg md:text-xl" 
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 2
          }}
          viewport={{
            once: true
          }}>Our new COVID safe solution to painting. Get in touch with us to learn more about our contactless quotes & pricing. You will just need to answer a few questions on a call and send us photos to get an accurate estimate. Get in touch for the fastest way to get your quote! *Serving the greater San Diego area.</motion.p>
        </div>
        <div className="flex-1 md:pr-32">
          <h1 className="mb-5 text-2xl md:text-4xl text-center md:text-start md:mb-10"><StaggerText>Text or call us for a free contactless quote today.</StaggerText></h1>
          <div className="flex justify-center md:justify-start">
            <p className="p-5 bg-[#a8a6a2] text-white md:text-xl hover:bg-[#888683] duration-300 inline-block cursor-pointer">Schedule Contactless Quote</p>
          </div>
        </div>
      </section>
      <motion.section className="flex flex-col md:flex-row default-px md:justify-center  bg-[#d6d6d6] [&_h1]:font-bold [&_h1]:px-2 [&_p]:px-2 [&_p]:text-sm [&_p]:md:text-lg py-[50px] md:py-[140px] [&_h1]:text-2xl [&_img]:mb-5 [&_h1]:mb-3 [&_div]:md:pr-5 [&_div]:mb-16 [&_div]:md:mb-0 [&_div]:max-w-[400px] [&_img]:mx-auto" variants={container} initial='hidden' whileInView='show' viewport={{once: true}}>
        <motion.div className="flex-1 opacity-0 translate-y-20" variants={item} >
          <img src="/images/hp-img1.png" alt="Plant in house"/>
          <h1>Residential Home Painting</h1>
          <p>Whether your home needs interior painting, exterior painting or custom painting, we are here to provide our expert painting solutions.<br></br><br></br>We’ll help you choose the best option for you from our wide selection paint options: value paint, eco friendly paint or luxury paint.</p>
        </motion.div>
        <motion.div className="flex-1 opacity-0 translate-y-20" variants={item}>
          <img src="/images/hp-img2.png" alt="Asthetic chair" />
          <h1>Cabinets & Custom Painting Solutions</h1>
          <p>Does your home have a project that goes beyond the specs of traditional painters?<br></br><br></br>We have specialists who can help complete your custom projects including everything from kitchen cabinetry to outdoor decks & pergolas. Ask us about a quote for your custom project today!</p>
        </motion.div>
        <motion.div className="flex-1 opacity-0 translate-y-20" variants={item}>
          <img src="/images/hp-img3.png" alt="Plant in front of green wall" />
          <h1>Commercial Painting</h1>
          <p>When it comes to moving your business to a new office that needs a face lift all the way to Hotel renovations we can do it all here at Legacy Painting.<br></br><br></br>We have 10+ years experience on commercial projects. There is no job to big or to small here at Legacy. Find out why we are a top-rated San Diego painting company!Hello</p>
        </motion.div>
      </motion.section>
    </div>
  );
}
