import { Box } from "@mui/material";

export const SectionContainerV = ({ children }: any) => {
  return (
    <Box
      sx={{
        margin: "10px 0px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
export const SectionContainerH = ({ children }: any) => {
  return (
    <Box
      sx={{
        marginLeft: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
      }}
    >
      {children}
    </Box>
  );
};
