
import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { project as projectList } from "../constants";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";
import gsap from "gsap";

const ProjectDetail = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList.find((p) => p.id === `project-${id}`);

  // Refs for animation
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.3, ease: "expo.out" }
      );
    }
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.5, ease: "power2.out" }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.7, ease: "power2.out" }
      );
    }
  }, [id]);

  if (!project) return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-white/10 p-8 rounded-xl shadow-lg mt-20">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Project not found.</h2>
          <button onClick={() => navigate(-1)} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Back</button>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div ref={cardRef} className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 mt-24 border border-white/10 hover:shadow-blue-500/20 transition-shadow duration-500">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              ref={imgRef}
              src={project.icon}
              alt={project.title}
              className="w-full max-w-xs rounded-2xl shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-blue-500/20 to-purple-500/10"
              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1
              ref={titleRef}
              className="text-5xl font-extrabold text-white mb-6 font-Squada tracking-tight drop-shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {project.title}
            </h1>
            <p
              ref={descRef}
              className="text-xl text-slate-100 mb-8 font-poppins leading-relaxed border-l-4 border-blue-400 pl-4 bg-white/5 rounded-lg shadow-inner"
            >
              {project.content}
            </p>
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-fit"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
