"use client";
import Rentals from "@/components/rentals/Rentals";
import { RentalType } from "@/dummyData";
import { getRentals } from "@/lib/rental/rentalRequests";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import InformationPanel from "./InformationPanel";
import { slideIn } from "@/lib/utils";

export default function RentalViewer() {
  const [selectedRental, setSelectedRental] = useState<RentalType>();
  const [rentals, setRentals] = useState<RentalType[]>([]);

  const handleRental = (rental: RentalType) => {
    slideIn(".InformationPanel");
    setSelectedRental(rental);
  };

  useEffect(() => {
    (async () => {
      setRentals(await getRentals());
    })();
  }, []);

  return (
    <Grid container size={12} height={"100%"}>
      <Grid size={{ xs: 12, lg: 6.5 }} overflow={"scroll"} height={"100%"}>
        <Rentals
          rentals={rentals}
          onClick={handleRental}
          setRentals={setRentals}
        />
      </Grid>
      <Grid
        className="InformationPanel"
        size={"grow"}
        display={{ xs: "block", lg: "none" }}
        position={{ xs: "absolute", lg: "relative" }}
        overflow={"scroll"}
        width={"100%"}
        height={{ xs: "calc(100% - 116px)", lg: "100%" }}
        zIndex={99}
      >
        <InformationPanel rental={selectedRental} />
      </Grid>
      <Grid
        size={"grow"}
        display={{ xs: "none", lg: "block" }}
        position={{ xs: "absolute", lg: "relative" }}
        overflow={"scroll"}
        width={"100%"}
        height={{ xs: "calc(100% - 116px)", lg: "100%" }}
        zIndex={99}
      >
        <InformationPanel rental={selectedRental} />
      </Grid>
    </Grid>
  );
}
