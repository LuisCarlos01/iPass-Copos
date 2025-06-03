import React from 'react';

interface StepNavigationProps {
  currentStep: 'login' | 'origem' | 'transporte' | 'pagamento';
}

export function StepNavigation({ currentStep }: StepNavigationProps) {
  const steps = [
    { key: 'login', label: 'Login' },
    { key: 'origem', label: 'Origem' },
    { key: 'transporte', label: 'Transporte' },
    { key: 'pagamento', label: 'Pagamento' },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex space-x-8">
          {steps.map((step, index) => {
            const isActive = step.key === currentStep;
            const isCompleted = steps.findIndex(s => s.key === currentStep) > index;
            
            return (
              <div
                key={step.key}
                className={`py-4 px-1 border-b-2 text-sm font-medium ${
                  isActive
                    ? 'border-ipass-primary text-ipass-primary'
                    : isCompleted
                    ? 'border-transparent text-ipass-gray-600 hover:text-ipass-gray-700'
                    : 'border-transparent text-ipass-gray-400'
                }`}
              >
                {step.label}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
} 