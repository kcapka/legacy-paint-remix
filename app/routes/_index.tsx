import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import StaggerText from "~/components/animations/StaggerText";
import HeroFadeIn from "~/components/animations/HeroFadeIn";
import Button from "~/components/Button";

export const meta: MetaFunction = () => {
  return [{ title: "Legacy Painting" }];
};

export default function Index() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        //delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <div className="min-h-[100svh]">
      <section className="home-page-bg h-[100svh] flex items-center justify-center pt-20 default-px">
        <HeroFadeIn>
          <div className="custom-blur inline-block p-5 md:p-8 shadow-xl max-w-[700px]">
            <h1 className="text-4xl md:text-6xl mb-2 md:mb-5">
              Professional home and business painting services.
            </h1>
            <h2 className="text-2xl mb-4 md:mb-7">
              Find out why we are a top rated San Diego business.
            </h2>
            <div className="flex justify-center">
              <Link to="/services">
                <Button>Our Services</Button>
              </Link>
            </div>
          </div>
        </HeroFadeIn>
      </section>

      <section className="bg-dark text-white default-py default-px flex justify-center">
        <div className="flex flex-col md:flex-row content-max">
          <div className="mb-10 md:mb-0 flex-1 md:pr-32">
            <motion.p
              className="text-lg md:text-xl"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 2,
              }}
              viewport={{
                once: true,
              }}
            >
              Our new COVID safe solution to painting. Get in touch with us to
              learn more about our contactless quotes & pricing. You will just
              need to answer a few questions on a call and send us photos to get
              an accurate estimate. Get in touch for the fastest way to get your
              quote! *Serving the greater San Diego area.
            </motion.p>
          </div>
          <div className="flex-1">
            <h1 className="mb-5 text-2xl md:text-4xl text-center md:text-start md:mb-10">
              <StaggerText>
                Text or call us for a free contactless quote today.
              </StaggerText>
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link to="/contact">
                <Button>Schedule Contactless Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        className="default-px bg-light default-py flex justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="content-max">
          <h1 className="text-4xl mb-8 md:mb-12">Our Services</h1>
          <div className="[&_div]:md:pr-5 [&_div]:mb-16 [&_div]:md:mb-0 [&_div]:max-w-[400px] flex flex-col items-center md:items-start md:flex-row md:justify-between [&_h1]:text-xl [&_img]:mb-5 [&_h1]:mb-3 [&_img]:mx-auto [&_h1]:font-bold [&_h1]:px-2 [&_p]:px-2 [&_p]:text-base [&_p]:md:text-lg mb-0 md:mb-20">
            <motion.div
              className="flex-1 opacity-0 translate-y-2 flex flex-col"
              variants={item}
            >
              <img src="/images/hp-img1.png" alt="Plant in house" />
              <h1>Residential Home Painting</h1>
              <p>
                Whether your home needs interior painting, exterior painting or
                custom painting, we are here to provide our expert painting
                solutions.<br></br>
                <br></br>We’ll help you choose the best option for you from our
                wide selection paint options: value paint, eco friendly paint or
                luxury paint.
              </p>
              <div className="block md:hidden mt-10 self-center">
                <Link to="/contact">
                  <Button>Get A Quote</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 opacity-0 translate-y-20 flex flex-col"
              variants={item}
            >
              <img src="/images/hp-img2.png" alt="Asthetic chair" />
              <h1>Cabinets & Custom Painting Solutions</h1>
              <p>
                Does your home have a project that goes beyond the specs of
                traditional painters?<br></br>
                <br></br>We have specialists who can help complete your custom
                projects including everything from kitchen cabinetry to outdoor
                decks & pergolas. Ask us about a quote for your custom project
                today!
              </p>
              <div className="block md:hidden mt-10 self-center">
                <Link to="/contact">
                  <Button>Get A Quote</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 opacity-0 translate-y-20 flex flex-col"
              variants={item}
            >
              <img src="/images/hp-img3.png" alt="Plant in front of green wall" />
              <h1>Commercial Painting</h1>
              <p>
                When it comes to moving your business to a new office that needs a
                face lift all the way to Hotel renovations we can do it all here
                at Legacy Painting.<br></br>
                <br></br>We have 10+ years experience on commercial projects.
                There is no job to big or to small here at Legacy. Find out why we
                are a top-rated San Diego painting company!
              </p>
              <div className="block md:hidden mt-10 self-center">
                <Link to="/contact">
                  <Button>Get A Quote</Button>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:flex justify-center hidden">
            <Link to="/contact">
              <Button>Get A Quote</Button>
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="default-px py-[150px] bg-dark text-white flex justify-center">
        <div className="content-max flex flex-col md:flex-row justify-start md:justify-between items-center">
          <motion.h1 className="flex-1 text-4xl md:mr-20 mb-10 md:mb-0"
          initial={{
            opacity: 0,
            x: -100
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}>
            San Diego’s premier painting company.
          </motion.h1>
          <motion.div className="flex-1"
          initial={{
            opacity: 0,
            x: 100
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1
          }}
          viewport={{
            once: true
          }}>
            <p className="text-base md:text-lg">
              Legacy Painting Company is proudly serving the San Diego area in the
              following locations:{" "}
              <strong>
                San Diego, Solana Beach, Del Mar, Poway, Chula Vista, La Mesa,
                Encinitas, Carlsbad, San Marcos, Oceanside & Vista
              </strong>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
