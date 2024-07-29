import Image from 'next/image'
import { getCoinData } from '@/api/coins'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { currencyFormatter } from '@/lib/utils/currency-formatter'
import { numberRounderFormatter } from '@/lib/utils/number-rounder-formatter'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { numberFormatter } from '@/lib/utils/number-formatter'
import Link from 'next/link'
import CurrencyChart from '@/components/currency-chart'
import NoData from '@/components/empty-data'


type CoinData = {
    id: string
    symbol: string
    name: string
    web_slug: string
    asset_platform_id: any
    block_time_in_minutes: number
    hashing_algorithm: string
    categories: string[]
    preview_listing: boolean
    public_notice: any
    localization: {
        en: string
        de: string
        es: string
        fr: string
        it: string
        pl: string
        ro: string
        hu: string
        nl: string
        pt: string
        sv: string
        vi: string
        tr: string
        ru: string
        ja: string
        zh: string
        "zh-tw": string
        ko: string
        ar: string
        th: string
        id: string
        cs: string
        da: string
        el: string
        hi: string
        no: string
        sk: string
        uk: string
        he: string
        fi: string
        bg: string
        hr: string
        lt: string
        sl: string
    }
    description: {
        en: string
        de: string
        es: string
        fr: string
        it: string
        pl: string
        ro: string
        hu: string
        nl: string
        pt: string
        sv: string
        vi: string
        tr: string
        ru: string
        ja: string
        zh: string
        "zh-tw": string
        ko: string
        ar: string
        th: string
        id: string
        cs: string
        da: string
        el: string
        hi: string
        no: string
        sk: string
        uk: string
        he: string
        fi: string
        bg: string
        hr: string
        lt: string
        sl: string
    }
    links: {
        homepage: string[]
        whitepaper: string
        blockchain_site: string[]
        official_forum_url: string[]
        chat_url: string[]
        announcement_url: string[]
        twitter_screen_name: string
        facebook_username: string
        bitcointalk_thread_identifier: any
        telegram_channel_identifier: string
        subreddit_url: string
        repos_url: {
            github: string[]
            bitbucket: string[]
        }
    }
    image: {
        thumb: string
        small: string
        large: string
    }
    country_origin: string
    genesis_date: string
    sentiment_votes_up_percentage: number
    sentiment_votes_down_percentage: number
    watchlist_portfolio_users: number
    market_cap_rank: number
    market_data: {
        current_price: {
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
        total_value_locked: any
        mcap_to_tvl_ratio: any
        fdv_to_tvl_ratio: any
        roi: any
        ath: {
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
        ath_change_percentage: {
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
        ath_date: {
            aed: string
            ars: string
            aud: string
            bch: string
            bdt: string
            bhd: string
            bmd: string
            bnb: string
            brl: string
            btc: string
            cad: string
            chf: string
            clp: string
            cny: string
            czk: string
            dkk: string
            dot: string
            eos: string
            eth: string
            eur: string
            gbp: string
            gel: string
            hkd: string
            huf: string
            idr: string
            ils: string
            inr: string
            jpy: string
            krw: string
            kwd: string
            lkr: string
            ltc: string
            mmk: string
            mxn: string
            myr: string
            ngn: string
            nok: string
            nzd: string
            php: string
            pkr: string
            pln: string
            rub: string
            sar: string
            sek: string
            sgd: string
            thb: string
            try: string
            twd: string
            uah: string
            usd: string
            vef: string
            vnd: string
            xag: string
            xau: string
            xdr: string
            xlm: string
            xrp: string
            yfi: string
            zar: string
            bits: string
            link: string
            sats: string
        }
        atl: {
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
        atl_change_percentage: {
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
        atl_date: {
            aed: string
            ars: string
            aud: string
            bch: string
            bdt: string
            bhd: string
            bmd: string
            bnb: string
            brl: string
            btc: string
            cad: string
            chf: string
            clp: string
            cny: string
            czk: string
            dkk: string
            dot: string
            eos: string
            eth: string
            eur: string
            gbp: string
            gel: string
            hkd: string
            huf: string
            idr: string
            ils: string
            inr: string
            jpy: string
            krw: string
            kwd: string
            lkr: string
            ltc: string
            mmk: string
            mxn: string
            myr: string
            ngn: string
            nok: string
            nzd: string
            php: string
            pkr: string
            pln: string
            rub: string
            sar: string
            sek: string
            sgd: string
            thb: string
            try: string
            twd: string
            uah: string
            usd: string
            vef: string
            vnd: string
            xag: string
            xau: string
            xdr: string
            xlm: string
            xrp: string
            yfi: string
            zar: string
            bits: string
            link: string
            sats: string
        }
        market_cap: {
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
        market_cap_rank: number
        fully_diluted_valuation: {
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
        market_cap_fdv_ratio: number
        total_volume: {
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
        high_24h: {
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
        low_24h: {
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
        price_change_24h: number
        price_change_percentage_24h: number
        price_change_percentage_7d: number
        price_change_percentage_14d: number
        price_change_percentage_30d: number
        price_change_percentage_60d: number
        price_change_percentage_200d: number
        price_change_percentage_1y: number
        market_cap_change_24h: number
        market_cap_change_percentage_24h: number
        price_change_24h_in_currency: {
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
        price_change_percentage_1h_in_currency: {
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
        price_change_percentage_24h_in_currency: {
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
        price_change_percentage_7d_in_currency: {
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
        price_change_percentage_14d_in_currency: {
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
        price_change_percentage_30d_in_currency: {
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
        price_change_percentage_60d_in_currency: {
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
        price_change_percentage_200d_in_currency: {
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
        price_change_percentage_1y_in_currency: {
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
        market_cap_change_24h_in_currency: {
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
        market_cap_change_percentage_24h_in_currency: {
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
        total_supply: number
        max_supply: number
        circulating_supply: number
        sparkline_7d: {
            price: number[]
        }
        last_updated: string
    }
    community_data: {
        facebook_likes: any
        twitter_followers: number
        reddit_average_posts_48h: number
        reddit_average_comments_48h: number
        reddit_subscribers: number
        reddit_accounts_active_48h: number
        telegram_channel_user_count: any
    }
    developer_data: {
        forks: number
        stars: number
        subscribers: number
        total_issues: number
        closed_issues: number
        pull_requests_merged: number
        pull_request_contributors: number
        code_additions_deletions_4_weeks: {
            additions: number
            deletions: number
        }
        commit_count_4_weeks: number
    }

    last_updated: string
    tickers: {
        base: string
        target: string
        market: {
            name: string
            identifier: string
            has_trading_incentive: boolean
        }
        last: number
        volume: number
        converted_last: {
            btc: number
            eth: number
            usd: number
        }
        converted_volume: {
            btc: number
            eth: number
            usd: number
        }
        trust_score: string
        bid_ask_spread_percentage: number
        timestamp: string
        last_traded_at: string
        last_fetch_at: string
        is_anomaly: boolean
        is_stale: boolean
        trade_url?: string
        token_info_url: any
        coin_id: string
        target_coin_id?: string
    }[]
}

const CoinsDetailsPage = async ({
    params: { coin },
}: {
    params: { coin: string }
}) => {
    const coinsData = await getCoinData(coin)


    return (
        <div className="grid grid-cols-12 px-8 lg:px-12">
            <div className='col-span-12 lg:px-4 lg:col-span-4 lg:border-r'>
                <div className='space-x-2 border-b py-4 flex items-center'>
                    <div className='my-auto inline-block'>
                        <Image src={coinsData?.image?.large as string} height={50} width={50} quality={100} alt={coinsData?.name as string} />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight inline-block ">
                        {coinsData?.name}
                    </h3>
                    <span className="uppercase text-primary">{coinsData?.symbol} <span className="capitalize text-secondary-foreground">Price</span></span>
                    <Badge variant="secondary">{`#${coinsData?.market_cap_rank}`}</Badge>
                </div>
                <div className="mt-5 w-full flex gap-4 items-baseline ">
                    <h1 className="inline-block scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                        {currencyFormatter(coinsData?.market_data?.current_price?.usd)}
                    </h1>
                    <h3 className={`scroll-m-20 text-2xl tracking-tight ${coinsData?.market_data?.price_change_24h as number > 0 ? 'text-green-500' : 'text-destructive'}`}>
                        {`${numberRounderFormatter(coinsData?.market_data?.price_change_percentage_24h
                        )}%`}
                    </h3>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="market-cap">
                        <AccordionTrigger className="flex justify-between">
                            <span>Market Cap</span>
                            <span>{currencyFormatter(coinsData?.market_data.market_cap?.usd)}</span>
                        </AccordionTrigger>
                        <AccordionContent className='flex justify-between'>
                            <span>Market Cap/FDV</span>
                            <span>{coinsData?.market_data?.market_cap_fdv_ratio}</span>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className='divide-y'>
                    <div className="flex justify-between py-4">
                        <span className='text-sm'>
                            Fully Diluted Valuation
                        </span>
                        <span>
                            {currencyFormatter(coinsData?.market_data?.fully_diluted_valuation?.usd)}
                        </span>
                    </div>
                    <div className="flex justify-between py-4">
                        <span>
                            24 Hour Trading Vol
                        </span>
                        <span>
                            {currencyFormatter(coinsData?.market_data?.total_volume?.usd)}
                        </span>
                    </div>
                    <div className="flex justify-between py-4">
                        <span>
                            Circulating Supply
                        </span>
                        <span>
                            {numberFormatter(coinsData?.market_data?.circulating_supply)}
                        </span>
                    </div>
                    <div className="flex justify-between py-4">
                        <span>
                            Total Supply
                        </span>
                        <span>
                            {numberFormatter(coinsData?.market_data?.total_supply)}
                        </span>
                    </div>
                    <div className="flex justify-between py-4">
                        <span>
                            Max Supply
                        </span>
                        <span>
                            {numberFormatter(coinsData?.market_data?.max_supply)}
                        </span>
                    </div>
                </div>
                <div className='divide-y mt-10'>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        Coin Information
                    </h4>
                    <div className="flex justify-between py-4">
                        <span>
                            Website
                        </span>
                        <span className='inline-block space-x-1 space-y-1'>
                            {coinsData?.links?.homepage?.length > 0 &&
                                coinsData.links.homepage?.map((site: string, index: number) => {
                                    const extractDomain = (url?: string) => {
                                        try {
                                            const hostname = new URL(url as string).hostname;
                                            const domain = hostname.split('.').slice(-2, -1)[0];
                                            return domain;
                                        } catch (error) {
                                            return null;
                                        }
                                    };
                                    if (!site) return null;
                                    const domain = extractDomain(site);
                                    return (
                                        <Link href={site} key={index} target="_blank" rel="noopener noreferrer" className={badgeVariants({ variant: "secondary" })}>
                                            <span className="capitalize">
                                                {domain}
                                            </span>
                                        </Link>
                                    );
                                })
                            }
                            <Link href={coinsData?.links.whitepaper as string} target="_blank" rel="noopener noreferrer" className={badgeVariants({ variant: "secondary" })}>
                                Whitepaper
                            </Link>
                        </span>
                    </div>
                    <Accordion type="single" collapsible className="py-4">
                        <AccordionItem value="market-cap" className="!border-b-0">
                            <AccordionTrigger>
                                <span>Explorer</span>
                            </AccordionTrigger>
                            <AccordionContent className="space-x-1 space-y-1">
                                {coinsData?.links?.blockchain_site?.length > 0 &&
                                    coinsData.links.blockchain_site.map((site: string, index: number) => {
                                        const extractDomain = (url?: string) => {
                                            try {
                                                const hostname = new URL(url as string).hostname;
                                                const domain = hostname.split('.').slice(-2, -1)[0];
                                                return domain;
                                            } catch (error) {
                                                return null;
                                            }
                                        };
                                        if (!site) return null;
                                        const domain = extractDomain(site);
                                        return (
                                            <Link href={site} key={index} target="_blank" rel="noopener noreferrer" className={badgeVariants({ variant: "secondary" })}>
                                                <span className="capitalize">
                                                    {domain}
                                                </span>
                                            </Link>
                                        );
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-between py-4">
                        <span>
                            Circulating Supply
                        </span>
                        <span>
                            {numberFormatter(coinsData?.market_data?.circulating_supply as number)}
                        </span>
                    </div>
                    <Accordion type="single" collapsible className="py-4">
                        <AccordionItem value="Community" className="!border-b-0">
                            <AccordionTrigger>
                                <span>Source Code</span>
                            </AccordionTrigger>
                            <AccordionContent className="space-x-1 space-y-1">
                                {coinsData?.links?.repos_url?.github.length > 0 &&
                                    coinsData.links.repos_url?.github.map((url: string, index: number) => {
                                        const extractDomain = (url?: string) => {
                                            try {
                                                const hostname = new URL(url as string).hostname;
                                                const domain = hostname.split('.').slice(-2, -1)[0];
                                                return domain;
                                            } catch (error) {
                                                return null;
                                            }
                                        };
                                        if (!url) return null;
                                        const domain = extractDomain(url);
                                        return (
                                            <Link href={url} key={index} target="_blank" rel="noopener noreferrer" className={badgeVariants({ variant: "secondary" })}>
                                                <span className="capitalize">
                                                    {domain}
                                                </span>
                                            </Link>
                                        );
                                    })
                                }
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-8 lg:px-6 py-6 lg:py-4 link'>
                <div className="col-span-12 mb-10">
                    <CurrencyChart sparkline={coinsData.market_data?.sparkline_7d} priceChange={coinsData.market_data?.price_change_percentage_7d_in_currency?.usd} />
                </div>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 capitalize">
                    {`About ${coinsData?.name}?`}
                </h2>
                {coinsData?.description?.en ? (
                    <p
                        className="leading-7 [&:not(:first-child)]:mt-4"
                        dangerouslySetInnerHTML={{ __html: coinsData.description.en }}
                    />
                ) : (
                    <NoData />
                )}

            </div>
        </div>
    )
}

export default CoinsDetailsPage