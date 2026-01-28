'use client';

import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Polyline, Pane } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Custom Marker Icon with Pulse Effect
const createCustomIcon = (color: string) => L.divIcon({
  className: 'custom-marker-icon',
  html: `
    <div style="position: relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
      <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; opacity: 0.75; background-color: ${color}; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
      <div style="position: relative; width: 12px; height: 12px; border-radius: 50%; background-color: ${color}; border: 2px solid white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const originIcon = createCustomIcon('#008C45'); // Italy Green
const destIcon = createCustomIcon('#CD212A');   // France Red (or close to it)
const brandIcon = createCustomIcon('#264e70');  // Brand Blue

interface InteractiveMapProps {
  className?: string;
}

// Helper to calculate Quadratic Bezier Curve points
function getBezierPoints(start: [number, number], end: [number, number], control: [number, number], numPoints: number = 100): [number, number][] {
  const points: [number, number][] = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat = (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * control[0] + t * t * end[0];
    const lng = (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * control[1] + t * t * end[1];
    points.push([lat, lng]);
  }
  return points;
}

export default function InteractiveMap({ className }: InteractiveMapProps) {
  const [geoJsonData, setGeoJsonData] = useState(null);

  // Coordinates
  // Piana del Sele (approx. center of production area, near Eboli/Battipaglia)
  const pianaDelSele: [number, number] = [40.5200, 15.0000]; 
  // Paris (Viry-Châtillon, Headquarters)
  const paris: [number, number] = [48.6695, 2.3728];
  
  // Control Point for the curve (offset towards the Alps/Switzerland)
  const controlPoint: [number, number] = [46.5, 6.5];

  const routePoints = getBezierPoints(pianaDelSele, paris, controlPoint);
  
  // Center view between the two points
  const centerView: [number, number] = [45.00, 9.00];
  const defaultZoom = 5;

  useEffect(() => {
    // Fetch simplified World GeoJSON
    fetch('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson')
      .then(response => response.json())
      .then(data => setGeoJsonData(data));
  }, []);

  const geoJsonStyle = (feature: any) => {
    const isTargetCountry = feature.properties.adm0_a3 === 'ITA' || feature.properties.adm0_a3 === 'FRA';
    
    return {
      fillColor: isTargetCountry ? '#ffffff' : '#e5e7eb', // White for IT/FR, Light Gray for others
      weight: isTargetCountry ? 1.5 : 0.5, // Border only for IT/FR
      opacity: 1,
      color: isTargetCountry ? '#d1d5db' : '#e5e7eb', // Subtle borders
      dashArray: '',
      fillOpacity: 1
    };
  };

  return (
    <div className={`w-full h-full min-h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-[#b6d0e2] relative ${className}`}>
      {/* Global Style for Ping Animation */}
      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      <MapContainer 
        center={centerView} 
        zoom={defaultZoom} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%', background: 'transparent' }}
        className="z-0"
        zoomControl={false} // Minimalist look
        attributionControl={false}
      >
        {/* No TileLayer needed for this custom style - Background color handles the "Sea" */}
        
        {geoJsonData && (
          <GeoJSON 
            data={geoJsonData} 
            style={geoJsonStyle}
          />
        )}

        {/* The Route Path - Forced on top using a custom Pane */}
        <Pane name="route-pane" style={{ zIndex: 499 }}>
          <Polyline 
            positions={routePoints} 
            pathOptions={{ 
              color: '#264e70', 
              weight: 3, 
              dashArray: '10, 10', 
              opacity: 0.8,
              lineCap: 'round'
            }} 
          />
        </Pane>

        {/* Marker: Piana del Sele */}
        <Marker position={pianaDelSele} icon={originIcon}>
          <Popup className="custom-popup">
            <div className="text-center p-2">
              <div className="uppercase text-xs font-bold text-gray-400 tracking-wider mb-1">Origine</div>
              <strong className="text-brand-blue text-lg block leading-none">Piana del Sele</strong>
              <span className="text-gray-500 text-sm">Italia</span>
            </div>
          </Popup>
        </Marker>

        {/* Marker: Paris */}
        <Marker position={paris} icon={destIcon}>
          <Popup className="custom-popup">
            <div className="text-center p-2">
              <div className="uppercase text-xs font-bold text-gray-400 tracking-wider mb-1">Destinazione</div>
              <strong className="text-brand-blue text-lg block leading-none">Viry-Châtillon</strong>
              <span className="text-gray-500 text-sm">Francia (Paris)</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
