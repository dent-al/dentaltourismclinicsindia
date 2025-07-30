import AppointmentDetails from "./pages/AppointmentDetails";
import React, { Suspense, lazy, useEffect } from "react";
import SEOMeta from "./components/SEOMeta";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import { AuthProvider } from "./contexts/AuthContext";
import { SEOProvider } from "./contexts/SEOContext.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { usePerformance } from './hooks/usePerformance';
import { registerSW, initPerformanceMonitoring } from './utils/buildOptimization';

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const ClinicList = lazy(() => import("./pages/ClinicList"));
const ClinicDetails = lazy(() => import("./pages/ClinicDetails"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const RegisterClinic = lazy(() => import("./pages/RegisterClinic"));
const Login = lazy(() => import("./pages/Login"));
const ConsultForm = lazy(() => import("./pages/ConsultForm"));
const ConsultPage = lazy(() => import("./pages/ConsultPage"));
const BloodTestLabPage = lazy(() => import("./pages/BloodTestLabPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const DentistList = lazy(() => import("./pages/DentistList.jsx"));
const HelpSupport = lazy(() => import("./pages/HelpSupport"));
const DentistRegistrationForm = lazy(() => import("./components/DentistRegistrationForm"));
const PricingPlansPage = lazy(() => import("./pages/PricingPlansPage"));
const CBCTRegistrationForm = lazy(() => import("./pages/CBCTRegistrationForm"));
const LoginSignup = lazy(() => import("./pages/LoginSignup"));
const SignUp = lazy(() => import("./pages/SignUp"));
const DiagnosticLabRegistrationForm = lazy(() => import("./pages/DiagnosticLabRegistrationForm"));
const PharmaBrandsRegistrationForm = lazy(() => import("./pages/PharmaBrandsRegistrationForm"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const AppointmentConfirmPage = lazy(() => import("./pages/AppointmentConfirmPage"));
const ConfirmAndPay = lazy(() => import("./pages/ConfirmAndPay.jsx"));
const SEOPage = lazy(() => import("./pages/SEOPage"));
const ChatBot = lazy(() => import("./components/ChatBot"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="flex flex-col items-center">
      <div className="w-12 text-orange-600" style={{ animation: 'spin 2s linear infinite' }}>
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"></path>
        </svg>
      </div>
      <p className="mt-4 text-[#2C73D2] font-medium">Loading...</p>
    </div>
    <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login";
  const noTopPaddingRoutes = ["/dentist-registration", "/cbct-registration"];
  const noTopPadding = noTopPaddingRoutes.includes(location.pathname);

  // Initialize performance monitoring
  const { measurePerformance, cleanupListeners } = usePerformance();

  // Register service worker and initialize performance monitoring
  useEffect(() => {
    registerSW();
    initPerformanceMonitoring();
    measurePerformance('App Mount', performance.now());

    return () => {
      cleanupListeners();
    };
  }, [measurePerformance, cleanupListeners]);

  // Disclaimer routes
  const showDisclaimer = ["/login", "/consult", "/consult-form"].includes(location.pathname);

  return (
    <SEOProvider>
      <SEOMeta />
      <AuthProvider>
        <ScrollToTop />
        {!hideHeader && <Header />}
        {/* Animated Offers Strip - now global, appears on all pages below header */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(90deg, #2C73D2 0%, #F4A300 100%)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        letterSpacing: '0.5px',
        boxShadow: '0 2px 12px 0 rgba(44,115,210,0.10)',
        padding: '0.18rem 0',
        marginBottom: '0.5rem',
        borderTop: '3px solid #FFD700',
        borderBottom: '3px solid #FFD700',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <span style={{marginLeft: '1.5rem', marginRight: '1.2rem', fontSize: '1.2rem', color: '#FFD700', textShadow: '0 2px 8px #2056AE44'}}>Latest Offers:</span>
        <marquee behavior="scroll" direction="left" scrollamount="8" style={{width: '80%', fontWeight: '600', fontSize: '1.1rem', color: 'black'}}>
          {/* Example offers, replace with dynamic data if needed */}
          <span style={{marginRight: '2.5rem', display: 'inline-block', animation: 'pulseOffer 1.2s infinite alternate'}}>
            <span style={{color: 'black'}}>★</span> Smile Dental Care: <span style={{color: 'black'}}>10% off on first visit</span>
          </span>
          <span style={{marginRight: '2.5rem', display: 'inline-block', animation: 'pulseOffer 1.2s infinite alternate'}}>
            <span style={{color: 'black'}}>★</span> Pearl Dental Studio: <span style={{color: 'black'}}>Free consultation for new patients</span>
          </span>
          <span style={{marginRight: '2.5rem', display: 'inline-block', animation: 'pulseOffer 1.2s infinite alternate'}}>
            <span style={{color: 'black'}}>★</span> Bright Smiles Clinic: <span style={{color: 'black'}}>Complimentary dental checkup</span>
          </span>
        </marquee>
        <style>{`
          @keyframes pulseOffer {
            0% { opacity: 1; }
            100% { opacity: 0.7; }
          }
        `}</style>
      </div>
      {/* Disclaimer banner for login/consult pages */}
      {showDisclaimer && (
        <div style={{
          background: 'linear-gradient(90deg, #FFD700 0%, #F4A300 100%)',
          color: '#2056AE',
          fontWeight: 'bold',
          fontSize: '1.05rem',
          padding: '1rem 2rem',
          margin: '0 auto 1rem auto',
          borderRadius: '1.2rem',
          maxWidth: '900px',
          boxShadow: '0 2px 16px 0 rgba(44,115,210,0.10)',
          border: '2px solid #2C73D2',
          textAlign: 'center',
        }}>
          This online platform helps users find Dental Clinics across India but is not a healthcare provider. Information provided on this platform is for general guidance only and does not constitute medical advice. We do not own or control any listed clinics, all operate independently. Users are solely responsible for their decision to contact or engage with any clinic. We do not guarantee the accuracy, quality, or outcomes of any clinic's services. We are not liable for any issues, misguidance, complications, or dissatisfaction arising from use of the platform or treatment by any third party. Reviews and ratings are personal opinions and not verified by us. Platform content and listings may change without prior notice. This platform only guides users to suitable clinics and is not responsible for any resulting problems.
          <br /><span style={{color: '#C0392B', fontWeight: 'bold'}}>ALWAYS CONSULT A LICENSED PROFESSIONAL.</span>
        </div>
      )}
      <div className={`${noTopPadding ? '' : 'pt-2'} min-h-screen bg-white w-full overflow-x-hidden`}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clinics" element={<ClinicList type="clinic" />} />
            <Route path="/clinic/:id" element={<ClinicDetails />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/register-clinic" element={<RegisterClinic />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/consult" element={<ConsultPage />} />
            <Route path="/consult-form" element={<ConsultForm />} />
            <Route path="/dentist-list" element={<DentistList />} />
            <Route path="/cbct-opg-lab" element={<ClinicList type="cbct" />} />
            <Route path="/blood-test-lab" element={<BloodTestLabPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/help" element={<HelpSupport />} />
            <Route path="/dentist-registration" element={<DentistRegistrationForm />} />
            <Route path="/cbct-registration" element={<CBCTRegistrationForm />} />
            <Route path="/diagnostic-lab-registration" element={<DiagnosticLabRegistrationForm />} />
            <Route path="/pricing-plans" element={<PricingPlansPage />} />
            <Route path="/pharma-brands-registration" element={<PharmaBrandsRegistrationForm />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/appointment-confirm" element={<AppointmentConfirmPage />} />
            <Route path="/confirm-pay" element={<ConfirmAndPay />} />
            <Route path="/appointment-details" element={<AppointmentDetails />} />
            <Route path="/seo-manager" element={<SEOPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
      </AuthProvider>
    </SEOProvider>
  );
}

export default App;
