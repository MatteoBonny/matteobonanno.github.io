import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import json from "../../data/data.json";
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import Footer_Button from "../../components/Footer_Button/Footer_Button";

const WorkViewer = () => {
  const { title } = useParams();
  const [works, setWorks] = useState([]);
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const workArray = Object.values(json);
    setWorks(workArray);

    const foundIndex = workArray.findIndex(
      (work) => work.title.toLowerCase() === title.toLowerCase()
    );
    
    if (foundIndex !== -1) {
      setCurrentWorkIndex(foundIndex);
    }
  }, [title]);

  const nextWork = () => {
    const nextIndex = (currentWorkIndex + 1) % works.length;
    navigate(`/work/${works[nextIndex].title}`);
  };

  const prevWork = () => {
    const prevIndex = (currentWorkIndex - 1 + works.length) % works.length;
    navigate(`/work/${works[prevIndex].title}`);
  };

  if (works.length === 0) {
    return <div>Caricamento...</div>;
  }

  const currentWork = works[currentWorkIndex];

  return (
    <BaseLayout>
        <div className="px-12 bg-trasparent col-span-full pt-20 flex flex-col justify-center items-center min-h-screen text-center">
          <h2 className="text-4xl font-bold mb-4">{currentWork.title}</h2>
          <p className="text-2xl mb-12">{currentWork.description}</p>

          <div className="mb-6 w-full md: lg:">  
            <video key={currentWork.video} className="w-full h-auto rounded-lg" autoPlay muted loop>
              <source src={currentWork.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Prima fila: 2 immagini */}
              <div className="col-span-6 md:col-span-6 lg:col-span-6 aspect-w-1 aspect-h-1">
                <img 
                  src={currentWork.image} 
                  alt="work img1" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="col-span-6 md:col-span-6 lg:col-span-6 aspect-w-1 aspect-h-1">
                <img 
                  src={currentWork.image2} 
                  alt="work img2" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              {/* Seconda fila: 2 immagini */}
              <div className="col-span-6 md:col-span-6 lg:col-span-6 aspect-w-1 aspect-h-1">
                <img 
                  src={currentWork.image3} 
                  alt="work img3" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="col-span-6 md:col-span-6 lg:col-span-6 aspect-w-1 aspect-h-1">
                <img 
                  src={currentWork.image4} 
                  alt="work img4" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
            </div>
          </div>

          <div className="mt-6 mb-6 flex justify-center space-x-4">
            <button
              onClick={prevWork}
              className="rounded-lg px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
            ← Prev
            </button>
            <button
              onClick={nextWork}
              className="rounded-lg px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
            Next →
            </button>
          </div>
        </div>
    </BaseLayout>
  );
};

export default WorkViewer;
