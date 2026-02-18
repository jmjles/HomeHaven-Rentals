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
              height={{ xs: 50, sm: 65, md: 75 }}
              width={{ xs: 125, sm: 140, md: 150}}
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
