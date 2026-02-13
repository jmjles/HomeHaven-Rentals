import { RentalType } from "@/dummyData";
import { Avatar, Grid, Typography as Font, Paper } from "@mui/material";

export default function ContactInfo({ contact, name }: ContactInfoProps) {
  return (
    <Paper elevation={6} sx={{ padding: 2, backgroundColor: "#FFF" }}>
      <Grid container spacing={2}>
        <Grid>
          <Avatar />
        </Grid>
        <Grid>
          <Font variant="h5">{contact.user}</Font>
          <Font
            component="a"
            href={`mailto:${contact.email}?subject=${name}`}
            target="_blank"
            color="primary"
          >
            {contact.email}
          </Font>
          <Font variant="subtitle1">* Contact us for available times</Font>
        </Grid>
      </Grid>
    </Paper>
  );
}
type ContactInfoProps = {
  contact: RentalType["contact"];
  name: string;
};
