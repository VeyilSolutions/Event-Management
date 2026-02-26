"use client";

import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Play, Camera, Star, Users, MapPin } from 'lucide-react';

/**
 * UPDATED DATA: EVENT MANAGEMENT FOCUS
 */
const GALLERY_DATA = {
  photography: [
    { id: 'ev-img-1', type: 'image', tag: 'Stage Design', title: 'Global Tech Summit', desc: 'Custom LED stage architecture and lighting design.', url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a', span: 'md:col-span-2 md:row-span-2' },
    { id: 'ev-img-2', type: 'image', tag: 'Corporate', title: 'Executive Gala', desc: 'Premium table settings and floral arrangements.', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622', span: 'md:col-span-1 md:row-span-1' },
    { id: 'ev-img-3', type: 'image', tag: 'Branding', title: 'Product Launch', desc: 'Immersive brand activation zone.', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678', span: 'md:col-span-1 md:row-span-1' },
    { id: 'ev-img-4', type: 'image', tag: 'Logistics', title: 'Crowd Flow', desc: 'Efficient management for 5000+ attendees.', url: 'https://images.unsplash.com/photo-1475721027785-f74dea327912', span: 'md:col-span-1 md:row-span-1' },
    { id: 'ev-img-5', type: 'image', tag: 'Lighting', title: 'Neon Night Run', desc: 'Atmospheric outdoor event lighting.', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', span: 'md:col-span-1 md:row-span-1' },
    { id: 'ev-img-6', type: 'image', tag: 'VIP', title: 'Artist Lounge', desc: 'Exclusive backstage hospitality setup.', url: 'https://images.unsplash.com/photo-1514525253344-99a4297110cb', span: 'md:col-span-2 md:row-span-1' },
  ],
  cinematography: [
    { id: 'ev-vid-1', type: 'video', tag: 'Highlight Reel', title: '2025 Event Showcase', desc: 'A montage of our most complex event executions.', videoId: '_aMeJYUJXW8', span: 'md:col-span-2 md:row-span-2' },
    { id: 'ev-vid-2', type: 'video', tag: 'BTS', title: 'The Making Of', desc: 'Behind the scenes: From empty hall to grand opening.', videoId: '5O1v9H-Y0Lw', span: 'md:col-span-2 md:row-span-1' },
    { id: 'ev-vid-3', type: 'video', tag: 'Testimonial', title: 'Client Success', desc: 'Feedback from our Fortune 500 partners.', videoId: 'dQw4w9WgXcQ', span: 'md:col-span-2 md:row-span-1' },
    { id: 'ev-vid-4', type: 'video', tag: 'Technical', title: 'AV Setup', desc: 'Time-lapse of the 4K LED wall installation.', videoId: '7e90gBu4pas', span: 'md:col-span-1 md:row-span-1' },
    { id: 'ev-vid-5', type: 'video', tag: 'Aftermovie', title: 'Charity Ball', desc: 'Capture the emotion and impact of the night.', videoId: 'L_LUpnjgPso', span: 'md:col-span-1 md:row-span-1' },
  ]
};

const springTransition = { type: "spring", stiffness: 300, damping: 30 };

export default function EventGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div  className="min-h-screen bg-[#050505] text-white py-16 px-6 md:px-12 font-sans selection:bg-gold-500">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EVENT HEADER --- */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div id="event-gallery" className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-12 bg-neutral-700"></span>
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-500 font-bold">Event Portfolio</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase">
              Impact <br />
              <span className="text-neutral-800 italic underline decoration-neutral-900 underline-offset-8">Gallery.</span>
            </h1>
          </Motion.div>
          
          <Motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-neutral-500 text-lg max-w-sm border-l border-neutral-800 pl-6"
          >
            From conceptual design to on-site management. Witness our high-definition execution.
          </Motion.p>
        </header>

        {/* --- SECTION 1: STILL MOMENTS (PHOTOGRAPHY) --- */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Camera className="text-neutral-600" size={20} />
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Still Frames / Decor</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[260px]">
            {GALLERY_DATA.photography.map((item) => (
              <BentoCard key={item.id} item={item} onOpen={() => setSelectedItem(item)} />
            ))}
          </div>
        </section>

        {/* --- SECTION 2: MOTION CAPTURE (VIDEOS) --- */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Play className="text-neutral-600" size={20} />
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Cinematic Experience (1080p)</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[260px]">
            {GALLERY_DATA.cinematography.map((item) => (
              <BentoCard key={item.id} item={item} onOpen={() => setSelectedItem(item)} />
            ))}
          </div>
        </section>
      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <Motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-3xl cursor-pointer"
            />

            <Motion.button 
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 p-4 bg-white/5 hover:bg-white text-white hover:text-black rounded-full z-[110] transition-colors"
            >
              <X size={24} />
            </Motion.button>

            <Motion.div 
              layoutId={`box-${selectedItem.id}`}
              transition={springTransition}
              className="relative w-full max-w-6xl aspect-video bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl z-[105]"
            >
              {selectedItem.type === 'video' ? (
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              ) : (
                <img src={selectedItem.url} className="w-full h-full object-cover" alt={selectedItem.title} />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest mb-4 inline-block">{selectedItem.tag}</span>
                <h2 className="text-4xl font-black tracking-tighter">{selectedItem.title}</h2>
                <p className="text-neutral-400 mt-2 text-lg">{selectedItem.desc}</p>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BentoCard({ item, onOpen }) {
  const thumbUrl = item.type === 'video' 
    ? `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` 
    : item.url;

  return (
    <Motion.div
      layoutId={`box-${item.id}`}
      onClick={onOpen}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`relative rounded-[2rem] overflow-hidden cursor-pointer bg-neutral-900 border border-white/5 group ${item.span}`}
    >
      <Motion.img 
        src={thumbUrl} 
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
        onError={(e) => {
          if (item.type === 'video') e.target.src = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;
        }}
      />
      
      {/* Category Tag */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
          {item.tag}
        </span>
      </div>

      {item.type === 'video' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Motion.div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
            <Play className="fill-current ml-1" size={24} />
          </Motion.div>
        </div>
      )}

      {/* Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
        <h3 className="text-xl font-bold tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
        <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Project Details</p>
      </div>
    </Motion.div>
  );
}