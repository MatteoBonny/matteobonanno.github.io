import React from 'react';
import Spline from '@splinetool/react-spline';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

export default function LogoComponent() {

  return (
      <div className="relative w-screen h-screen flex flex-col">
    <BaseLayout>
      {/* Contenitore principale che occupa l'intera altezza dello schermo */}
        
        {/* Contenuto Spline che si espande solo per l'altezza disponibile */}
        <div className="flex-grow h-0 w-full">
          <Spline
            scene="https://prod.spline.design/Bb63zHSxfApotN9Y/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        {/* Div bianco in basso a destra */}
        <div className="absolute bottom-0 right-0 w-40 h-20 bg-white z-40" />
    </BaseLayout>
      </div>
  );
}
