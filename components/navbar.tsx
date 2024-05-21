"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import classnames from "classnames"
import { Menu, X } from 'lucide-react'

const MobileNavbar = ({ isOpenNavbar }: { isOpenNavbar: boolean }) => {

    return <div className={`fixed w-full h-full -inset-2 z-40 bg-primary-foreground overflow-hidden md:hidden p-4 transition-transform duration-500 ${classnames({ "-translate-x-full pointer-events-none": !isOpenNavbar, "translate-x-0": isOpenNavbar })}`}>
        <ul className="flex-1 grid w-full px-6 py-4 mt-16 font-semibold text-2xl gap-10">
            <Link href="/">
                <Button variant="link" className='rounded-xl hover:text-secondary-foreground duration-300'>Home</Button>
            </Link>
            <Link href="/about">
                <Button variant="link" className='rounded-xl hover:text-secondary-foreground  duration-300'>About</Button>
            </Link>
            <Link href="/contact">
                <Button variant="link" className='rounded-xl hover:text-secondary-foreground  duration-300'>Contact</Button>
            </Link>
        </ul>
    </div>
}


const Navbar = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState<boolean>(false)

    return (
        <div className="z-50 bg-primary-foreground px-12 py-6 flex items-center justify-end md:justify-end lg:justify-between border-y border-accent w-full">
            <Link href="/" className='hidden md:hidden lg:block'>
                <div className='rounded-xl border border-accent p-4 hover:bg-accent duration-300 cursor-pointer'><span className="text-lg text-primary font-semibold">CryptoChecker</span></div>
            </Link>
            <ul className='items-center justify-center gap-4 hidden md:hidden lg:flex'>
                <Link href="/">
                    <Button variant="link" className='rounded-xl hover:text-secondary-foreground duration-300'>Home</Button>
                </Link>
                <Link href="/about">
                    <Button variant="link" className='rounded-xl hover:text-secondary-foreground  duration-300'>About</Button>
                </Link>
                <Link href="/contact">
                    <Button variant="link" className='rounded-xl hover:text-secondary-foreground  duration-300'>Contact</Button>
                </Link>
            </ul>
            <div className={`block md:hidden ${classnames({ 'z-50': isOpenNavbar })} justify-end`}>
                <Button className="focus:bg-inherit" size="icon" variant="ghost" onClick={() => setIsOpenNavbar(prevState => !prevState)}>
                    {!isOpenNavbar ? <Menu /> : <X />}
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </div>
            <MobileNavbar isOpenNavbar={isOpenNavbar} />
        </div>
    )
}

export default Navbar