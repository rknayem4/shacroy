

const AdminDashboardPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back. Here is your business overview.
          </p>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Orders */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-sm font-medium text-gray-500">Total Orders</h2>
            <p className="mt-2 text-3xl font-bold text-gray-900">1,234</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboardPage;