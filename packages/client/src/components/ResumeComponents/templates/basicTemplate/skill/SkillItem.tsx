import { Typography } from "@mui/material";

export const SkillItem = ({ name }: any) => {
  return (
    <Typography
      variant="h6"
      sx={{
        padding: "5px 10px",
        margin: "5px",
        backgroundColor: "secondary.main",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {name}
    </Typography>
  );
};
