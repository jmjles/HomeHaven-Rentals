export const getRentals = async () => {
  "use client";
  const r = await (await fetch("/api/")).json();
  return r.rentals;
};
