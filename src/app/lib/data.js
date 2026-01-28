// src/app/lib/data.js

// Mock invoices data for local rendering
export async function fetchLatestInvoices() {
  return [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      image_url: '/profile-placeholder.png',
      amount: 1200.5,
      date: new Date(),
      status: 'Paid',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      image_url: '/profile-placeholder.png',
      amount: 500.0,
      date: new Date(),
      status: 'Pending',
    },
  ];
}

// Same for filtered invoices (if your table uses fetchFilteredInvoices)
export async function fetchFilteredInvoices() {
  return fetchLatestInvoices();
}
