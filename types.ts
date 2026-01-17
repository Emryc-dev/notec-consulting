
// Import React to resolve namespace issue
import React from 'react';

export interface ServiceItem {
  title: string;
  items: string[];
  icon: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}