'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface RouteMapProps {
  className?: string;
}

export default function RouteMap({ className }: RouteMapProps) {
  // Coordinates in percentage (0-100) relative to the container
  // Based on a bounding box covering France + Italy
  // Top-Left: ~52N, -2E (North of Paris, West of France)
  // Bottom-Right: ~36N, 18E (South of Sicily, East of Italy)
  
  // Paris (Viry-Châtillon): ~48.65N, 2.36E
  // Piana del Sele: ~40.52N, 15.00E
  
  // Calculations:
  // Lat Range: 16 deg. Long Range: 20 deg.
  // Paris Y: (52 - 48.65) / 16 = ~21%
  // Paris X: (2.36 - (-2)) / 20 = ~22%
  
  // Piana Y: (52 - 40.52) / 16 = ~72%
  // Piana X: (15.00 - (-2)) / 20 = ~85%

  const startPoint = { x: 85, y: 72 }; // Piana del Sele
  const endPoint = { x: 22, y: 21 };   // Paris

  // Control point for Bezier curve to make it look nice (arcing over the sea/Alps)
  // Let's pull it slightly West to arc over the Tyrrhenian Sea
  const controlPoint = { x: 45, y: 65 };

  return (
    <div className={`relative w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden border-2 border-dashed border-gray-400 ${className}`}>
      {/* Background Placeholder - User will insert map image here */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        {/* Placeholder Image - Replace 'src' with your map image */}
        {/* <img src="/images/your-map.jpg" alt="Map Background" className="w-full h-full object-cover" /> */}
        
        {/* Grid pattern to help alignment */}
        <div className="w-full h-full" style={{ 
            backgroundImage: 'radial-gradient(#264e70 1px, transparent 1px)', 
            backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 z-0 pointer-events-none p-4 text-center">
        <MapPin size={48} className="mb-2 opacity-50" />
        <span className="font-bold text-lg">MAPPA DI BACKGROUND MANCANTE</span>
        <span className="text-sm">Inserisci la tua immagine qui</span>
      </div>

      {/* SVG Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* The Route Path */}
        <motion.path
          d={`M ${startPoint.x} ${startPoint.y} Q ${controlPoint.x} ${controlPoint.y} ${endPoint.x} ${endPoint.y}`}
          fill="transparent"
          stroke="#264e70" // brand-blue
          strokeWidth="0.8"
          strokeDasharray="2 1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated Dot moving along the path (optional, maybe too complex for simple request, let's keep it clean) */}
      </svg>

      {/* Start Point Marker (Piana del Sele) */}
      <motion.div 
        className="absolute z-20 flex flex-col items-center"
        style={{ left: `${startPoint.x}%`, top: `${startPoint.y}%`, transform: 'translate(-50%, -50%)' }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="relative">
          <div className="w-3 h-3 bg-italy-green rounded-full shadow-lg border-2 border-white animate-pulse"></div>
          <div className="absolute -inset-2 bg-italy-green/30 rounded-full animate-ping"></div>
        </div>
        <div className="mt-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow text-[10px] font-bold text-brand-blue whitespace-nowrap">
          Piana del Sele
        </div>
      </motion.div>

      {/* End Point Marker (Paris) */}
      <motion.div 
        className="absolute z-20 flex flex-col items-center"
        style={{ left: `${endPoint.x}%`, top: `${endPoint.y}%`, transform: 'translate(-50%, -50%)' }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <MapPin className="text-brand-blue fill-brand-blue/20 drop-shadow-md" size={24} />
        <div className="mt-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded shadow text-[10px] font-bold text-brand-blue whitespace-nowrap">
          Viry-Châtillon (Paris)
        </div>
      </motion.div>

    </div>
  );
}
