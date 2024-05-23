import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-secondary p-6 md:py-12 w-full">
            <div className="container max-w-7xl flex flex-col items-center justify-center gap-4 md:flex-row">
                <p className="text-sm text-primary  ">© 2024 Crypto Checker. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer