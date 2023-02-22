import React from 'react'

interface ButtonProps {
    children: React.ReactNode
}

const OurButton = ({ children }: ButtonProps) => {
    return (
        <button style={{ backgroundColor: '#252537', border: 'none' }} >
            {children}
        </button>
    )
}

export default OurButton