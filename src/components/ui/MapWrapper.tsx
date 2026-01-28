'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-blue-50 flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
    </div>
  )
});

interface MapWrapperProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  popupTitle?: string;
  popupSubtitle?: React.ReactNode;
}

export default function MapWrapper(props: MapWrapperProps) {
  return <Map {...props} />;
}
