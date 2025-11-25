import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import OverviewCards from "../components/OverviewCards.jsx";
import InvoicesTable from "../components/InvoicesTable.jsx";
import ActivityCard from "../components/ActivityCard.jsx";

export default function Dashboard({ theme, setTheme }) {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-[#7f8a91] p-4 md:p-6">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="rounded-2xl bg-[#0f1720] p-4 md:p-6 flex flex-col md:flex-row gap-6">
          
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1">
            <Header theme={theme} setTheme={setTheme} />

            <section className="mt-6 space-y-6">
              <OverviewCards />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <InvoicesTable />
                </div>
                <ActivityCard />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
