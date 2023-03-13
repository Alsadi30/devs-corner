import { Typography } from "@mui/material";

export const SkillItem = ({ name }: any) => {
  return (
    <Typography
      variant="h6"
      sx={{
        padding: "5px 10px",
        margin: "5px",
        color: "textColor",
        border: "3px solid",
        borderRadius: "10px",
        borderColor: "secondary.main",
      }}
    >
      {name}
    </Typography>
  );
};
