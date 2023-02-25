import { Typography } from "@mui/material";
const Copyright = () => {
  return (
    <Typography sx={{
      position: 'relative', bottom: '10px', marginTop: '40px'
    }} variant="h5" color={'info.light'} component="h2" align="center">
      All Right Reserved to &copy; Dev's Corner
    </Typography>
  );
};
export default Copyright;
