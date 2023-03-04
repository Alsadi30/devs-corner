import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    handleClick: () => void
}

const OurButton = ({ children, handleClick }: ButtonProps) => {
    return (
        <button onClick={handleClick} style={{ backgroundColor: '#252537', border: 'none' }} >
            {children}
        </button>
    )
}

export default OurButton