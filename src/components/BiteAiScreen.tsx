import { Menu, Utensils, User, Bot, Sparkles, Bookmark, Send, Home as HomeIcon, Search, Heart, User as UserIcon } from "lucide-react";

interface BiteAiScreenProps {
  onNavigate: (screen: string) => void;
}

export default function BiteAiScreen({ onNavigate }: BiteAiScreenProps) {
  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Dotted Background for subtle texture */}
       <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

       {/* Header */}
       <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-transparent border-b-4 border-deep-black bg-warm-white relative z-40 brutal-shadow-sm">
         <div className="flex items-center gap-4">
             <button className="w-10 h-10 border-4 border-deep-black bg-white rounded-xl flex items-center justify-center brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all">
               <Menu className="w-6 h-6" />
             </button>
             <h1 className="text-3xl font-black uppercase tracking-tight text-vibrant-purple italic leading-none drop-shadow-[2px_2px_0_#111111]">BITE AI</h1>
         </div>
         <div onClick={() => onNavigate('profile')} className="w-12 h-12 rounded-full border-4 border-deep-black overflow-hidden brutal-shadow cursor-pointer hover:translate-y-1 hover:shadow-none transition-all">
             <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover bg-bright-yellow" />
         </div>
       </div>

       <div className="flex-1 overflow-y-auto px-6 py-6 pb-48 space-y-8 relative z-10 no-scrollbar">
         
         {/* Hero Card */}
         <div className="bg-vibrant-purple text-white border-4 border-deep-black rounded-[24px] brutal-shadow-sm p-6 relative">
            <h2 className="text-2xl font-black text-white leading-tight mb-8 drop-shadow-[1px_1px_0_#111111]">What are you in the mood for today?</h2>
            <div className="inline-block bg-bright-yellow text-deep-black font-black uppercase text-[10px] px-3 py-1.5 border-[3px] border-deep-black shadow-[2px_2px_0_#111111]">
               ✨ Live Vibe Check
            </div>
            <div className="absolute -top-5 -right-2 w-16 h-16 bg-[#B4A02A] border-[3px] border-deep-black rounded-full flex items-center justify-center shadow-[4px_4px_0_#111111] rotate-12">
               <Utensils className="w-8 h-8 text-deep-black" />
            </div>
         </div>

         {/* User Message */}
         <div className="flex justify-end">
            <div className="w-[85%] bg-white border-4 border-deep-black rounded-3xl rounded-tr-md p-5 brutal-shadow-sm relative">
              <div className="absolute -top-4 -left-3 w-8 h-8 bg-vibrant-purple border-[3px] border-deep-black rounded-lg flex items-center justify-center -rotate-6 shadow-[2px_2px_0_#111111] z-10">
                <User className="w-4 h-4 text-white" />
              </div>
              <p className="font-bold text-[15px] italic leading-tight ml-2">"I need a quiet place for a date, under ₹500."</p>
            </div>
         </div>

         {/* Premium AI Response Panel */}
         <div className="relative mt-2">
            {/* Scrapbook Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#FBD38D]/60 border-2 border-deep-black/30 -rotate-3 z-20 backdrop-blur-sm shadow-sm"></div>
            
            <div className="bg-[#FFFDF5] border-4 border-deep-black rounded-3xl p-6 brutal-shadow relative z-10">
               <div className="absolute -top-4 -right-2 text-2xl animate-pulse">✨</div>
               <div className="absolute -bottom-4 right-8 text-xl">✨</div>
               
               <div className="flex items-center gap-3 mb-4 border-b-4 border-deep-black pb-4">
                  <div className="w-10 h-10 rounded-xl border-[3px] border-deep-black bg-deep-black flex items-center justify-center shadow-[2px_2px_0_#A855F7] group-hover:scale-110 transition-transform">
                     <Bot className="text-bright-yellow w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-widest text-[10px] text-vibrant-purple leading-none mb-1">Vibe Analysis</h3>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-green animate-pulse"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-green animate-pulse delay-75"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-green animate-pulse delay-150"></span>
                    </div>
                  </div>
               </div>
               
               <p className="font-bold text-sm leading-relaxed text-deep-black/90 tracking-wide font-serif">
                 This place feels perfect for slow conversations and warm lighting. Quiet enough to feel intimate, but affordable enough to stay for hours. I think this matches your vibe beautifully.
               </p>
            </div>
         </div>

         {/* Curated Recommendation */}
         <div className="mt-2 pl-2">
            <h3 className="font-black uppercase text-vibrant-purple text-sm tracking-widest mb-4 flex items-center gap-2 drop-shadow-[1px_1px_0_#111111]">
              <Sparkles className="w-5 h-5 fill-current" /> Found the perfect mood.
            </h3>
            
            <div onClick={() => onNavigate('restaurant')} className="bg-white border-4 border-deep-black rounded-[28px] brutal-shadow overflow-hidden relative cursor-pointer hover:-translate-y-2 hover:shadow-[6px_6px_0_#111111] transition-all group">
               <div className="h-56 relative border-b-4 border-deep-black bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-[#B4A02A] border-[3px] border-deep-black text-deep-black px-3 py-1 text-[10px] font-black uppercase rounded shadow-[2px_2px_0_#111111] flex items-center gap-1">
                     <span className="text-white">★</span> Curated For You
                  </div>
                  
                  <button className="absolute top-4 right-4 bg-white border-[3px] border-deep-black rounded-full w-12 h-12 flex flex-col items-center justify-center shadow-[2px_2px_0_#111111] hover:bg-bright-yellow hover:-translate-y-1 transition-all">
                     <span className="text-[8px] font-black uppercase mt-0.5">Save</span>
                     <Bookmark className="w-4 h-4" />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <div>
                       <h2 className="font-black text-2xl uppercase mb-1 text-white leading-none drop-shadow-[2px_2px_0_#111111]">Cozy Corner Cafe</h2>
                       <p className="text-[10px] font-black uppercase text-bright-yellow drop-shadow-[1px_1px_0_#111111]">Cafes • ₹₹ • 1.2 KM</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

       </div>

       {/* Floating Input Area */}
       <div className="absolute bottom-[88px] inset-x-0 px-4 z-40 bg-gradient-to-t from-warm-white via-warm-white to-transparent pt-12 pb-2">
          <div className="flex gap-2 items-end max-w-md mx-auto">
             <div className="flex-1 bg-white border-4 border-deep-black rounded-[28px] rounded-br-lg brutal-shadow-sm relative flex items-center px-4 py-4 focus-within:-translate-y-1 focus-within:shadow-[4px_4px_0_#111111] transition-all">
                <Sparkles className="w-6 h-6 text-vibrant-purple mr-3 shrink-0 animate-pulse" />
                <input 
                  type="text"
                  placeholder="Describe the vibe..."
                  className="w-full bg-transparent font-bold text-sm outline-none placeholder:text-deep-black/40"
                />
             </div>
             <button className="w-16 h-16 bg-vibrant-purple border-4 border-deep-black rounded-3xl rounded-bl-lg flex items-center justify-center shrink-0 brutal-shadow text-white hover:bg-deep-black hover:text-bright-yellow hover:-translate-y-1 active:translate-y-0 transition-all">
               <Send className="w-7 h-7 ml-1" />
             </button>
          </div>
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
          
          {/* AI Chat - Active */}
          <button className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <div className="w-6 h-6 mb-1 border-[3px] border-deep-black border-dashed rounded-full flex items-center justify-center bg-white">
              <div className="w-2.5 h-2.5 bg-deep-black rounded-full" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">AI Chat</span>
          </button>
          
          {/* Favorites */}
          <button onClick={() => onNavigate('biteboard')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <Heart className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Faves</span>
          </button>
          
          {/* Profile */}
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <UserIcon className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Me</span>
          </button>
        </div>
      </div>

    </div>
  );
}
