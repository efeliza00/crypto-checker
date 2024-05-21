"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Flame, MoveUpRight } from 'lucide-react'
import { numberRounderFormatter } from '@/lib/utils/number-rounder-formatter'
import Link from 'next/link'

type Coin = {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    score: number
    data: {
      price: number
      price_btc: string
      price_change_percentage_24h: {
        aed: number
        ars: number
        aud: number
        bch: number
        bdt: number
        bhd: number
        bmd: number
        bnb: number
        brl: number
        btc: number
        cad: number
        chf: number
        clp: number
        cny: number
        czk: number
        dkk: number
        dot: number
        eos: number
        eth: number
        eur: number
        gbp: number
        gel: number
        hkd: number
        huf: number
        idr: number
        ils: number
        inr: number
        jpy: number
        krw: number
        kwd: number
        lkr: number
        ltc: number
        mmk: number
        mxn: number
        myr: number
        ngn: number
        nok: number
        nzd: number
        php: number
        pkr: number
        pln: number
        rub: number
        sar: number
        sek: number
        sgd: number
        thb: number
        try: number
        twd: number
        uah: number
        usd: number
        vef: number
        vnd: number
        xag: number
        xau: number
        xdr: number
        xlm: number
        xrp: number
        yfi: number
        zar: number
        bits: number
        link: number
        sats: number
      }
      market_cap: string
      market_cap_btc: string
      total_volume: string
      total_volume_btc: string
      sparkline: string
      content: {
        title: string
        description: string
      }
    }
  }
}



const TrendingCard = ({ coins }: { coins?: Coin[] }) => {
  return (
    <Card className="w-full rounded-xl hover:bg-primary-foreground duration-300">
      <CardHeader>
        <div className='flex items-center justify-between mb-2'>
          <Flame className='p-2 border w-10 h-10 rounded-xl' color="#fe7e06" />
          <MoveUpRight className='p-2 w-10 h-10 rounded-xl' />
        </div>
        <CardTitle>Trending</CardTitle>
        <CardDescription>
          Check this trending coins.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='flex flex-col w-full'>
          {coins?.slice(0, 3).map((coin: Coin) => {
            const price = numberRounderFormatter(coin?.item?.data?.price)
            const priceChangePercentage = numberRounderFormatter(coin?.item?.data.price_change_percentage_24h?.usd)

            return (<Link href={`coin/${coin?.item?.id}`} key={coin.item.coin_id}>
              <li>
                <Button variant="ghost" className='px-4 py-2 hover:bg-secondary items-center justify-between md:justify-between lg:justify-around w-full rounded-xl h-auto grid grid-cols-2 lg:grid-cols-4'>
                  <Image src={coin?.item.small} height={40} width={40} quality={100} alt={coin?.item.name} />
                  <p className='text-md'>{coin?.item?.name}</p>
                  <p className='text-md hidden md:hidden lg:block'>{price}</p>
                  <p className={`hidden lg:block ${Number(priceChangePercentage) > 0 ? 'text-green-500' : 'text-destructive'} text-md`}>{`${priceChangePercentage}%`}</p>
                </Button>
              </li>
            </Link>)
          }
          )}
        </ul>
      </CardContent>
    </Card>
  )
}

export default TrendingCard