
export function formateFullDate(dateString: string, country_code: string) {
  if (!dateString) return "TBA";

  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US")

  return `${formattedDate} (${country_code})`;
}