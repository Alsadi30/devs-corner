import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Typography } from "@mui/material";

type SectionHeadProps = {
  title: string;
  handleClick?: () => void;
};

const SectionHead = ({ title, handleClick }: SectionHeadProps) => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Typography variant="h3" p={2} item>
        {" "}
        {title}{" "}
      </Typography>
      <Button item>
        {" "}
        <AddIcon />{" "}
      </Button>
    </Grid>
  );
};

export default SectionHead;
