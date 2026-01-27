import InvoiceStatus from './status';

const invoices = [
  { id: 1, customer: 'Alice', status: 'pending' },
  { id: 2, customer: 'Bob', status: 'paid' },
  { id: 3, customer: 'Charlie', status: 'late' },
];

export default function InvoiceList() {
  return (
    <div className="space-y-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm"
        >
          <span>{invoice.customer}</span>
          <InvoiceStatus status={invoice.status} />
        </div>
      ))}
    </div>
  );
}
