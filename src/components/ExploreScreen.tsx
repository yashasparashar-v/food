import { Search, MapPin, Menu, Home, Grid, Heart, User, Filter, SlidersHorizontal, Map as MapIcon, MessageCircle } from "lucide-react";

interface ExploreScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ExploreScreen({ onNavigate }: ExploreScreenProps) {
  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between pointer-events-none mb-6">
           <h1 className="text-4xl font-black uppercase tracking-tight text-vibrant-purple brutal-shadow-sm select-none" style={{textShadow: '3px 3px 0 #111111'}}>Explore</h1>
           <div onClick={(e) => { e.stopPropagation(); onNavigate('profile'); }} className="w-12 h-12 rounded-full border-4 border-deep-black overflow-hidden brutal-shadow pointer-events-auto cursor-pointer hover:-translate-y-1 hover:shadow-none transition-all">
             <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover bg-bright-yellow" />
           </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-deep-black" />
          </div>
          <input 
            type="text" 
            placeholder="Search cafes, dosa, jain thali..."
            className="w-full bg-white border-4 border-vibrant-purple rounded-[20px] py-4 pl-12 pr-6 text-lg font-bold placeholder:text-deep-black/50 brutal-shadow focus:outline-none focus:ring-4 focus:ring-vibrant-purple transition-all"
          />
        </div>

        {/* Quick Dietary Filters */}
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          <button className="whitespace-nowrap bg-lime-green border-[3px] border-deep-black rounded-[20px] px-5 py-2.5 font-bold uppercase tracking-wide brutal-shadow flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white border-[2px] border-deep-black"></div>
            Pure Veg
            <span className="ml-1 text-sm">×</span>
          </button>
          <button className="whitespace-nowrap bg-white border-[3px] border-deep-black rounded-[20px] px-5 py-2.5 font-bold uppercase tracking-wide brutal-shadow flex items-center gap-2">
            Under ₹300
            <span className="ml-1 text-sm">×</span>
          </button>
          <button className="whitespace-nowrap bg-white border-[3px] border-deep-black rounded-[20px] px-5 py-2.5 font-bold uppercase tracking-wide brutal-shadow flex items-center gap-2">
            Open Now
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-32">
        
        {/* Toggle Veg / Non-Veg / Jain blocks */}
        <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-lime-green border-[3px] border-deep-black rounded-2xl p-3 text-center font-bold uppercase text-xs brutal-shadow flex flex-col items-center justify-center gap-1 cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <div className="w-4 h-4 rounded-full border-[2px] border-deep-black bg-white flex items-center justify-center"><div className="w-2 h-2 rounded-full border-[1px] border-deep-black bg-lime-green"></div></div>
                Pure Veg
            </div>
            <div className="bg-orange-red text-white border-[3px] border-deep-black rounded-2xl p-3 text-center font-bold uppercase text-xs brutal-shadow flex flex-col items-center justify-center gap-1 cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <div className="w-4 h-4 rounded-full border-[2px] border-white flex items-center justify-center"><div className="w-2 h-2 rounded-full border-[1px] border-white bg-orange-red"></div></div>
                Non-Veg
            </div>
            <div className="bg-white border-[3px] border-deep-black rounded-2xl p-3 text-center font-bold uppercase text-xs brutal-shadow flex flex-col items-center justify-center gap-1 cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <div className="w-4 h-4 flex items-center justify-center border-2 border-deep-black rotate-45"><div className="w-1.5 h-1.5 bg-deep-black"></div></div>
                Jain
            </div>
        </div>

        {/* Browse by vibe */}
        <div className="flex items-center justify-between mb-4 mt-2">
          <h2 className="text-2xl font-black uppercase tracking-tight">By Vibe</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-vibrant-purple border-[3px] border-deep-black rounded-lg brutal-shadow flex items-center justify-center text-white">
              <Grid className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white border-[3px] border-deep-black rounded-lg brutal-shadow flex items-center justify-center">
              <MapIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div onClick={() => onNavigate('cafes')} className="bg-dark-purple border-4 border-deep-black rounded-[20px] p-5 brutal-shadow-sm text-white aspect-[4/3] flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:translate-y-[2px] hover:shadow-none transition-all">
            <div className="text-3xl z-10">🍵</div>
            <span className="font-black uppercase text-sm tracking-widest mt-auto z-10">Cafes</span>
          </div>
          <div onClick={() => onNavigate('southindian')} className="bg-bright-yellow border-4 border-deep-black rounded-[20px] p-5 brutal-shadow-sm aspect-[4/3] flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:translate-y-[2px] hover:shadow-none transition-all">
             <div className="text-3xl z-10">🍱</div>
            <span className="font-black uppercase text-sm tracking-widest mt-auto z-10">South Indian</span>
          </div>
          <div className="bg-peach border-4 border-deep-black rounded-[20px] p-5 brutal-shadow-sm aspect-[4/3] flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:translate-y-[2px] hover:shadow-none transition-all">
             <div className="text-3xl z-10">🍔</div>
            <span className="font-black uppercase text-sm tracking-widest mt-auto z-10">Street Food</span>
          </div>
          <div className="bg-lime-green border-4 border-deep-black rounded-[20px] p-5 brutal-shadow-sm aspect-[4/3] flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:translate-y-[2px] hover:shadow-none transition-all">
             <div className="text-3xl z-10">🥗</div>
            <span className="font-black uppercase text-sm tracking-widest mt-auto z-10">Healthy</span>
          </div>
        </div>

