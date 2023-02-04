export default function useDateFormat(dateToFormat) {
  const newDate = new Date(dateToFormat);
  const [day, month, year] = [newDate.getDate(), newDate.toLocaleString('default', { month: 'long' }), newDate.getFullYear()];
  return [day, month, year];
}
