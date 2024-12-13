import React from 'react';
import { Building2 } from 'lucide-react';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">PropManage</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};