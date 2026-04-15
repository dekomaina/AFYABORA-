import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Activity,
  Users,
  Zap,
  Menu,
  X,
  ArrowRight,
  Star,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * - Clean, spacious layouts with generous whitespace
 * - Medical blue (#0066CC) primary + warm coral (#FF6B5B) accent
 * - Poppins for headings (modern, friendly), Inter for body (professional, readable)
 * - Subtle geometric shapes, soft shadows, smooth transitions
 * - Scroll-triggered fade-in animations, purposeful micro-interactions
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const coreValues = [
    { title: "Compassion", icon: Heart },
    { title: "Respect & Dignity", icon: Shield },
    { title: "Commitment to Quality Care", icon: Activity },
    { title: "Better Together", icon: Users },
    { title: "Improving Lives", icon: Zap },
  ];

  const testimonials = [
    {
      name: "Mary Kipchoge",
      role: "Patient",
      content:
        "Afya Bora Medical provided excellent care during my pregnancy. The staff was professional, compassionate, and made me feel very comfortable throughout my journey.",
      rating: 5,
    },
    {
      name: "James Mwangi",
      role: "Patient",
      content:
        "The emergency care I received was outstanding. The team responded quickly and professionally. I'm grateful for their dedication to patient care.",
      rating: 5,
    },
    {
      name: "Grace Wanjiru",
      role: "Patient",
      content:
        "Affordable quality healthcare is what Afya Bora Medical delivers. The doctors are knowledgeable and the facilities are clean and modern.",
      rating: 5,
    },
    {
      name: "David Kipketer",
      role: "Patient",
      content:
        "I've been a patient here for over a year. The consistency in quality care and the friendly staff make this my preferred healthcare facility.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Afya Bora Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-lg text-gray-900">Afya Bora</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/careers")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Careers
            </button>
            <a
              href="tel:0797536577"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              0797536577
            </a>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => {
                  navigate("/");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/services");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigate("/about");
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              <Button
                onClick={() => {
                  navigate("/contact");
                  setMobileMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={[Autoplay({ delay: 5000 })]}
            className="h-full w-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="h-full ml-0">
              {[
                "/images/bed.jpeg",
                "/images/bed.jpeg",
                "/images/AyBNQ.jpg"
              ].map((src, index) => (
                <CarouselItem key={index} className="pl-0 min-w-full">
                  <div
                    className="h-screen w-full"
                    style={{
                      backgroundImage: `url('${src}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to Afya Bora Medical Mutomo
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Because your health matters. A modern medical facility dedicated to
              providing affordable, accessible, and compassionate healthcare to
              our community.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Image Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Facility
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Located in the heart of Mutomo town, Kitui County, our modern
                medical facility is designed to provide a welcoming and
                professional healthcare environment. Our building features
                state-of-the-art equipment and comfortable spaces for patient
                care.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                With colorful, well-organized clinics and departments, we ensure
                that every patient receives quality care in a clean, modern
                setting. Our facility is equipped to handle various medical
                services from routine consultations to emergency care.
              </p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Visit Us Today
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/AyBNQ.jpg"
                alt="Afya Bora Medical Facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Afya Bora Medical
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Located in Mutomo town, Kitui county, Afya Bora Medical is a
                modern medical facility established in 2018. The core value for
                our establishment was to impact and improve the livelihood of
                the community we serve through affordable, accessible healthcare.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We are ranked among the best in the community for providing high
                standard and compassionate healthcare. Inspired by our core value
                of care, we are conscious of the dignity of our patients and
                strive to offer friendly, efficient services.
              </p>
              <Button
                onClick={() => navigate("/about")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Read Our Full Story
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-blue-900 mb-2">Our Mission</h3>
                <p className="text-sm text-blue-800">
                  Committed to improve wellbeing and comfort of patients through
                  high quality healthcare.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-red-900 mb-2">Our Vision</h3>
                <p className="text-sm text-red-800">
                  The most patient centric healthcare provider where patients
                  get quality, affordable and convenient services every day.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 text-center border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900">{value.title}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive healthcare services designed for your wellbeing and
              comfort
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              From outpatient consultations to emergency care, laboratory services
              to specialized departments, we offer a full range of medical services
              to meet your healthcare needs.
            </p>
            <Button
              onClick={() => navigate("/services")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg inline-flex items-center gap-2"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit Afya Bora Medical Mutomo today and let our dedicated team take
            care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Book Appointment
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.png" alt="Afya Bora Logo" className="w-10 h-10 object-contain bg-white rounded p-1" />
                <span className="font-bold text-white">Afya Bora</span>
              </div>
              <p className="text-sm">
                Quality healthcare for everyone in Mutomo, Kitui County.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-blue-400 transition"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="hover:text-blue-400 transition"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/about")}
                    className="hover:text-blue-400 transition"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:0797536577"
                    className="hover:text-blue-400 transition"
                  >
                    0797536577
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:afyaboramutomo001@gmail.com"
                    className="hover:text-blue-400 transition"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon - Fri: 8am - 6pm</li>
                <li>Sat: 9am - 4pm</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2024 Afya Bora Medical Mutomo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
