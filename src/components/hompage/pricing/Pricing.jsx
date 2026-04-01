import React from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: '$0',
    period: 'month',
    popular: false,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    button: 'Get Started Free',
  },
  {
    name: 'Pro',
    description: 'Best for professionals',
    price: '$29',
    period: 'month',
    popular: true,
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    button: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    description: 'For teams and businesses',
    price: '$99',
    period: 'month',
    popular: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    button: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <div className='w-11/12 mx-auto lg:w-5/6 mt-10 lg:mt-20'>
      <div className='text-center space-y-4 mb-10'>
        <h2 className='font-bold text-5xl'>Simple, Transparent Pricing</h2>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {plans.map((plan, index) =>
          <div key={index} className={`border-2 border-stone-200 bg-base-200 rounded-2xl p-6 space-y-4 flex flex-col ${plan.popular ? 'bg-linear-to-b from-[#632EF7] to-[#9415FA] text-white border-0' : ''}`}>
            {plan.popular && (
              <span className='text-xs px-3 py-1 rounded-full font-semibold bg-[#FEF3C6] text-[#C86C26] w-fit'>Most Popular</span>
            )}
            <h2 className='text-2xl font-bold'>{plan.name}</h2>
            <p className='opacity-60 text-sm'>{plan.description}</p>
            <div>
              <span className='text-4xl font-bold'>{plan.price}</span>
              <span className='opacity-60'>/{plan.period}</span>
            </div>
            <ul className='space-y-2 flex-1'>
              {plan.features.map((feature, i) =>
                <li key={i} className='flex items-center gap-2 text-sm'>
                  <span className='text-green-500'>✓</span>{feature}
                </li>
              )}
            </ul>
            <button className={`btn rounded-3xl w-full mt-2 ${plan.popular ? 'bg-white text-purple-600' : 'bg-linear-to-r from-[#632EF7] to-[#9415FA] text-white'}`}>
              {plan.button}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;