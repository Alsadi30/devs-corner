import React from 'react'
import NavBar from '../../../../material-ui/src/Organisms/NavBar/NavBar'
import Cont from '../../../../material-ui/src/Atoms/Container'
import Copyright from '../../../../material-ui/src/Atoms/Copyright'
import { useGetUserQuery } from '../../features/user/userApi'
import { useSelector } from 'react-redux'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const auth = useSelector((state) => state?.auth);
    const {
        data: userData,
        isError,
        isLoading,
    } = useGetUserQuery(auth.user.id);

    const { profile } = userData[0]

    return (
        <>
            <NavBar profilePic={profile ? profile.profilePic : ''} />
            <Cont>
                {children}
                <Copyright />
            </Cont>
        </>
    )
}

export default Layout