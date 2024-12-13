import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const tiers = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for small property owners',
    features: [
      'Up to 5 properties',
      'Basic maintenance tracking',
      'Online rent collection',
      'Tenant portal access',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing property managers',
    features: [
      'Up to 20 properties',
      'Advanced maintenance tracking',
      'Online rent collection',
      'Tenant portal access',
      'Priority email & phone support',
      'Financial reporting',
      'Document storage',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large property management companies',
    features: [
      'Unlimited properties',
      'Advanced maintenance tracking',
      'Online rent collection',
      'Tenant portal access',
      '24/7 priority support',
      'Advanced financial reporting',
      'Unlimited document storage',
      'API access',
      'Custom integrations',
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs. All plans include our core features with no hidden fees.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant={tier.name === 'Professional' ? 'primary' : 'outline'} className="mt-8">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};