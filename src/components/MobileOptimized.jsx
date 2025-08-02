import React from 'react';

/**
 * MobileOptimized Wrapper Component
 * Provides consistent mobile-first responsive design patterns
 */
const MobileOptimized = ({ 
  children, 
  className = '',
  container = true,
  padding = true,
  spacing = true,
  centerContent = false 
}) => {
  const baseClasses = [
    // Mobile-first responsive container
    container && 'w-full max-w-7xl mx-auto',
    
    // Mobile-first padding
    padding && 'px-3 sm:px-4 lg:px-6',
    
    // Mobile-first spacing
    spacing && 'py-4 sm:py-6 lg:py-8',
    
    // Center content option
    centerContent && 'flex flex-col items-center justify-center',
    
    // Overflow handling for mobile
    'overflow-x-hidden',
    
    // Custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

/**
 * ResponsiveGrid Component
 * Provides consistent grid layouts across screen sizes
 */
export const ResponsiveGrid = ({ 
  children, 
  cols = { base: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-4 sm:gap-6',
  className = '' 
}) => {
  const gridCols = `grid-cols-${cols.base} sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`;
  
  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {children}
    </div>
  );
};

/**
 * MobileCard Component
 * Provides consistent card design with mobile optimizations
 */
export const MobileCard = ({ 
  children, 
  className = '',
  padding = true,
  shadow = true,
  rounded = true,
  hover = true 
}) => {
  const cardClasses = [
    'bg-white',
    rounded && 'rounded-lg sm:rounded-xl',
    shadow && 'shadow-lg',
    hover && 'hover:shadow-xl transition-shadow duration-300',
    padding && 'p-4 sm:p-6',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

/**
 * ResponsiveButton Component
 * Mobile-optimized button with proper touch targets
 */
export const ResponsiveButton = ({ 
  children, 
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-[#2C73D2] hover:bg-blue-700 text-white',
    secondary: 'bg-[#F4A300] hover:bg-yellow-500 text-white',
    outline: 'border-2 border-[#2C73D2] text-[#2C73D2] hover:bg-[#2C73D2] hover:text-white',
    ghost: 'text-[#2C73D2] hover:bg-blue-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = [
    // Base styles
    'font-semibold rounded-lg transition-all duration-300 transform',
    
    // Mobile touch optimization
    'active:scale-95 min-h-[44px]', // Minimum touch target size
    
    // Responsive sizing
    sizes[size],
    
    // Variant styles
    variants[variant],
    
    // Width
    fullWidth ? 'w-full' : 'w-auto',
    
    // Disabled state
    disabled && 'opacity-50 cursor-not-allowed',
    
    // Hover effects
    !disabled && 'hover:shadow-md',
    
    // Custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * ResponsiveText Component
 * Provides consistent text sizing across screen sizes
 */
export const ResponsiveText = ({ 
  children, 
  as = 'p',
  size = 'base',
  weight = 'normal',
  color = 'gray-700',
  className = '' 
}) => {
  const Component = as;
  
  const sizes = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl',
    '4xl': 'text-4xl sm:text-5xl'
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  const textClasses = [
    sizes[size],
    weights[weight],
    `text-${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses}>
      {children}
    </Component>
  );
};

/**
 * MobileInput Component
 * Mobile-optimized input with proper touch targets
 */
export const MobileInput = ({ 
  label,
  error,
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-lg border-2 border-gray-200 
          focus:border-[#2C73D2] focus:outline-none 
          text-base transition-colors duration-200
          min-h-[44px] bg-white
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default MobileOptimized;