        {/* 42 Places Near You */}
        <div className="relative mb-6">
          <div className="absolute -left-6 top-1 text-bright-yellow">
            <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current" style={{ transform: 'rotate(-15deg)' }}>
              <polygon points="50,0 60,35 95,35 65,55 75,90 50,70 25,90 35,55 5,35 40,35" stroke="#111111" strokeWidth="6" strokeLinejoin="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-black text-xl text-deep-black" style={{ transform: 'rotate(-5deg)' }}>42</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight ml-12 leading-none">Places Near<br/>You</h2>
        </div>
        
        <div className="flex justify-between items-center mb-6">
           <button className="uppercase text-xs font-bold font-sans tracking-widest underline decoration-deep-black decoration-2 underline-offset-4">
             Sort By: Recommended ▼
           </button>
        </div>

        {/* Card 1 */}
        <div onClick={() => onNavigate('restaurant')} className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-6 relative cursor-pointer hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-gray-200 relative overflow-hidden border-b-4 border-deep-black">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80" alt="Samosa" className="w-full h-full object-cover" />
            <div className="absolute top-4 right-4 bg-bright-yellow border-[3px] border-deep-black px-3 py-1 font-black text-sm uppercase rounded shadow-[2px_2px_0_#111111] flex items-center gap-1">
               <svg className="w-3 h-3 fill-deep-black" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
               4.8
            </div>
          </div>
          <div className="p-5 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-black uppercase tracking-tight w-3/4">Spicy Samosa Street</h3>
              <div className="bg-peach border-2 border-deep-black px-2 py-0.5 rounded text-sm font-black shadow-[2px_2px_0_#111111]">₹₹</div>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide opacity-80 mt-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 500m</span>
              <span className="flex items-center gap-1"><Grid className="w-4 h-4" /> Veg/Non-Veg</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div onClick={() => onNavigate('restaurant')} className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-8 relative cursor-pointer hover:-translate-y-1 transition-transform">
          <div className="h-48 bg-gray-200 relative overflow-hidden border-b-4 border-deep-black">
            <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" alt="Thali" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-lime-green border-[3px] border-deep-black px-3 py-1 font-black text-sm uppercase rounded shadow-[2px_2px_0_#111111]">
               Pure Veg
            </div>
            <div className="absolute top-4 right-4 bg-bright-yellow border-[3px] border-deep-black px-3 py-1 font-black text-sm uppercase rounded shadow-[2px_2px_0_#111111] flex items-center gap-1">
               <svg className="w-3 h-3 fill-deep-black" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
               4.5
            </div>
          </div>
          <div className="p-5 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-black uppercase tracking-tight w-3/4">The Thali House</h3>
              <div className="bg-peach border-2 border-deep-black px-2 py-0.5 rounded text-sm font-black shadow-[2px_2px_0_#111111]">₹₹</div>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wide opacity-80 mt-4">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> 1.2km</span>
              <span className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"/><path d="M12 6a6 6 0 1 0 0 12 6 6 0 1 0 0-12Z"/><path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4Z"/></svg> Pure Veg</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Buttons */}
      <div className="absolute bottom-28 right-6 z-40">
        <div className="relative">
          <div className="absolute inset-0 bg-bright-yellow rounded-full scale-110 -z-10 translate-x-1 translate-y-1"></div>
          <button className="w-14 h-14 bg-vibrant-purple border-4 border-deep-black rounded-full brutal-shadow text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            <Filter className="w-6 h-6" />
          </button>
        </div>
      </div>

       {/* Bottom Navigation */}
       <div className="absolute bottom-0 inset-x-0 p-4 z-50">
        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow-lg flex items-center justify-around p-2">
          {/* Home */}
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <Home className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Home</span>
          </button>
          
          {/* Explore - Active */}
          <button onClick={() => onNavigate('explore')} className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <Search className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
          </button>
          
          {/* AI Chat */}
          <button onClick={() => onNavigate('ai')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <div className="w-6 h-6 mb-1 border-2 border-deep-black border-dashed rounded-full flex items-center justify-center opacity-60">
              <div className="w-3 h-3 bg-deep-black rounded-full" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">AI Chat</span>
          </button>
          
          {/* Favorites */}
          <button onClick={() => onNavigate('biteboard')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <Heart className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Faves</span>
          </button>
          
          {/* Profile */}
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <User className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Me</span>
          </button>
        </div>
      </div>

    </div>
  );
}
