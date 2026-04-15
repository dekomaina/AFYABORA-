import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Stethoscope,
  AlertCircle,
  Users,
  Baby,
  Heart,
  Microscope,
  Pill,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * Services overview page with links to individual service pages
 */

export default function Services() {
  const [, navigate] = useLocation();

  const services = [
    {
      id: "outpatient",
      icon: Stethoscope,
      title: "Outpatient Services",
      description:
        "Medical consultations, pharmacy, laboratory, ultrasound, mother & child care, health promotion, vaccination, physiotherapy, nutrition clinics and chronic disease management.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
      color: "from-blue-50 to-blue-100",
    },
    {
      id: "emergency",
      icon: AlertCircle,
      title: "Emergency Care",
      description:
        "Immediate medical attention for sudden and severe health crises. Our specialized team stabilizes patients and addresses life-threatening conditions promptly.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-emergency-9yFn8g5ftmK7ysuojYaKrc.webp",
      color: "from-red-50 to-red-100",
    },
    {
      id: "inpatient",
      icon: Users,
      title: "Inpatient Care",
      description:
        "Comprehensive inpatient care across various wards with 24/7 nursing support. Spacious wards with great ambiance and coordinated discharge planning.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/wellness-background-B2jRToktuXNYcn9ahC39Yq.webp",
      color: "from-green-50 to-green-100",
    },
    {
      id: "child-clinic",
      icon: Baby,
      title: "Child Clinic",
      description:
        "Child health is our top priority. We ensure your child receives the best care possible with robust baby wellness clinics and vaccinations.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
      color: "from-pink-50 to-pink-100",
    },
    {
      id: "gynaecology",
      icon: Heart,
      title: "Gynaecology & Obstetrics",
      description:
        "Pregnancy and childbirth are important moments. We value both mother and baby's wellbeing with comprehensive antenatal, childbirth, and postnatal care.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/wellness-background-B2jRToktuXNYcn9ahC39Yq.webp",
      color: "from-purple-50 to-purple-100",
    },
    {
      id: "laboratory",
      icon: Microscope,
      title: "Laboratory Services",
      description:
        "High-end equipment for timely, accurate laboratory reports. Operating 24/7 for both inpatient and outpatient services with routine and specialized testing.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-laboratory-BiwgyoLaLCCMsSkxbCtWyD.webp",
      color: "from-cyan-50 to-cyan-100",
    },
    {
      id: "pharmacy",
      icon: Pill,
      title: "Pharmacy",
      description:
        "Well-stocked with high-quality, approved medicines. We provide relevant medication information to ensure safe and effective treatment.",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
      color: "from-orange-50 to-orange-100",
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
              className="text-blue-600 font-semibold"
            >
              Services
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
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
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive healthcare services designed for your wellbeing
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full flex items-center justify-between">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Our Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to book an appointment or learn more about our
            services.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
          >
            Contact Us
          </Button>
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
