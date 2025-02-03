import { BottomFooter } from "@/components/bottom-footer";
import {
  ChevronDown,
  IconCheck,
  IconLock,
  IconWhiteCheck,
  MoveUpRight,
} from "@/components/icons/ui-icons";
import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white h-full w-full z-50">
      <img
        src="hero_top_right.svg"
        className="absolute top-0 right-0 z-10 hidden md:block lg:block max-w-lg"
      />
      <div className="min-h-screen bg-white z-50">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 z-50">
          <div className="flex items-center gap-8 z-50">
            <Link href="/" className="text-xl font-bold">
              <img
                src="/truthify_logo.png"
                alt="Truthify Logo"
                className="w-[150px]"
              />
            </Link>
            <div className="hidden  items-center gap-6 z-50 ">
              <button className="flex items-center text-[#272727] text-base hover:text-gray-900">
                Government Officials Scores
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="flex items-center text-[#272727] text-base hover:text-gray-900">
                Business Executives Scores
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <Link
                href="/about"
                className="text-[#272727] text-base hover:text-gray-900"
              >
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="text-[#272727] text-base hover:text-gray-900"
              >
                How It Works
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 z-50">
            <Link to="/sign-in">
              <Button
                variant="ghost"
                className="lg:text-white hover:bg-transparent"
              >
                <IconLock className="h-4 w-4 stoke-white   text-white stoke-white fill-white" />
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button className="bg-white text-[#272727] hover:bg-white">
                Sign Up Now
                <MoveUpRight className="ml-2 h-4 w-4 stroke-black" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative  py-12 z-50 ">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 px-5">
              <div className="text-blue-500 font-medium bg-gradient-to-r  from-[#069AEE] to-[#0655EE] text-transparent bg-clip-text text-base ">
                WELCOME TO TRUTHIFY
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-800 text-5xl lg:text-6xl">
                Automated
                <br />
                Integrity Metrics
              </h1>
              <p className="text-neutral-800 font-light max-w-lg leading-10">
                With AI And machine learning our algorithm analyzes for
                <br />
                <p className="leading-5">
                  Blatant Lies | Contradictions | Balanced Presentation of Facts
                  |
                  <br />
                  and so much more.
                </p>
              </p>

              <Button size="lg" className="bg-[#069AEE] hover:bg-sky-600">
                <Link to="/sign-up" className="flex items-center gap-2">
                  Join Now <MoveUpRight className="stroke-white" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/hero_right.png"
                alt="Business professionals with data visualization"
                width={600}
                height={500}
                className="w-full  max-w-2xl z-50"
              />
            </div>
          </div>

          {/* Feature Icons */}
          <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 bg-[url(/feature_icon_bg.svg)]  p-20 bg-cover ">
            {[
              {
                text: "Conceptual",
                src: "hero_icon5.svg",
              },
              {
                text: "Consistency",
                src: "hero_icon1.svg",
              },
              { text: "Balanced", src: "hero_icon2.svg" },
              {
                text: "Score Aggregation",
                src: "hero_icon3.svg",
              },
              { text: "Fair", src: "hero_icon4.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-gray-600"
              >
                <img src={item.src} className="h-8 w-8 lg:w-16 lg:h-16" />
                <span className="text-sm font-light py-2 mx-auto">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Integrity Metrics Section */}
          <div className="text-center mt-24 space-y-4 bg-[url(/integrity_metrics_bg.svg)] bg-cover  bg py-16">
            <h2 className="text-3xl font-bold text-[#292929] lg:text-5xl">
              Integrity Metrics
            </h2>
            <p className="text-[#292929] max-w-lg mx-auto font-light text-center">
              Original and Artificial Intelligence Highlighting Integrity in
              Leaders <br />
              and Teams.
            </p>

            <div className="pt-20">
              <img src="/persons.png" className="w-full max-w-3xl mx-auto" />
            </div>
          </div>
        </div>

        {/* Quest for Truth Section */}
        <section className="bg-gradient-to-r from-[#0089D7] to-[#DBFAD8] px-6 pt-16">
          <div className="mx-auto container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 pb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Join our Quest for Truth
              </h2>
              <p className="text-lg text-white/90">
                Subscribe and be ready for never before seen analysis
              </p>
              <ul className="space-y-4 text-sm">
                {[
                  "Know more about the people you are voting for.",
                  "Be in the Know about new features and new analysis tools",
                  "Learn about analysis applications in other areas",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-white">
                    <IconCheck className="stroke-white" />
                    {text}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-[#272727] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                Subscribe Now
                <MoveUpRight className="stroke-[#272727]" />
              </button>
            </div>
            <div className="relative w-full h-full">
              <img
                src="/quest_person.png"
                alt="Person working with analytics"
                className="max-w-sm object-contain hidden md:block md:absolute lg:-left-40  md:-bottom-1 z-[999]"
              />
              <img
                src="/quest_frame.png"
                className="max-w-lg object-contain hidden lg:block lg:absolute left-0 bottom-0"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-6 py-24 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-[#272727]">
                About Us
              </h2>
              <p className="text-[#292929] text-lg text-start leading-relaxed">
                At Truthify, our foundation is built upon an unwavering
                commitment to honesty that some might call stubborn. In every
                facet of our operations, from the drawing board to the final
                product, honesty isn't just a policy—it's our core principle. We
                believe that transparency and integrity are not merely virtues
                but essential pillars that support the{" "}
                <span className="font-semibold">
                  trust our customers, partners, and employees place in us.
                </span>
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our dedication to truthfulness guides our decisions, shapes our
                culture, and drives our innovations. For us, honesty isn't just
                the best policy—it's the only way to do business.
              </p>
              <button className="bg-[#069AEE] text-white px-6 py-3 rounded-lg font-medium  transition-colors inline-flex items-center gap-2">
                Join Now
                <MoveUpRight className="stroke-white" />
              </button>
            </div>
            <div className="relative">
              <img
                src="/about_right.png"
                alt="Business professional with analytics"
                className="w-full rounded-lg max-w-2xl"
              />
            </div>
          </div>
        </section>

        {/* <!-- How It Works Section --> */}
        <section className="py-16 container   mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3">How It Works</h2>
            <p className="text-[#272727] text-lg">
              Praesent condimentum ligula vel malesuada fringilla.
            </p>
          </div>

          <div className=" bg-[#E8F7FF] w-full grid md:grid-cols-2 gap-8 relative rounded-xl">
            {/* <!-- Left Column --> */}
            <div className="p-8 rounded-xl">
              <h3 className="font-bold text-2xl mb-2">Calculation</h3>
              <p className="text-[#272727] text-base">
                Praesent condimentum ligula vel malesuada fringilla.
              </p>
              <div className=" gap-4 flex flex-col mt-10 ">
                <div className="flex gap-4  min-h-32">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        01
                      </div>
                    </div>
                    <div className="w-1 flex-1 bg-[#C5DEEC]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Sentiment and Points
                    </h4>
                    <p className="text-[#272727]  text-base">
                      Each point you receive on content is assigned a numerical
                      value, or "Integrity Score." Commonly, scores are
                      currently 1 through 10.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4  min-h-32">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        02
                      </div>
                    </div>
                    <div className="w-1 flex-1 bg-[#C5DEEC]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Total Score</h4>
                    <p className="text-[#272727] text-base">
                      Multiple angles of sentiment analysis will be applied to a
                      source of content and weighted together equally to create
                      a total score.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        03
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Honesty score</h4>
                    <p className="text-[#272727] text-base">
                      Average of content related to an individual from multiple
                      sources to create a bias towards an individual general
                      honesty over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-1/2 flex justify-end border-0 drop-shadow-xl  items-center rounded-full w-full -translate-x-5 h-full ">
              <img src="/sign_right.svg" className="absolute -right-6" />
            </div>

            {/* <!-- Right Column --> */}
            <div className="p-8 rounded-xl">
              <h3 className="font-bold text-2xl mb-2">Sentiment</h3>
              <p className="text-[#272727] text-base">
                Sentiment analysis will be scored to include:
              </p>
              <div className=" gap-4 flex flex-col mt-10 ">
                <div className="flex gap-4  min-h-32">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        <IconWhiteCheck />
                      </div>
                    </div>

                    <div className="w-1 flex-1 bg-[#C5DEEC]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Sentiment and Points
                    </h4>
                    <p className="text-[#272727]  text-base">
                      Each point you receive on content is assigned a numerical
                      value, or "Integrity Score." Commonly, scores are
                      currently 1 through 10.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4  min-h-32">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        <IconWhiteCheck />
                      </div>
                    </div>

                    <div className="w-1 flex-1 bg-[#C5DEEC]"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Intelligence to relay complex information
                    </h4>
                    <p className="text-[#272727] text-base">
                      Phasellus vitae sapien ligula. Quisque dolor elit,
                      ultrices non fermentum eu, sodales vel lacus. Vestibulum
                      at nibh laoreet, luctus nisi non, molestie arcu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col justify-start items-center gap-4">
                    <div className="bg-[#069AEE]/20 p-2 rounded-full  text-white font-bold">
                      <div className="bg-[#069AEE]  justify-center items-center flex  rounded-full w-10 h-10 ">
                        <IconWhiteCheck />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Harmonious argumentation over time
                    </h4>
                    <p className="text-[#272727] text-base">
                      Phasellus vitae sapien ligula. Quisque dolor elit,
                      ultrices non fermentum eu, sodales vel lacus. Vestibulum
                      at nibh laoreet, luctus nisi non, molestie arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Limitless Possibilities Section --> */}
        <section className="pt-16 px-4  bg-gradient-to-r from-[#069AEE] to-[#52B9F3]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8  items-center  relative  ">
              <div className="text-white pb-40 relative">
                <h2 className="text-4xl font-extralight mb-4">
                  Limitless possibilities with
                </h2>
                <p className="text-4xl  mb-4 font-extralight">
                  <span className="font-bold">1000+</span> Integrity Score
                </p>
                <p className="mb-8 text-lg font-extralight">
                  Phasellus vitae sapien ligula. Quisque dolor elit, ultrices
                  non fermentum eu, sodales vel lacus. Vestibulum at nibh
                  laoreet, luctus nisi non, molestie arcu.
                  <span className="mt-5 block"></span>
                  To see more detailedassessments, summaries, and scores...
                </p>
                <Button className="bg-white text-[#272727] hover:bg-white">
                  Sign Up Now
                  <MoveUpRight className="ml-2 h-4 w-4 stroke-black" />
                </Button>

                <img
                  src="/l_arrow_right.svg"
                  className="absolute left-0 bottom-5"
                />
                <img
                  src="/rect_dots.svg"
                  className="absolute bottom-5 right-5"
                />
              </div>
              <div className="space-y-4 h-full w-full relative  ">
                <img
                  src="/founders.png"
                  className="w-full max-w-lg md:absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Sign Up Section --> */}
        <section className="py-40 px-4 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-blue-500 font-medium bg-gradient-to-r  from-[#069AEE] to-[#0655EE] text-transparent bg-clip-text text-base pb-2 ">
                GET STARTED ABSOLUTELY FREE
              </div>

              <h2 className="text-5xl font-extrabold mb-4">
                Get up and running
                <span className="block py-2"></span>
                in 30 minutes
              </h2>
              <p className="text-[#292929] font-light text-lg">
                Phasellus vitae sapien ligula. Quisque inter elit,
                <br />
                ultricies non fermentum ex, sodales vel lacus.
              </p>
            </div>
            <div className="relative w-full h-full">
              <img
                src="/sign_back.svg"
                className="absolute -top-10 -left-10 "
              />
              <div className="bg-white border-[#F5EBE3] border max-w-lg  z-50 p-10 drop-shadow-lg rounded-xl relative   ">
                <form className="space-y-5 ">
                  <div>
                    <label className="block text-base font-semibold text-[#1D222D]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="mt-1 block w-full outline-none px-4 py-2 border text-base border-[#E5E5E7] bg-[#F8F9FB]  font-light  rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-[#1D222D]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="mt-1 block w-full outline-none px-4 py-2 border text-base border-[#E5E5E7] bg-[#F8F9FB]  font-light  rounded-lg"
                    />
                  </div>
                  <div className="flex justify-start items-center gap-2 py-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="   accent-[#F8F9FB]  rounded bg-[#F8F9FB] text-[#F8F9FB] size-6   "
                    />
                    <p className="text-xs text-[#1D222D] font-thin leading-5">
                      Creating an account means you’re okay with our Terms of
                      Service, Privacy Policy, and default Notification Settings
                    </p>
                  </div>
                  <Button size="lg" className="bg-[#069AEE] hover:bg-sky-600">
                    Sign Up <MoveUpRight className="stroke-white" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-[#0a1628] text-white pt-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* <!-- Main Footer Content --> */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* <!-- Logo and Contact Section --> */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <img
                    src="/truthify_logo.png"
                    alt="Truthify"
                    className="h-8"
                  />
                </div>
                <address className="not-italic mb-6 text-white/60 text-sm font-thin">
                  123 Market St, #22B Charlottesville,
                  <br />
                  California 44635
                </address>
                <div className="space-y-3 grid justify-center lg:grid-cols-2">
                  <div className="flex flex-row gap-5 items-center  ">
                    <img src="/phone.svg" alt="phone" className="size-6" />

                    <div className="flex flex-col">
                      <span className="text-white/60 font-thin text-xs">
                        Call Us Now
                      </span>
                      <a
                        href="tel:(123) 456-7891"
                        className="text-white text-base font-normal pt-1"
                      >
                        (123) 456-7891
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-center  ">
                    <img src="/email.svg" alt="phone" className="size-6" />

                    <div className="flex flex-col">
                      <span className="text-white/60 font-thin text-xs">
                        Email Us
                      </span>
                      <a
                        href="mailto:email@gmail.com"
                        className="text-white text-base font-normal pt-1"
                      >
                        email@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Who we are --> */}
              <div>
                <h3 className="text-base  font-thin  mb-4">Who we are</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Services --> */}
              <div>
                <h3 className="text-base  font-thin mb-4">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      Government Officials Scores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      Business Executives Scores
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Resources --> */}
              <div>
                <h3 className="text-base  font-thin mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white/60 font-thin hover:text-white transition-colors"
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <BottomFooter />
        </footer>
      </div>
    </div>
  );
}
