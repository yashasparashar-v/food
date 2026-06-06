import { ArrowLeft, MapPin, Star, Heart, Coffee, Sun, Search, Utensils } from "lucide-react";
import { useState } from "react";

interface SouthIndianScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SouthIndianScreen({ onNavigate }: SouthIndianScreenProps) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="h-full bg-[#FFF9EA] flex flex-col font-sans overflow-hidden text-deep-black relative">
      {/* Background Kolam Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5C30 5 35 15 45 15C55 15 55 25 55 25C55 25 45 30 45 40C45 50 35 55 35 55C35 55 30 45 20 45C10 45 5 35 5 35C5 35 15 30 15 20C15 10 25 5 30 5Z\' stroke=\'%239A3412\' stroke-width=\'2\' fill=\'none\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'3\' fill=\'%239A3412\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px', backgroundRepeat: 'repeat' }}></div>

      {/* Header */}
      <div className="px-6 pt-12 pb-6 sticky top-0 bg-[#FFF9EA] z-40 border-b-4 border-deep-black/5 relative">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => onNavigate('explore')}
            className="w-12 h-12 bg-white border-4 border-deep-black rounded-full brutal-shadow flex items-center justify-center hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="w-12 h-12 bg-[#F59E0B] border-4 border-deep-black rounded-full brutal-shadow flex items-center justify-center pointer-events-none">
             <Coffee className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="relative">
          <h1 className="text-4xl font-black uppercase tracking-tight text-[#9A3412] leading-[1.1] mb-2" style={{textShadow: '2px 2px 0px #FCD34D'}}>
            South<br/>Indian
          </h1>
          <p className="text-sm font-bold opacity-70 uppercase tracking-widest flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#F59E0B]" />
            Crispy dosas & filter kaapi.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24">
        
        {/* Craving AI Search bar equivalent */}
        <div className="mt-4 mb-8 bg-[#166534] border-4 border-deep-black rounded-[24px] p-5 brutal-shadow text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-20">
             <Utensils className="w-24 h-24 rotate-12" />
           </div>
           <h2 className="text-2xl font-black uppercase tracking-tight mb-2 relative z-10 text-white">Craving a specific dosa?</h2>
           <p className="text-sm font-medium mb-4 relative z-10 opacity-90">Our AI knows all the secret spots.</p>
           
           <div className="relative z-10">
             <input 
               type="text" 
               placeholder="Find me crispy benne dosa..."
               className="w-full bg-white border-2 border-deep-black rounded-xl py-3 px-4 text-deep-black font-bold placeholder:text-deep-black/40 focus:outline-none"
             />
             <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-bright-yellow border-2 border-deep-black rounded-lg">
                <Search className="w-4 h-4 text-deep-black" />
             </button>
           </div>
        </div>

        {/* Quick Vibes */}
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
           {['All', 'Breakfast', 'Banana Leaf', 'Filter Coffee', 'Legendary'].map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab.toLowerCase())}
               className={`whitespace-nowrap border-[3px] border-deep-black rounded-[20px] px-5 py-2.5 font-black uppercase tracking-wide brutal-shadow flex items-center gap-2 transition-all ${
                 activeTab === tab.toLowerCase() 
                  ? 'bg-[#F59E0B] text-white -translate-y-1' 
                  : 'bg-white text-deep-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111111]'
               }`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* The Legends - Editorial Feature */}
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 mt-6 flex items-center justify-between">
           <span>The Legends</span>
           <span className="text-sm bg-deep-black text-white px-3 py-1 rounded-full border-2 border-transparent">OG</span>
        </h2>

        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-8 relative group cursor-pointer" onClick={() => onNavigate('restaurant')}>
          <div className="h-64 bg-gray-200 relative overflow-hidden border-b-4 border-deep-black">
            <img src="https://images.unsplash.com/photo-1627308595229-7830f5c90683?w=800&q=80" alt="Dosa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
               <div className="bg-[#166534] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-deep-black w-max rounded-lg mb-2 shadow-[2px_2px_0_#111]">Since 1943</div>
               <h3 className="text-3xl font-black uppercase tracking-tight text-white leading-none">Mylari<br/>Agrahara</h3>
               <p className="text-[#FCD34D] font-bold text-sm mt-2 flex items-center gap-1">
                 <Star className="w-4 h-4 fill-current" /> 4.9 <span className="text-white/60 mx-2">•</span> Iconic Soft Dosa
               </p>
            </div>
            
            <button className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-deep-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
               <Heart className="w-5 h-5 text-deep-black" />
            </button>
          </div>
          
          <div className="p-5 bg-white relative">
            <p className="font-medium text-sm leading-relaxed mb-4 text-deep-black/80">
              Not crispy. Melt-in-your-mouth soft, swimming in butter, served with a secret vegetable sagu. A Sunday ritual for generations.
            </p>
            
            <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
              <span className="flex items-center gap-1 bg-[#FFF9EA] px-3 py-1.5 rounded-lg border-2 border-deep-black"><MapPin className="w-4 h-4" /> 2.1 km</span>
              <span className="flex items-center gap-1 bg-[#FFF9EA] px-3 py-1.5 rounded-lg border-2 border-deep-black">Wait: 20m</span>
            </div>
          </div>
        </div>

        {/* Filter Coffee Grid */}
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 mt-8 flex items-center gap-2">
           <span className="bg-[#9A3412] w-3 h-8 block rounded-sm border-2 border-deep-black"></span>
           Degree Coffee
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
           {/* Coffee Card 1 */}
           <div className="bg-white border-4 border-deep-black rounded-2xl brutal-shadow p-4 cursor-pointer hover:-translate-y-1 transition-all" onClick={() => onNavigate('restaurant')}>
             <div className="w-full aspect-square border-2 border-deep-black rounded-xl overflow-hidden mb-3 bg-gray-100 relative">
               <img src="https://images.unsplash.com/photo-1540890635294-b15c7e09ef2f?w=400&q=80" alt="Filter Coffee" className="w-full h-full object-cover" />
               <div className="absolute bottom-2 right-2 bg-bright-yellow border-2 border-deep-black rounded shadow-[2px_2px_0_#111] px-1.5 py-0.5 text-xs font-black">4.8</div>
             </div>
             <h4 className="font-black uppercase text-sm leading-tight mb-1">Aaranya <br/> Kaapi</h4>
             <p className="text-xs font-bold text-deep-black/60 uppercase">Brass Tumbler • ₹30</p>
           </div>
           
           {/* Coffee Card 2 */}
           <div className="bg-white border-4 border-deep-black rounded-2xl brutal-shadow p-4 cursor-pointer hover:-translate-y-1 transition-all" onClick={() => onNavigate('restaurant')}>
             <div className="w-full aspect-square border-2 border-deep-black rounded-xl overflow-hidden mb-3 bg-[#9A3412]">
               <img src="https://images.unsplash.com/photo-1541167760496-180b7c3d237b?w=400&q=80" alt="Filter Coffee" className="w-full h-full object-cover opacity-80" />
               <div className="absolute bottom-2 right-2 bg-bright-yellow border-2 border-deep-black rounded shadow-[2px_2px_0_#111] px-1.5 py-0.5 text-xs font-black">4.7</div>
             </div>
             <h4 className="font-black uppercase text-sm leading-tight mb-1">Hatti <br/> Kappi</h4>
             <p className="text-xs font-bold text-deep-black/60 uppercase">Strong • ₹25</p>
           </div>
        </div>

        {/* Namma Ooru Secrets */}
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 mt-8">
           Namma Ooru Secrets
        </h2>
        
        <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
          <div className="min-w-[240px] snap-center bg-[#FCD34D] border-4 border-deep-black rounded-[20px] brutal-shadow p-5 flex flex-col justify-between aspect-square group cursor-pointer hover:-translate-y-2 transition-all relative overflow-hidden" onClick={() => onNavigate('restaurant')}>
            <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:scale-110 transition-transform"><Utensils className="w-16 h-16 rotate-45" /></div>
            <div className="bg-white border-2 border-deep-black shadow-[2px_2px_0_#111] w-12 h-12 flex items-center justify-center rounded-full text-xl z-10 mb-2">🥥</div>
            <div className="z-10">
              <h4 className="font-black uppercase text-xl leading-tight mb-1">CTR's Benne Dosa</h4>
              <p className="font-bold text-sm opacity-80">Malleswaram</p>
            </div>
          </div>

          <div className="min-w-[240px] snap-center bg-white border-4 border-deep-black rounded-[20px] brutal-shadow p-5 flex flex-col justify-between aspect-square group cursor-pointer hover:-translate-y-2 transition-all relative overflow-hidden" onClick={() => onNavigate('restaurant')}>
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform"><Search className="w-16 h-16" /></div>
            <div className="bg-[#9A3412] text-white border-2 border-deep-black shadow-[2px_2px_0_#111] w-12 h-12 flex items-center justify-center rounded-full text-xl z-10 mb-2">🌶️</div>
            <div className="z-10">
              <h4 className="font-black uppercase text-xl leading-tight mb-1">Vidyarthi Bhavan</h4>
              <p className="font-bold text-sm opacity-80">Basavanagudi</p>
            </div>
          </div>
        </div>

        {/* Banana Leaf Section */}
        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow overflow-hidden mb-8 relative p-6 cursor-pointer hover:-translate-y-1 transition-transform" onClick={() => onNavigate('restaurant')}>
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#166534] rounded-bl-full -z-0 opacity-20 transform translate-x-8 -translate-y-8"></div>
           
           <h3 className="text-2xl font-black uppercase tracking-tight text-[#166534] mb-2 relative z-10">The Full <br/>Banana Leaf</h3>
           <p className="font-medium text-sm mb-6 relative z-10 w-4/5 text-deep-black/80">
             Sambar that makes you happy, unlimited rice, and the satisfying fold of the leaf.
           </p>

           <div className="flex gap-4 relative z-10">
             <div className="w-20 h-20 rounded-xl border-4 border-deep-black overflow-hidden object-cover flex-shrink-0 bg-gray-200 shadow-[4px_4px_0_#111]">
               <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80" alt="Thali" className="w-full h-full object-cover" />
             </div>
             
             <div className="flex flex-col justify-center">
               <h4 className="font-black uppercase text-lg">Nagarjuna</h4>
               <p className="text-sm font-bold opacity-70 uppercase tracking-widest flex items-center gap-1">
                 <Star className="w-3 h-3 fill-current text-[#F59E0B]" /> 4.6 • Residency Rd
               </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
