import React from 'react'
import NavBar from '../NavBar/NavBar'
import Cont from '../../Atoms/Container'
import Copyright from '../../Atoms/Copyright'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <Cont>
                {children}
                {/* <Copyright /> */}
            </Cont>
        </>
    )
}

export default Layout