import { Box, Button, Container, Typography as Font } from "@mui/material";
import landing from "@/assets/landing.jpg";
import Image from "next/image";

export default function Landing({ showButton, handleShow }: LandingProps) {
  return (
    <Box
      height={"100%"}
      position="relative"
      color={"#FFF"}
      padding={2}
      textAlign={"center"}
    >
      <Container
        sx={{
          transform: "translate(-50%,-50%)",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      >
        <Font variant="h1">Your Next Home Starts Here</Font>
        <Font variant="h2" marginTop={"5rem"}>
          Simple renting. Real homes. No unnecessary stress.
        </Font>

        {showButton && (
          <Button
            sx={{ marginTop: "2rem" }}
            variant="contained"
            onClick={handleShow}
          >
            <Font variant="button">
              <Font variant="button">Get Started</Font>
            </Font>
          </Button>
        )}

        <Font
          variant="subtitle1"
          padding={5}
          textAlign={"left"}
          marginTop={"8rem"}
          display={{ xs: "none", md: "block" }}
        >
          From transparent terms to responsive support, we’re here to make
          renting feel easy and dependable. You can focus on living your
          life—we’ll take care of the rest.
        </Font>
      </Container>

      <Image
        src={landing}
        alt="Three homes with an open sky."
        fill
        style={{ zIndex: -99 }}
        loading="eager"
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.2,
        }}
      />
    </Box>
  );
}
type LandingProps = {
  showButton?: boolean;
  handleShow?: () => any;
};
