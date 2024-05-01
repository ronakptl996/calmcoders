export default function Home() {
  return (
    <section className="mt-20">
      <section className="home-hero-section bg-slate-600 relative">
        <section className="bg-hero-section"></section>
        <section className="h-full hero-section-wrapper flex justify-center items-center flex-col px-60">
          <h1 className="text-4xl font-bold">
            <span className="text-lime-600">
              Top-Rated Digital Marketing Agency
            </span>{" "}
            In Ahmedabad India.
          </h1>
          <p className="my-7 text-lg leading-8">
            Calm Coders is a{" "}
            <b>Best Digital Marketing Agency In Ahmedabad, India.</b> We work
            with top brands and companies. We’ll help you hatch a strategy for
            success that merges all channels with correlating creative and a
            single, cohesive message to your audiences. we know that the best
            results come from having the right people working on the right
            assignment. With our verified strategies, your business is bound for
            incredible success. Let’s discover how we can transform the business
            the way you do.
          </p>

          <section className="flex">
            <button className="bg-lime-400 hover:bg-transparent hover:border-slate-100 hover:border border border-lime-400 hover:text-lime-300 transition-colors uppercase text-sm tracking-wide py-3 px-7 rounded-3xl mr-2">
              Free Consultation
            </button>
            <button className="bg-white hover:bg-lime-400 hover:border-lime-400 border border-white hover:text-white uppercase text-sm tracking-wide transition-all py-3 px-7 rounded-3xl mr-2">
              Request SEO Audit
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}
