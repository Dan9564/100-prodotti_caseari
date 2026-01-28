'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(
  () => import('./InteractiveMap'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center animate-pulse">
        <div className="text-gray-400 font-medium">Caricamento Mappa...</div>
      </div>
    )
  }
);

export default InteractiveMap;
