import { Box, Container, Grid, IconButton, Paper } from "@mui/material";
import logo from "../../assets/homehaven.png";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
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
            <Box position={"relative"} height={100} width={200}>
              <Image src={logo} alt="HomeHaven Logo" fill />
            </Box>
          </Grid>
          <Grid display={{ lg: "none" }} visibility="hidden">
            <IconButton color="primary" size="large">
              <ArrowBack />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Nav;
