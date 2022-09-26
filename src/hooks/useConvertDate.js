export default function useConvertDate(startDate, endDate) {
  const start = Number(startDate.split('/').join(''));
  const end = Number(endDate.split('/').join(''));
  return [start, end];
}
