import { Menu, Wifi, Plug, VolumeX, Bot, ArrowRight, Mail, SlidersHorizontal, Search, Heart, User as UserIcon, Star, Sparkles, BookOpen, Coffee, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface CafesScreenProps {
  onNavigate: (screen: string) => void;
}

export default function CafesScreen({ onNavigate }: CafesScreenProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiSubmit = () => {
    if (!inputValue.trim()) return;
    setIsGenerating(true);
    setShowAiResponse(false);
    
    // Simulate thinking delay
    setTimeout(() => {
      setIsGenerating(false);
      setShowAiResponse(true);
    }, 1500);
  };

  return (
    <div className="h-full bg-[#FCFAEF] flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Background noise/texture */}
       <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

       {/* Header */}
       <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-transparent relative z-40">
         <div className="flex items-center gap-4">
             <button onClick={() => onNavigate('explore')} className="w-10 h-10 border-4 border-deep-black bg-white rounded-xl flex items-center justify-center brutal-shadow-sm hover:translate-y-1 hover:shadow-none active:bg-gray-100 transition-all group">
               <Menu className="w-6 h-6 group-active:scale-95" />
             </button>
             <h1 className="text-3xl font-black uppercase tracking-tighter text-vibrant-purple leading-none drop-shadow-[2px_2px_0_#111111]">CAFES</h1>
         </div>
         <div onClick={() => onNavigate('profile')} className="w-12 h-12 rounded-full border-4 border-deep-black overflow-hidden brutal-shadow cursor-pointer hover:translate-y-1 hover:shadow-none active:scale-95 transition-all">
             <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover bg-bright-yellow" />
         </div>
       </div>

       <div className="flex-1 overflow-y-auto px-6 py-6 pb-48 space-y-16 relative z-10 no-scrollbar" style={{ scrollBehavior: 'smooth' }}>
         
         {/* Hero Title Area */}
         <div className="relative">
            <motion.h1 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="text-[72px] font-black uppercase tracking-tighter text-vibrant-purple leading-none drop-shadow-[4px_4px_0_#111111]"
               style={{ WebkitTextStroke: '2px #111111' }}
            >
               CAFES
            </motion.h1>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="inline-block bg-bright-yellow border-4 border-deep-black px-4 py-2 mt-2 shadow-[4px_4px_0_#111111] rotate-[-2deg]"
            >
               <span className="font-bold text-sm tracking-tight text-deep-black">Coffee, conversations, and rainy playlists.</span>
            </motion.div>
         </div>

         {/* Hero Image */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full h-72 bg-deep-black border-4 border-deep-black brutal-shadow-lg relative overflow-hidden group"
         >
            <motion.img 
               style={{ y: '-10%' }}
               whileInView={{ y: '0%' }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80" 
               alt="Moody Cafe" 
               className="w-full h-[120%] object-cover grayscale opacity-80" 
            />
            {/* Subtle floating steam/dust effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30 animate-pulse"></div>
            
            <div className="absolute top-4 left-4 flex gap-1 text-bright-yellow drop-shadow-[2px_2px_0_#111111]">
               <Star className="w-8 h-8 fill-current" />
               <Sparkles className="w-6 h-6 fill-current animate-pulse" />
            </div>
            <div className="absolute bottom-4 right-4 bg-white px-3 py-1 border-4 border-deep-black font-black text-xs shadow-[2px_2px_0_#111111]">
               EST. 2024
            </div>
         </motion.div>

         {/* Editorial Quote */}
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="pl-4 border-l-[6px] border-vibrant-purple -ml-2"
         >
            <h2 className="text-3xl font-black italic text-deep-black/90 leading-tight mb-3 font-serif">
               "These are the places people accidentally spend 4 hours in."
            </h2>
            <p className="text-sm font-black uppercase tracking-widest opacity-60">— Curated by BITE Editor</p>
         </motion.div>

         {/* Featured Card */}
         <motion.div 
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white border-4 border-deep-black p-4 brutal-shadow-lg relative hover:-translate-y-2 hover:shadow-[12px_12px_0_#111111] transition-all duration-300"
         >
            <div className="h-56 border-4 border-deep-black relative overflow-hidden bg-gray-200 mb-6 group cursor-pointer" onClick={() => onNavigate('restaurant')}>
               <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cozy Cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute top-0 right-0 bg-bright-yellow border-b-4 border-l-4 border-deep-black px-4 py-2 font-black text-sm drop-shadow-[2px_2px_0_#111111]">
                  MUST VISIT
               </div>
            </div>
            
            <h3 className="text-4xl font-black uppercase text-vibrant-purple leading-tight drop-shadow-[2px_2px_0_#111111] mb-4">
               Cozy<br/>Corner<br/>Cafe
            </h3>
            
            <p className="font-bold text-[15px] leading-relaxed mb-6 font-serif opacity-80">
               Perfect for studying quietly while it rains outside. The smell of cedarwood and espresso fills every corner.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
               <span className="bg-[#FAF5FF] border-2 border-vibrant-purple/20 px-3 py-1 font-black text-[10px] uppercase text-vibrant-purple">Cozy</span>
               <span className="bg-[#FAF5FF] border-2 border-vibrant-purple/20 px-3 py-1 font-black text-[10px] uppercase text-vibrant-purple">Study Friendly</span>
               <span className="bg-[#FAF5FF] border-2 border-vibrant-purple/20 px-3 py-1 font-black text-[10px] uppercase text-vibrant-purple">Rainy-Day Energy</span>
            </div>
            
            <button className="w-full bg-vibrant-purple text-white border-4 border-deep-black py-4 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0_#111111] active:translate-y-[4px] active:shadow-none hover:bg-[#8B5CF6] transition-all relative overflow-hidden group">
               <span className="relative z-10">Book a Table</span>
               <div className="absolute inset-0 bg-deep-black translate-y-full group-active:translate-y-0 transition-transform"></div>
            </button>
         </motion.div>

         {/* Rainy Day Picks */}
         <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center justify-between">
               Rainy Day Picks <ArrowRight className="w-6 h-6 opacity-40" />
            </h3>
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6" style={{ scrollSnapType: 'x mandatory' }}>
               
               {/* Horizontal Card 1 */}
               <div className="shrink-0 w-80 bg-white border-4 border-deep-black brutal-shadow group cursor-pointer hover:-translate-y-2 transition-transform active:translate-y-0 active:shadow-none" style={{ scrollSnapAlign: 'start' }} onClick={() => onNavigate('restaurant')}>
                  <div className="h-48 border-b-4 border-deep-black overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80" alt="Cafe Window" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                     <h4 className="font-black text-lg uppercase text-vibrant-purple mb-2 drop-shadow-[1px_1px_0_#111111]">The Hideout</h4>
                     <p className="text-[13px] font-bold leading-tight opacity-80 font-serif">A cinematic sanctuary for the lonely hearts and late night dreamers.</p>
                  </div>
               </div>
               
               {/* Horizontal Card 2 */}
               <div className="shrink-0 w-80 bg-white border-4 border-deep-black brutal-shadow group cursor-pointer hover:-translate-y-2 transition-transform active:translate-y-0 active:shadow-none" style={{ scrollSnapAlign: 'start' }} onClick={() => onNavigate('restaurant')}>
                  <div className="h-48 border-b-4 border-deep-black overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80" alt="Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                     <h4 className="font-black text-lg uppercase text-vibrant-purple mb-2 drop-shadow-[1px_1px_0_#111111]">Roasters Room</h4>
                     <p className="text-[13px] font-bold leading-tight opacity-80 font-serif">Warm ambient lighting and the smell of freshly roasted specialty beans.</p>
                  </div>
               </div>

               <div className="w-6 shrink-0" />
            </div>
         </div>

         {/* Vibe Check Panel */}
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-deep-black p-6 py-8 brutal-shadow-sm"
         >
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">Vibe Check</h3>
            
            <div className="space-y-8">
               <div className="group cursor-help">
                  <div className="flex justify-between items-center mb-2 font-black uppercase text-[10px] tracking-widest">
                     <span className="flex items-center gap-2"><Wifi className="w-4 h-4 text-vibrant-purple" /> Wifi Speed</span>
                     <span className="group-hover:text-vibrant-purple transition-colors">God-Tier</span>
                  </div>
                  <div className="h-4 bg-[#F3E8FF] w-full border-2 border-deep-black relative overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }} className="absolute top-0 bottom-0 left-0 bg-bright-yellow border-r-2 border-deep-black"></motion.div>
                  </div>
               </div>
               
               <div className="group cursor-help">
                  <div className="flex justify-between items-center mb-2 font-black uppercase text-[10px] tracking-widest">
                     <span className="flex items-center gap-2"><Plug className="w-4 h-4 text-vibrant-purple" /> Power Outlets</span>
                     <span className="group-hover:text-vibrant-purple transition-colors">Plentiful</span>
                  </div>
                  <div className="h-4 bg-[#F3E8FF] w-full border-2 border-deep-black relative overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }} className="absolute top-0 bottom-0 left-0 bg-bright-yellow border-r-2 border-deep-black"></motion.div>
                  </div>
               </div>

               <div className="group cursor-help">
                  <div className="flex justify-between items-center mb-2 font-black uppercase text-[10px] tracking-widest">
                     <span className="flex items-center gap-2"><VolumeX className="w-4 h-4 text-vibrant-purple" /> Noise Level</span>
                     <span className="group-hover:text-vibrant-purple transition-colors">Library Vibes</span>
                  </div>
                  <div className="h-4 bg-[#F3E8FF] w-full border-2 border-deep-black relative overflow-hidden">
                     <motion.div initial={{ width: 0 }} whileInView={{ width: '25%' }} transition={{ duration: 1.2, ease: "circOut", delay: 0.6 }} className="absolute top-0 bottom-0 left-0 bg-bright-yellow border-r-2 border-deep-black"></motion.div>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* AI Interaction Block */}
         <div className="bg-vibrant-purple border-4 border-deep-black p-6 py-8 brutal-shadow text-white relative">
            <div className="absolute top-6 right-6 opacity-20">
               <Bot className="w-24 h-24" />
            </div>

            <div className="flex gap-4 items-start mb-8 relative z-10">
               <div className="w-12 h-12 bg-white border-4 border-deep-black rounded-xl flex items-center justify-center shrink-0 shadow-[2px_2px_0_#111111]">
                  <Bot className="w-6 h-6 text-vibrant-purple" />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tighter leading-none drop-shadow-[2px_2px_0_#111111] pr-4">
                  What vibe are you looking for tonight?
               </h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
               {["Rainy Jazz & Books", "Neon Workspace", "Artisan Roasts Only", "Plant-Filled Nooks"].map((tag) => (
                  <span onClick={() => { setInputValue(tag); setIsInputFocused(true); }} key={tag} className="bg-white text-deep-black border-2 border-deep-black px-3 py-2 font-black text-[10px] uppercase cursor-pointer hover:bg-bright-yellow hover:-translate-y-1 active:translate-y-0 transition-all shadow-[2px_2px_0_#111111] active:shadow-none">
                     {tag}
                  </span>
               ))}
            </div>
            
            <div className={`bg-white border-4 border-deep-black rounded-full flex items-center p-1.5 pl-5 relative z-10 transition-all duration-300 ${isInputFocused ? 'shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-[1.02]' : 'shadow-[4px_4px_0_#111111]'}`}>
               <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAiSubmit()}
                  placeholder="Type your mood..." 
                  className="flex-1 bg-transparent border-none outline-none text-deep-black font-bold placeholder:text-deep-black/30 text-lg"
               />
               <button 
                  onClick={handleAiSubmit}
                  disabled={isGenerating || !inputValue.trim()}
                  className={`w-12 h-12 rounded-full border-4 border-deep-black flex items-center justify-center shrink-0 transition-all ${isGenerating ? 'bg-gray-200' : 'bg-bright-yellow hover:scale-105 active:scale-95 text-deep-black'} shadow-[2px_2px_0_#111111] active:shadow-none`}
               >
                  {isGenerating ? <div className="w-5 h-5 border-4 border-deep-black border-t-transparent rounded-full animate-spin" /> : <ArrowRight className="w-6 h-6 stroke-[3px]" />}
               </button>
            </div>

            {/* AI Response Panel */}
            <AnimatePresence>
               {showAiResponse && (
                  <motion.div 
                     initial={{ opacity: 0, height: 0, marginTop: 0 }}
                     animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                     exit={{ opacity: 0, height: 0, marginTop: 0 }}
                     className="overflow-hidden"
                  >
                     <div className="bg-[#FFFDF5] text-deep-black border-4 border-deep-black p-6 brutal-shadow relative">
                        {/* Scrapbook Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#FBD38D]/80 border-2 border-deep-black/30 -rotate-2 z-20 backdrop-blur-sm"></div>
                        
                        <p className="font-bold text-sm leading-relaxed tracking-wide font-serif mb-6 italic opacity-90">
                           "This feels perfect for rainy evenings and quiet conversations. I know a place tucked away in an alleyway that serves artisan roasts and plays soft jazz."
                        </p>

                        <div onClick={() => onNavigate('restaurant')} className="bg-white border-2 border-deep-black p-3 flex gap-4 items-center cursor-pointer hover:bg-gray-50 active:-translate-y-1 transition-all">
                           <div className="w-16 h-16 border-2 border-deep-black bg-gray-200 shrink-0">
                              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&q=80" alt="Match" className="w-full h-full object-cover" />
                           </div>
                           <div>
                              <div className="bg-bright-yellow text-[8px] font-black uppercase px-2 py-0.5 border border-deep-black inline-block mb-1">98% Match</div>
                              <h4 className="font-black uppercase text-sm drop-shadow-[1px_1px_0_#111111]">Cozy Corner Cafe</h4>
                              <p className="text-[10px] font-bold opacity-60">1.2km • ₹₹</p>
                           </div>
                           <ArrowRight className="w-4 h-4 ml-auto opacity-40" />
                        </div>
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* Community Memories */}
         <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">Community<br/>Memories</h3>
            <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12 pt-4 -mx-6 px-6">
               
               <motion.div whileHover={{ scale: 1.05, y: -10, rotate: 0 }} className="shrink-0 w-56 bg-white border-4 border-deep-black p-4 pb-8 brutal-shadow shadow-[6px_6px_0_#111111] rotate-[-4deg] relative cursor-pointer" onClick={() => onNavigate('biteboard')}>
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-red border-2 border-deep-black shadow-sm z-10 flex flex-col items-center justify-center"><div className="w-2 h-2 rounded-full bg-white opacity-50 relative -top-0.5" /></div>
                  
                  <div className="border-4 border-deep-black aspect-square mb-6 bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80" alt="Friends" className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="font-bold text-sm italic text-center text-deep-black/80 font-serif px-2">"Came here after internals. Best chat ever."</p>
               </motion.div>

               <motion.div whileHover={{ scale: 1.05, y: -10, rotate: 0 }} className="shrink-0 w-56 bg-white border-4 border-deep-black p-4 pb-8 brutal-shadow shadow-[6px_6px_0_#111111] rotate-[3deg] relative cursor-pointer mt-6" onClick={() => onNavigate('biteboard')}>
                  {/* Pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-2 border-deep-black shadow-sm z-10 flex flex-col items-center justify-center"><div className="w-2 h-2 rounded-full bg-white opacity-50 relative -top-0.5" /></div>
                  
                  <div className="border-4 border-deep-black aspect-[4/5] mb-6 bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1507133750073-1349f2b84db5?w=500&q=80" alt="Study" className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="font-bold text-sm italic text-center text-deep-black/80 font-serif px-2">"Finished my entire project in one sitting here."</p>
               </motion.div>
               
               <div className="w-6 shrink-0" />
            </div>
         </div>

         {/* Discovery / Editorial */}
         <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-8">Discovery</h3>
            
            <motion.div 
               whileHover={{ y: -4, boxShadow: '8px 8px 0 #111111' }}
               className="bg-bright-yellow border-4 border-deep-black p-6 brutal-shadow shadow-[4px_4px_0_#111111] mb-6 cursor-pointer transition-all"
            >
               <h4 className="text-3xl font-black uppercase leading-none drop-shadow-[2px_2px_0_#111111] mb-3">The Bite<br/>Selection</h4>
               <p className="font-bold text-[15px] mb-6 opacity-90 font-serif">Our weekly deep-dive into the city's hidden roasteries.</p>
               <div className="h-48 border-4 border-deep-black overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80" alt="Roastery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-60"></div>
               </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-vibrant-purple border-4 border-deep-black rounded-lg brutal-shadow-sm aspect-square flex flex-col p-4 relative group cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[6px_6px_0_#111111] transition-all">
                  <div className="flex-1 flex items-center justify-center">
                     <Coffee className="w-14 h-14 text-white drop-shadow-[2px_2px_0_#111111] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-white border-4 border-deep-black py-2.5 text-center font-black text-xs uppercase shadow-[2px_2px_0_#111111]">
                     Best Espresso
                  </div>
               </div>
               <div className="bg-[#B48530] border-4 border-deep-black rounded-lg brutal-shadow-sm aspect-square flex flex-col p-4 relative group cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[6px_6px_0_#111111] transition-all">
                  <div className="flex-1 flex items-center justify-center">
                     <BookOpen className="w-14 h-14 text-white drop-shadow-[2px_2px_0_#111111] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-white border-4 border-deep-black py-2.5 text-center font-black text-xs uppercase shadow-[2px_2px_0_#111111]">
                     Study Spots
                  </div>
               </div>
            </div>

            {/* Premium Join Club */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="bg-vibrant-purple border-4 border-deep-black p-6 py-8 brutal-shadow flex justify-between items-center text-white cursor-pointer relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-deep-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
               <div className="relative z-10">
                  <h4 className="font-black uppercase text-xl drop-shadow-[2px_2px_0_#111111] mb-1">Join the Club</h4>
                  <p className="text-xs font-bold font-serif opacity-90">Get exclusive cafe invites.</p>
               </div>
               <Mail className="w-10 h-10 drop-shadow-[2px_2px_0_#111111] relative z-10 group-hover:-rotate-12 transition-transform" />
            </motion.div>
         </div>

       </div>

       {/* Floating Filter Button */}
       <motion.button 
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9, y: 0, boxShadow: '0px 0px 0 #111111' }}
          onClick={() => setIsFilterOpen(true)}
          className="absolute bottom-[96px] right-6 w-16 h-16 bg-bright-yellow border-4 border-deep-black rounded-2xl brutal-shadow flex items-center justify-center z-40 hover:bg-white transition-colors"
       >
          <SlidersHorizontal className="w-7 h-7 stroke-[3px]" />
       </motion.button>

       {/* Filter Panel Overlay */}
       <AnimatePresence>
         {isFilterOpen && (
            <div className="absolute inset-0 bg-deep-black/60 z-50 backdrop-blur-sm flex flex-col justify-end">
               <motion.div 
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="bg-[#FCFAEF] border-t-8 border-deep-black rounded-t-[40px] px-6 py-8 pb-32 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] h-[80vh] flex flex-col"
               >
                  <div className="flex justify-between items-center mb-8 shrink-0">
                     <h2 className="text-3xl font-black uppercase italic drop-shadow-[2px_2px_0_#111111]">Filter Moods</h2>
                     <button onClick={() => setIsFilterOpen(false)} className="w-12 h-12 border-4 border-deep-black rounded-full flex items-center justify-center font-black text-2xl brutal-shadow-sm bg-white hover:bg-bright-yellow hover:scale-105 active:scale-95 transition-all">
                        ✕
                     </button>
                  </div>
                  
                  <div className="space-y-5 overflow-y-auto pr-2 no-scrollbar flex-1 pb-10">
                     {['Budget Friendly', 'Quiet & Cozy', 'Study Approved', 'Open Late', 'Outdoor Seating', 'Live Jazz', 'Pet Friendly', 'Matcha Specials'].map((filter, i) => (
                        <label key={filter} className="flex items-center gap-5 cursor-pointer group p-2 hover:bg-white rounded-xl transition-colors border-2 border-transparent hover:border-deep-black">
                           <div className="w-10 h-10 border-4 border-deep-black rounded-lg bg-white flex items-center justify-center group-hover:bg-bright-yellow transition-colors relative shadow-[2px_2px_0_#111111]">
                              {i === 1 || i === 2 ? <div className="w-5 h-5 bg-vibrant-purple border-2 border-deep-black rounded-sm"></div> : null}
                           </div>
                           <span className="font-black uppercase text-base tracking-wide mt-1">{filter}</span>
                        </label>
                     ))}
                  </div>
                  
                  <button onClick={() => setIsFilterOpen(false)} className="w-full shrink-0 bg-vibrant-purple text-white border-4 border-deep-black py-5 font-black uppercase tracking-widest text-lg shadow-[4px_4px_0_#111111] active:translate-y-[4px] active:shadow-none hover:bg-[#8B5CF6] transition-all relative overflow-hidden group">
                     <span className="relative z-10">Apply Filters</span>
                     <div className="absolute inset-0 bg-deep-black translate-y-full group-active:translate-y-0 transition-transform"></div>
                  </button>
               </motion.div>
            </div>
         )}
       </AnimatePresence>

       {/* Bottom Navigation */}
      <div className="absolute bottom-0 inset-x-0 p-4 z-50">
        <div className="bg-white border-4 border-deep-black rounded-[24px] brutal-shadow flex items-center justify-around p-2">
          {/* Home */}
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center justify-center w-16 h-14 rounded-2xl transition-all">
            <Menu className="w-6 h-6 mb-1 opacity-60" /> {/* Replaced HomeIcon with Menu intentionally based on previous context or just using Explore/AI mainly */}
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Home</span>
          </button>
          
          {/* Explore - Active */}
          <button onClick={() => onNavigate('explore')} className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <Search className="w-6 h-6 mb-1 stroke-[3px]" />
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
            <UserIcon className="w-6 h-6 mb-1 opacity-60" />
            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
