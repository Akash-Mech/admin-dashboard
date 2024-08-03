import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from "./context/ThemeContextProvider";


export default function Home() {
  return (
    <ThemeContextProvider>
      <Sidebar />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div>
          <Dashboard />
        </div>
      </div>
    </ThemeContextProvider>
  );
}
