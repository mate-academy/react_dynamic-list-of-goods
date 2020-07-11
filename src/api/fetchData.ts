export const fetchData = async <T>(url: string): Promise<{data: T[]}> => {
  const response = await fetch(url);

  return response.json();
};
