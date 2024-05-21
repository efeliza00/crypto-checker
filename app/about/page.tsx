import React from 'react'

const About = () => {
    return (
        <div className='h-full w-full px-10 lg:py-24 '>
            <div>
                <h1 className="scroll-m-20 border-b py-6 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                    About CryptoChecker
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6 link">
                    <span className='bg-gradient !bg-clip-text text-transparent'>CryptoChecker</span> is a web application that is powerded by <a href={'https://www.coingecko.com/'}>CoingeckoAPI</a>. This
                    enable users to browse crypto currency coins with the latest <span className="font-semibold">prices</span>, <span className="font-semibold">rankings</span> and <span className="font-semibold">coin information</span>.
                </p>
            </div>
        </div>
    )
}

export default About