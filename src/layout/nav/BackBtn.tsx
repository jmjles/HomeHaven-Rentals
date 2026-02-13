"use client";
import { slideOut } from "@/lib/utils";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const BackBtn = () => {
  const handleBack = () => {
    slideOut();
  };
  return (
    <IconButton
      color="primary"
      size="large"
      sx={{ opacity: 0, visibility: "hidden" }}
      onClick={handleBack}
      className="BackButton"
    >
      <ArrowBack />
    </IconButton>
  );
};

export default BackBtn;
