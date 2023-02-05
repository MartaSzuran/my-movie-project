export default function useCurrencyFormat(numb) {
  const formatNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatNumber.format(numb);
}
