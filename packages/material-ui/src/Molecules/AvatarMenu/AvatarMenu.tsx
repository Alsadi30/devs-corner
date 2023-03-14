import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import * as React from "react";
import ImageAvatar from "../../Atoms/Avatars/ImageAvatar";
import { Link } from "react-router-dom";





const settings = ["Dashboard", "Logout"];


interface Menutype {
  profilePic: string
}

const AvatarMenu = ({ profilePic }: Menutype) => {
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
        <ImageAvatar Src={profilePic} Txt="Name" Size={50} />
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

        <MenuItem onClick={handleCloseUserMenu}>
          <Link to={'/dashboard'} >
            <Typography textAlign="center" color={'info.light'} >Dashboard</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center" color={'info.light'} >Logout</Typography>

        </MenuItem>
      </Menu>
    </>
  );
};
export default AvatarMenu;
