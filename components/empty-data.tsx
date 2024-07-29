import React from 'react'
import Image from 'next/image'

const NoData = () => {
    return (
        <div className='flex items-center justify-center my-20 mx-10'>
            <div>
                <Image className="mx-auto" src='/empty-data.png' alt='No data' quality={100} height={200} width={200} />
                <h1 className='text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'> No Data Available</h1>
                <p className='text-center leading-7 [&:not(:first-child)]:mt-6'>It looks like there’s nothing here yet!</p>
            </div>
        </div>
    )
}

export default NoData