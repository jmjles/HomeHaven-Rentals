import { RentalType } from "@/dummyData";
import { Box, Typography as Font, Stack } from "@mui/material";

export default function Lease({ terms }: LeaseProps) {
  if (terms.length === 0) return <></>;
  return (
    <Box>
      <Stack spacing={1}>
        <Font variant="h5" fontWeight={600}>
          Terms:
        </Font>
        <ul>
          {terms.map((t) => (
            <Font component="li">{t}</Font>
          ))}
        </ul>
      </Stack>
    </Box>
  );
}
type LeaseProps = {
  terms: RentalType["terms"];
};
