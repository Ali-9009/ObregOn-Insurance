import Sidebar from "./Sidebar";
import Button from "../components/PrimaryBtn";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:py-12 py-6 px-4">

      <Sidebar />

      <div className="flex-1 bg-[#fbfbfb] rounded-xl p-4 md:p-6">
        <div className="space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-200 rounded-xl p-4">
              <p className="text-2xl font-semibold">4</p>
              <p className="text-sm text-gray-600">Active Policies</p>
            </div>

            <div className="bg-green-200 rounded-xl p-4">
              <p className="text-2xl font-semibold">$2.4M</p>
              <p className="text-sm text-gray-600">Total Coverage</p>
            </div>

            <div className="bg-gray-200 rounded-xl p-4">
              <p className="text-2xl font-semibold">3</p>
              <p className="text-sm text-gray-600">Claims Filed</p>
            </div>

            <div className="bg-red-200 rounded-xl p-4">
              <p className="text-2xl font-semibold">May 5</p>
              <p className="text-sm text-gray-600">Next Premium Due</p>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl p-4 border border-gray-300">

              <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
                <h2 className="font-semibold text-lg text-gray-700">Recent Activity</h2>
                <Button text="View All" />
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                {[1, 2, 3].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-gray-300 pb-2">
                    <span>Premium payment of $840 processed</span>
                    <span className="text-gray-700">Today</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Side */}
            <div className="space-y-6">

              {/* Coverage Health */}
              <div className="bg-white rounded-xl p-4 border border-gray-300">
                <h2 className="font-semibold text-gray-700 mb-6 text-lg border-b border-gray-300 pb-2">
                  Coverage Health
                </h2>

                <div className="flex flex-col items-center">

                  {/* Fake Circle Progress */}
                  <div className="relative w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent border-l-transparent rotate-45"></div>
                  </div>

                  <div className="flex justify-between w-full mt-4 text-sm text-gray-600">
                    <div className="text-center">
                      <p className="font-semibold">4/6</p>
                      <p>Policies</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold">$2.4M</p>
                      <p>Coverage</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Claim Breakdown */}
              <div className="bg-white rounded-xl p-4 border border-gray-300">
                <h2 className="font-semibold text-gray-700 mb-6 text-lg border-b border-gray-300 pb-2">
                  Claim Breakdown
                </h2>

                <div className="space-y-3 text-sm">

                  {/* Approved */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Approved</span>
                      <span>$12,500</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div className="h-2 bg-green-500 rounded w-[70%]"></div>
                    </div>
                  </div>

                  {/* Pending */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Pending</span>
                      <span>$4,200</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div className="h-2 bg-yellow-400 rounded w-[40%]"></div>
                    </div>
                  </div>

                  {/* Rejected */}
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Rejected</span>
                      <span>$800</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div className="h-2 bg-red-500 rounded w-[15%]"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
