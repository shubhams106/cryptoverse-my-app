//  Change the coin price history endpoint to the following - `coin/${coinId}/history?timeperiod=${timeperiod}`
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';


const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, charts }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            // type: 'logarithmic'
          },
        },
      ],
    },
  };
  console.log('line chart m console charts', charts)
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>

      {charts === 'bar' ? <Line data={data} options={options} /> : <Bar data={data} options={options} />}

    </>
  );
};

export default LineChart;