import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Briefcase, Users, MapPin, Clock } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * Careers page showcasing job opportunities at Afya Bora Medical
 */

export default function Careers() {
  const [, navigate] = useLocation();

  const jobOpenings = [
    {
      title: "Registered Nurse",
      department: "Clinical",
      location: "Mutomo",
      type: "Full-time",
      description:
        "We are seeking experienced registered nurses to join our clinical team. Responsibilities include patient care, medication administration, and clinical support.",
      requirements: [
        "Valid nursing license",
        "2+ years clinical experience",
        "Strong communication skills",
        "Commitment to patient care",
      ],
    },
    {
      title: "Clinical Officer",
      department: "Outpatient Services",
      location: "Mutomo",
      type: "Full-time",
      description:
        "Join our outpatient team as a Clinical Officer. You will provide medical consultations, diagnose conditions, and manage patient care.",
      requirements: [
        "Valid clinical officer license",
        "3+ years experience",
        "Patient-focused approach",
        "Problem-solving skills",
      ],
    },
    {
      title: "Laboratory Technician",
      department: "Laboratory Services",
      location: "Mutomo",
      type: "Full-time",
      description:
        "We need skilled laboratory technicians to perform diagnostic tests and maintain laboratory equipment to ensure accurate patient results.",
      requirements: [
        "Laboratory certification",
        "Experience with diagnostic equipment",
        "Attention to detail",
        "Quality assurance focus",
      ],
    },
    {
      title: "Pharmacy Technician",
      department: "Pharmacy",
      location: "Mutomo",
      type: "Full-time",
      description:
        "Support our pharmacy operations by dispensing medications, managing inventory, and ensuring patient safety.",
      requirements: [
        "Pharmacy certification",
        "Knowledge of medications",
        "Customer service skills",
        "Inventory management experience",
      ],
    },
    {
      title: "Midwife",
      department: "Gynaecology & Obstetrics",
      location: "Mutomo",
      type: "Full-time",
      description:
        "Experienced midwives needed to provide maternal and child health services, including antenatal care, delivery, and postnatal support.",
      requirements: [
        "Valid midwifery license",
        "3+ years experience",
        "Compassionate care approach",
        "Emergency response capability",
      ],
    },
    {
      title: "Administrative Officer",
      department: "Administration",
      location: "Mutomo",
      type: "Full-time",
      description:
        "Support our administrative operations with scheduling, record management, and patient coordination.",
      requirements: [
        "Administrative experience",
        "Excellent organizational skills",
        "Computer proficiency",
        "Professional communication",
      ],
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
          <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-blue-100">
            Build a rewarding career in healthcare at Afya Bora Medical
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Join Afya Bora?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Make a Difference
              </h3>
              <p className="text-gray-700">
                Work in a mission-driven organization dedicated to providing quality healthcare to our community.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Supportive Team
              </h3>
              <p className="text-gray-700">
                Join a collaborative team that values professional development and mutual support.
              </p>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Growth
              </h3>
              <p className="text-gray-700">
                Access training opportunities and advance your healthcare career with us.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Current Job Openings
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const subject = encodeURIComponent(
                        `Job Application: ${job.title}`
                      );
                      const body = encodeURIComponent(
                        `I am interested in applying for the ${job.title} position at Afya Bora Medical.\n\nPlease send me more information about this opportunity.`
                      );
                      window.location.href = `mailto:afyaboramutomo001@gmail.com?subject=${subject}&body=${body}`;
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 whitespace-nowrap"
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't see your role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Send us your CV and cover letter. We're always interested in talented healthcare professionals.
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
          >
            Get in Touch
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
                Quality healthcare careers in Mutomo, Kitui County.
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
