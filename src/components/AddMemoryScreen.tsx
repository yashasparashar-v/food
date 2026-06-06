import { ArrowLeft, Image as ImageIcon, MapPin, Search, Plus, Star } from "lucide-react";
import { useState } from "react";

interface AddMemoryScreenProps {
  onNavigate: (screen: string) => void;
}

export default function AddMemoryScreen({ onNavigate }: AddMemoryScreenProps) {
  const [rating, setRating] = useState(0);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);

  const moods = [
    { label: "Study Spot", emoji: "☕", color: "bg-orange-200" },
    { label: "Date Vibe", emoji: "💜", color: "bg-vibrant-purple text-white border-vibrant-purple" },
    { label: "Midnight Cravings", emoji: "🌙", color: "bg-blue-900 text-white border-blue-900" },
    { label: "Comfort Food", emoji: "🍜", color: "bg-yellow-200" },
    { label: "Legendary Meal", emoji: "🔥", color: "bg-orange-red text-white border-orange-red" },
  ];

  const tags = ["Spicy", "Sweet", "Crunchy", "Cheap", "Cozy", "Loud", "Aesthetic", "Quick", "Crowded", "Fancy"];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Background */}
       <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

       {/* Header */}
       <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-white border-b-4 border-deep-black brutal-shadow-sm sticky top-0 z-40">
         <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('biteboard')} className="w-10 h-10 bg-white border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all">
               <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-black uppercase tracking-tight text-deep-black italic leading-none">Add Memory</h1>
         </div>
         <button onClick={() => onNavigate('biteboard')} className="bg-lime-green px-4 py-2 border-4 border-deep-black rounded-xl brutal-shadow-sm font-black text-xs uppercase hover:translate-y-1 hover:shadow-none transition-all">
           Save
         </button>
       </div>

       <div className="flex-1 overflow-y-auto px-6 py-6 pb-12 relative z-10 space-y-8">
          
          {/* Restaurant Search */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">Where did you eat?</label>
            <div className="relative">
              <input 
                 type="text"
                 placeholder="Search restaurants..."
                 className="w-full bg-white border-4 border-deep-black rounded-xl py-4 pl-12 pr-4 text-sm font-bold brutal-shadow placeholder:text-deep-black/40 focus:outline-none focus:ring-4 focus:ring-vibrant-purple transition-all"
              />
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">Capture the moment</label>
            <div className="w-full aspect-[4/3] bg-white border-4 border-dashed border-deep-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors group relative overflow-hidden">
               <div className="w-16 h-16 bg-bright-yellow border-4 border-deep-black rounded-full flex items-center justify-center mb-2 brutal-shadow-sm group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-8 h-8" />
               </div>
               <span className="font-black uppercase text-xs opacity-60">Upload Photo</span>
            </div>
          </div>

          {/* Memory Text */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">What made it memorable?</label>
            <textarea 
               placeholder="Write your food memory here... (e.g. The rain was pouring and this bowl of ramen brought me back to life.)"
               className="w-full bg-white border-4 border-deep-black rounded-xl p-4 text-sm font-bold brutal-shadow placeholder:text-deep-black/40 focus:outline-none focus:ring-4 focus:ring-vibrant-purple transition-all min-h-[120px] resize-none"
            />
          </div>

          {/* Vibe / Mood */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">The Vibe</label>
            <div className="flex flex-wrap gap-2">
               {moods.map(mood => (
                 <button 
                    key={mood.label}
                    onClick={() => setSelectedVibe(mood.label)}
                    className={`px-3 py-2 border-4 border-deep-black rounded-xl text-[10px] font-black uppercase transition-all ${
                      selectedVibe === mood.label 
                        ? mood.color + " shadow-[2px_2px_0_#111111] translate-y-0" 
                        : "bg-white opacity-60 hover:opacity-100 hover:-translate-y-1 shadow-none hover:shadow-[2px_2px_0_#111111]"
                    }`}
                 >
                    {mood.emoji} {mood.label}
                 </button>
               ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">Rate the experience</label>
            <div className="flex gap-2">
               {[1,2,3,4,5].map(star => (
                 <button 
                   key={star}
                   onClick={() => setRating(star)}
                   className="hover:scale-110 transition-transform"
                 >
                   <Star className={`w-10 h-10 ${rating >= star ? 'fill-bright-yellow stroke-deep-black stroke-2 drop-shadow-[2px_2px_0_#111111]' : 'fill-white stroke-deep-black stroke-[3px] opacity-50'}`} />
                 </button>
               ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest mb-2 italic">Quick Tags</label>
            <div className="flex flex-wrap gap-2">
               {tags.map(tag => (
                  <button 
                     key={tag}
                     onClick={() => toggleTag(tag)}
                     className={`px-3 py-1.5 border-[3px] border-deep-black rounded text-[10px] font-black uppercase transition-all ${
                       selectedTags.includes(tag)
                         ? "bg-deep-black text-white"
                         : "bg-white text-deep-black opacity-70 hover:opacity-100"
                     }`}
                  >
                     {selectedTags.includes(tag) ? '✓ ' : ''}{tag}
                  </button>
               ))}
            </div>
          </div>

          {/* Revisit Status */}
          <div className="bg-light-yellow border-4 border-deep-black rounded-2xl p-4 flex items-center justify-between brutal-shadow-sm">
             <div>
                <span className="block font-black uppercase text-sm">Will you come back?</span>
                <span className="text-[10px] font-bold opacity-60">Add to your revisit list</span>
             </div>
             <div className="w-14 h-8 bg-white border-4 border-deep-black flex items-center p-1 rounded-full cursor-pointer relative shadow-[inset_2px_2px_0_rgba(0,0,0,0.1)]">
                <div className="w-5 h-5 bg-deep-black rounded-full absolute left-1"></div>
             </div>
          </div>

       </div>
    </div>
  );
}
