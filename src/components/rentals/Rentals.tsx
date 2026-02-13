"use client";
import { Grid } from "@mui/material";
import { RentalType } from "@/dummyData";
import Rental, { HandleRentalType } from "./Rental";
import { Dispatch, SetStateAction } from "react";

export default function Rentals(props: RentalsProps) {
  return (
    <Grid
      container
      spacing={3}
      rowGap={5}
      justifyContent={"space-evenly"}
      paddingTop={3}
      paddingBottom={3}
    >
      {props.rentals.map((r: RentalType) => (
        <Grid maxWidth={300}>
          <Rental rental={r} key={r.id} onClick={props.onClick} />
        </Grid>
      ))}
    </Grid>
  );
}

type RentalsProps = {
  rentals: RentalType[];
  onClick: HandleRentalType;
  setRentals: Dispatch<SetStateAction<RentalType[]>>;
};
