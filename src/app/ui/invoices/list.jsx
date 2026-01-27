import InvoiceStatus from './status';

const invoices = [
  { id: 1, customer: 'Acme Corp', amount: '$1,200', status: 'pending' },
  { id: 2, customer: 'Beta LLC', amount: '$2,450', status: 'paid' },
  { id: 3, customer: 'Gamma Inc', amount: '$980', status: 'late' },
];

export default function InvoiceList() {
  return (
    <div className="flex flex-col gap-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center justify-between rounded-lg bg-gray-100 px-6 py-4"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{invoice.customer}</span>
            <span className="text-gray-600">{invoice.amount}</span>
          </div>
          <InvoiceStatus status={invoice.status} />
        </div>
      ))}
    </div>
  );
}
