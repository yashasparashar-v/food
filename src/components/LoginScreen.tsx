import { Phone, Check } from "lucide-react";

interface LoginScreenProps {
  onNavigate: (screen: string) => void;
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  return (
    <div className="h-full bg-warm-white flex flex-col font-sans overflow-y-auto">
      
      {/* Top utility bar */}
      <div className="p-4 flex justify-end items-center">
        <button onClick={() => onNavigate('home')} className="font-extrabold uppercase tracking-widest text-xs border-b-2 border-deep-black pb-0.5 hover:text-vibrant-purple transition-colors">
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center p-4">
        
        {/* Starburst Logo */}
        <div className="w-32 h-32 bg-bright-yellow starburst flex items-center justify-center mt-4 border-2 border-deep-black shrink-0 relative">
          <span className="text-2xl font-black tracking-tighter">BITE</span>
        </div>

        {/* Hero Illustration */}
        <div className="mt-6 w-full border-4 border-vibrant-purple bg-white rounded-[24px] p-2 brutal-shadow-sm max-w-sm">
          <div className="h-32 bg-light-yellow rounded-[18px] flex items-center justify-center border-2 border-deep-black overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?w=800&q=80" alt="Indian food spread" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-vibrant-purple/20 mix-blend-multiply"></div>
          </div>
          <p className="mt-2 font-black text-xs leading-tight text-center px-2 uppercase">Hungry? Let's find the perfect spot.</p>
        </div>

        {/* Welcome Back & Buttons Group */}
        <div className="w-full max-w-sm flex flex-col mt-8">
          <h1 className="text-2xl font-black w-full uppercase tracking-tight">
            Welcome Back
          </h1>

          {/* Social Logins */}
          <div className="mt-6 w-full space-y-3">
            <button onClick={() => onNavigate('home')} className="w-full py-3 bg-white border-4 border-deep-black rounded-[20px] brutal-shadow-sm flex items-center justify-center gap-2 font-bold text-xs uppercase transition-transform hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111]">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#111111"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#111111"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#111111"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#111111"/></svg>
              Continue with Google
            </button>

            <button onClick={() => onNavigate('home')} className="w-full py-3 bg-vibrant-purple text-white border-4 border-deep-black rounded-[20px] brutal-shadow-sm flex items-center justify-center gap-2 font-bold text-xs uppercase transition-transform hover:translate-y-[2px] hover:shadow-[2px_2px_0_#111111]">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Continue with Phone
            </button>
          </div>

          {/* Divider */}
          <div className="mt-6 flex items-center w-full gap-2">
            <div className="h-[2px] flex-1 bg-deep-black"></div>
            <div className="w-6 h-6 rounded-full bg-bright-yellow border-2 border-deep-black text-[8px] flex items-center justify-center font-black">OR</div>
            <div className="h-[2px] flex-1 bg-deep-black"></div>
          </div>

          {/* Phone Input */}
          <div className="mt-4 w-full flex flex-col gap-2 relative">
            <input 
              type="text" 
              defaultValue="+91 9876543210"
              className="w-full p-3 border-4 border-vibrant-purple rounded-[20px] text-xs font-bold bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-purple transition-all italic"
            />
            {/* Submit Button */}
            <button onClick={() => onNavigate('home')} className="w-32 self-end py-2 bg-peach border-4 border-deep-black rounded-[20px] brutal-shadow-sm text-xs font-black text-center rotate-[-4deg] translate-y-2 hover:rotate-0 hover:translate-y-1 hover:shadow-none transition-all uppercase" style={{textShadow: '1px 1px 0 #111111', color: 'white'}}>
               Send OTP
            </button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center p-6 text-[10px] font-bold uppercase tracking-widest text-deep-black space-y-4 bg-purple-50/50 mt-4 border-t-4 border-deep-black pt-8">
         <p className="opacity-60 max-w-xs mx-auto leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy.
         </p>
         <div className="flex items-center justify-center gap-2">
            <span className="opacity-60">Made with love in</span>
            <span className="bg-bright-yellow border-2 border-deep-black px-2 py-0.5 rounded text-deep-black">Mangaluru</span>
         </div>
      </div>

    </div>
  );
}
