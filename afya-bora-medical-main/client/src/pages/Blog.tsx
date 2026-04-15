import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Calendar, User, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * Blog page showcasing health tips and facility updates
 */

export default function Blog() {
  const [, navigate] = useLocation();

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Blood Pressure: What You Need to Know",
      excerpt:
        "Learn about normal blood pressure ranges, what causes high blood pressure, and practical tips for maintaining a healthy blood pressure.",
      date: "March 1, 2024",
      author: "Dr. Sarah Kipchoge",
      category: "Health Tips",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    },
    {
      id: 2,
      title: "Maternal Health: Preparing for a Safe Pregnancy",
      excerpt:
        "Essential information about prenatal care, nutrition during pregnancy, and what to expect during your antenatal visits.",
      date: "February 28, 2024",
      author: "Midwife Grace Mwangi",
      category: "Maternal Health",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    },
    {
      id: 3,
      title: "Diabetes Management: Living Well with Diabetes",
      excerpt:
        "Comprehensive guide to managing diabetes through diet, exercise, medication, and regular monitoring.",
      date: "February 25, 2024",
      author: "Dr. James Kipketer",
      category: "Chronic Disease",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-laboratory-9yFn8g5ftmK7ysuojYaKrc.webp",
    },
    {
      id: 4,
      title: "Child Health: Vaccination Schedule and Immunization",
      excerpt:
        "Important information about childhood vaccinations, immunization schedules, and protecting your child's health.",
      date: "February 20, 2024",
      author: "Dr. Emily Kipchoge",
      category: "Child Health",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    },
    {
      id: 5,
      title: "Emergency Preparedness: When to Seek Emergency Care",
      excerpt:
        "Learn about medical emergencies, warning signs that require immediate attention, and how to respond quickly.",
      date: "February 15, 2024",
      author: "Dr. Michael Kipketer",
      category: "Emergency Care",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-emergency-9yFn8g5ftmK7ysuojYaKrc.webp",
    },
    {
      id: 6,
      title: "Nutrition Tips: Eating Healthy on a Budget",
      excerpt:
        "Practical nutrition advice for maintaining a healthy diet while being mindful of your budget.",
      date: "February 10, 2024",
      author: "Nutritionist Jane Wanjiru",
      category: "Nutrition",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
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
          <h1 className="text-5xl font-bold text-white mb-4">Health Blog</h1>
          <p className="text-xl text-blue-100">
            Tips, insights, and updates from Afya Bora Medical
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-700 mb-8">
            Get health tips and updates delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold">
              Subscribe
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
                Quality healthcare and health information for Mutomo, Kitui County.
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
