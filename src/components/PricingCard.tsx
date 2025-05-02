
import React from 'react';
import { Button } from "./ui/button";
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  popular?: boolean;
}

const PricingCard = ({ title, description, price, features, popular = false }: PricingCardProps) => {
  return (
    <div className={`bg-white rounded-xl border ${popular ? 'border-petallex-teal shadow-lg scale-105' : 'border-gray-200 shadow-md'} p-6 flex flex-col h-full relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-petallex-gradient text-white py-1 px-4 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-petallex-darkBlue">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-petallex-blue">{price}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-petallex-teal shrink-0 mr-2" />
            <span className="text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button className={`w-full ${popular ? 'bg-petallex-gradient' : 'bg-petallex-blue'} text-white hover:opacity-90`}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
