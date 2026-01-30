export function formatDate(date: string): string {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  } as const;

  const dateInMs = new Date(date);

  return dateInMs.toLocaleDateString("en-US", options)
}

export function formatRuntime(runtimeInMinutes: number) {
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  
  return `${hours}h ${minutes}m`
}

export function formatFullDate(dateString: string, country_code: string) {
  if (!dateString) return "TBA";

  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-US")

  return `${formattedDate} (${country_code})`;
}