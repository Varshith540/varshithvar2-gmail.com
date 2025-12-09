import React from 'react';
import { motion } from 'framer-motion';
import { StatCardProps } from '../types';

export const StatsCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color, trend }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group cursor-pointer"
    >
      {/* Background Decorative Blob */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500 ease-out ${color}`} />

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-display font-bold text-slate-800">{value}</h3>
          {trend && (
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">
              {trend}
            </span>
          )}
        </div>
        <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-slate-700`}>
          {/* We render the Icon component passed as prop */}
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-').replace('-500', '-600')}`} />
        </div>
      </div>
    </motion.div>
  );
};
