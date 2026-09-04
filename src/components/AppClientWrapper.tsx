'use client';

import React from 'react';
import { AnimatePresence } from 'motion/react';
import { useAppState } from '@/src/hooks/useAppState';
import { LandingPage } from '@/src/views/LandingPage';
import { BookingEngine } from '@/src/views/BookingEngine';
import { AdminPanel } from '@/src/views/AdminPanel';
import { SupabasePlaybook } from '@/src/views/SupabasePlaybook';
import { RouteLoader } from '@/src/components/RouteLoader';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';

interface AppClientWrapperProps {
  initialRoute?: string;
}

export const AppClientWrapper: React.FC<AppClientWrapperProps> = ({ initialRoute }) => {
  const {
    route,
    homepageData,
    galleryData,
    bookings,
    blockedDates,
    notifications,
    settings,
    isScrolled,
    isRouteLoading,
    activeSection,
    selectedVillaId,
    setSelectedVillaId,
    lang,
    setLang,
    showLangTooltip,
    currency,
    setCurrency,
    handleUpdateHomepage,
    handleUpdateGallery,
    handleUpdateBlockedDates,
    handleUpdateSettings,
    handleUpdateBookings,
    handleUpdateNotifications,
    handleSubmitBooking,
    navigateToPage
  } = useAppState();

  const currentRoute = route || initialRoute;
  const isAdminView = currentRoute.startsWith('/admin');

  return (
    <div className="font-sans min-h-screen text-text-dark bg-cream/40">
      <AnimatePresence>
        {isRouteLoading && <RouteLoader />}
      </AnimatePresence>
      
      {/* 1. PUBLIC HEADER NAVBAR */}
      {!isAdminView && (
        <Navbar
          settings={settings}
          lang={lang}
          setLang={setLang}
          activeSection={activeSection}
          showLangTooltip={showLangTooltip}
          isScrolled={isScrolled}
          onNavigate={navigateToPage}
        />
      )}

      {/* 2. CORE Switch Route Views */}
      <div className="min-h-screen">
        {currentRoute === '/home' && (
          <LandingPage
            homepageData={homepageData}
            galleryData={galleryData}
            settings={settings}
            onNavigate={navigateToPage}
            currency={currency}
            lang={lang}
            setSelectedVillaId={setSelectedVillaId}
          />
        )}

        {currentRoute === '/home/book' && (
          <BookingEngine
            settings={settings}
            bookings={bookings}
            blockedDates={blockedDates}
            onSubmitBooking={handleSubmitBooking}
            onNavigate={navigateToPage}
            currency={currency}
            onChangeCurrency={setCurrency}
            lang={lang}
            homepageData={homepageData}
            selectedVillaId={selectedVillaId}
            setSelectedVillaId={setSelectedVillaId}
          />
        )}

        {currentRoute === '/supabase' && (
          <div className="pt-28 pb-16 px-4 md:px-12 max-w-7xl mx-auto">
            <SupabasePlaybook />
          </div>
        )}

        {currentRoute.startsWith('/admin') && (
          <AdminPanel
            bookings={bookings}
            blockedDates={blockedDates}
            homepageData={homepageData}
            galleryData={galleryData}
            settings={settings}
            notifications={notifications}
            onUpdateBookings={handleUpdateBookings}
            onUpdateBlockedDates={handleUpdateBlockedDates}
            onUpdateHomepage={handleUpdateHomepage}
            onUpdateGallery={handleUpdateGallery}
            onUpdateSettings={handleUpdateSettings}
            onUpdateNotifications={handleUpdateNotifications}
          />
        )}
      </div>

      {/* 4. PUBLIC FOOTER */}
      {!isAdminView && (
        <Footer
          settings={settings}
          lang={lang}
          onNavigate={navigateToPage}
        />
      )}
    </div>
  );
};
export default AppClientWrapper;
