import { Search, MapPin, Star, Heart, Menu, ArrowRight, User, Home as HomeIcon } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-white border-b-4 border-deep-black brutal-shadow-sm sticky top-0 z-40">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-vibrant-purple italic leading-none">Hi, Yashas!</h1>
          <div className="flex gap-2 mt-2">
            <div className="bg-vibrant-purple text-white text-xs font-bold uppercase py-1 px-3 rounded-full border-2 border-deep-black flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Mangaluru • 1.2km
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 bg-bright-yellow border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow-sm relative hover:scale-105 active:scale-95 transition-all">
            <div className="w-3 h-3 bg-orange-red border-2 border-deep-black rounded-full absolute -top-1 -right-1"></div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          <div onClick={() => onNavigate('profile')} className="w-12 h-12 rounded-full border-4 border-deep-black overflow-hidden brutal-shadow cursor-pointer hover:translate-y-1 hover:shadow-none transition-all">
            <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover bg-bright-yellow" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        
        {/* Large Hero Banner */}
        <div onClick={() => onNavigate('restaurant')} className="bg-white p-2 border-4 border-deep-black rounded-[24px] brutal-shadow relative overflow-hidden mb-8 group cursor-pointer">
          <div className="flex justify-between items-start mb-2 px-2 pt-2">
             <div className="bg-bright-yellow px-2 py-1 border-2 border-deep-black text-[8px] font-black uppercase rounded-full">Trending Now</div>
             <div className="text-xs font-black">4.8 ⭐</div>
          </div>
          <div className="h-40 bg-gray-200 mt-2 border-2 border-deep-black rounded-[18px] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="px-2 pb-2">
            <h2 className="mt-2 font-black text-sm uppercase tracking-wide leading-none">Cozy Corner Cafe</h2>
            <div className="flex gap-2 mt-1 items-center font-bold uppercase text-[8px]">
               <span className="border-2 border-lime-green text-lime-green px-2 rounded-full">Pure Veg</span>
               <span className="text-deep-black">Open Now</span>
               <span className="text-deep-black opacity-60 ml-auto">300m Away</span>
            </div>
          </div>
        </div>

        {/* Dietary Toggles */}
        <div className="flex gap-2 mt-6 overflow-x-auto no-scrollbar mb-8">
            <button className="flex-shrink-0 px-4 py-2 bg-lime-green border-4 border-deep-black rounded-full text-[10px] font-black brutal-shadow-sm uppercase hover:translate-y-[2px] transition-all">
                Veg
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-orange-red text-white border-4 border-deep-black rounded-full text-[10px] font-black brutal-shadow-sm uppercase hover:translate-y-[2px] transition-all">
                Non-Veg
            </button>
            <button className="flex-shrink-0 px-4 py-2 bg-white border-4 border-deep-black rounded-full text-[10px] font-black brutal-shadow-sm uppercase hover:translate-y-[2px] transition-all">
                Jain
            </button>
        </div>

        {/* Explore Categories */}
        <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-black uppercase tracking-tight">Explore Categories</h2>
            <ArrowRight className="w-6 h-6 text-vibrant-purple -mb-1 cursor-pointer" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
          {/* Cat 1 */}
          <div className="snap-start shrink-0 flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-vibrant-purple border-[4px] border-deep-black rounded-[20px] brutal-shadow flex items-center justify-center text-white cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
            </div>
            <span className="font-bold text-sm">Cafes</span>
          </div>
          {/* Cat 2 */}
          <div className="snap-start shrink-0 flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-peach border-[4px] border-deep-black rounded-[20px] brutal-shadow flex items-center justify-center text-deep-black cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"/><path d="M12 6a6 6 0 1 0 0 12 6 6 0 1 0 0-12Z"/><path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4Z"/></svg>
            </div>
            <span className="font-bold text-sm">South Indian</span>
          </div>
          {/* Cat 3 */}
          <div className="snap-start shrink-0 flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-bright-yellow border-[4px] border-deep-black rounded-[20px] brutal-shadow flex items-center justify-center text-deep-black cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 16v-4a4 4 0 0 0-8 0v4"/><path d="M4 16h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z"/><path d="M4 12h16"/><path d="M2.5 12a9.5 9.5 0 0 1 19 0"/></svg>
            </div>
            <span className="font-bold text-sm">Street Food</span>
          </div>
           {/* Cat 4 */}
           <div className="snap-start shrink-0 flex flex-col items-center gap-2">
            <div className="w-20 h-20 bg-lime-green border-[4px] border-deep-black rounded-[20px] brutal-shadow flex items-center justify-center text-deep-black cursor-pointer hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111] transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <span className="font-bold text-sm">Healthy</span>
          </div>
        </div>

        {/* Recommended For You */}
        <div className="relative mb-6 mt-4">
             <h2 className="text-3xl font-black uppercase tracking-tight leading-none w-3/4">Recommended<br/>For You</h2>
             <svg viewBox="0 0 100 100" className="w-10 h-10 fill-bright-yellow absolute right-4 top-0 animate-spin" style={{ animationDuration: '8s' }}>
                <polygon points="50,0 60,35 95,35 65,55 75,90 50,70 25,90 35,55 5,35 40,35" stroke="#111111" strokeWidth="6" strokeLinejoin="round" />
            </svg>
        </div>

        {/* Rec Card 1 */}
        <div onClick={() => onNavigate('restaurant')} className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-6 relative hover:translate-y-1 hover:shadow-[2px_2px_0_#111111] transition-all duration-300 cursor-pointer">
          <div className="h-56 bg-gray-200 relative overflow-hidden border-b-4 border-deep-black">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Green Bowl" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-vibrant-purple border-[3px] border-deep-black px-3 py-1 font-black text-sm uppercase rounded shadow-[2px_2px_0_#111111] text-white flex items-center gap-1">
               4.8 <Star className="w-3 h-3 fill-white" />
            </div>
          </div>
          <div className="p-5 relative">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black uppercase tracking-tight">Green Bowl Express</h3>
              <div className="text-vibrant-purple font-black text-xl tracking-tighter">₹₹</div>
            </div>
            
            <div className="flex gap-2">
                <span className="bg-lime-green/20 border-2 border-deep-black text-deep-black text-[10px] uppercase font-black px-2 py-1">Gluten Free</span>
                <span className="bg-peach/30 border-2 border-deep-black text-deep-black text-[10px] uppercase font-black px-2 py-1">Low Cal</span>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-deep-black/20 flex justify-between items-center">
                 <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-70">
                    <MapPin className="w-4 h-4" /> 1.5 km away
                 </div>
                 <button className="bg-vibrant-purple border-[3px] border-deep-black rounded-lg px-4 py-2 font-black text-xs uppercase shadow-[2px_2px_0_#111111] text-white">View Menu</button>
            </div>
          </div>
        </div>

        {/* Rec Card 2 */}
        <div onClick={() => onNavigate('restaurant')} className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-6 relative hover:translate-y-1 hover:shadow-[2px_2px_0_#111111] transition-all duration-300 cursor-pointer">
          <div className="h-56 bg-gray-200 relative overflow-hidden border-b-4 border-deep-black">
            <img src="https://images.unsplash.com/photo-1668231387042-0fdbd5cf7cc0?w=800&q=80" alt="Dosa" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-vibrant-purple border-[3px] border-deep-black px-3 py-1 font-black text-sm uppercase rounded shadow-[2px_2px_0_#111111] text-white flex items-center gap-1">
               4.5 <Star className="w-3 h-3 fill-white" />
            </div>
          </div>
          <div className="p-5 relative">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black uppercase tracking-tight">Dakshin Delights</h3>
              <div className="text-vibrant-purple font-black text-xl tracking-tighter">₹</div>
            </div>
            
            <div className="flex gap-2">
                <span className="bg-lime-green border-2 border-deep-black text-deep-black text-[10px] uppercase font-black px-2 py-1">Pure Veg</span>
                <span className="bg-bright-yellow border-2 border-deep-black text-deep-black text-[10px] uppercase font-black px-2 py-1">Classic</span>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-deep-black/20 flex justify-between items-center bg-white relative z-20">
                 <div className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 opacity-70">
                    <MapPin className="w-4 h-4" /> 800m away
                 </div>
                 <button className="bg-vibrant-purple absolute -right-5 -bottom-5 border-t-4 border-l-4 border-deep-black rounded-tl-[24px] px-8 pt-4 pb-5 pl-6 font-black text-xs uppercase text-white flex gap-2 items-center hover:bg-deep-black transition-colors w-[200px]">
                    <div className="bg-bright-yellow w-6 h-6 rounded-full border-2 border-deep-black flex items-center justify-center shrink-0">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/></svg>
                    </div>
                    Ask Bite AI
                 </button>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Ask Bite AI button if not covered by cards */}
      <div className="absolute bottom-28 right-6 z-40">
        <div className="bg-vibrant-purple border-4 border-deep-black rounded-full flex items-center justify-center w-16 h-16 brutal-shadow cursor-pointer hover:scale-105 active:scale-95 transition-all text-white">
            <div className="bg-bright-yellow w-8 h-8 rounded-full border-2 border-deep-black flex items-center justify-center shrink-0 shadow-[1px_1px_0_#111111]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/></svg>
            </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-50">
        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow-lg flex items-center justify-around p-2">
          {/* Home - Active */}
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <HomeIcon className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
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
