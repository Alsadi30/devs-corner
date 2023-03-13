import { Box, Typography } from "@mui/material";
import LocalImage from "../../../../../../material-ui/src/Atoms/Avatars/LocalImage";

type ContactItemPropsType = {
  Logo: string;
  Alt: string;
  Text: string;
};
const ContactItem = ({ Logo, Alt, Text }: ContactItemPropsType) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <LocalImage Src={Logo} Txt={Alt} Height="20px" Width="20px" />
      <Typography variant="h6" color="initial" sx={{ paddingLeft: "10px" }}>
        {Text}
      </Typography>
    </Box>
  );
};

export default ContactItem;
