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
      </div>
    </div>
  );
}
