import { useState } from "react";
import { Switch } from "@headlessui/react";
import Sidebar from "./Sidebar";
import Button from "../components/PrimaryBtn";

export default function Setting() {
  const data = [1, 2, 3];
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:py-12 py-6 px-4">
      
      <Sidebar />

        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6">

          <div className="space-y-5 sm:space-y-6 px-3 sm:px-0">

            {/* HEADER */}
            <div>
              <h1 className="text-2xl font-semibold">
                Account Settings
              </h1>
            </div>

            {/* PROFILE */}
            <Card>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                {/* LEFT */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-(--primary-color) text-white flex items-center justify-center font-semibold">
                    A
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      Alex Morgan
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 break-all">
                      alex.morgan@example.com
                    </p>
                  </div>
                </div>

                <Button text="Change Photo" />

              </div>
            </Card>

            {/* PERSONAL INFO */}
            <Card>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">

                <h2 className="font-semibold text-gray-700 text-lg">
                  Personal Information
                </h2>

                <Button text="Save" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Date of Birth" />
                <Input placeholder="Country" />
                <Input placeholder="Language" />
              </div>
            </Card>

            {/* SECURITY + NOTIFICATIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

              {/* SECURITY */}
              <Card>
                <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                  Security
                </h2>

                <div className="space-y-4">
                  <ToggleItem
                    title="Two-Factor Authentication"
                    desc="Protect your account with an authenticator app"
                  />

                  <ToggleItem
                    title="Biometric Login"
                    desc="Use Face ID or fingerprint to sign in"
                  />

                  <ToggleItem
                    title="Session Timeout"
                    desc="Automatically log out after 30 minutes"
                  />
                </div>
              </Card>

              {/* NOTIFICATIONS */}
              <Card>

                <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                  Notifications
                </h2>

                <div className="space-y-4">
                  <ToggleItem
                    title="Email Notifications"
                    desc="Receive updates and alerts via email"
                  />

                  <ToggleItem
                    title="Push Notifications"
                    desc="In-app and mobile push alerts"
                  />

                  <ToggleItem
                    title="SMS Alerts"
                    desc="Critical updates sent by text message"
                  />

                  <ToggleItem
                    title="Marketing Emails"
                    desc="Offers, tips, and product news"
                  />
                </div>
              </Card>
            </div>

            {/* DANGER ZONE */}
            <Card>
              <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                Danger Zone
              </h2>

              <div className="space-y-4">
                <DangerItem
                  title="Export Account Data"
                  desc="Download a copy of all your personal data and documents"
                  action="Export"
                />

                <DangerItem
                  title="Delete Account"
                  desc="Permanently remove your account and all associated data"
                  action="Delete"
                  danger
                />
              </div>
            </Card>

          </div>

        </div>

    </div>
  );
}







function Card({ children }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-300">
      {children}
    </div>
  );
}



function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none"
    />
  );
}

function ToggleItem({ title, desc }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-300 last:border-none">
      <div>
        <p className="text-md font-medium text-gray-900">
          {title}
        </p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-green-500" : "bg-gray-300"
          } relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-300`}
      >
        <span
          className={`${enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-3 w-3 transform bg-white rounded-full shadow-md transition duration-300`}
        />
      </Switch>
    </div>
  );
}

function DangerItem({ title, desc, action, danger }) {
  return (
    <div className="flex items-center justify-between py-4 border-t border-gray-300 first:border-t-0">
      <div>
        <p className="text-sm font-medium text-gray-700">
          {title}
        </p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>

      <button
        className={`px-4 py-1 text-sm rounded-full ${danger
          ? "bg-red-600 text-white"
          : "bg-(--primary-color) text-white"
          }`}
      >
        {action}
      </button>
    </div>
  );
}
