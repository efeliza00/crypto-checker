import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
    return (
        <div className="h-full w-full px-10 lg:py-24">
            <div className="h-full w-full flex flex-col items-center justify-center gap-4">
                <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-5xl" >
                    Contact Me
                </h1>
                <p className="leading-7">
                    {`If you want to know more about cryptochecker, you can email me and let's have a conversation.`}
                </p>
                <Link href={`mailto:felizavndrd567@gmail`} target="_blank" >
                    <Button variant="outline" size="lg" className='mt-4'>
                        Send an Email <i className="ml-2 fi fi-rs-paper-plane mt-1"></i>
                    </Button>
                </Link>
            </div >
        </div >
    )
}

export default ContactPage