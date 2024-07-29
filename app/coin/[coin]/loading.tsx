import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'


const Loading = () => {
    const skeletonInfo = new Array(4).fill(null);
    return (<div className="grid grid-cols-12 ">
        <div className="col-span-12 lg:col-span-4 px-6 border-r py-2">
            <div className='space-y-2 border-b py-4 flex items-center gap-4'>
                <Skeleton className="h-20 min-w-20 rounded-full" />
                <Skeleton className="h-6 w-full inline-block rounded-xl" />
            </div>
            <div className='space-y-4 py-4'>
                {skeletonInfo.map((_, index) => (
                    <div key={index} className="flex justify-between py-2">
                        <Skeleton className="h-10 w-full rounded-xl" />
                    </div>
                ))}
            </div>
        </div>
        <div className='col-span-12 lg:col-span-8 px-6 py-4'>
            <Skeleton className="h-2/3 w-full rounded-xl scroll-m-20 first:mt-0" />
            <div className="leading-7 space-y-4 [&:not(:first-child)]:mt-4">
                <Skeleton className="h-8 lg:h-6 w-full rounded-xl" />
                <Skeleton className="h-8 lg:h-6 w-1/2 rounded-xl" />
            </div>
        </div>
    </div>)
}

export default Loading