//  Change the coin price history endpoint to the following - `coin/${coinId}/history?timeperiod=${timeperiod}`
import React from 'react';
import { Col, Row, Typography } from 'antd';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
const { Title } = Typography;


const LineChart = ({ coinHistory, currentPrice, coinName, charts }) => {
  // const { data, isFetching } = useGetCryptoDetailsQuery(coinId);

  // const coinPrice = [];
  const allData = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    allData.push(Number(coinHistory?.data?.history[i].price), coinHistory?.data?.history[i].timestamp);
  }



  function sliceIntoChunks(allData, chunkSize) {
    const res = [];
    for (let i = 0; i < allData.length; i += chunkSize) {
      const chunk = allData.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  // console.log('hhh',sliceIntoChunks(coinTimestamp, 2));
  const value = sliceIntoChunks(allData, 2);

  // console.log('abc', abc);



  const option = {
    title: {
      text: 'Crypto comparison'
    },
    rangeSelector: {
      selected: 1
    },
    series: [
      {
        data: value,
        name: coinName,
        tooltip: {
          valueDecimals: 2,
        },
      }
    ],
    xAxis: {
      categories: [],
    },
  }



  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>

      <HighchartsReact
        highcharts={Highcharts}
        options={option}
      />

    </>
  );
};

export default LineChart;