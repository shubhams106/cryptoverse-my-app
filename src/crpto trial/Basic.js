//  Change the coin price history endpoint to the following - `coin/${coinId}/history?timeperiod=${timeperiod}`
import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


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

  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: [coinTimestamp],
    },
    title: {
      text: 'crypto chart'
    },
    series: [
      { data: [1, 6, 98, 56, 34] }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  const updateSeries = () => {
    setChartOptions({
      series: [
        { data: coinPrice }
      ]
    });
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

      {charts === 'bar' ? <Line data={data} options={options} /> : <Bar data={data} options={options} />}
      
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />

      <button onClick={updateSeries}>Update Series</button>
    </>
  );
};

export default LineChart;



series: [
      {
        data: coinPrice,
        tooltip: {
          valueDecimals: 2
        },
        name: 'AAPL',
      }
    ],