import Image from "next/image";
import HomeService from "@/components/HomeService";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <section className="mt-20">
      <section className="home-hero-section">
        <div className="relative h-full w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />
          <div className="w-4/6">
            <h1
              className={cn(
                "md:text-4xl text-white relative z-20 text-4xl font-bold mb-10"
              )}
            >
              {/* <h1 className="text-4xl font-bold"> */}
              <span className="text-lime-600">
                Top-Rated Digital Marketing Agency
              </span>{" "}
              In Ahmedabad India.
              {/* </h1> */}
            </h1>
            <p className="text-center mt-2 text-neutral-300 leading-8 relative z-20 my-7">
              Calm Coders is a{" "}
              <b>Best Digital Marketing Agency In Ahmedabad, India.</b> We work
              with top brands and companies. We’ll help you hatch a strategy for
              success that merges all channels with correlating creative and a
              single, cohesive message to your audiences. we know that the best
              results come from having the right people working on the right
              assignment. With our verified strategies, your business is bound
              for incredible success. Let’s discover how we can transform the
              business the way you do.
            </p>

            <section className="flex justify-center mt-10 relative z-20">
              <button className="bg-lime-400 hover:bg-transparent hover:border-slate-100 hover:border border border-lime-400 hover:text-lime-300 transition-colors uppercase text-sm tracking-wide py-3 px-7 rounded-3xl mr-2">
                Free Consultation
              </button>
              <button className="bg-white hover:bg-lime-400 hover:border-lime-400 border border-white hover:text-white uppercase text-sm tracking-wide transition-all py-3 px-7 rounded-3xl mr-2">
                Request SEO Audit
              </button>
            </section>
          </div>
        </div>
      </section>

      {/* Section Home About Us */}
      <section className="py-28 px-40 home-company-into">
        <section className="grid grid-cols-2">
          <section className="p-5">
            <h3 className="text-3xl font-bold mb-4">
              Calm Coders: Top-rated Web Design And Digital Marketing Agency In
              Ahmedabad
            </h3>
            <p className="py-4 text-gray-700 leading-7">
              Calm Coders started its operation in the year 2021. We are India,
              based Web, App, and Digital Marketing Company. Our main Domain is
              Web Design and development, App Development, Digital Marketing,
              Product Design, and Cloud Services. Providing the development
              services as well as branding and digital marketing services for
              your business, we could be your 360° digital partner.
            </p>
            <p className="py-2 text-gray-700 leading-7">
              Customer Satisfaction and the Highest rate of Customer
              Repeatability make us one of the pioneers in the field. So, what
              are you waiting for? Let us discuss your ideas and our innovation
              in detail because catering your requirement and converting it into
              a final product is our main goal.
            </p>
            <button className="mt-5 bg-lime-400 hover:bg-white hover:border-slate-900 hover:border border border-lime-400 hover:text-slate-800 transition-colors uppercase text-sm tracking-wide py-3 px-7 rounded-3xl mr-2">
              Know More about us
            </button>
          </section>
          <section className="flex items-center justify-center">
            <Image
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              src={
                "https://calmcoders.com/wp-content/uploads/2024/02/Untitled-design-2024-02-15T234854.929.png"
              }
              width={400}
              height={400}
              alt="Calmcoder Employee Image"
            />
          </section>
        </section>

        <section className="flex justify-between px-10 mt-20">
          <div className="text-center">
            <h5 className="text-4xl font-bold text-neutral-800">5+</h5>
            <p className="text-gray-700 text-xl mt-2">Year in Business</p>
          </div>
          <div className="text-center">
            <h5 className="text-4xl font-bold text-neutral-800">100+</h5>
            <p className="text-gray-700 text-xl mt-2">Solutions Delivered</p>
          </div>
          <div className="text-center">
            <h5 className="text-4xl font-bold text-neutral-800">10+</h5>
            <p className="text-gray-700 text-xl mt-2">Teck Experts</p>
          </div>
          <div className="text-center">
            <h5 className="text-4xl font-bold text-neutral-800">50+</h5>
            <p className="text-gray-700 text-xl mt-2">Global Clients</p>
          </div>
        </section>
      </section>

      {/* Section Service */}
      <section className="py-28 px-40 bg-slate-300">
        <h3 className="text-center text-3xl text-gray-800">
          See What <span className="font-bold">Calm Coders do for you?</span>
        </h3>
        <p className="text-center w-9/12 text-base m-auto py-7 leading-7">
          Any idea can be great including yours too. All you need is the right
          resource which can boost your growth by transforming your unique ideas
          into reality. Our wide range of services will shape your products
          through mobile app development and websites development services.
        </p>

        <section className="flex justify-between my-4">
          <HomeService service="Web Development" />
          <HomeService service="Digital Marketing" />
          <HomeService service="Branding & Advertising" />
        </section>

        <div className="flex justify-center mt-12">
          <button className="bg-lime-400 hover:bg-teal-900 hover:text-lime-300 transition-colors py-4 px-9 rounded-3xl">
            View All Services
          </button>
        </div>
      </section>
    </section>
  );
}
