import React, { useEffect, useState } from 'react'

import { Layout, Typography, Space, Row, Col, Statistic, Card, Input } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptosQuery } from '../redux/services/CryptoApi';


const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchterm, setSearchterm] = useState('')
  console.log(cryptos)

  useEffect(() => {
    const filteredCryptos = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchterm.toLowerCase()))
      setCryptos(filteredCryptos)
    
  }, [searchterm, cryptos])

  
  if(isFetching) return 'loading................'

  return (
    <div>
      {!simplified && 
      <div className='search-crypto'>
        <Input placeholder='search cryptocurrencies' onChange={(e) => setSearchterm(e.target.value)} />
      </div>
      }   
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card 
              title={`${currency.rank}.${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl}/> }
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>

              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies