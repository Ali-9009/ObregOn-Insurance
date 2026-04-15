import Sidebar from "./Sidebar";
import Button from "../components/PrimaryBtn";
import { SquarePen } from "lucide-react";
import BankCard from "../components/BankCard";

export default function Billing() {

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:py-12 py-6 px-4">

      <Sidebar />

      <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6">
        <div className="space-y-5">

          <h1 className="text-2xl font-semibold">
            Billing & Invoices
          </h1>

          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Card */}
            <BankCard />

            {/* Payment Card */}
            <div className="bg-white rounded-xl border border-gray-300 p-4">
              <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                Next Payment
              </h2>

              <div className="flex justify-between text-sm mb-2">
                <span className="text-(--secondary-color) font-semibold text-md">Amount Due</span>
                <span className="text-(--secondary-color) font-bold text-md">$840</span>
              </div>

              <div className="flex justify-between text-sm mb-3">
                <span className="text-(--secondary-color) font-semibold text-md">Due Date</span>
                <span className="text-gray-800">May 5, 2026</span>
              </div>

              {/* Progress */}
              <div className="h-2 bg-gray-200 rounded mb-2">
                <div className="h-2 bg-(--primary-color) w-[70%] rounded"></div>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                32 days until next premium cycle
              </p>

              <Button className="w-full" text="Pay Now" />
            </div>

          </div>

          {/* Invoice Section */}
          <div className="bg-white rounded-xl border border-gray-300 mt-6 p-4">

            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
              <h2 className="font-semibold text-gray-700 text-lg ">
                Invoice History
              </h2>

              <Button text="Export CSV" />
            </div>

            {/* List */}
            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-gray-300 pb-2 last:border-0"
                >
                  <div>
                    <p className="text-md text-gray-800 font-medium">
                      Health Policy HL-7720 — Q2 Premium
                    </p>
                    <p className="text-xs text-gray-400">
                      Apr 1, 2026 • INV-2026-0401
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded-md">
                      Paid
                    </span>
                    <span className="text-md text-gray-700 font-semibold">$245</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
