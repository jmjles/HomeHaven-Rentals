import { Grid, Stack, Typography as Font } from "@mui/material";
import Highlight from "../highlight/Highlight";
import { RentalType } from "@/dummyData";

const SpecialInfo = ({ amenities }: SpecialInfoProps) => {
  return (
    <Stack
      sx={{
        borderRadius: "8px",
        padding: 2,
      }}
      spacing={2}
    >
      <Font variant="h5" fontWeight={600}>
        What's Special
      </Font>
      <Grid container spacing={2}>
        {amenities.map((a) => (
          <Grid size={4}>
            <Highlight>
              <Font>{a}</Font>
            </Highlight>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

type SpecialInfoProps = {
  amenities: RentalType["amenities"];
};
export default SpecialInfo;
