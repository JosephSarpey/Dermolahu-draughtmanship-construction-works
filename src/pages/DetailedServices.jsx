import { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { motion } from "framer-motion";
import {
    DraftingCompass,
    Hammer,
    Ruler,
    Layers,
    GraduationCap,
    Map,
    ClipboardCheck,
    Compass,
    Briefcase,
    BookOpen,
} from "lucide-react";

import { slideUpVariants, zoomInVariants } from "../sections/animation";


const allServices = [
    {
        title: "ARCHITECTURAL DRAWINGS",
        category: "Drawings",
        icon: DraftingCompass,
        highlights: [
            "Professional building and architectural drawings",
            "Residential, commercial, and industrial designs",
            "Meticulously planned and executed"
        ],
        statement: "We provide professional building and architectural drawings that meet industry standards. Our team of experienced architects ensures that every detail is meticulously planned and executed. Whether you need residential, commercial, or industrial designs, we have the expertise to deliver.",
        image: "/assets/archit_drawing.jpg"
    },
    {
        title: "CONSTRUCTION WORKS",
        category: "Construction",
        icon: Hammer,
        highlights: [
            "Complete construction management",
            "Skilled professionals",
            "Safety and efficiency focused"
        ],
        statement: "Our construction services are of the highest quality, ensuring that your project is completed on time and within budget. We handle all aspects of construction, from foundation to finishing. Our team of skilled professionals uses the latest techniques and materials to deliver durable and aesthetically pleasing structures.",
        image: "/assets/construction_works.jpg"
    },
    {
        title: "LAND SURVEYING",
        category: "Surveying",
        icon: Map,
        highlights: [
            "Precise measurements",
            "Advanced equipment and technology",
            "Boundary and topographic surveys"
        ],
        statement: "Accurate land surveying is crucial for any construction project. Our land surveying services provide precise measurements and detailed maps of your property. We use advanced equipment and technology to ensure accuracy and reliability for all your surveying needs.",
        image: "path/to/image3.jpg"
    },
    {
        title: "BILL OF QUANTITIES/ESTIMATE",
        category: "Consultancy",
        icon: ClipboardCheck,
        highlights: [
            "Detailed cost breakdowns",
            "Comprehensive project estimates",
            "Transparent budgeting"
        ],
        statement: "We offer detailed bill of quantities and estimates to help you plan and budget your construction project. Our estimates are comprehensive and transparent, providing a clear breakdown of costs including materials, labor, and contingencies.",
        image: "path/to/image4.jpg"
    },
    {
        title: "AUTOCAD TRAINING",
        category: "Training",
        icon: GraduationCap,
        highlights: [
            "Beginner to advanced training",
            "Hands-on instruction",
            "3D modeling and design"
        ],
        statement: "Our comprehensive AutoCAD training program is designed to equip you with the skills needed to excel in the field of architectural design. Whether you are a beginner or an advanced user, our training program is tailored to meet your needs.",
        image: "path/to/image5.jpg"
    },
    {
        title: "SETTING OUT",
        category: "Construction",
        icon: Ruler,
        highlights: [
            "Precise project layout",
            "Advanced equipment",
            "Error prevention"
        ],
        statement: "Precise setting out services are essential for the accurate construction of any project. We use advanced equipment and techniques to mark out the positions of structures and foundations, helping prevent costly errors.",
        image: "path/to/image6.jpg"
    },
    {
        title: "BUILDING MATERIALS",
        category: "Materials",
        icon: Layers,
        highlights: [
            "High-quality materials",
            "Industry standard compliant",
            "Wide range available"
        ],
        statement: "We supply high-quality building materials to meet all your construction needs. Our materials are sourced from reputable suppliers and meet industry standards, ensuring the longevity and stability of your project.",
        image: "path/to/image7.jpg"
    },
    {
        title: "BUILDING PERMIT",
        category: "Consultancy",
        icon: Briefcase,
        highlights: [
            "Expert guidance",
            "Document preparation",
            "Regulatory compliance"
        ],
        statement: "Our consultancy services provide expert guidance to help you secure the necessary permits for your project. We assist with the preparation and submission of all required documents, ensuring compliance with local regulations.",
        image: "path/to/image8.jpg"
    },
    {
        title: "SOIL TEST",
        category: "Surveying",
        icon: Compass,
        highlights: [
            "Detailed soil analysis",
            "Site suitability assessment",
            "Foundation recommendations"
        ],
        statement: "Professional soil testing services are essential for assessing the suitability of your site for construction. Our soil testing services provide detailed analysis of soil composition, strength, and stability to inform your project planning.",
        image: "path/to/image9.jpg"
    },
    {
        title: "EPA & FIRE CERTIFICATE",
        category: "Consultancy",
        icon: ClipboardCheck,
        highlights: [
            "Regulatory compliance",
            "Document preparation",
            "Safety certification"
        ],
        statement: "Our consultancy services help you obtain the necessary EPA and fire certificates for your project. We assist with the preparation and submission of all required documents, ensuring compliance with environmental and safety regulations.",
        image: "path/to/image10.jpg"
    },
    {
        title: "PLANNING SCHEMES/LAYOUT",
        category: "Drawings",
        icon: DraftingCompass,
        highlights: [
            "Comprehensive planning",
            "Functional designs",
            "Regulatory compliance"
        ],
        statement: "We provide comprehensive planning schemes and layout services to help you design and organize your project. Our team of experienced planners and designers works closely with you to create detailed and functional layouts that meet all requirements.",
        image: "path/to/image11.jpg"
    },
    {
        title: "LAND ACQUISITION",
        category: "Consultancy",
        icon: Map,
        highlights: [
            "Site identification",
            "Market evaluation",
            "Purchase negotiation"
        ],
        statement: "Our consultancy services provide expert guidance in the process of land acquisition. We assist with the identification and evaluation of potential sites, negotiation of purchase terms, and preparation of necessary documents.",
        image: "path/to/image12.jpg"
    },
    {
        title: "LAND REGISTRATION",
        category: "Consultancy",
        icon: BookOpen,
        highlights: [
            "Document preparation",
            "Legal compliance",
            "Registration assistance"
        ],
        statement: "Our consultancy services help you navigate the process of land registration. We assist with the preparation and submission of all required documents, ensuring compliance with local regulations and a smooth registration process.",
        image: "path/to/image13.jpg"
    }
];


const categories = ["All", "Drawings", "Construction", "Training", "Consultancy", "Surveying", "Materials"];


const DetailedServicesPage = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? allServices
            : allServices.filter((s) => s.category === active);

    return (
        <div className="w-full">
            <Header />

            <section
                className="w-full py-24 relative"
                style={{
                    backgroundImage:
                        "url('/assets/services-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                <div className="relative z-10 w-[90%] lg:w-[80%] m-auto">
                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUpVariants}
                        className="text-center"
                    >
                        <h1 className="text-turquoise text-sm tracking-[0.3em]">
                            OUR SERVICES
                        </h1>
                        <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mt-2">
                            What We Offer
                        </h2>
                        <div className="w-24 h-1.5 bg-turquoise mx-auto mt-4"></div>
                    </motion.div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-6 py-2 rounded-full border ${active === cat
                                    ? "border-turquoise text-turquoise"
                                    : "border-gray-500 text-gray-300"
                                    } hover:border-turquoise hover:text-turquoise transition`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                        {filtered.map((svc, i) => {
                            const Icon = svc.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={zoomInVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="bg-white/10 backdrop-blur-md border border-white/20 hover:border-turquoise 
                    rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="text-turquoise" size={38} />
                                        <h3 className="text-white text-xl font-semibold tracking-wide uppercase">
                                            {svc.title}
                                        </h3>
                                    </div>

                                    <ul className="mt-4 space-y-1 text-gray-300 text-sm">
                                        {svc.highlights.map((h, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-turquoise rounded-full"></div>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="text-gray-200 text-sm mt-4 italic">
                                        {svc.statement}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={slideUpVariants}
                        className="text-center mt-24"
                    >
                        <h3 className="text-white text-2xl font-semibold">
                            Ready to start your project?
                        </h3>
                        <p className="text-gray-300 mt-2">
                            Our engineering team is prepared to bring your ideas to life with precision.
                        </p>
                        <a
                            href="/booking"
                            className="inline-block mt-6 px-10 py-3 bg-turquoise text-black font-semibold rounded-full 
              hover:bg-white transition"
                        >
                            Book a Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default DetailedServicesPage;
