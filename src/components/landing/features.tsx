import React from 'react';
import { Building, Clock, CreditCard, MessageSquare, Shield, Users } from 'lucide-react';

const features = [
  {
    name: 'Property Management',
    description: 'Easily manage multiple properties and units from a single dashboard.',
    icon: Building,
  },
  {
    name: 'Online Rent Collection',
    description: 'Secure, automated rent collection with integrated payment processing.',
    icon: CreditCard,
  },
  {
    name: 'Maintenance Tracking',
    description: 'Streamlined maintenance request system with real-time updates.',
    icon: Clock,
  },
  {
    name: 'Tenant Portal',
    description: 'Self-service portal for tenants to pay rent and submit requests.',
    icon: Users,
  },
  {
    name: 'Secure Documents',
    description: 'Safe storage and sharing of important property documents.',
    icon: Shield,
  },
  {
    name: 'Communication Tools',
    description: 'Built-in messaging system for efficient property communication.',
    icon: MessageSquare,
  },
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful features for modern property management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools helps you manage properties more efficiently and provide better service to your tenants.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};