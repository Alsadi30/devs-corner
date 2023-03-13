import { Box } from "@mui/material";
import email from "./../../../../../assets/logos/email.png";
import linkedin from "./../../../../../assets/logos/linkedin.png";
import location from "./../../../../../assets/logos/location.png";
import phone from "./../../../../../assets/logos/phone.png";
import ContactItem from "./../../sharedComponents/contactItem";

type ContactProps = {
  Email: string;
  Phone: string;
  Location: string;
  Linkedin: string;
};

const Contact = ({ Email, Phone, Location, Linkedin }: ContactProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        <ContactItem Logo={email} Alt="email" Text={Email} />
        <ContactItem Logo={phone} Alt="phone" Text={Phone} />
        <ContactItem Logo={location} Alt="location" Text={Location} />
        <ContactItem Logo={linkedin} Alt="in" Text={Linkedin} />
      </Box>
    </Box>
  );
};
export default Contact;
