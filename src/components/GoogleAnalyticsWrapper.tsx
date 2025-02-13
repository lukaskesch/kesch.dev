"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsWrapper() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("ga_consent");
    if (storedConsent) {
      setHasConsent(storedConsent === "true");
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem("ga_consent", String(consent));
    setHasConsent(consent);
  };

  if (hasConsent === null) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This website uses Google Analytics to analyze traffic. Do you accept
            these cookies?
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleConsent(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Accept
            </button>
            <button
              onClick={() => handleConsent(false)}
              className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Decline
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (hasConsent) {
    return <GoogleAnalytics gaId="G-20FL46R9YH" />;
  }

  return null;
}