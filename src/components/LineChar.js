//  Change the coin price history endpoint to the following - `coin/${coinId}/history?timeperiod=${timeperiod}`
import React from 'react';
import { Col, Row, Typography } from 'antd';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
const { Title } = Typography;


const LineChar = ({ coinHistory, currentPrice, coinName, charts }) => {
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

export default LineChar;




highcharts={Highcharts}
          options={options2}
          constructorType={"stockChart"}
          ref={chart}




const [options2, setOptions2] = useState<any>({
  chart: {
    backgroundColor: "rgb(22,24,29)",
    spacing: [0, 10, 0, 10],
  },
  legend: {
    enabled: true,
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    x: 0,
    y: 0,
    borderWidth: 0,
    alignColumns: false,
    // align:"left",
    margin: 0
  },
  navigator: {
    enabled: true,
  },
  lang: {
    numericSymbols: ["K", "M", "B", "T", "P", "E"],
  },
  yAxis: [
    {
      labels: {
        style: {
          color: "white",
        },
      },
      type: "linear",
      opposite: false,
      gridLineColor: "rgba(164,164,164,.35)",
      // tickAmount: 12,
      tickInterval: "1000",
      softMinimum: "1000",
      softMaximum: "120000",
    },
  ],
  xAxis: {
    dateTimeLabelFormats: {
      hour: "%I:%M %P",
    },
    labels: {
      style: {
        color: "white",
      },
    },
    lineColor: "#47494c",
    tickColor: "#47494c",
    tickAmount: 1,
  },
  rangeSelector: {
    buttons: [],
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  series: [
    {
      data: metricData[0] !== undefined && (metricData[0].Visibility === true) ? metricData[0].data : [],
      name: "Total Market Cap",
      turboThreshold: 0,
    },
  ],
});



const [metricData, setMetricData] = useState([
  {
    m: m,  {m: metricData.length},
    selectedCrypto,
    selectedMetric: 'Price',
    resolution: '1Y',
    SMA: '0D',
    scale: 'Linear',
    color: 'red',
    yAxis: 0,
    chartStyle: 'Line',
    Visibility: true,
    data: null
  }
]);



{
console.log(chartProps, coinSentiments, [0], m, , selectedCrypto, secondSelectedCrypto, );

}

setSelectedCrypto(chartProps.coinData[0])