import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'faefc4b908mshfa3297435ba290ep179d73jsnf09c430754f5',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest('/coins')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest('/coins')
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/history/${timePeriod}`),
        }),
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