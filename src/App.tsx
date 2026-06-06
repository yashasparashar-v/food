import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ExploreScreen from './components/ExploreScreen';
import ProfileScreen from './components/ProfileScreen';
import RestaurantDetailScreen from './components/RestaurantDetailScreen';
import BiteBoardScreen from './components/BiteBoardScreen';
import AddMemoryScreen from './components/AddMemoryScreen';
import BiteAiScreen from './components/BiteAiScreen';
import CafesScreen from './components/CafesScreen';
import SouthIndianScreen from './components/SouthIndianScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="w-full h-full min-h-screen bg-deep-black font-sans flex items-center justify-center sm:p-8">
      <div className="w-full max-w-[400px] bg-warm-white sm:border-8 sm:border-deep-black sm:rounded-[40px] sm:overflow-hidden sm:shadow-[12px_12px_0px_#111111] relative h-[100dvh] sm:h-[850px] shadow-none border-none rounded-none">
        
        <AnimatePresence mode="wait">
          {currentScreen === 'login' && (
            <motion.div key="login" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 20}} className="w-full h-full absolute inset-0">
               <LoginScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'home' && (
            <motion.div key="home" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 20}} className="w-full h-full absolute inset-0">
               <HomeScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'explore' && (
            <motion.div key="explore" initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 20}} className="w-full h-full absolute inset-0">
               <ExploreScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'cafes' && (
            <motion.div key="cafes" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 30}} className="w-full h-full absolute inset-0 bg-[#FCFAEF] z-40">
               <CafesScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'southindian' && (
            <motion.div key="southindian" initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 30}} className="w-full h-full absolute inset-0 bg-[#FFF9EA] z-40">
               <SouthIndianScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'ai' && (
            <motion.div key="ai" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 20}} className="w-full h-full absolute inset-0 text-deep-black">
               <BiteAiScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'profile' && (
            <motion.div key="profile" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -20}} className="w-full h-full absolute inset-0 text-deep-black">
               <ProfileScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'biteboard' && (
            <motion.div key="biteboard" initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -20}} className="w-full h-full absolute inset-0 text-deep-black">
               <BiteBoardScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'add-memory' && (
            <motion.div key="add-memory" initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 50}} className="w-full h-full absolute inset-0 text-deep-black bg-warm-white z-50">
               <AddMemoryScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
          {currentScreen === 'restaurant' && (
            <motion.div key="restaurant" initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 1.05}} className="w-full h-full absolute inset-0 bg-warm-white z-50">
               <RestaurantDetailScreen onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
