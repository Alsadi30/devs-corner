import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import photo from "../../../../client/src/assets/avatar.jpg";
import ImageAvatar from "../../Atoms/Avatars/ImageAvatar";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const AvatarMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
        <ImageAvatar Src={photo} Txt="Name" Size={50} />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default AvatarMenu;
