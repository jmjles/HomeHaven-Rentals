"use server";
import RentalViewer from "@/components/rentalViewer/RentalViewer";
import Nav from "@/layout/nav/Nav";
import { Grid } from "@mui/material";

export default async function Home() {
  return (
    <Grid
      container
      minHeight={"100vh"}
      height={"100dvh"}
      width={"100vw"}
      overflow={"hidden"}
      spacing={0}
      gap={0.1}
      component={"main"}
    >
      <Grid width={"100%"} component={"section"}>
        <Nav />
      </Grid>
      <Grid flex={"1 1 auto"} minHeight={0} component={"section"}>
        <RentalViewer />
      </Grid>
    </Grid>
  );
}
