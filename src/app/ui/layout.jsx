import SideNav from './dashboard/sidenav';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Force sidebar width and background for visibility */}
      <div className="w-64 bg-gray-200">
        <SideNav />
      </div>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
