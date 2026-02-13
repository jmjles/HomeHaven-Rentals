import { Grid } from "@mui/material";
import LoadingRental from "./Rental";

export default function LoadingRentals() {
  const cards = new Array(20).fill(<LoadingRental />);
  return (
    <Grid container spacing={3} maxHeight="100vh" overflow={"scroll"}>
      {cards.map((c) => (
        <Grid>{c}</Grid>
      ))}
    </Grid>
  );
}
