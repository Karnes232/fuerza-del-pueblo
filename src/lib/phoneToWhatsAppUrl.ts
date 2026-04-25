/** Digits only; 10-digit NANP (e.g. DR/US) is prefixed with 1 for wa.me */
export function phoneToWhatsAppUrl(
  phone: string | null | undefined,
): string | null {
  if (!phone?.trim()) return null
  const digits = phone.replace(/\D/g, "")
  if (!digits) return null
  const full = digits.length === 10 ? `1${digits}` : digits
  return `https://wa.me/${full}`
}
