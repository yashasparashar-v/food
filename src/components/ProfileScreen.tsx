import { 
  Home as HomeIcon, Search, Heart, User, Settings, Bell, Moon, Globe, Info, LogOut, MessageSquare, MapPin, UserPlus 
} from "lucide-react";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-hidden text-deep-black relative">
       {/* Header */}
       <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-white border-b-4 border-deep-black brutal-shadow-sm sticky top-0 z-40">
         <h1 className="text-3xl font-black uppercase tracking-tight text-vibrant-purple italic leading-none">ME</h1>
         <button className="w-10 h-10 bg-bright-yellow border-4 border-deep-black rounded-full flex items-center justify-center brutal-shadow-sm font-black text-[10px] uppercase hover:translate-y-1 hover:shadow-none transition-all">
           Edit
         </button>
       </div>

       <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
         {/* Profile Info */}
         <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-vibrant-purple overflow-hidden brutal-shadow mb-4 p-1 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-deep-black">
                <img src="https://i.pravatar.cc/150?u=yashas" alt="Profile" className="w-full h-full object-cover bg-bright-yellow" />
              </div>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-center">Yashas Parashar</h2>
            <p className="font-bold text-xs opacity-60 uppercase tracking-widest mt-1 text-center">Food Explorer • Mangaluru</p>
         </div>

         {/* Stats */}
         <div className="flex gap-3 mb-8">
            <div className="flex-1 bg-white border-4 border-deep-black rounded-xl p-3 flex flex-col items-center justify-center brutal-shadow-sm">
               <span className="text-2xl font-black leading-none">47</span>
               <span className="text-[8px] font-black uppercase tracking-widest mt-1">Places</span>
            </div>
            <div className="flex-1 bg-vibrant-purple text-white border-4 border-deep-black rounded-xl p-3 flex flex-col items-center justify-center brutal-shadow-sm">
               <span className="text-2xl font-black leading-none">19</span>
               <span className="text-[8px] font-black uppercase tracking-widest mt-1">Faves</span>
            </div>
            <div className="flex-1 bg-bright-yellow border-4 border-deep-black rounded-xl p-3 flex flex-col items-center justify-center brutal-shadow-sm">
               <div className="w-6 h-6 rounded-full border-2 border-deep-black flex items-center justify-center mb-1 bg-deep-black text-bright-yellow font-black text-[10px]">L7</div>
               <span className="text-[8px] font-black uppercase tracking-widest">Foodie</span>
            </div>
         </div>

         {/* Preferences */}
         <div className="mb-8 relative z-10">
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 italic">My Preferences</h3>
            <div className="flex gap-2 mb-6">
                <button className="flex-1 py-3 bg-lime-green border-4 border-deep-black rounded-xl text-[10px] font-black brutal-shadow-sm uppercase flex items-center justify-center gap-1 hover:translate-y-1 transition-transform">
                    <div className="w-3 h-3 rounded-[2px] border-[1.5px] border-deep-black bg-white flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-lime-green"></div></div>
                    Pure Veg
                </button>
                <button className="flex-1 py-3 bg-white border-4 border-deep-black rounded-xl text-[10px] font-black brutal-shadow-sm uppercase flex items-center justify-center gap-1 hover:translate-y-1 transition-transform">
                    <div className="w-3 h-3 border-[1.5px] border-deep-black flex items-center justify-center hover:translate-y-1 transition-transform"><div className="w-1 h-1 bg-deep-black rotate-45"></div></div>
                    Jain
                </button>
                <button className="flex-1 py-3 bg-gray-200 border-4 border-deep-black rounded-xl text-[10px] font-black brutal-shadow-sm uppercase opacity-50 flex items-center justify-center gap-1 hover:translate-y-1 transition-transform">
                    <div className="w-3 h-3 rounded-[2px] border-[1.5px] border-deep-black flex items-center justify-center"><div className="w-1 h-1 rounded-full bg-orange-red"></div></div>
                    Non-Veg
                </button>
            </div>

            {/* Spice Slider */}
            <div className="bg-white border-4 border-deep-black rounded-xl p-5 brutal-shadow-sm mb-6">
               <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                  <span>Mild</span>
                  <span className="text-vibrant-purple -ml-2">Medium</span>
                  <span className="text-orange-red">Spicy</span>
               </div>
               <div className="h-4 bg-deep-black rounded-full relative w-full border-2 border-deep-black">
                  <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-bright-yellow rounded-l-full border-r-2 border-deep-black"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-vibrant-purple border-4 border-deep-black rounded-full"></div>
               </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-black uppercase tracking-widest">Budget:</span>
              <div className="bg-[#E9D5FF] px-4 py-2 border-4 border-deep-black rounded-full brutal-shadow-sm text-xs font-black">
                ₹200 - 400
              </div>
            </div>
         </div>

         {/* Grid Actions */}
         <div className="grid grid-cols-2 gap-4 mb-8">
            <button onClick={() => onNavigate('biteboard')} className="bg-white border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <Heart className="w-6 h-6 text-vibrant-purple" />
               <span className="text-left text-sm font-black uppercase leading-tight">My<br/>Favorites</span>
            </button>
            <button className="bg-bright-yellow border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <MessageSquare className="w-6 h-6 text-deep-black" />
               <span className="text-left text-sm font-black uppercase leading-tight">My<br/>Reviews</span>
            </button>
            <button className="bg-white border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <MapPin className="w-6 h-6 border-deep-black" />
               <span className="text-left text-sm font-black uppercase leading-tight">Places I've<br/>Been</span>
            </button>
             <button className="bg-white border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <Search className="w-6 h-6 text-deep-black" />
               <span className="text-left text-sm font-black uppercase leading-tight">Saved<br/>Searches</span>
            </button>
             <button className="bg-vibrant-purple text-white border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <UserPlus className="w-6 h-6 stroke-[3px]" />
               <span className="text-left text-sm font-black uppercase leading-tight">Invite<br/>Friends</span>
            </button>
             <button className="bg-white border-4 border-deep-black rounded-xl p-4 brutal-shadow-sm flex flex-col items-start gap-4 hover:translate-y-1 transition-transform hover:shadow-none">
               <Settings className="w-6 h-6 text-deep-black" />
               <span className="text-left text-sm font-black uppercase leading-tight mt-auto">Settings</span>
            </button>
         </div>

         {/* Recently Visited */}
         <div className="mb-8">
            <h3 className="text-sm font-black uppercase tracking-widest mb-4 italic">Recently Visited</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                <div onClick={() => onNavigate('restaurant')} className="flex-shrink-0 w-48 bg-white border-4 border-deep-black rounded-xl overflow-hidden brutal-shadow-sm hover:translate-y-1 transition-transform cursor-pointer">
                   <div className="h-24 bg-gray-200 border-b-4 border-deep-black relative">
                     <img src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" alt="Thali" className="w-full h-full object-cover" />
                   </div>
                   <div className="p-3">
                      <h4 className="font-black uppercase text-xs truncate">Thali House</h4>
                      <p className="text-[10px] font-bold opacity-60 mt-1">2 days ago</p>
                   </div>
                </div>
                <div onClick={() => onNavigate('restaurant')} className="flex-shrink-0 w-48 bg-white border-4 border-deep-black rounded-xl overflow-hidden brutal-shadow-sm hover:translate-y-1 transition-transform cursor-pointer">
                   <div className="h-24 bg-gray-200 border-b-4 border-deep-black relative">
                     <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" alt="Cafe" className="w-full h-full object-cover" />
                   </div>
                   <div className="p-3">
                      <h4 className="font-black uppercase text-xs truncate">Cozy Corner</h4>
                      <p className="text-[10px] font-bold opacity-60 mt-1">Yesterday</p>
                   </div>
                </div>
            </div>
         </div>

         {/* Settings List */}
         <div className="flex flex-col gap-5 border-t-4 border-deep-black pt-6">
            <div className="flex items-center justify-between font-black uppercase tracking-widest text-[10px]">
               <div className="flex items-center gap-3"><Bell className="w-5 h-5" /> Notifications</div>
               <div className="w-10 h-6 bg-deep-black rounded-full border-2 border-deep-black relative">
                  <div className="w-5 h-5 bg-bright-yellow rounded-full absolute right-0 top-0 border-2 border-deep-black"></div>
               </div>
            </div>
            <div className="flex items-center justify-between font-black uppercase tracking-widest text-[10px]">
               <div className="flex items-center gap-3"><Moon className="w-5 h-5" /> Dark Mode</div>
               <div className="w-10 h-6 bg-gray-300 rounded-full border-2 border-deep-black relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0 top-0 border-2 border-deep-black"></div>
               </div>
            </div>
            <div className="flex items-center justify-between font-black uppercase tracking-widest text-[10px]">
               <div className="flex items-center gap-3"><Globe className="w-5 h-5" /> Language</div>
               <span className="text-vibrant-purple border-b-2 border-vibrant-purple">English</span>
            </div>
            <div className="flex items-center justify-between font-black uppercase tracking-widest text-[10px] cursor-pointer hover:opacity-70">
               <div className="flex items-center gap-3"><Info className="w-5 h-5" /> About Bite</div>
               <span className="text-lg leading-none">›</span>
            </div>
            <button onClick={() => onNavigate('login')} className="flex items-center justify-between font-black uppercase tracking-widest text-[10px] text-orange-red mt-2 hover:opacity-70 w-full text-left">
               <div className="flex items-center gap-3"><LogOut className="w-5 h-5" /> Logout</div>
               <div className="w-8 h-8 rounded-full bg-deep-black flex items-center justify-center">
                 <div className="w-6 h-6 rounded-full bg-vibrant-purple border-2 border-deep-black flex items-center justify-center"><User className="fill-white stroke-none w-3 h-3"/></div>
               </div>
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
          
          {/* Profile - Active */}
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center justify-center w-16 h-14 rounded-xl bg-bright-yellow border-[3px] border-deep-black shadow-[2px_2px_0_#111111] transition-all relative -top-2">
            <User className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-black uppercase tracking-widest">Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
