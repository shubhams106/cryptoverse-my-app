import React, { useState } from 'react'

import { Layout, Typography, Space, Row, Col, Statistic, Card, Input } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptosQuery } from '../redux/services/CryptoApi';


const Cryptocurrencies = () => {
  const {data: cryptosList, isFetching} = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  console.log(cryptos)
  return (
    <div>
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card 
              title={`${currency.rank}.${currency.name}`} 
              hoverable
              >
                <p>{millify(currency.price)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies