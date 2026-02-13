"use server";
import RentalViewer from "@/components/rentalViewer/RentalViewer";
import Nav from "@/layout/nav/Nav";
import { Box, Grid } from "@mui/material";

export default async function Home() {
  return (
    <Grid
      container
      direction={"column"}
      height="100vh"
      width={"100vw"}
      overflow={"hidden"}
      spacing={0}
      gap={0.1}
      wrap="nowrap"
    >
      <Grid width={"100%"}>
        <Nav />
      </Grid>
      <Grid flex={"1 1 auto"} minHeight={0}>
        <RentalViewer />
      </Grid>
    </Grid>
  );
}
