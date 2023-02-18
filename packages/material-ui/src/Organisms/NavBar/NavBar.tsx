import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import AvatarMenu from "../../Molecules/AvatarMenu/AvatarMenu";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="h1" component="h1">
              ۞
            </Typography>
            Devs' Corner
          </Typography>
          <AvatarMenu />
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
