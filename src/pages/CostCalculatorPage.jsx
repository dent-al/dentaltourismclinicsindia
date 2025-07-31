import React from 'react';
import { Helmet } from 'react-helmet';
import DynamicCostCalculator from '../components/DynamicCostCalculator';

const CostCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Dental Cost Calculator - Get Instant Treatment Pricing | Dental Tourism India</title>
        <meta name="description" content="Calculate dental treatment costs instantly across India. Compare prices for implants, braces, root canal, and more. Get accurate estimates from verified clinics." />
        <meta name="keywords" content="dental cost calculator, treatment pricing, dental implant cost, braces cost, root canal price, teeth whitening cost, India dental prices" />
        <meta property="og:title" content="Dental Cost Calculator - Instant Treatment Pricing" />
        <meta property="og:description" content="Get instant dental treatment cost estimates across India. Compare prices and book appointments with verified clinics." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location.origin}/cost-calculator`} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 py-8">
        <div className="container mx-auto px-4">
          <DynamicCostCalculator />
        </div>
      </div>
    </>
  );
};

export default CostCalculatorPage;
