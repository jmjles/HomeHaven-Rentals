import { RentalType } from "@/dummyData";
import { Box } from "@mui/material";
import Landing from "../information/Landing";
import Information from "../information/Information";
import { useState } from "react";
import { animate } from "animejs";

export default function InformationPanel({ rental }: InformationPanelProps) {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    animate(".LandingMobile", {
      opacity: 0,
      duration: 1000,
      onComplete: () => {
        setShow(false);
        animate(".InformationPanel", { left: "-100vw" });
      },
    });
  };
  if (!rental)
    return (
      <>
        <Box display={{ xs: "none", lg: "block" }} height={"100%"}>
          <Landing />
        </Box>
        <Box
          display={show ? { xs: "block", lg: "none" } : "none"}
          height={"100%"}
          className="LandingMobile"
        >
          <Landing showButton handleShow={handleShow} />
        </Box>
      </>
    );

  return <Information rental={rental} />;
}

type InformationPanelProps = {
  rental: RentalType | undefined;
};
