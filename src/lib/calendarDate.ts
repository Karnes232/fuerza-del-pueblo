const ISO_DATE_ONLY = /^(\d{4})-(\d{2})-(\d{2})$/

/**
 * Parses YYYY-MM-DD as a calendar date in the environment's local timezone.
 * `new Date("2024-05-01")` is UTC midnight and often shifts back one day in the Americas.
 */
export function parseCalendarDate(dateStr: string): Date {
  const m = ISO_DATE_ONLY.exec(dateStr.trim())
  if (!m) return new Date(dateStr)
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
}
