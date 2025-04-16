import React from 'react';
import { cn } from '@/lib/utils';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className,
}) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colors = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    white: 'text-white',
  };

  return (
    <div
      className={cn('inline-block animate-spin', sizes[size as keyof typeof sizes], colors[color as keyof typeof colors], className)}
      role="status"
      aria-label="Loading"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner; 