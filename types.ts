import React from 'react';

export type BookStatus = 'BORROWED' | 'RETURNED' | 'OVERDUE';

export interface Student {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface Book {
  title: string;
  author: string;
  coverUrl?: string;
}

export interface Transaction {
  id: string;
  student: Student;
  book: Book;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: BookStatus;
}

export interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ElementType;
  color: string;
  trend?: string;
}