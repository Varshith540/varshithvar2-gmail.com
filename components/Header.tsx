
import React from 'react';
import { motion } from 'framer-motion';
import { Library, Bell, LayoutDashboard, UserPlus, BookOpen, Award, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <>
      {/* College Branding Banner */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#1e3a8a] text-white relative overflow-hidden border-b-4 border-yellow-500"
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -right-10 -top-20 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute left-10 bottom-0 w-60 h-60 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Logo & College Name Section */}
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                className="bg-white p-2 rounded-full shadow-xl shadow-blue-900/50 shrink-0"
              >
                {/* Real College Logo */}
                <img 
                  src="https://cdn.universitykart.com//Content/upload/admin/jbohpdfn.p42.jpg" 
                  alt="Kallam Haranadhareddy Institute of Technology Logo"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-[3px] border-[#1e3a8a] object-contain bg-white"
                />
              </motion.div>
              
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-display font-extrabold text-xl md:text-2xl lg:text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-200 uppercase drop-shadow-sm"
                >
                  Kallam Haranadhareddy
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col md:flex-row md:items-baseline gap-2 justify-center md:justify-start"
                >
                    <h2 className="font-display font-bold text-lg md:text-xl tracking-wider uppercase text-white shadow-black/20">
                    Institute of Technology
                    </h2>
                    <span className="hidden md:inline text-yellow-400/50">|</span>
                    <span className="text-sm font-semibold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 px-2 rounded backdrop-blur-sm">(Autonomous)</span>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] md:text-xs text-blue-200 mt-2 font-medium tracking-wide max-w-xl mx-auto md:mx-0 leading-relaxed"
                >
                  Approved by AICTE - New Delhi, Permanently affiliated to JNTUK - Kakinada
                </motion.p>
              </div>
            </div>

            {/* Accreditation Badges (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
                <Badge label="NAAC" subLabel="Grade A" icon={Award} delay={0.6} />
                <Badge label="NBA" subLabel="Accredited" icon={ShieldCheck} delay={0.7} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Sticky Navigation */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Nav Branding */}
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-lg text-white shadow-md shadow-blue-500/30"
              >
                <Library size={20} />
              </motion.div>
              <h2 className="font-display font-bold text-lg text-slate-800">Library Portal</h2>
            </div>

            {/* Navigation/Actions */}
            <div className="hidden md:flex items-center gap-2">
              <NavButton icon={LayoutDashboard} label="Dashboard" active />
              <NavButton icon={Bell} label="Overdue" count={2} />
              <NavButton icon={UserPlus} label="Register" />
              
              <div className="h-6 w-px bg-slate-200 mx-2"></div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-900/20 flex items-center gap-2 hover:bg-blue-800 transition-colors"
              >
                <BookOpen size={16} />
                Issue Book
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

const Badge = ({ label, subLabel, icon: Icon, delay }: { label: string, subLabel: string, icon: any, delay: number }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: 'spring' }}
    className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/20 transition-colors cursor-default"
  >
    <div className="p-2 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg">
      <Icon size={18} />
    </div>
    <div className="text-left">
      <p className="text-xs font-bold text-white tracking-wider">{label}</p>
      <p className="text-[10px] text-blue-100 font-medium uppercase tracking-wide">{subLabel}</p>
    </div>
  </motion.div>
);

const NavButton = ({ icon: Icon, label, active, count }: { icon: any, label: string, active?: boolean, count?: number }) => (
  <motion.button
    whileHover={{ scale: 1.05, backgroundColor: active ? '' : '#f1f5f9' }}
    whileTap={{ scale: 0.95 }}
    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
      active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900'
    }`}
  >
    <Icon size={16} />
    {label}
    {count && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
        {count}
      </span>
    )}
  </motion.button>
);
