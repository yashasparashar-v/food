import { Home as HomeIcon, Search, Heart, User, MapPin, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

interface BiteBoardScreenProps {
  onNavigate: (screen: string) => void;
}

const MEMORIES = [
  {
    id: 1,
    name: "COZY CORNER CAFE",
    date: "Oct 12, 2023",
    note: '"Masala chai healed me. Best vibes for reading."',
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    tags: ["☕ Study Spot", "💜 Cozy"],
    rotation: -4,
    offsetY: "10px",
    pinColor: "#F87171",
  },
  {
    id: 2,
    name: "NEON NIGHTS DINER",
    date: "Nov 05, 2023",
    note: '"The truffle fries here are an experience. Loved the retro feel."',
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    tags: ["🍟 Comfort Food", "✨ Late Night"],
    rotation: 3,
    offsetY: "-20px",
    pinColor: "#A855F7",
  },
  {
    id: 3,
    name: "THE THALI HOUSE",
    date: "Dec 20, 2023",
    note: '"Legendary meal. I could eat this every single day."',
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    tags: ["🍛 Feast", "🔥 Legendary"],
    rotation: -2,
    offsetY: "30px",
    pinColor: "#22C55E",
  },
  {
    id: 4,
    name: "SPICY SAMOSA STREET",
    date: "Feb 14, 2024",
    note: '"Best street food in town. Perfect evening snack."',
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    tags: ["🤤 Cravings", "🌶️ Spicy"],
    rotation: 5,
    offsetY: "-10px",
    pinColor: "#FACC15",
  }
];

export default function BiteBoardScreen({ onNavigate }: BiteBoardScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Dotted Background */}
       <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

       {/* Header */}
       <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-transparent relative z-40">
         <h1 className="text-3xl font-black uppercase tracking-tighter text-vibrant-purple drop-shadow-[2px_2px_0px_#111111]">BITE BOARD</h1>
         <div className="flex items-center gap-3">
           <button className="w-10 h-10 bg-white border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all">
             <MapPin className="w-5 h-5 text-vibrant-purple" />
           </button>
           <button onClick={() => onNavigate('profile')} className="w-12 h-12 rounded-full border-4 border-deep-black overflow-hidden brutal-shadow cursor-pointer hover:translate-y-1 hover:shadow-none transition-all p-0.5 bg-vibrant-purple">
             <div className="w-full h-full rounded-full overflow-hidden border-2 border-deep-black bg-bright-yellow">
               <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover" />
             </div>
           </button>
         </div>
       </div>

       {/* Subtitle */}
       <div className="px-6 relative z-30 mb-2">
         <div className="inline-block bg-bright-yellow border-4 border-deep-black px-3 py-1 text-[10px] font-black uppercase brutal-shadow-sm mb-2 -rotate-2">
           Your Personal Food Map
         </div>
         <p className="font-bold text-sm tracking-tight opacity-90 drop-shadow-[1px_1px_0px_white]">Places you loved and remembered.</p>
       </div>

       {/* Horizontal Scrapbook Board */}
       <div 
         ref={scrollRef}
         className="flex-1 overflow-x-auto overflow-y-hidden relative no-scrollbar flex items-center px-10 pb-32"
         style={{ scrollSnapType: 'x proximity' }}
       >
          {/* Continuous Thread / Line behind cards */}
          <div className="absolute top-1/2 left-0 w-[2000px] h-0 border-t-4 border-deep-black border-dashed opacity-50 -translate-y-1/2 z-0"></div>

          <div className="flex items-center gap-16 relative z-10 mx-auto min-w-max h-full pt-10">
            {MEMORIES.map((memory, index) => (
               <motion.div 
                 key={memory.id}
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                 className="relative shrink-0 cursor-pointer group"
                 style={{ 
                   transform: `rotate(${memory.rotation}deg) translateY(${memory.offsetY})`,
                   scrollSnapAlign: 'center'
                 }}
                 onClick={() => onNavigate('restaurant')}
               >
                 {/* Connection line to previous card - visual flair */}
                 {index > 0 && (
                   <svg className="absolute -left-16 top-1/2 w-16 h-20 -z-10 opacity-50" style={{ transform: 'translateY(-50%)' }}>
                     <path d="M0,10 Q30,40 64,10" fill="none" stroke="#111111" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" />
                   </svg>
                 )}

                 {/* Scrapbook Tape / Pin */}
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-deep-black brutal-shadow-sm z-20" style={{ backgroundColor: memory.pinColor }}></div>
                 
                 {/* Main Polaroid Card */}
                 <div className="w-[280px] bg-white border-4 border-deep-black p-4 pb-6 brutal-shadow-lg group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-300">
                    <div className="w-full aspect-[4/5] border-4 border-deep-black mb-4 relative overflow-hidden bg-gray-200">
                      <img src={memory.image} alt={memory.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    <h3 className="font-black text-lg uppercase text-vibrant-purple leading-tight break-words">{memory.name}</h3>
                    <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mt-1 mb-3">{memory.date}</p>
                    
                    <p className="font-bold text-xs italic leading-snug drop-shadow-[1px_1px_0px_white]">
                      {memory.note}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {memory.tags.map(tag => (
                        <span key={tag} className="bg-light-yellow border-2 border-deep-black px-2 py-1 text-[10px] font-black uppercase rounded shadow-[2px_2px_0_#111111]">
                          {tag}
                        </span>
                      ))}
                    </div>
                 </div>

                 {/* Decorative Star/Sticker */}
                 {index % 2 === 0 && (
                   <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-bright-yellow border-4 border-deep-black starburst brutal-shadow flex items-center justify-center -rotate-12 z-20 hover:rotate-12 transition-transform">
                      <span className="font-black text-[8px] uppercase text-center leading-none">Fave<br/>Only</span>
                   </div>
                 )}
               </motion.div>
            ))}

            {/* End of Board Spacer */}
            <div className="w-10 h-full shrink-0"></div>
          </div>
       </div>

       {/* Floating Add Memory Button */}
       <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-40">
          <button onClick={() => onNavigate('add-memory')} className="bg-vibrant-purple text-white border-4 border-deep-black px-6 py-3 rounded-2xl brutal-shadow-sm flex items-center gap-2 font-black uppercase tracking-widest hover:-translate-y-1 hover:shadow-none transition-all group">
             <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
             Add Memory
          </button>
       </div>

       {/* Bottom Navigation */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-50">
        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow flex items-center justify-around p-2">
          {/* Home */}
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <HomeIcon className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Home</span>
          </button>
          
          {/* Explore */}
          <button onClick={() => onNavigate('explore')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <Search className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Explore</span>
          </button>
          
          {/* AI Chat */}
          <button onClick={() => onNavigate('ai')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <div className="w-6 h-6 mb-1 border-2 border-deep-black border-dashed rounded-full flex items-center justify-center opacity-60">
              <div className="w-3 h-3 bg-deep-black rounded-full" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">AI Chat</span>
          </button>
          
          {/* Favorites - Active */}
          <button onClick={() => {
              if (scrollRef.current && scrollRef.current.scrollLeft > 0) {
                 scrollToStart();
              } else {
                 onNavigate('biteboard');
              }
            }} 
            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <Heart className="w-6 h-6 mb-1 fill-deep-black stroke-deep-black" />
            <span className="text-[10px] font-black uppercase tracking-widest">Faves</span>
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
