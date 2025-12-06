import "./App.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MetricCard from "./components/MetricCard";
import Sidebar from "./components/Sidebar";

const sampleData = [
  { date: "2025-01-01", orders: 4 },
  { date: "2025-01-02", orders: 7 },
  { date: "2025-01-03", orders: 3 },
  { date: "2025-01-04", orders: 10 },
];

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-60 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Xeno Dashboard</h1>

        {/* METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard label="Total Customers" value={0} />
          <MetricCard label="Total Orders" value={0} />
          <MetricCard label="Total Revenue" value="₹0" />
        </div>

        {/* CHART */}
        <div className="bg-white shadow rounded-lg p-6 mt-10">
          <p className="text-lg font-semibold mb-4">Orders Over Time</p>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sampleData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
