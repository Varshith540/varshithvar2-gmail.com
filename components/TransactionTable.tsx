import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Transaction, BookStatus } from '../types';

interface TransactionTableProps {
  transactions: Transaction[];
  onReturn: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  filterStatus: string;
  setFilterStatus: (s: string) => void;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  onReturn,
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus
}) => {

  const getStatusColor = (status: BookStatus) => {
    switch (status) {
      case 'BORROWED': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'RETURNED': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'OVERDUE': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusIcon = (status: BookStatus) => {
    switch (status) {
      case 'BORROWED': return <Clock size={14} className="mr-1" />;
      case 'RETURNED': return <CheckCircle size={14} className="mr-1" />;
      case 'OVERDUE': return <AlertCircle size={14} className="mr-1" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
    >
      {/* Toolbar */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900">All Transactions</h2>
          <p className="text-slate-500 text-sm mt-1">Manage book circulation and returns</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search student or book..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full md:w-64"
            />
          </div>
          
          <div className="relative">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="BORROWED">Borrowed</option>
              <option value="RETURNED">Returned</option>
              <option value="OVERDUE">Overdue</option>
            </select>
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
          >
            <Download size={18} />
            Export
          </motion.button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Book Title</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Issue Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <AnimatePresence>
              {transactions.map((txn) => (
                <motion.tr 
                  key={txn.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={txn.student.avatarUrl} alt="" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{txn.student.name}</p>
                        <p className="text-xs text-slate-500">{txn.student.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{txn.book.title}</p>
                      <p className="text-xs text-slate-500">{txn.book.author}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{txn.issueDate}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{txn.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(txn.status)}`}>
                      {getStatusIcon(txn.status)}
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {txn.status !== 'RETURNED' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onReturn(txn.id)}
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg shadow-sm transition-colors"
                      >
                        Return
                      </motion.button>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium px-4">Completed</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
            
            {transactions.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center">
                    <Search size={32} className="mb-2 opacity-50" />
                    <p>No transactions found matching your criteria.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
