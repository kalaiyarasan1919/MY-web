"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Modal component for image preview
function ImageModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div className="relative">
        <Image src={src} alt={alt} width={400} height={400} className="rounded-lg" />
      </div>
    </div>
  );
}

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>mobile app security</li>
        <li>Vulnerability assessment and penetration testing</li>
        <li>cybersecurity</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>karpagam Institute of technology, coimbatore</li>
    
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (props) => (
      <CertificationsList openModal={props.openModal} />
    ),
  },
];

// Certification list as a separate component to use modal logic
function CertificationsList({ openModal }) {
  return (
    <ul className="list-none pl-2 flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <Image
          src="/images/projects/kalai.png"
          alt="Cisco Networking Academy"
          width={80}
          height={80}
          className="cursor-pointer"
          onClick={() => openModal("/images/projects/kalai.png", "Cisco Networking Academy")}
        />
        <span>Cisco Networking Academy</span>
      </li>
      <li className="flex items-center gap-4">
        <Image src="/images/projects/cyber.png" alt="Introduction to Cyber Security" width={80} height={80} className="cursor-pointer" onClick={() => openModal("/images/projects/cyber.png", "Introduction to Cyber Security")} />
        <span>Introduction to Cyber Security</span>
      </li>
      <li className="flex items-center gap-4">
        <Image src="/images/projects/kalai1.PNG" alt="Network Security: ARP Spoofing - Hands-on (BCBUZZ Technologies)" width={80} height={80} className="cursor-pointer" onClick={() => openModal("/images/projects/kalai1.PNG", "Network Security: ARP Spoofing - Hands-on (BCBUZZ Technologies)")} />
        <span>Network Security: ARP Spoofing - Hands-on (BCBUZZ Technologies)</span>
      </li>
      <li className="flex items-center gap-4">
        <Image src="/images/projects/dbms.png" alt="Data Base Management System (NPTEL, IIT Kharagpur)" width={80} height={80} className="cursor-pointer" onClick={() => openModal("/images/projects/dbms.png", "Data Base Management System (NPTEL, IIT Kharagpur)")} />
        <span>Data Base Management System (NPTEL, IIT Kharagpur)</span>
      </li>
    </ul>
  );
}

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState("");

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const openModal = (src, alt) => {
    setModalImg(src);
    setModalAlt(alt);
  };
  const closeModal = () => setModalImg(null);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col items-start">
          <div className="relative mt-4 ml-4">
            <Image
              src="/images/hero-image.jpeg"
              width={200}
              height={200}
              alt="Kalaiyarasan B"
              className="border-4 border-purple-500 shadow-lg"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 border-4 border-blue-400 opacity-75 animate-pulse"></div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Kalaiyarasan B, a Computer Science Engineering student at Karpagam Institute of Technology. I have a strong interest in cybersecurity and possess skills in securing digital systems, analyzing threats, and implementing security measures. Additionally, I am continuously expanding my knowledge in the field to stay updated with the latest advancements
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "certifications"
              ? <CertificationsList openModal={openModal} />
              : TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <ImageModal src={modalImg} alt={modalAlt} onClose={closeModal} />
    </section>
  );
};

export default AboutSection;
