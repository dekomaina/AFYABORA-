import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Activity,
  Users,
  Zap,
  Target,
  Eye,
} from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * About page with mission, vision, and core values
 */

export default function About() {
  const [, navigate] = useLocation();

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We care deeply about our patients and their wellbeing, treating everyone with empathy and kindness.",
    },
    {
      icon: Shield,
      title: "Respect & Dignity",
      description:
        "We honor the dignity of every patient and treat them with the utmost respect.",
    },
    {
      icon: Activity,
      title: "Commitment to Quality Care",
      description:
        "We are dedicated to providing the highest standards of medical care and service.",
    },
    {
      icon: Users,
      title: "Better Together",
      description:
        "We believe in the power of teamwork and collaboration to achieve better outcomes.",
    },
    {
      icon: Zap,
      title: "Improving Lives",
      description:
        "Our mission is to positively impact and improve the lives of our patients and community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <img src="/images/logo.png" alt="Afya Bora Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-lg text-gray-900">Afya Bora</span>
          </button>
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
              className="text-blue-600 font-semibold"
            >
              About
            </button>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-blue-100">
            Committed to providing quality, affordable, and compassionate
            healthcare
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Located in Mutomo town, Kitui county, Afya Bora Medical is a
                modern medical facility established in 2018. The core value for
                our establishment was to impact and improve the livelihood of
                the community we serve through affordable, accessible healthcare.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We are ranked among the best in the community for providing high
                standard and compassionate healthcare. Inspired by our core value
                of care, we are conscious of the dignity of our patients and
                strive to offer friendly, efficient services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Afya Bora Medical Mutomo, our dedicated staff ensure patients
                are our first priority. Every member of our team is committed to
                delivering excellence in patient care and building lasting
                relationships with the community we serve.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    2018
                  </h3>
                  <p className="text-blue-800">
                    Afya Bora Medical established in Mutomo
                  </p>
                </div>
                <div className="border-t border-blue-200 pt-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Community First
                  </h3>
                  <p className="text-blue-800">
                    Dedicated to serving the people of Kitui County
                  </p>
                </div>
                <div className="border-t border-blue-200 pt-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Quality Care
                  </h3>
                  <p className="text-blue-800">
                    Ranked among the best for healthcare standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Committed to improve wellbeing and comfort of patients through
                high quality healthcare. We strive to deliver compassionate,
                professional, and accessible medical services that meet the
                diverse needs of our community.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-10 h-10 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The most patient centric healthcare provider where patients get
                quality, affordable and convenient health care services every
                day. We envision a future where everyone has access to
                exceptional healthcare regardless of their circumstances.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
                  className="p-6 text-center border-0 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Afya Bora Medical?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our dedicated healthcare professionals are experienced and committed to your wellbeing.",
              },
              {
                title: "Modern Facilities",
                description:
                  "State-of-the-art medical equipment and comfortable facilities for your care.",
              },
              {
                title: "Affordable Care",
                description:
                  "Quality healthcare that is accessible and affordable for everyone in our community.",
              },
              {
                title: "24/7 Availability",
                description:
                  "Emergency services available round the clock for your urgent medical needs.",
              },
              {
                title: "Compassionate Service",
                description:
                  "We treat every patient with dignity, respect, and genuine care.",
              },
              {
                title: "Community Focused",
                description:
                  "We are deeply committed to improving the health of our community.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Quality Healthcare Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who trust Afya Bora Medical for
            their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            >
              Book Appointment
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              variant="outline"
              className="border-white text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold"
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
                <li>Mutomo, Kitui County</li>
                <li>Kenya</li>
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
            <p>&copy; 2024 Afya Bora Medical Mutomo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
