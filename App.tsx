import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, RotateCcw } from 'lucide-react';

import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { TransactionTable } from './components/TransactionTable';
import { MOCK_TRANSACTIONS } from './constants';
import { Transaction } from './types';

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');

  // Derived Statistics
  const stats = useMemo(() => {
    return {
      borrowed: transactions.filter(t => t.status === 'BORROWED').length,
      returned: transactions.filter(t => t.status === 'RETURNED').length,
      overdue: transactions.filter(t => t.status === 'OVERDUE').length,
      total: transactions.length
    };
  }, [transactions]);

  // Filtered Data
  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      const matchesSearch = 
        t.student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.student.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filterStatus === 'ALL' || t.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, searchQuery, filterStatus]);

  // Handlers
  const handleReturnBook = (id: string) => {
    setTransactions(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, status: 'RETURNED', returnDate: new Date().toISOString().split('T')[0] };
      }
      return t;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-slate-900">Welcome back, Admin</h1>
          <p className="text-slate-500 mt-2">Here's what's happening in your library today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard 
            title="Currently Borrowed" 
            value={stats.borrowed} 
            icon={BookOpen} 
            color="bg-blue-500"
            trend="+2% this week"
          />
          <StatsCard 
            title="Total Returned" 
            value={stats.returned} 
            icon={CheckCircle2} 
            color="bg-emerald-500"
            trend="+12% today"
          />
          <StatsCard 
            title="Overdue Books" 
            value={stats.overdue} 
            icon={Clock} 
            color="bg-rose-500"
            trend="Action required"
          />
          <StatsCard 
            title="Total Transactions" 
            value={stats.total} 
            icon={RotateCcw} 
            color="bg-violet-500"
          />
        </div>

        {/* Main Content */}
        <TransactionTable 
          transactions={filteredTransactions}
          onReturn={handleReturnBook}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-auto bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2025 Kallam Haranadhareddy Institute of Technology Library. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
