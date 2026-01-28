'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icon in Leaflet with Next.js/Webpack
// Using local assets to ensure reliability and performance (no external requests)
const iconUrl = '/leaflet/marker-icon.png';
const iconRetinaUrl = '/leaflet/marker-icon-2x.png';
const shadowUrl = '/leaflet/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface MapProps {
    center?: [number, number];
    zoom?: number;
    className?: string;
    popupTitle?: string;
    popupSubtitle?: React.ReactNode;
}

const Map = ({ 
    center = [48.6537, 2.3633], // Default to HQ
    zoom = 13, 
    className,
    popupTitle = "100% Prodotto Italiano",
    popupSubtitle = "Sede Legale"
}: MapProps) => {
    
    // Ensure map invalidates size on load to prevent rendering issues
    useEffect(() => {
        // Trigger a resize event to ensure Leaflet calculates dimensions correctly
        window.dispatchEvent(new Event('resize'));
    }, []);

    return (
        <MapContainer 
            center={center} 
            zoom={zoom} 
            scrollWheelZoom={false} 
            className={`z-0 ${className || ''}`}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} icon={customIcon}>
                <Popup className="font-sans">
                    <div className="text-center p-1">
                        <strong className="text-brand-blue block mb-1">{popupTitle}</strong>
                        <span className="text-gray-600 text-sm">{popupSubtitle}</span>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
