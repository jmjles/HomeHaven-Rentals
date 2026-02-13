import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import ImageViewer from "./ImageViewer";
import { RentalType } from "@/dummyData";
import { CSSProperties, useState } from "react";
export default function ImageGrid({ rental }: ImageGridProps) {
  const [showImages, setShowImages] = useState(false);
  const [selected, setSelected] = useState(0);

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const handleImage = (i: number) => {
    setSelected(i);
    setShowImages(true);
  };

  const handleClose = () => {
    setShowImages(false);
  };

  const featuredImageStyle = !isSmall
    ? {
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
      }
    : {
        borderRadius: "12px",
      };

  return (
    <>
      <ImageViewer
        featuredImage={rental.featuredImage}
        images={rental.images}
        open={showImages}
        selectedImage={selected}
        close={handleClose}
      />
      <Grid container spacing={0.5}>
        <Grid
          position={"relative"}
          size={{ xs: 12, md: 6 }}
          sx={{ aspectRatio: "16/9" }}
        >
          <Image
            fill
            src={rental.featuredImage}
            alt=""
            style={featuredImageStyle}
            onClick={() => handleImage(0)}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }} display={{ xs: "none", md: "block" }}>
          <Stack spacing={0.5}>
            <Grid container height={"100%"} spacing={0.5}>
              <Grid
                size={6}
                position={"relative"}
                overflow={"hidden"}
                sx={{ aspectRatio: "16/9" }}
              >
                <Image
                  fill
                  src={rental.images[0]}
                  alt=""
                  onClick={() => handleImage(1)}
                />
              </Grid>
              <Grid size={6} position={"relative"} sx={{ aspectRatio: "16/9" }}>
                <Image
                  fill
                  src={rental.images[1]}
                  alt=""
                  style={{
                    borderTopRightRadius: "12px",
                  }}
                  onClick={() => handleImage(2)}
                />
              </Grid>
            </Grid>
            <Grid container height={"100%"} spacing={0.5}>
              <Grid size={6} position={"relative"} sx={{ aspectRatio: "16/9" }}>
                <Image
                  fill
                  src={rental.images[2]}
                  alt=""
                  onClick={() => handleImage(3)}
                />
              </Grid>
              <Grid size={6} position={"relative"}>
                <Image
                  fill
                  src={rental.images[3]}
                  alt=""
                  style={{
                    borderBottomRightRadius: "12px",
                  }}
                  onClick={() => handleImage(4)}
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

type ImageGridProps = {
  rental: RentalType;
};
