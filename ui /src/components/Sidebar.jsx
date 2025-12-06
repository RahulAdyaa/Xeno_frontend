export default function Sidebar() {
  return (
    <div className="w-60 bg-white shadow h-screen p-6 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-8">Xeno</h2>

      <nav className="flex flex-col gap-4 text-gray-700">
        <a href="#" className="hover:text-blue-600">Dashboard</a>
        <a href="#" className="hover:text-blue-600">Customers</a>
        <a href="#" className="hover:text-blue-600">Orders</a>
        <a href="#" className="hover:text-blue-600">Products</a>
      </nav>
    </div>
  );
}
