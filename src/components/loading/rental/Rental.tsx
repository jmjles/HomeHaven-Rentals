import { Card, Grid, Paper, Skeleton, Stack } from "@mui/material";

export default function LoadingRental() {
  return (
    <Paper elevation={5} sx={{ paddingBottom: 1 }}>
      <Skeleton width={300} height={200} variant="rectangular" />
      <Skeleton width={80} sx={{ fontSize: "1.8rem", marginLeft: 1 }} />
      <Grid container spacing={2} paddingLeft={1}>
        <Grid>
          <Skeleton width={50} />
        </Grid>
        <Grid>
          <Skeleton width={50} />
        </Grid>
        <Grid>
          <Skeleton width={75} />
        </Grid>
      </Grid>
      <Skeleton width={250} sx={{ marginLeft: 1 }} />
    </Paper>
  );
}
