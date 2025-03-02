import React from "react";
import { FcKey } from "react-icons/fc";

const Psk = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-full mb-10 lg:mb-14 text-center">
        <div className="flex justify-center text-8xl">
          <FcKey />
        </div>
        <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">
          Your Key to Unbreakable Security
        </h2>
        <p className="mt-1  md text-neutral-600">
          To ensure that your information remains protected at all times, we
          provide a Permanent Security Key (PSC) that offers a range of benefits
          to safeguard your account and data
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-12">
        {/* Icon Block 1 */}
        <div className="transition-all transform hover:scale-105 hover:shadow-lg border bg-gray-50 border-gray-200 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg
              className="shrink-0 size-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Enhanced Data Protection
            </h3>
          </div>
        </div>

        {/* Icon Block 2 */}
        <div className="transition-all transform hover:scale-105 hover:shadow-lg border bg-gray-50 border-gray-300 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg
              className="shrink-0 size-6 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Secure Login Process
            </h3>
          </div>
        </div>

        {/* Icon Block 3 */}
        <div className="transition-all transform hover:scale-105 hover:shadow-lg border bg-gray-50 border-gray-300 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg
              className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Protects Against Fraud and Cyber Threats
            </h3>
          </div>
        </div>

        {/* Icon Block 4 */}
        <div className="transition-all transform hover:scale-105 hover:shadow-lg border bg-gray-50 border-gray-300 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
            <svg
              className="shrink-0 size-6 text-blue-600 dark:text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800">
              Easy Integration
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psk;
