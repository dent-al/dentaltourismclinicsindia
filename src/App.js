import AppointmentDetails from "./pages/AppointmentDetails";
import React, { Suspense, lazy, useEffect } from "react";
import SEOMeta from "./components/SEOMeta";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import './App.css';
import './styles/theme.css';
import { AuthProvider } from "./contexts/AuthContext";
import { SEOProvider } from "./contexts/SEOContext.jsx";
import { AnalyticsProvider } from "./contexts/AnalyticsContext";
import { AdminProvider } from "./contexts/AdminContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OffersStrip from "./components/OffersStrip";
import DisclaimerBanner from "./components/DisclaimerBanner";
import ScrollToTop from "./components/ScrollToTop";
import { usePerformance } from './hooks/usePerformance';
import { registerSW, initPerformanceMonitoring } from './utils/buildOptimization';
import { initializeAnalytics } from './services/analyticsService';
import './i18n'; // Initialize internationalization

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
const FixMyTeeth = lazy(() => import("./pages/FixMyTeeth"));
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
const AppDownloadPage = lazy(() => import("./pages/AppDownloadPage"));
const FloatingSocialButtons = lazy(() => import("./components/FloatingSocialButtons"));
const AdminAnalyticsDashboard = lazy(() => import("./pages/AdminAnalyticsDashboard"));
const AdminDataDashboard = lazy(() => import("./pages/AdminDataDashboard"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const ProtectedAdminRoute = lazy(() => import("./components/ProtectedAdminRoute"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PatientRefundPolicy = lazy(() => import("./pages/PatientRefundPolicy"));
const ThemeShowcase = lazy(() => import("./pages/ThemeShowcase"));
const ConnectionTest = lazy(() => import("./components/ConnectionTest"));
const OnlineConsultation = lazy(() => import("./pages/OnlineConsultation"));
const PatientConsultationForm = lazy(() => import("./pages/PatientConsultationForm"));
const VideoConsultation = lazy(() => import("./pages/VideoConsultation"));
const DentistSelection = lazy(() => import("./pages/DentistSelection"));

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
    
    // Initialize analytics tracking
    const analytics = initializeAnalytics();
    
    // Store analytics functions globally for easy access
    window.dentistryAnalytics = analytics;

    return () => {
      cleanupListeners();
    };
  }, [measurePerformance, cleanupListeners]);

  // Disclaimer routes
  const showDisclaimer = ["/login", "/consult-form"].includes(location.pathname);

  return (
    <SEOProvider>
      <SEOMeta />
      <AnalyticsProvider>
        <AdminProvider>
          <AuthProvider>
            <ScrollToTop />
            {!hideHeader && <Header />}
            <OffersStrip />
    {/* Disclaimer banner for login/consult pages */}
    {showDisclaimer && <DisclaimerBanner />}
    <div className={`${noTopPadding ? '' : 'pt-2'} min-h-screen bg-white w-full overflow-x-hidden transition-colors duration-300`}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clinics" element={<ClinicList type="clinic" />} />
            <Route path="/famous-dental-clinic" element={<ClinicList type="clinic" featured={true} />} />
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
            <Route path="/fix-my-teeth" element={<FixMyTeeth />} />
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
            <Route path="/download-app" element={<AppDownloadPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/patient-refund-policy" element={<PatientRefundPolicy />} />
            <Route path="/theme-showcase" element={<ThemeShowcase />} />
            <Route path="/test-connection" element={<ConnectionTest />} />
            <Route path="/online-consultation" element={<OnlineConsultation />} />
            <Route path="/select-dentist" element={<DentistSelection />} />
            <Route path="/patient-consultation" element={<PatientConsultationForm />} />
            <Route path="/video-consultation" element={<VideoConsultation />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/analytics-dashboard" 
              element={
                <ProtectedAdminRoute>
                  <AdminAnalyticsDashboard />
                </ProtectedAdminRoute>
              } 
            />
            <Route path="/admin-panel" element={<AdminLogin />} />
            <Route 
              path="/admin/analytics" 
              element={
                <ProtectedAdminRoute>
                  <AdminAnalyticsDashboard />
                </ProtectedAdminRoute>
              } 
            />
            <Route 
              path="/admin/data" 
              element={
                <ProtectedAdminRoute>
                  <AdminDataDashboard />
                </ProtectedAdminRoute>
              } 
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingSocialButtons />
      </Suspense>
      </AuthProvider>
      </AdminProvider>
      </AnalyticsProvider>
    </SEOProvider>
  );
}

export default App;
