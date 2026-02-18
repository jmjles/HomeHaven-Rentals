import { Box, Container, Grid, Paper } from "@mui/material";
import logo from "../../assets/homehaven.png";
import Image from "next/image";
import BackBtn from "./BackBtn";

const Nav = () => {
  return (
    <Paper>
      <Container>
        <Grid
          container
          alignItems={"center"}
          justifyContent={{ xs: "space-between", lg: "space-evenly" }}
          padding={1}
        >
          <Grid display={{ lg: "none" }}>
            <BackBtn />
          </Grid>
          <Grid>
            <Box
              position={"relative"}
              height={{ xs: 65, md: 75 }}
              sx={{ aspectRatio: "70/41" }}
            >
              <Image src={logo} alt="HomeHaven Logo" fill />
            </Box>
          </Grid>
          <Grid display={{ lg: "none" }} visibility="hidden">
            <BackBtn hidden />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Nav;
