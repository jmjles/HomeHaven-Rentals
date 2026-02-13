import { Box, Button, Typography as Font } from "@mui/material";
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
      <Font variant="h2" paddingTop={"15vh"}>
        Your Next Home Starts Here
      </Font>
      <Font
        variant="h4"
        paddingTop={"5vh"}
      >
        Simple renting. Real homes. No unnecessary stress.
      </Font>

      {showButton && (
        <Button
          sx={{ marginTop: "32px" }}
          variant="contained"
          onClick={handleShow}
        >
          <Font variant="button">Get Started</Font>
        </Button>
      )}

      <Font
        variant="subtitle1"
        position="absolute"
        bottom="20vh"
        padding={5}
        textAlign={"left"}
        display={{ xs: "none", md: "block" }}
      >
        From transparent terms to responsive support, we’re here to make renting
        feel easy and dependable. You can focus on living your life—we’ll take
        care of the rest.
      </Font>
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
