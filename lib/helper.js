

export function formatToNaira(amount,currency="NGN",fraction=0) {
  // Create a new instance of Intl.NumberFormat for Nigerian currency
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    minimumFractionDigits: fraction
  });

  // Format the given amount
  return formatter.format(amount);
}