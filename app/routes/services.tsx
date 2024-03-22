import StaggerText from "~/components/animations/StaggerText";
import { motion } from "framer-motion";
import Button from "~/components/Button";
import { Link } from "@remix-run/react";

export default function Services() {
  return (
    <div>
      <section className="h-[102svh] services-bg flex justify-center items-center flex-col text-center default-px relative">
        <h1 className="text-white text-6xl lg:text-8xl text-shadow mb-10 z-10">
          <StaggerText>Our Services</StaggerText>
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-white z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <em>Quality is not an act, it is a habit. </em>-Aristotle
        </motion.p>
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] w-full h-full"></div>
      </section>

      <section className="default-px md:py-[100px] bg-light">
        <motion.div
          className="relative default-py flex flex-col items-center md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/ext-paint-1.jpeg"
            alt="Man painting house"
            className="max-w-full md:max-w-[900px] mb-10 md:mb-0"
          />
          <div className="md:absolute top-[5%] left-[50%] bg-dark text-white p-10 md:min-h-[600px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl mb-8">
              Exterior & Interior Residential Home Painting
            </h1>
            <p className=" text-lg md:text-xl mb-8">
              Whatever projects your home needs, we are here to provide our
              expert painting solutions.<br></br>
              <br></br>We’ll help you choose the best option for you from our
              wide selection paint options: value paint, eco friendly paint or
              luxury paint.
            </p>
            <Link to="/contact">
              <Button>Get A Quote</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="relative default-py flex md:flex-row items-center md:items-start md:justify-end flex-col-reverse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:absolute top-[25%] right-[50%] bg-dark text-white p-10 md:min-h-[600px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl mb-8">
              Custom Projects, Kitchen Cabinets & Paint Spraying
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Our team has specialists who can help complete your custom
              projects including everything from kitchen cabinetry to outdoor
              decks & pergolas. Ask us about a quote for your custom project
              today!
            </p>
            <Link to="/contact">
              <Button>Get A Quote</Button>
            </Link>
          </div>
          <img
            src="/images/ext-paint-2.jpeg"
            alt="Man painting house"
            className="max-w-full md:max-w-[900px] mb-10 md:mb-0"
          />
        </motion.div>
      </section>
    </div>
  );
}
