
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import Navbar from './components/Navbar';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies/> } />
              {/* <Route exact path='/crypto/:coinId ' element={<CryptoDetails />} /> */}
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      


      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse<br/> All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
