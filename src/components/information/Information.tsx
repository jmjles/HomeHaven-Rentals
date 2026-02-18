import { RentalType } from "@/dummyData";
import {
  AcUnitOutlined,
  BedOutlined,
  CalendarMonthOutlined,
  HomeOutlined,
  ShowerOutlined,
  Sunny,
} from "@mui/icons-material";
import { Typography as Font, Grid, Paper, Stack, Tooltip } from "@mui/material";
import Highlight, { HighlightProps } from "../highlight/Highlight";
import { toFormattedNumber } from "@/lib/utils";
import Lease from "./Lease";
import ContactInfo from "./ContactInfo";
import ImageGrid from "../imageViewer/ImageGrid";
import SpecialInfo from "./SpecialInfo";

export default function Information({ rental }: InformationProps) {
  const VerticalHighlight = ({
    children,
    title,
    direction = { xs: "row", md: "column", lg: "row", xl: "column" },
  }: HighlightProps) => (
    <Highlight direction={direction} style={{ padding: 0, alignContent:'space-around' }} title={title} >
      {children}
    </Highlight>
  );
  const completeAddress = [
    rental.address,
    rental.city,
    rental.state,
    rental.zipcode,
  ].join(", ");
  const rentalName =
    rental.name || `${rental.address}, ${rental.city}, ${rental.state}`;
  return (
    <Paper elevation={5} sx={{ minHeight: "100%" }}>
      <Stack spacing={3} padding={2}>
        <ImageGrid rental={rental} />
        <Grid
          container
          width="100%"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid flexGrow={1}>
            <Font variant="h1" fontWeight={600}>
              {rental.name}
            </Font>
            <Font variant="h2" fontWeight={800}>
              ${rental.monthly}/MO
            </Font>
            <Font
              variant="subtitle1"
              component="a"
              target="_blank"
              color="primary"
              href={`https://www.google.com/maps/place/${completeAddress}`}
            >
              {completeAddress}
            </Font>
          </Grid>
          <Grid container spacing={2}>
            <VerticalHighlight
              title={`${rental.bedrooms} ${
                rental.bedrooms > 1 ? "Bedrooms" : "Bedroom"
              }`}
            >
              <Font fontWeight={800} variant="h1">
                {rental.bedrooms}
              </Font>
              <BedOutlined fontSize="medium" />
            </VerticalHighlight>
            <VerticalHighlight
              title={`${rental.bathrooms} ${
                rental.bathrooms > 1 ? "Bathrooms" : "Bathroom"
              }`}
            >
              <Font fontWeight={800} variant="h1">
                {rental.bathrooms}
              </Font>
              <ShowerOutlined fontSize="medium" />
            </VerticalHighlight>
            <VerticalHighlight>
              <Font fontWeight={800} variant="h1">
                {toFormattedNumber(rental.sqft)}
              </Font>
              <Font fontWeight={800} variant="h3">
                SQFT
              </Font>
            </VerticalHighlight>
          </Grid>
        </Grid>

        <Grid container justifyContent="space-evenly" spacing={2}>
          <Grid size={6}>
            <Highlight title={rental.buildingType}>
              <HomeOutlined />
              <Font variant="h3" noWrap>
                {rental.buildingType}
              </Font>
            </Highlight>
          </Grid>
          <Grid size={6}>
            <Highlight
              title={rental.available ? "Available Now" : "Not Available"}
            >
              <CalendarMonthOutlined />
              <Font variant="h3" noWrap>
                {rental.available ? "Available Now" : "Not Available"}
              </Font>
            </Highlight>
          </Grid>
          <Grid size={6}>
            <Highlight title={rental.heating}>
              <Sunny />
              <Font variant="h3" noWrap>
                {rental.heating}
              </Font>
            </Highlight>
          </Grid>
          <Grid size={6}>
            <Highlight title={rental.cooling}>
              <AcUnitOutlined />
              <Font variant="h3" noWrap>
                {rental.cooling}
              </Font>
            </Highlight>
          </Grid>
        </Grid>
        <Font variant="subtitle1">{rental.about}</Font>
        <SpecialInfo amenities={rental.amenities} />
        <Lease terms={rental.terms} />
        <ContactInfo contact={rental.contact} name={rentalName} />
      </Stack>
    </Paper>
  );
}
type InformationProps = {
  rental: RentalType;
};
