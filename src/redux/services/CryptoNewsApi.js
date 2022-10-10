import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'faefc4b908mshfa3297435ba290ep179d73jsnf09c430754f5',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;

{/*
const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/exchanges',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    limit: '50',
    offset: '0',
    orderBy: '24hVolume',
    orderDirection: 'desc'
  },
  headers: {
    
  }
};

*/}