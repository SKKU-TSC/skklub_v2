export async function getClubData() {
  const res = await fetch("http://localhost:5000/db");
  const data = await res.json();
  return data;
}
