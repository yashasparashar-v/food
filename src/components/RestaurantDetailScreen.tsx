import { ArrowLeft, Star, MapPin, Search, Heart, Share2, MessageCircle, Home as HomeIcon, User, Clock, Phone, Navigation, Camera, Sparkles, BookmarkPlus } from "lucide-react";

interface RestaurantDetailScreenProps {
  onNavigate: (screen: string) => void;
}

export default function RestaurantDetailScreen({ onNavigate }: RestaurantDetailScreenProps) {
  return (
    <div className="h-full bg-[#FFF9EA] flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Hero Section */}
       <div className="relative h-96 border-b-4 border-deep-black shrink-0 relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cafe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-deep-black/30"></div>
          
          {/* Top Bar overlays */}
          <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-10 pt-12">
            <button onClick={() => onNavigate('home')} className="w-12 h-12 bg-white border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow hover:translate-y-1 hover:shadow-none transition-all">
               <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
                <button className="w-12 h-12 bg-white border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow hover:translate-y-1 hover:shadow-none transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 bg-white border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow hover:translate-y-1 hover:shadow-none transition-all text-[#EF4444]">
                  <Heart className="w-6 h-6" />
                </button>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
             <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#10B981] text-deep-black border-2 border-deep-black px-2 py-1 rounded-md font-black text-xs uppercase shadow-[2px_2px_0_#111]">Open</span>
                <span className="bg-white text-deep-black border-2 border-deep-black px-2 py-1 rounded-md font-black text-xs uppercase shadow-[2px_2px_0_#111]">South Indian</span>
             </div>
             
             <h1 className="text-4xl font-black uppercase tracking-tight leading-[1] mb-2 drop-shadow-md">
               Vidyarthi<br/>Bhavan
             </h1>
             
             <p className="text-white/80 font-bold text-sm uppercase tracking-wide flex items-center gap-2 mt-2">
               <MapPin className="w-4 h-4" /> Basavanagudi • ₹₹
             </p>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          
          {/* Action Row: Map & Save */}
          <div className="flex gap-3 mb-8">
             <button className="flex-1 bg-[#FCD34D] border-4 border-deep-black rounded-[20px] p-4 brutal-shadow flex items-center justify-center gap-3 hover:-translate-y-1 transition-all group">
                <div className="bg-white border-2 border-deep-black rounded-full w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Navigation className="w-5 h-5 text-deep-black" fill="currentColor" />
                </div>
                <span className="font-black uppercase tracking-wide text-lg">Open in Maps</span>
             </button>
             
             <button className="w-20 bg-white border-4 border-deep-black rounded-[20px] brutal-shadow flex flex-col items-center justify-center gap-1 hover:-translate-y-1 transition-all">
                <BookmarkPlus className="w-6 h-6" />
                <span className="font-bold uppercase text-[10px]">Save</span>
             </button>
          </div>

          {/* Place Information / Vibe */}
          <div className="bg-white border-4 border-deep-black rounded-[20px] brutal-shadow p-5 mb-8">
             <h3 className="font-black uppercase text-xl mb-3 border-b-2 border-deep-black/10 pb-2">The Vibe</h3>
             <p className="font-bold text-sm leading-relaxed opacity-80 mb-4">
               A legendary Bengaluru institution. Expect a long wait, shared tables, and the most iconic crispy, thick benne masala dosa swimming in butter. Pure nostalgia and chaos.
             </p>
             
             <div className="flex flex-wrap gap-2">
                <span className="bg-[#FFF9EA] border-2 border-deep-black px-3 py-1.5 text-xs font-black uppercase rounded-lg shadow-[2px_2px_0_#111]">🔥 Legendary</span>
                <span className="bg-[#FFF9EA] border-2 border-deep-black px-3 py-1.5 text-xs font-black uppercase rounded-lg shadow-[2px_2px_0_#111]">👨‍👩‍👧‍👦 Family</span>
                <span className="bg-[#FFF9EA] border-2 border-deep-black px-3 py-1.5 text-xs font-black uppercase rounded-lg shadow-[2px_2px_0_#111]">🌅 Early Morning</span>
             </div>
          </div>

          {/* Order On Section */}
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
            <span className="bg-[#10B981] w-3 h-8 block rounded-sm border-2 border-deep-black"></span>
            Order On
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
             <button className="bg-[#FC8019] border-4 border-deep-black rounded-2xl p-4 brutal-shadow flex items-center justify-between hover:-translate-y-1 transition-all">
                <span className="font-black text-white uppercase tracking-wider">Swiggy</span>
                <div className="bg-white w-8 h-8 rounded-full border-2 border-deep-black flex items-center justify-center font-black">→</div>
             </button>
             <button className="bg-[#E23744] border-4 border-deep-black rounded-2xl p-4 brutal-shadow flex items-center justify-between hover:-translate-y-1 transition-all">
                <span className="font-black text-white uppercase tracking-wider">Zomato</span>
                <div className="bg-white w-8 h-8 rounded-full border-2 border-deep-black flex items-center justify-center font-black">→</div>
             </button>
          </div>

          {/* AI Vibe Insight */}
          <div className="bg-[#7C3AED] border-4 border-deep-black rounded-[20px] p-5 brutal-shadow text-white relative overflow-hidden mb-8">
             <div className="absolute top-0 right-0 p-4 opacity-20">
               <Sparkles className="w-24 h-24" />
             </div>
             <h3 className="text-xl font-black uppercase tracking-tight mb-2 relative z-10 flex items-center gap-2">
               <Sparkles className="w-5 h-5 fill-current" /> Bite AI Insight
             </h3>
             <p className="font-bold text-sm opacity-90 relative z-10 leading-relaxed">
               "This place perfectly matches your 'Sunday Comfort Food' vibe. 89% of users who love crispy dosas rate this as their top Bengaluru pick."
             </p>
          </div>

          {/* Food Gallery */}
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
             <span className="bg-[#FCD34D] w-3 h-8 block rounded-sm border-2 border-deep-black"></span>
             Gallery
          </h2>
          
          <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
             <div className="min-w-[200px] aspect-[4/5] bg-gray-200 border-4 border-deep-black rounded-xl overflow-hidden shadow-[4px_4px_0_#111] snap-center shrink-0 relative rotate-2">
                <img src="https://images.unsplash.com/photo-1627308595229-7830f5c90683?w=500&q=80" alt="Dosa" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 right-3 bg-white border-2 border-deep-black px-2 py-1 rounded font-black text-xs shadow-[2px_2px_0_#111] rotate-[-5deg]">Benne Dosa</div>
             </div>
             <div className="min-w-[200px] aspect-[4/5] bg-gray-200 border-4 border-deep-black rounded-xl overflow-hidden shadow-[4px_4px_0_#111] snap-center shrink-0 relative -rotate-2">
                <img src="https://images.unsplash.com/photo-1540890635294-b15c7e09ef2f?w=500&q=80" alt="Coffee" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 bg-[#FCD34D] border-2 border-deep-black px-2 py-1 rounded font-black text-xs shadow-[2px_2px_0_#111] rotate-[3deg]">Filter Kaapi</div>
             </div>
             <div className="min-w-[200px] aspect-[4/5] bg-gray-200 border-4 border-deep-black rounded-xl overflow-hidden shadow-[4px_4px_0_#111] snap-center shrink-0 relative rotate-1">
                <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80" alt="Interior" className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-white border-2 border-deep-black px-2 py-1 rounded font-black text-xs shadow-[2px_2px_0_#111]">Ambience</div>
             </div>
          </div>

          {/* Community Memories */}
          <div className="flex justify-between items-end mb-6 mt-4">
             <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
               <span className="bg-[#EC4899] w-3 h-8 block rounded-sm border-2 border-deep-black"></span>
               Memories
             </h2>
             <button className="bg-white border-2 border-deep-black rounded-lg px-3 py-1 font-black text-xs uppercase shadow-[2px_2px_0_#111] hover:-translate-y-0.5 transition-transform flex items-center gap-1"><Camera className="w-3 h-3"/> Add</button>
          </div>
          
          <div className="bg-white border-4 border-deep-black rounded-[20px] p-5 brutal-shadow mb-4 relative overflow-hidden">
             <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FCD34D] border-4 border-deep-black rounded-full"></div>
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-teal-200 border-2 border-deep-black rounded-xl brutal-shadow shrink-0 overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=1" alt="User" />
               </div>
               <div>
                  <h4 className="font-black uppercase text-sm mb-1">Rohan M.</h4>
                  <p className="font-bold text-sm opacity-80 italic leading-relaxed">
                    "Nothing beats standing outside in the rain holding a hot plate of their masala dosa. Peak Bangalore memory."
                  </p>
               </div>
             </div>
          </div>

          <div className="bg-white border-4 border-deep-black rounded-[20px] p-5 brutal-shadow mb-4 relative overflow-hidden">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-purple-200 border-2 border-deep-black rounded-xl brutal-shadow shrink-0 overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=2" alt="User" />
               </div>
               <div>
                  <h4 className="font-black uppercase text-sm mb-1">Priya K.</h4>
                  <p className="font-bold text-sm opacity-80 italic leading-relaxed">
                    "Came here after my final exams. The filter coffee gave me life. Must visit."
                  </p>
               </div>
             </div>
          </div>

       </div>

    </div>
  );
}
