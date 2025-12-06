export default function MetricCard({ label, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}
