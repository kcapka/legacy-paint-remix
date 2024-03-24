import StaggerText from "~/components/animations/StaggerText";
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <div>
      <section className="h-[100svh] overflow-hidden relative">
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-10 text-white text-center">
          <h1 className="text-6xl lg:text-8xl mb-10 text-shadow">
            <StaggerText>Our Reviews</StaggerText>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Check out what some of our clients have to say
          </motion.p>
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)]"></div>
        <img
          src="images/ext-paint-1.jpeg"
          alt="Man painting house"
          className="min-w-[200svw] md:min-w-full min-h-full"
        />
      </section>

      <section className="default-py default-px text-center [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28">
          <div>
            <h2>Jared S. in San Diego</h2>
            <p>“I hired Stephen and his team to repaint my 3 bed condo and they really did a great job. He was especially helpful in helping me pick colors as I had no idea where to start. I would highly recommend Legacy Painting and will be sure to use them in the future.”</p>
          </div>
          <div>
            <h2>Remy K. in Bay Park</h2>
            <p>“Stephen and his team have helped me with multiple painting projects. My new interior paint looks perfect and they did a fantastic job on my outdoor pergola. He was also able to provide me with the lowest quotes for quality work!”</p>
          </div>
          <div>
            <h2>Kim B. in San Clemente</h2>
            <p>“After we purchased our new home, Legacy Painting was able to get us a quote to finalize the entire home interior faster than any other quote we received. They did an amazing job, and finished right on time!”</p>
          </div>
          <div>
            <h2>Mike P. in Clairemont</h2>
            <p>“I manage a property management company and get a lot of requests for painting referrals from new tenants. Legacy Painting is my go to painting contractor because of how easy they are how to work with and how fast they can get the job done.”</p>
          </div>
          <div>
            <h2>Raymond M. in North Park</h2>
            <p>“I’m so happy with how everything turned out. Legacy paint was very professional and had outstanding communication. I would definitely use them again and recommend to friends and family.”</p>
          </div>
          <div>
            <h2>Taylor T. in La Jolla</h2>
            <p>“I’ve hired Stephen for several jobs now and him and his team have always done quality work. I just had them repaint my kitchen cabinets as we’re updating our kitchen and they did a fantastic job and at such a great price!! I will always recommend Legacy Painting Company.” </p>
          </div>
        </div>
      </section>
    </div>
  );
}
