'use client';

import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col justify-between border-r border-gray-200 bg-gray-100 p-4 md:p-6">
      {/* Logo or App Name */}
      <div className="mb-6 flex items-center justify-center md:justify-start">
        <h1 className="text-lg font-bold text-gray-800">My Dashboard</h1>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col gap-2">
        <NavLinks />
      </nav>

      {/* Optional Footer */}
      <div className="mt-auto text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company
      </div>
    </div>
  );
}
