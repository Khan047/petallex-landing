
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="text-white h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
