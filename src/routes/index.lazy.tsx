import {
  ChevronDown,
  IconLock,
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
        className="absolute top-0 right-0 z-10 hidden lg:block"
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
            <div className="hidden md:flex items-center gap-6 z-50">
              <button className="flex items-center text-[#272727] text-base hover:text-gray-900">
                Government Officials Scores{" "}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button className="flex items-center text-[#272727] text-base hover:text-gray-900">
                Business Executives Scores{" "}
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
            <Button
              variant="ghost"
              className="lg:text-white hover:bg-transparent"
            >
              <IconLock className="h-4 w-4 stoke-white   text-white stoke-white fill-white" />
              Sign In
            </Button>
            <Button className="bg-white text-[#272727] hover:bg-white">
              Sign Up Now
              <MoveUpRight className="ml-2 h-4 w-4 stroke-black" />
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative  py-12 z-50 ">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 px-2 lg:px-5">
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
                Join Now <MoveUpRight className="stroke-white" />
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
        <section className="bg-gradient-to-r from-blue-500 to-blue-400/80 px-6 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Join our Quest for Truth
              </h2>
              <p className="text-xl text-white/90">
                Subscribe and be ready for never before seen analysis
              </p>
              <ul className="space-y-4">
                {[
                  "Know more about the people you are voting for.",
                  "Be in the Know about new features and new analysis tools",
                  "Learn about analysis applications in other areas",
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-white">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <circle cx="10" cy="10" r="8" fill="white" />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                Subscribe Now
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%2011.03.46%E2%80%AFAM-ZwrcpKKoZmiTEA3s4542Nc4JIPXtkk.png"
                alt="Person working with analytics"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
              <p className="text-gray-600 leading-relaxed">
                At Truthify, our foundation is built upon an unwavering
                commitment to honesty that some might call stubborn. In every
                facet of our operations, from the drawing board to the final
                product, honesty isn't just a policy—it's our core principle. We
                believe that transparency and integrity are not merely virtues
                but essential pillars that support the{" "}
                <span className="font-medium">
                  trust our customers, partners, and employees place in us.
                </span>
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedication to truthfulness guides our decisions, shapes our
                culture, and drives our innovations. For us, honesty isn't just
                the best policy—it's the only way to do business.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
                Join Now
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="absolute -top-10 left-10 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Robert R.</p>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="absolute -top-2 left-32 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Charlotte</p>
                  <div className="w-20 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%2011.03.46%E2%80%AFAM-ZwrcpKKoZmiTEA3s4542Nc4JIPXtkk.png"
                alt="Business professional with analytics"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* <!-- How It Works Section --> */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-600">
              Phasellus condimentum ligula vel malesuada fringilla.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* <!-- Left Column --> */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-semibold mb-6">Calculation</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg h-min">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sentiment and Points</h4>
                    <p className="text-gray-600 text-sm">
                      Each point you receive on content is assigned a numerical
                      score, or "Integrity Score." Comments, posts, etc.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg h-min">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Total Score</h4>
                    <p className="text-gray-600 text-sm">
                      Multiple angles of sentiment analysis will be applied to a
                      source of content and weighted together equally to create
                      a total score.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg h-min">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Honesty score</h4>
                    <p className="text-gray-600 text-sm">
                      Average of content related to an individual from multiple
                      sources to create a bias towards an individual general
                      honesty over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Column --> */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="font-semibold mb-6">Sentiment</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-500 p-2 rounded-lg h-min">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Intelligence to relay complex information
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Phasellus vitae sapien ligula. Quisque inter elit,
                      ultricies non fermentum ex, sodales vel lacus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Limitless Possibilities Section --> */}
        <section className="bg-blue-500 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Limitless possibilities with
                </h2>
                <p className="text-4xl font-bold mb-4">1000+ Integrity Score</p>
                <p className="mb-8">
                  Phasellus vitae sapien ligula. Quisque inter elit, ultricies
                  non fermentum ex.
                </p>
                <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
                  Sign Up Now
                </button>
              </div>
              <div className="space-y-4">
                {/* <!-- Score Cards --> */}
                <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%2012.25.29%E2%80%AFPM-SVh2Usu2PAo9Jj2euMa9ktvywRfhRj.png"
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">Satya Nadella</p>
                      <p className="text-sm text-gray-600">CEO of Microsoft</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/microsoft-logo.png"
                      alt="Company"
                      className="w-8 h-8"
                    />
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-blue-500 font-bold">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Repeat similar cards for other executives --> */}
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Sign Up Section --> */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-blue-500 uppercase tracking-wide mb-2">
                GET STARTED ABSOLUTELY FREE
              </p>
              <h2 className="text-3xl font-bold mb-4">
                Get up and running
                <br />
                in 30 minutes
              </h2>
              <p className="text-gray-600">
                Phasellus vitae sapien ligula. Quisque inter elit,
                <br />
                ultricies non fermentum ex, sodales vel lacus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Sign Up →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="bg-[#0a1628] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* <!-- Main Footer Content --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* <!-- Logo and Contact Section --> */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-28%20at%2012.41.55%E2%80%AFPM-52UY6TcJhbnXSVcVfymrhExyGsJpQv.png"
                    alt="Truthify"
                    className="h-8"
                  />
                </div>
                <address className="not-italic mb-6 text-gray-400">
                  123 Market St, #22B Charlottesville,
                  <br />
                  California 44635
                </address>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>Email Us</span>
                    </div>
                    <a
                      href="mailto:email@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      email@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                      <span>Call Us Now</span>
                    </div>
                    <a
                      href="tel:(123) 456-7891"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      (123) 456-7891
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Who we are --> */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Who we are</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Services --> */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Government Officials Scores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Business Executives Scores
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Resources --> */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Footer Bottom --> */}
            <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Truthify. All rights reserved.
              </p>
              {/* <!-- Social Links --> */}
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.66c-3.468 0-6.28-2.813-6.28-6.28s2.813-6.28 6.28-6.28 6.28 2.813 6.28 6.28-2.813 6.28-6.28 6.28zm7.5-11.33a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.525 9H14V7c0-1.032.084-1.682 1.563-1.682h1.868v-3.18C16.522 2.044 15.608 1.998 14.693 2 11.98 2 10 3.657 10 6.699V9H7v4l3-.001V22h4v-9.003l3.066-.001L17.525 9z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
