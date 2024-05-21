export const getTrendingCoins =
  async () => {
    const res =
      await fetch(
        `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}/search/trending`
      );

    return res.json();
  };

export const getGlobalMarket =
  async () => {
    const res =
      await fetch(
        `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}/global`
      );

    return res.json();
  };

export const getSearchCoins =
  async (
    coin: string
  ) => {
    const res =
      await fetch(
        `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}/search?query=${coin}`
      );
    return res.json();
  };

export const getCoinsList =
  async (
    pageCount: number
  ) => {
    const res =
      await fetch(
        `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}/coins/markets?vs_currency=usd&per_page=50&page=${pageCount}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
    return res.json();
  };

export const getCoinData =
  async (
    param: string
  ) => {
    const res =
      await fetch(
        `${process.env.NEXT_PUBLIC_COINGECKO_API_KEY}/coins/${param}?market_data=true&community_data=true&sparkline=true`
      );
    return res.json();
  };
