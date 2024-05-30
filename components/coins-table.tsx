"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { getCoinsList } from '@/api/coins'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { currencyFormatter } from '@/lib/utils/currency-formatter'
import { numberRounderFormatter } from '@/lib/utils/number-rounder-formatter'
import PaginationDetails from './pagination-detail'
import CoinSparklineChart from './coin-chart'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'


type CoinData = {
    id: string
    symbol: string
    name: string
    image: string
    current_price: number
    market_cap: number
    market_cap_rank: number
    fully_diluted_valuation: number
    total_volume: number
    high_24h: number
    low_24h: number
    price_change_24h: number
    price_change_percentage_24h: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    circulating_supply: number
    total_supply: number
    max_supply: number
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    roi: any
    last_updated: string
    sparkline_in_7d: {
        price: Array<number>
    }
    price_change_percentage_1h_in_currency: number
    price_change_percentage_24h_in_currency: number
    price_change_percentage_7d_in_currency: number
}
const CoinstTableSkeleton = () => {
    const skeletonRows = new Array(3).fill(null);
    const skeletonCells = new Array(9).fill(null);
    return (<>
        {skeletonRows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
                {skeletonCells.map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                        <Skeleton className="h-8 w-full rounded-xl" />
                    </TableCell>
                ))}
            </TableRow>
        ))}
    </>)
}
const CoinsTable = () => {
    const queryClient = useQueryClient()
    const [pageCount, setPageCount] = useState<number>(1)
    const { data: coinsData, isFetching } = useQuery({ queryKey: ["coins-list"], queryFn: () => getCoinsList(pageCount), enabled: !!pageCount })

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ["coins-list"] })
    }, [pageCount, queryClient])

    const handlePageCount = (count: number) => {
        setPageCount(count)
    }



    return (
        <Table className='min-h-full'>
            <TableCaption>
                <PaginationDetails pageCountValue={handlePageCount} />
                <span>A list of cryptocurrency coins.</span>
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead className="w-[15rem]">Coin</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>1hr</TableHead>
                    <TableHead>7day</TableHead>
                    <TableHead>24hr</TableHead>
                    <TableHead>24hr Volume</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Last 7 Days</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!isFetching ? (coinsData?.map((coin: CoinData) => {
                    return (<TableRow key={coin?.id} >
                        <TableCell>{coin?.market_cap_rank}</TableCell>
                        <TableCell>
                            <div className="flex items-center">
                                <span className='h-8 w-8 mr-4'>
                                    <Image src={coin?.image} alt={coin?.name} width={50} height={50} />
                                </span>
                                <Link href={`coin/${coin?.id}`}>
                                    <span className="hover:text-primary hover:underline hover:underline-offset-4">{coin?.name}</span>
                                </Link>
                                <span className='ml-1 uppercase text-xs text-primary'>{coin?.symbol}</span>
                            </div>
                        </TableCell>
                        <TableCell>{currencyFormatter(coin?.current_price)}</TableCell>
                        <TableCell><span className={`${coin?.price_change_percentage_1h_in_currency > 0 ? 'text-green-500' : 'text-destructive'}`}>
                            {`${numberRounderFormatter(coin?.price_change_percentage_1h_in_currency)}%`}
                        </span></TableCell>
                        <TableCell><span className={`${coin?.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-destructive'}`}>
                            {`${numberRounderFormatter(coin?.price_change_percentage_24h)}%`}
                        </span></TableCell>
                        <TableCell><span className={`${coin?.price_change_percentage_7d_in_currency > 0 ? 'text-green-500' : 'text-destructive'}`}>
                            {`${numberRounderFormatter(coin?.price_change_percentage_7d_in_currency)}%`}
                        </span></TableCell>
                        <TableCell>{currencyFormatter(coin?.total_volume)}</TableCell>
                        <TableCell>{currencyFormatter(coin?.market_cap)}</TableCell>
                        <TableCell className='max-w-52'>
                            <CoinSparklineChart sparkline={coin?.sparkline_in_7d} priceChange={coin?.price_change_percentage_7d_in_currency} />
                        </TableCell>
                    </TableRow>)
                })) : (<CoinstTableSkeleton />)}
            </TableBody>
        </Table >
    )
}

export default CoinsTable