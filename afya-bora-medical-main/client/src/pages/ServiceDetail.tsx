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
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Healthcare Minimalism
 * Individual service detail page
 */

const serviceDetails: Record<
  string,
  {
    title: string;
    icon: any;
    image: string;
    description: string;
    fullDescription: string;
    features: string[];
    color: string;
  }
> = {
  outpatient: {
    title: "Outpatient Services",
    icon: Stethoscope,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    description:
      "Medical consultations, pharmacy, laboratory, ultrasound, mother & child care, health promotion, vaccination, physiotherapy, nutrition clinics and chronic disease management.",
    fullDescription:
      "Our Outpatient department boasts comprehensive services designed to provide convenient access to quality healthcare without requiring hospital admission. We understand that many patients prefer to receive medical care while maintaining their daily routines, which is why our outpatient services are structured to be flexible and accessible.",
    features: [
      "Medical Consultations with experienced doctors",
      "On-site Pharmacy with quality medications",
      "Laboratory Services for diagnostic testing",
      "Ultrasound imaging services",
      "Mother & Child Health programs",
      "Health Promotion and Wellness initiatives",
      "Vaccination services for all ages",
      "Physiotherapy and rehabilitation",
      "Nutrition Clinics for dietary guidance",
      "Chronic Disease Management Programs",
    ],
    color: "from-blue-50 to-blue-100",
  },
  emergency: {
    title: "Emergency Care",
    icon: AlertCircle,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-emergency-9yFn8g5ftmK7ysuojYaKrc.webp",
    description:
      "Immediate medical attention for sudden and severe health crises. Our specialized team stabilizes patients and addresses life-threatening conditions promptly.",
    fullDescription:
      "Emergency care refers to the immediate medical attention provided to individuals facing sudden and severe health crises. At Afya Bora Medical Mutomo, our medical team offers specialized care and aims to stabilize patients, prevent further deterioration, and address life-threatening conditions promptly. Our emergency department is equipped with state-of-the-art equipment and staffed by trained professionals available 24/7.",
    features: [
      "24/7 Emergency Department availability",
      "Rapid triage and assessment",
      "Advanced life support equipment",
      "Trained emergency response team",
      "Stabilization and immediate treatment",
      "Coordination with specialist services",
      "Trauma care capabilities",
      "Cardiac and respiratory support",
    ],
    color: "from-red-50 to-red-100",
  },
  inpatient: {
    title: "Inpatient Care",
    icon: Users,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/wellness-background-B2jRToktuXNYcn9ahC39Yq.webp",
    description:
      "Comprehensive inpatient care across various wards with 24/7 nursing support. Spacious wards with great ambiance and coordinated discharge planning.",
    fullDescription:
      "Afya Bora Medical Mutomo is committed to excellent patient care. We recognize the special relationship among nurses, doctors, and patients. Our inpatient services provide comprehensive care across various wards with dedicated 24/7 nursing support. Our wards are spacious and designed with great ambiance to promote healing and recovery.",
    features: [
      "Spacious, comfortable ward rooms",
      "24/7 nursing care and monitoring",
      "Dedicated medical teams",
      "Modern medical equipment",
      "Nutritional support services",
      "Coordinated discharge planning",
      "Post-discharge care coordination",
      "Family visitation accommodations",
      "Infection control protocols",
      "Patient comfort and dignity focus",
    ],
    color: "from-green-50 to-green-100",
  },
  "child-clinic": {
    title: "Child Clinic",
    icon: Baby,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    description:
      "Child health is our top priority. We ensure your child receives the best care possible with robust baby wellness clinics and vaccinations.",
    fullDescription:
      "At Afya Bora Medical Mutomo, child health is our top priority. We ensure your child receives the best care possible tailored to their medical needs. Our pediatric team is specially trained in caring for infants, children, and adolescents, providing comprehensive health services from birth through teenage years.",
    features: [
      "Newborn screening and care",
      "Baby wellness clinics",
      "Growth and development monitoring",
      "Immunization programs",
      "Pediatric consultations",
      "Treatment of childhood illnesses",
      "Nutritional guidance for children",
      "Behavioral and developmental support",
      "School health programs",
      "Adolescent health services",
    ],
    color: "from-pink-50 to-pink-100",
  },
  gynaecology: {
    title: "Gynaecology & Obstetrics",
    icon: Heart,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/wellness-background-B2jRToktuXNYcn9ahC39Yq.webp",
    description:
      "Pregnancy and childbirth are important moments. We value both mother and baby's wellbeing with comprehensive antenatal, childbirth, and postnatal care.",
    fullDescription:
      "Pregnancy and childbirth are very important moments in a mother's life. At Afya Bora Medical Mutomo, we value both mother and baby's wellbeing. Our Gynaecologist/obstetrician will work closely with you to optimize your health and the health of your baby throughout pregnancy. We strive to impact the experience through comprehensive services.",
    features: [
      "Antenatal care and monitoring",
      "Prenatal screening and testing",
      "Childbirth delivery services",
      "Postnatal care and support",
      "Breastfeeding counseling",
      "Family planning services",
      "Gynecological consultations",
      "High-risk pregnancy management",
      "Newborn care support",
      "Maternal health education",
    ],
    color: "from-purple-50 to-purple-100",
  },
  laboratory: {
    title: "Laboratory Services",
    icon: Microscope,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-laboratory-BiwgyoLaLCCMsSkxbCtWyD.webp",
    description:
      "High-end equipment for timely, accurate laboratory reports. Operating 24/7 for both inpatient and outpatient services with routine and specialized testing.",
    fullDescription:
      "The laboratory is equipped with high-end equipment that helps us offer timely, accurate, and precise laboratory reports. The laboratory operates 24 hours per day for both inpatient and outpatient services. We offer both routine and specialized laboratory services under the following sections.",
    features: [
      "Hematology & Coagulation testing",
      "Microbiology & Molecular Biology",
      "Biochemistry & Serology",
      "Histology & Cytology",
      "24/7 laboratory availability",
      "Rapid turnaround times",
      "Quality assurance protocols",
      "Advanced diagnostic equipment",
      "Accurate and precise reporting",
      "Emergency testing services",
    ],
    color: "from-cyan-50 to-cyan-100",
  },
  pharmacy: {
    title: "Pharmacy",
    icon: Pill,
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663223829023/gN9vctwsZTys3XNpggZRoA/services-outpatient-MZS6JzeK6yB4ShHuN7ineH.webp",
    description:
      "Well-stocked with high-quality, approved medicines. We provide relevant medication information to ensure safe and effective treatment.",
    fullDescription:
      "Our pharmacies are well stocked with high-quality, approved medicines to ensure safe and effective treatment. We believe in providing you with the relevant information on your prescribed medications as this will ensure you take medications as prescribed and work with the doctors to manage your medical issues.",
    features: [
      "Wide range of approved medications",
      "Quality assurance standards",
      "Medication counseling services",
      "Drug interaction checking",
      "Prescription fulfillment",
      "Generic and brand options",
      "Chronic disease medications",
      "Emergency medication availability",
      "Patient education on medications",
      "Competitive pricing",
    ],
    color: "from-orange-50 to-orange-100",
  },
};

export default function ServiceDetail() {
  const [location, navigate] = useLocation();
  const serviceId = location.split("/").pop();
  const service = serviceId ? serviceDetails[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Service not found
          </h1>
          <Button
            onClick={() => navigate("/services")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

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
            <Button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-6xl mx-auto px-4">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </button>
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <Icon className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Offer
              </h3>
              <div className="space-y-4 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose Our {service.title}?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Professional and experienced healthcare team
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    State-of-the-art medical equipment
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Compassionate and patient-centered care
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Affordable and accessible healthcare
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact us today to schedule an appointment or learn more about
                  our {service.title.toLowerCase()} services.
                </p>
                <Button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4 py-6"
                >
                  Book Appointment
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-6"
                >
                  Contact Us
                </Button>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-4">Hours</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Mon - Fri: 8am - 6pm</li>
                    <li>Sat: 9am - 4pm</li>
                    <li>Emergency: 24/7</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Other Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(serviceDetails)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, svc]) => {
                const SvcIcon = svc.icon;
                return (
                  <Card
                    key={id}
                    className="p-6 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    onClick={() => navigate(`/services/${id}`)}
                  >
                    <SvcIcon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-600">{svc.description}</p>
                  </Card>
                );
              })}
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
