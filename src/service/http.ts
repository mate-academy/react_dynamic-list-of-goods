export async function fetchData(url: string, delay = 0) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const data = await response.json();

  if (delay !== 0) {
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  return data;
}
