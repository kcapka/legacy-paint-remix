import Button from "~/components/Button";
import { Link } from "@remix-run/react";
import StaggerText from "~/components/animations/StaggerText";
import FadeUp from "~/components/animations/FadeUp";
import FadeRight from "~/components/animations/FadeRight";
import FadeLeft from "~/components/animations/FadeLeft";

export default function About() {

    return (
        <div>
            <section className="h-[50vh] md:h-[70vh] relative overflow-hidden">
                <img src='images/roller-blue.jpeg' alt="Paint roller" className="w-[200vw] md:w-full min-h-full absolute md:top-[-30%] xl:top-[] left-0" />
                <h1 className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white text-5xl md:text-7xl text-shadow text-center"><StaggerText>Building A Legacy</StaggerText></h1>
            </section>

            <section className="default-px default-py text-lg md:text-2xl flex justify-center text-center flex-col items-center">
                <FadeUp>
                    <p className="max-w-[1000px] mb-10">Here at Legacy Painting Company we care about making sure our customers are satisfied with every last detail.<br/><br/>Our team has 10+ years experience on large scale painting projects, from home residential home painting to commercial home painting.<br/><br/>There is no project too big or too small here at Legacy Painting! We are here to serve our community here in San Diego. Get started by requesting a quote today.</p>
                    <Link to="/contact">
                        <Button to='/contact'>Get A Quote</Button>
                    </Link>
                </FadeUp>
            </section>

            <section className="default-py default-px flex flex-col md:flex-row items-center md:justify-between bg-dark text-white gap-10 md:gap-0">
                <FadeRight>
                    <img src="images/man-on-roof.jpeg" alt="Worker painting roof" className="flex-1 md:max-w-[600px] shadow-md" />
                </FadeRight>
                <FadeLeft>
                    <div className="flex-1 max-w-[600px] flex flex-col">
                        <h2 className="text-2xl md:text-5xl mb-5 md:mb-10 font-bold">A team you can trust.</h2>
                        <p className="text-lg md:text-2xl mb-10">All of our team members are trained with specialized systems that have been time-tested by our expert leaders.</p>
                        <Link to="/services">
                            <Button>Our Services</Button>
                        </Link>
                    </div>
                </FadeLeft>
            </section>

            <section className="default-py default-px flex md:flex-row items-center md:justify-between bg-light gap-10 md:gap-0 flex-col-reverse">
                <FadeRight>
                    <div className="flex-1 max-w-[600px]">
                        <h2 className="text-2xl md:text-5xl mb-5 md:mb-10 font-bold">With us, you’ll have peace of mind we will always use the highest quality paint.</h2>
                        <p className="text-lg md:text-2xl mb-10">Our featured paint suppliers include: Sherwin Williams, BEHR.</p>
                        <Link to="/services">
                            <Button>Our Services</Button>
                        </Link>
                    </div>
                </FadeRight>
                <FadeLeft>
                    <img src="images/yellow-paint.jpeg" alt="Bucket of yellow paint on table" className="flex-1 md:max-w-[600px] shadow-md" />
                </FadeLeft>
            </section>

        </div>
    )
}