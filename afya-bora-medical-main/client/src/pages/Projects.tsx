import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, CheckCircle, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * Our Projects page showcasing facility initiatives and improvements
 */

export default function Projects() {
  const [, navigate] = useLocation();

  const projects = [
    {
      title: "Modern Laboratory Equipment Upgrade",
      status: "Completed",
      date: "2024",
      description:
        "Upgraded our laboratory with state-of-the-art diagnostic equipment to provide faster and more accurate test results for our patients.",
      impact: "50% reduction in test turnaround time",
      icon: Zap,
    },
    {
      title: "Maternal Health Excellence Program",
      status: "Ongoing",
      date: "2023-2024",
      description:
        "Comprehensive program to improve maternal and child health outcomes through enhanced antenatal care, skilled delivery, and postnatal support.",
      impact: "25% improvement in maternal health outcomes",
      icon: Heart,
    },
    {
      title: "Community Health Outreach Initiative",
      status: "Ongoing",
      date: "2023-Present",
      description:
        "Regular health education campaigns and free health screening programs in the Mutomo community to promote preventive healthcare.",
      impact: "Over 2,000 community members reached",
      icon: Users,
    },
    {
      title: "Emergency Department Expansion",
      status: "Completed",
      date: "2023",
      description:
        "Expanded our emergency department with additional beds, equipment, and trained staff to better serve emergency cases 24/7.",
      impact: "100% increase in emergency capacity",
      icon: CheckCircle,
    },
    {
      title: "Staff Training and Development Program",
      status: "Ongoing",
      date: "2023-Present",
      description:
        "Continuous professional development programs for all staff members to enhance clinical skills and service quality.",
      impact: "100+ staff members trained annually",
      icon: Users,
    },
    {
      title: "Pharmacy Services Enhancement",
      status: "Completed",
      date: "2024",
      description:
        "Upgraded pharmacy with modern dispensing systems and expanded medication inventory to better serve patient needs.",
      impact: "Improved medication availability and accuracy",
      icon: Zap,
    },
  ];

  const milestones = [
    {
      year: "2020",
      event: "Afya Bora Medical Mutomo established",
      description: "Facility opened to serve the Mutomo community",
    },
    {
      year: "2021",
      event: "Expanded Outpatient Services",
      description: "Added specialized clinics and increased capacity",
    },
    {
      year: "2022",
      event: "Launched Laboratory Services",
      description: "Opened modern laboratory with diagnostic capabilities",
    },
    {
      year: "2023",
      event: "Emergency Department Expansion",
      description: "Upgraded emergency care capacity and 24/7 services",
    },
    {
      year: "2024",
      event: "Technology Upgrades",
      description: "Implemented modern equipment and digital systems",
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
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100">
            Initiatives and improvements driving healthcare excellence
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Current & Completed Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-600">{project.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Impact:
                    </p>
                    <p className="text-blue-700 font-semibold">{project.impact}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-300"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex gap-8 ${
                    index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="w-1/2">
                    <Card
                      className={`p-6 bg-white border-0 shadow-lg ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We are committed to continuous improvement and expansion of our healthcare services. Our future plans include advanced diagnostic capabilities, specialized clinics, and enhanced community health programs.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
          >
            Partner With Us
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
                Building healthcare excellence in Mutomo, Kitui County.
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
