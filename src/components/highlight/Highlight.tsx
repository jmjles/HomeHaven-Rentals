import { ChildrenType } from "@/types";
import { Box, Grid, GridBaseProps, SxProps, Tooltip } from "@mui/material";

const defaultStyle: SxProps = {
  backgroundColor: "#d6f5ff ",
  borderRadius: "8px",
  padding: 1,
  paddingLeft: 2,
  paddingRight: 2,
};

const Highlight = ({
  style,
  children,
  spacing = 1,
  direction = "row",
  title,
}: HighlightProps) => {
  const combinedStyle: SxProps = style
    ? {
        ...defaultStyle,
        ...style,
      }
    : defaultStyle;

  return (
    <Tooltip title={title}>
      <Box sx={combinedStyle}>
        <Grid
          container
          alignItems={"center"}
          direction={direction}
          spacing={spacing}
          wrap="nowrap"
        >
          {children}
        </Grid>
      </Box>
    </Tooltip>
  );
};

export default Highlight;
export type HighlightProps = {
  style?: SxProps;
  spacing?: number;
  title?: string;
  direction?: GridBaseProps["direction"];
} & ChildrenType;
type IconNameType = "building" | "bathroom" | "bedroom" | "size" | "pets";
