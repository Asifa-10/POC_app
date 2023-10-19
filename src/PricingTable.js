import React, { useState } from 'react';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [billingInterval, setBillingInterval] = useState('Monthly');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleIntervalToggle = (interval) => {
    setBillingInterval(interval);
  };

  const handleBillingIntervalChange = (interval) => {
    setBillingInterval(interval);
  };

  const plans = [
    {
      name: 'Basic Plan',
      monthlyPrice: 10,
      yearlyPrice: 100,
    },
    {
      name: 'Pro Plan',
      monthlyPrice: 25,
      yearlyPrice: 250,
    },
    {
      name: 'Premium Plan',
      monthlyPrice: 50,
      yearlyPrice: 500,
    },
  ];

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl p-8 bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">Pricing Plans</h1>

        <div className="flex justify-center mb-4 ">
          <button
            className={`${
              selectedPlan === 'mobile' ? 'bg-blue-500 text-white' : 'bg-blue-200'
            } py-2 px-4 rounded-md mx-2`}
            onClick={() => handlePlanSelect('Basic')}
          >
            Mobile
          </button>
          <button
            className={`${
              selectedPlan === 'basic' ? 'bg-blue-500 text-white' : 'bg-blue-200'
            } py-2 px-4 rounded-md mx-2`}
            onClick={() => handlePlanSelect('Basic')}
          >
            Basic
          </button>
          <button
            className={`${
              selectedPlan === 'standard' ? 'bg-blue-500 text-white' : 'bg-blue-200'
            } py-2 px-4 rounded-md mx-2`}
            onClick={() => handlePlanSelect('Pro')}
          >
            Standard
          </button>
          <button
            className={`${
              selectedPlan === 'Premium' ? 'bg-blue-500 text-white' : 'bg-blue-200'
            } py-2 px-4 rounded-md mx-2`}
            onClick={() => handlePlanSelect('Premium')}
          >
            Premium Plan
          </button>
        </div>

        <div className="flex justify-center bg-blue-950 p-2 rounded-lg max-w-xs">
          <button
            className={`${
              billingInterval === 'Monthly' ? 'bg-white text-blue-950' : 'bg-blue-950'
            } py-2 px-4 rounded-md mx-2 `}
            onClick={() => handleIntervalToggle('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`${
              billingInterval === 'Yearly' ? 'bg-blue-950 text-white' : 'bg-blue-950'
            } py-2 px-4 rounded-md mx-2`}
            onClick={() => handleIntervalToggle('Yearly')}
          >
            Yearly
          </button>
        </div>

        <table className="w-full mt-6">
          <thead>
            <tr>
              <td className="text-left">Monthly</td>
              <td className="text-right">Price ({billingInterval})</td>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.name}>
                <td>{plan.name}</td>
                <td className="text-right">
                  {billingInterval === 'Monthly' ? `$${plan.monthlyPrice}/month` : `$${plan.yearlyPrice}/year`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingPage;
