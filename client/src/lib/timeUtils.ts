export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }
  return `${year} CE`;
}

export function getTimeSpan(start: number, end: number): string {
  return `${formatYear(start)} - ${formatYear(end)}`;
}
