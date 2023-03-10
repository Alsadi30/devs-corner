import React from "react";
import { useSelector } from "react-redux";
import Cont from "../../../../material-ui/src/Atoms/Container";
import Copyright from "../../../../material-ui/src/Atoms/Copyright";
import NavBar from "../../../../material-ui/src/Organisms/NavBar/NavBar";
import avatar from "../../assets/avatar.jpg";
import { useGetUserQuery } from "../../features/user/userApi";


export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const auth = useSelector((state: any) => state?.auth);

  if (auth.user) {
    const {
      data: userData,
      isError,
      isLoading,
    } = useGetUserQuery(auth.user.id);

    if (isLoading) {
      return <div>....Loading</div>
    }

    const user = userData[0];

    return (
      <>
        <NavBar profilePic={user.profile ? user.profile.profilePic : ""} />
        <Cont>
          {children}
          <Copyright />
        </Cont>
      </>
    );
  } else {
    return (
      <>
        <NavBar profilePic={avatar} />
        <Cont>
          {children}
          <Copyright />
        </Cont>
      </>
    );
  }
};
export default Layout;
