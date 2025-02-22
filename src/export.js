import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING MATERIALS",
    about:
      "We provide high-quality building materials, ensuring durability and sustainability for all construction projects. From cement to steel, we have everything you need.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION WORKS",
    about:
      "Our team specializes in residential, commercial, and industrial construction projects, delivering top-notch quality and efficiency in every build.",
  },
  {
    icon: design,
    title: "BUILDING/ARCHITECTURAL DRAWINGS",
    about:
      "We create precise architectural and structural designs that bring your vision to life, ensuring aesthetics, functionality, and compliance with building regulations.",
  },
  {
    icon: document,
    title: "LAND ACQUISITION, LAND REGISTRATION, BUILDING PERMIT DOCUMENTATIONS",
    about:
      "We simplify the process of land acquisition, registration, and building permits, ensuring a smooth legal process for your construction projects.",
  },
  {
    icon: paint,
    title: "AUTO-CAD TRAINING",
    about:
      "Enhance your technical skills with our professional AutoCAD training programs, designed for engineers, architects, and designers looking to master 2D and 3D drafting.",
  },
  {
    icon: support,
    title: "CONSULTANCY SERVICES",
    about:
      "We offer expert consultancy services, including building permits, soil testing, Environmental Protection Agency (EPA) & fire certification, planning schemes/layouts, land acquisition, and land registration.",
  },
];

export const consultancyServices = [
  {
    title: "BUILDING PERMIT",
    about:
      "We assist in obtaining building permits, ensuring compliance with local regulations and legal requirements for hassle-free construction approval.",
  },
  {
    title: "SOIL TEST",
    about:
      "Our soil testing services assess ground stability and composition to ensure the safety and durability of your construction project.",
  },
  {
    title: "ENVIRONMENTAL PROTECTION AGENCY (EPA) & FIRE CERTIFICATE",
    about:
      "We facilitate the acquisition of EPA and fire safety certificates, ensuring your project meets environmental and safety standards.",
  },
  {
    title: "PLANNING SCHEMES/ LAYOUT",
    about:
      "Our team provides professional planning schemes and layout designs, optimizing land use for residential, commercial, and industrial projects.",
  },
  {
    title: "LAND ACQUISITION",
    about:
      "We offer expert guidance on land acquisition, ensuring a smooth and legally compliant purchasing process.",
  },
  {
    title: "LAND REGISTRATION",
    about:
      "We assist in land registration processes, helping you secure legal ownership with minimal complications.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "PLANNING",
    about:
      "Strategic   planning   is   crucial   in   every   construction   project.   We   analyze   requirements,   assess   risks,   and   develop   structured   plans   to   ensure   smooth   execution.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "DESIGN",
    about:
      "Our   design   team   focuses   on   innovation,   sustainability,   and   practicality,   creating   visually   appealing   and   structurally   sound   architectural   solutions.",
  },
  {
    icon: FaRegBuilding,
    title: "BUILDING",
    about:
      "From   groundbreaking   to   finishing   touches,   our   building   process   ensures   quality,   safety,   and   adherence   to   construction   standards   for   long-lasting   structures.",
  },
  {
    icon: FaSitemap,
    title: "FINISH",
    about:
      "Finalizing   construction   involves   meticulous   attention   to   detail,   ensuring   that   the   completed   project   meets   aesthetic,   functional,   and   safety   expectations.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "“Working with this team was an incredible experience. Their professionalism and attention to detail ensured that our project was completed on time and to the highest standards.”",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "“The architectural designs provided were exceptional. Every detail was carefully thought out, and the team was always available for modifications and advice.”",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "“Quality building materials and expert construction services made our project a success. I highly recommend their services for any construction needs.”",
    post: "Builder",
  },
];
