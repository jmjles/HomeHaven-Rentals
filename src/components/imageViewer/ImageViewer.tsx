import { RentalType } from "@/dummyData";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import { Box, Fab, Grid, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import home from "@/assets/landing.jpg";
const ImageViewer = (props: ImageViewerProps) => {
  const images = [props.featuredImage, ...props.images];
  const [current, setCurrent] = useState(props.selectedImage);
  const handleBack = () => {
    setCurrent((p) => p - 1);
  };
  const handleNext = () => {
    setCurrent((p) => p + 1);
  };
  useEffect(() => {
    setCurrent(props.selectedImage);
  }, [props.selectedImage]);

  const backDisabled = current === 0;
  const nextDisabled = current === images.length;

  return (
    <Modal open={props.open} onClose={props.close}>
      <Box
        position={"absolute"}
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%,-50%)" }}
      >
        <Box
          position={{ xs: "absolute", md: "initial" }}
          left={{ xs: 22, md: 0 }}
          top={{ xs: 12, md: 0 }}
          zIndex={99}
        >
          <Fab onClick={props.close} color="secondary">
            <Close />
          </Fab>
        </Box>

        <Box position={"relative"}>
          <Grid
            container
            padding={{ xs: 0, md: 0 }}
            alignItems={"center"}
            spacing={2}
            wrap="nowrap"
          >
            <Box
              position={{ xs: "absolute", md: "initial" }}
              left={{ xs: 22, md: 0 }}
              zIndex={99}
            >
              <Fab onClick={handleBack} disabled={backDisabled} color="info">
                <ArrowBack />
              </Fab>
            </Box>

            <Box
              width={{ xs: "100vw", md: "70vw" }}
              minHeight={"50vw"}
              maxHeight={{ xs: "100vh", md: "90vh" }}
              position="relative"
              sx={{ aspectRatio: "16/9" }}
            >
              <Image src={home} alt="asd" fill />
            </Box>
            <Box
              position={{ xs: "absolute", md: "relative" }}
              right={{ xs: 22, md: 0 }}
              zIndex={99}
            >
              <Fab onClick={handleNext} disabled={nextDisabled} color="info">
                <ArrowForward />
              </Fab>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

type ImageViewerProps = {
  featuredImage: RentalType["featuredImage"];
  images: RentalType["images"];
  selectedImage: number;
  open: boolean;
  close: () => void;
};
export default ImageViewer;
