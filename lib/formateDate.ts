export function formateDate(date: string): string {
  const options = { 
    year: "numeric",
    month: "short",
    day: "numeric"
  } as const;

  const dateInMs = new Date(date);

  return dateInMs.toLocaleDateString("en-US", options)

}