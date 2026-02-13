import { RentalType } from "@/dummyData";
import { toUSD } from "@/lib/utils";
import {
  Paper,
  Stack,
  Typography as Font,
  Grid,
  Divider,
  Box,
} from "@mui/material";
import Image from "next/image";

export default function Rental({ rental, onClick }: RentalProps) {
  const {
    address,
    bathrooms,
    bedrooms,
    city,
    featuredImage,
    sqft,
    state,
    zipcode,
    available,
    monthly,
    availableAt,
  } = rental;
  return (
    <Paper onClick={() => onClick(rental)} sx={{ borderRadius: 3 }}>
      <Box position={"relative"} height={200}>
        <Image
          src={featuredImage}
          alt={`Featured image of ${address}`}
          width={300}
          height={200}
        />
        <Box
          sx={{
            backgroundColor: available ? "green" : "red",
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
          }}
          position="absolute"
          bottom={0}
          right={0}
          marginRight={2}
          padding={1}
        >
          <Font color="white" fontWeight={600}>
            {available ? "Available Now" : "Not Available"}
          </Font>
        </Box>
      </Box>

      <Stack padding={1}>
        <Font fontWeight={600} variant="h5">
          {toUSD(monthly)}/MO
        </Font>
        <Grid container spacing={1}>
          <Grid>
            <Font component="span" fontWeight={600}>
              {bedrooms}
            </Font>
            <Font component="span">{bedrooms > 1 ? " bds" : " bd"}</Font>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid>
            <Font component="span" fontWeight={600}>
              {bathrooms}
            </Font>
            <Font component="span"> ba</Font>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid>
            <Font component="span" fontWeight={600}>
              {sqft}
            </Font>
            <Font component="span"> sqft</Font>
          </Grid>
        </Grid>
        <Font textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
          {address}, {city}, {state}, {zipcode}
        </Font>
      </Stack>
    </Paper>
  );
}

export type RentalProps = {
  rental: RentalType;
  onClick: HandleRentalType;
};

export type HandleRentalType = (rental: RentalType) => void;
