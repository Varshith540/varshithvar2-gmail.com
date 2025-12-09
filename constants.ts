import { Transaction } from './types';

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'TXN-1001',
    student: { id: 'S002', name: 'Bob Williams', avatarUrl: 'https://picsum.photos/seed/bob/100/100' },
    book: { title: 'Clean Code', author: 'Robert C. Martin' },
    issueDate: '2025-05-12',
    dueDate: '2025-05-26',
    status: 'BORROWED'
  },
  {
    id: 'TXN-1002',
    student: { id: 'S004', name: 'Diana Prince', avatarUrl: 'https://picsum.photos/seed/diana/100/100' },
    book: { title: 'Intro to Algorithms', author: 'Thomas H. Cormen' },
    issueDate: '2025-04-29',
    dueDate: '2025-05-13',
    status: 'OVERDUE'
  },
  {
    id: 'TXN-1003',
    student: { id: 'S001', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/alice/100/100' },
    book: { title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
    issueDate: '2025-05-19',
    dueDate: '2025-06-02',
    status: 'BORROWED'
  },
  {
    id: 'TXN-1004',
    student: { id: 'S003', name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/seed/charlie/100/100' },
    book: { title: 'Design Patterns', author: 'Erich Gamma' },
    issueDate: '2025-05-01',
    dueDate: '2025-05-15',
    returnDate: '2025-05-14',
    status: 'RETURNED'
  },
  {
    id: 'TXN-1005',
    student: { id: 'S001', name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/alice/100/100' },
    book: { title: 'SICP', author: 'Harold Abelson' },
    issueDate: '2025-04-30',
    dueDate: '2025-05-14',
    status: 'BORROWED'
  },
  {
    id: 'TXN-1006',
    student: { id: 'S005', name: 'Evan Wright', avatarUrl: 'https://picsum.photos/seed/evan/100/100' },
    book: { title: 'Refactoring', author: 'Martin Fowler' },
    issueDate: '2025-04-15',
    dueDate: '2025-04-29',
    status: 'OVERDUE'
  },
  {
    id: 'TXN-1007',
    student: { id: 'S006', name: 'Fiona Gallagher', avatarUrl: 'https://picsum.photos/seed/fiona/100/100' },
    book: { title: 'You Don\'t Know JS', author: 'Kyle Simpson' },
    issueDate: '2025-05-20',
    dueDate: '2025-06-03',
    status: 'BORROWED'
  },
];
