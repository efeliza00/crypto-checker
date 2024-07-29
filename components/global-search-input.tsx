"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Input } from './ui/input'
import { Search, X } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getSearchCoins } from '@/api/coins'
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'


type Coin = {
  id: string
  name: string
  api_symbol: string
  symbol: string
  market_cap_rank: number
  thumb: string
  large: string
}

type GlobalSearchInputForm = {
  query: string;
}


const useGlobalSearchInput = () => {
  const methods = useForm<GlobalSearchInputForm>()

  useEffect(() => {
    methods.reset({
      query: ''
    })
  }, [methods])

  return {
    methods
  }
}


const GlobalSearchInput = () => {
  const { register, watch, reset } = useFormContext<GlobalSearchInputForm>()
  const searchResultsRef = useRef<HTMLUListElement>(null);
  const [isShowResults, setIsShowResults] = useState<boolean>(false)
  const query = watch('query')

  const searchCoinQueryData = useQuery({ queryKey: ["search-coins"], queryFn: () => getSearchCoins(query), enabled: !!query && query.length >= 0 })

  useEffect(() => {
    if (searchResultsRef.current) {
      searchResultsRef.current.style.display = isShowResults ? 'block' : 'none';
    }
  }, [isShowResults]);


  return (<div className={`relative w-full`}>
    <Input type="text" {...register('query')} className='rounded-xl pl-10 bg-primary-foreground' autoComplete='off' />
    <Search className='absolute top-2 left-3' />
    {!searchCoinQueryData?.isFetching && searchCoinQueryData?.data?.coins.length > 0 && <Button variant="secondary" size="icon" className='absolute top-1 right-2 p-1 rounded-full h-7 w-7' onClick={() => {
      reset()
      if (query.length === 0) {
        searchCoinQueryData.refetch()
      }
    }}>
      <X />
    </Button>}
    {!searchCoinQueryData?.isFetching && searchCoinQueryData?.data?.coins.length > 0 ?
      (<ul className='h-[15rem] z-50 overflow-y-auto absolute top-12 left-0 w-full border rounded-xl bg-primary-foreground shadow-md divide-y divide-accent'>
        {searchCoinQueryData.data.coins?.map((coin: Coin) => (
          <Link href={`coin/${coin?.id}`} key={coin?.id}>
            <li className='flex items-center justify-start gap-2 p-2 hover:bg-secondary cursor-pointer'>
              <div className='h-5 w-5'>
                <Image src={coin?.large} height={100} width={100} quality={100} alt={coin?.name} />
              </div>
              <div>{coin?.name}</div>
              <div>{`(${coin?.symbol})`}</div>
            </li>
          </Link>
        ))}
      </ul>) : null
    }
  </div>
  )
}

const GlobalSearchInputDetail = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  const { methods } = useGlobalSearchInput()
  return (
    <FormProvider {...methods}>
      <div className={` ${size === "sm" && 'w-1/4'} ${size === "md" && 'w-1/2'} ${size === "lg" && 'w-full'}`}>
        <GlobalSearchInput />
      </div>
    </FormProvider>
  )
}

export default GlobalSearchInputDetail
