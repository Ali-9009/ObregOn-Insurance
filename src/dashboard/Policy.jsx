import { Pencil } from "lucide-react";

import Sidebar from "./Sidebar";

export default function Policy() {
  const data = [1, 2, 3];
  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:py-12 py-6 px-4">

        <Sidebar />

        <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6">

          <div className="space-y-5">

            {/* Title */}
            <h1 className="text-2xl font-semibold">
              Policy
            </h1>

            {/* MOBILE CARDS (only mobile) */}
            <div className="sm:hidden space-y-3">
              {data.map((_, i) => (
                <div key={i} className="bg-white border border-gray-300 rounded-lg p-3 text-sm">
                  <p className="font-medium">INV-1001</p>
                  <p className="text-gray-500">Ali Khan</p>
                  <p className="text-gray-500">Villa B-8</p>
                  <p className="font-semibold">$20k</p>
                  <p className="text-gray-500 text-xs">23/March/2026</p>
                  <span className="inline-block mt-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Paid
                  </span>
                </div>
              ))}
            </div>

            {/* TABLE (desktop only) */}
            <div className="hidden sm:block bg-white rounded-xl border border-gray-300 p-3 sm:p-4">
              <div className="overflow-x-auto">
                <table className="min-w-175 w-full text-xs sm:text-sm text-left">

                  <thead className="text-gray-500 border-b border-gray-300">
                    <tr>
                      <th className="py-2 px-2 whitespace-nowrap">Invoice ID</th>
                      <th className="px-2 whitespace-nowrap">Tenant Name</th>
                      <th className="px-2 whitespace-nowrap">Property</th>
                      <th className="px-2 whitespace-nowrap">Amount</th>
                      <th className="px-2 whitespace-nowrap">Due Date</th>
                      <th className="px-2 whitespace-nowrap">Payment Method</th>
                      <th className="px-2 whitespace-nowrap">Status</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-700">
                    {data.map((_, i) => (
                      <tr key={i} className="border-b border-gray-300 last:border-0">
                        <td className="py-2 px-2 whitespace-nowrap">INV-1001</td>
                        <td className="px-2 whitespace-nowrap">Ali Khan</td>
                        <td className="px-2 whitespace-nowrap">Villa B-8</td>
                        <td className="px-2 whitespace-nowrap">$20k</td>
                        <td className="px-2 whitespace-nowrap">23/March/2026</td>
                        <td className="px-2 whitespace-nowrap">Credit Card</td>
                        <td className="px-2">
                          <span className="bg-lime-500 text-white text-xs px-2 py-1 rounded-sm">
                            Paid
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

              {/* Timeline */}
              <div className="bg-white rounded-xl border border-gray-300 p-3 sm:p-4">
                <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                  Policy Timeline
                </h2>

                <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="flex gap-2 sm:gap-3">
                      <div className="mt-1 w-2 h-2 bg-(--secondary-color) rounded-full"></div>

                      <div>
                        <p className="text-xs text-(--secondary-color) font-medium">
                          Mar 28, 2026
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-gray-700">
                          Home Policy Renewed
                        </p>
                        <p className="text-xs text-gray-500">
                          HM-2209 successfully renewed until March 2027.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage */}
              <div className="bg-white rounded-xl border border-gray-300 p-3 sm:p-4">
                <h2 className="font-semibold text-gray-700 text-lg border-b border-gray-300 pb-2 mb-6">
                  Coverage by Type
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">

                  {[
                    { name: "Life", value: "$1M", width: "70%", color: "bg-green-500" },
                    { name: "Home", value: "$800K", width: "55%", color: "bg-yellow-400" },
                    { name: "Auto", value: "$600K", width: "45%", color: "bg-orange-500" },
                    { name: "Health", value: "$250K", width: "25%", color: "bg-red-500" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div
                          className={`h-2 ${item.color} rounded`}
                          style={{ width: item.width }}
                        ></div>
                      </div>
                    </div>
                  ))}

                </div>

                {/* Total */}
                <div className="mt-6 pt-4 border-t border-gray-300">
                  <p className="text-lg font-semibold text-(--secondary-color)">Total Coverage</p>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    $2.65M
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>

  );
}
