"use client";
import { slideOut } from "@/lib/utils";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const BackBtn = ({ hidden }: BackBtnProps) => {
  const handleBack = () => {
    slideOut();
  };

  return (
    <IconButton
      color="primary"
      size="small"
      sx={{ opacity: 0, visibility: "hidden" }}
      onClick={handleBack}
      className={!hidden ? "BackButton" : undefined}
    >
      <ArrowBack fontSize={"inherit"} />
    </IconButton>
  );
};
type BackBtnProps = {
  hidden?: boolean;
};
export default BackBtn;
