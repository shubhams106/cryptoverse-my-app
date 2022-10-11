import React from 'react'
import { Layout, Typography, Space, Row, Col, Statistic } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import millify from 'millify';
import {useGetCryptosQuery} from '../redux/services/CryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const {Title} = Typography

const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  if(isFetching){
    return 'Loading...'
  }

  return (
    <div>
      <Title level={2} className='heading' >
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats.total}></Statistic></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title='Total 24h volume' value={millify(globalStats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}></Statistic></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title' >Top 10 cryptoCurrencies in the world</Title>
        <Title level={2} className='show-more' ><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className='home-title' >Latest Crypto News</Title>
        <Title level={3} className='show-more' ><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified/>
      </div>
  )
}

export default Homepage