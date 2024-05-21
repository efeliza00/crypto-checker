"use client"

import { getGlobalMarket, getTrendingCoins } from '@/api/coins'
import CoinsTable from '@/components/coins-table'
import GlobalSearchInputDetail from '@/components/global-search-input'
import MarketCapCard from '@/components/market-cap-card'
import TradingVolumeCard from '@/components/trading-volume-card'
import TrendingCard from '@/components/trending-card'
import { useSuspenseQuery } from '@tanstack/react-query'


const CrytoCurrencyTableDetails = () => {

  return <div className='grid grid-cols-12'>
    <div className='w-full col-span-12 mt-5'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Cryptocurrency Prices by Market Cap
      </h2>
      <p className="leading-none [&:not(:first-child)]:mt-6">
        Browse here and keep update to the market and track your desired coins.
      </p>
    </div>

    <div className='col-span-12 my-5 flex justify-center w-full lg:w-1/2 mx-auto'>
      <GlobalSearchInputDetail size="lg" />
    </div>
    <div className="col-span-12 overflow-y-auto">
      <CoinsTable />
    </div>
  </div>
}

const TrendsDetails = () => {
  const { data: trendingCoins } = useSuspenseQuery({ queryKey: ["trending-coins"], queryFn: getTrendingCoins })
  const { data: globalMarketPrice } = useSuspenseQuery({ queryKey: ["global-market"], queryFn: getGlobalMarket })

  return <div className='grid grid-cols-1 lg:grid-cols-12 grid-rows-12 my-10 gap-2'>
    <div className="lg:col-span-5 row-span-12">
      <TrendingCard coins={trendingCoins?.coins} />
    </div>
    <div className="lg:col-span-7 row-span-6 h-full">
      <MarketCapCard marketCap={globalMarketPrice} />
    </div>
    <div className="lg:col-span-7 row-span-6 h-full">
      <TradingVolumeCard tradingVolume={globalMarketPrice} />
    </div>
  </div>
}

const Home = () => {
  return (
    <div className='w-full px-10 lg:py-24'>
      <div className="px-4 md:px-6 mt-20 lg:mt-0">
        <div className="flex flex-col items-center space-y-6 text-start lg:text-center border-b pb-10">
          <div className=" space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient !bg-clip-text text-transparent">
              CryptoChecker
            </h1>
            <p className="max-w-[700px]md:text-xl lg:text-lg xl:text-xl text-secondary-foreground">
              We provide essential information about cryptocurrencies. It covers real-time prices, market capitalization, trading volumes, and other relevant data. Users can track their favorite coins and stay informed about the crypto market.
            </p>
          </div>
        </div>
        <TrendsDetails />
        <CrytoCurrencyTableDetails />
      </div>
    </div>
  )
}

export default Home