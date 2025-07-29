import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import "./Homepage.css";
import FooterPage from '../FooterPage/FooterPage';
import SimpleSlider from '../../SlickComponent/SlickComponent';
import sick1 from '../../assets/img/homePage/sick1 .webp';
import banner2 from '../../assets/img/homePage/banner 2.webp';
import banner3 from '../../assets/img/homePage/bananer 3.webp';
import h2 from "../../assets/img/homePage/h2.webp"
import h3 from "../../assets/img/homePage/h3.webp"
import h4 from "../../assets/img/homePage/h4.webp"
import HomeCarousel from './HomeCarousel';
import h5 from "../../assets/img/homePage/D_Banner_Flashsale_1216x120_3182c7f378.webp"
import HomeSale from './Home_Sale';
const HomePage = () => {
  const ArrTitle = [
    'Thực phẩm chức năng',
    'Dược mỹ phẩm',
    'Thuốc',
    'Chăm sóc da',
    'Thiết bị y tế',
    'Tiêm chủng',
    'Bệnh & Góc sức khỏe'
  ];

  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item (disabled)',
      key: '3',
      disabled: true,
    },
  ];

  return (
    <div style={{backgroundColor:"#EAEFFB"}}>
    <div className='Home_drop container' >
    
{ArrTitle.map((title) => (
        <Dropdown menu={{ items }} key={title}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {title}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      ))}
      <span> Hệ thống nhà thuốc</span>
        </div>
      <div style={{margin: "30px 300px"}}>
        <SimpleSlider  >
          <div >
            <img src={sick1} alt="" />
          </div>
          <div >
            <img src={banner2} alt="" />
          </div>
          <div >
            <img src={banner3} alt="" />
          </div>
        </SimpleSlider>
      </div>

      <div className='container'>
        <div className='flex  'style={{margin: "20px 0"}}>

       <div
  className="rounded-xl  overflow-hidden"
  style={{ width: "60%" }}
>
  <SimpleSlider>
    <div>
      <img
        height="315px"
        src={h2}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        height="315px"
        src={h4}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        height="315px"
        src={h3}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
    <div>
      <img
        height="315px"
        src={h3}
        alt=""
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
  </SimpleSlider>
</div>


       <div  className='flex-1' style={{margin: "0px 6px 0px 25px"}} >
         <div style={{margin: "0 0 10px 0"}}>
            <img style={{borderRadius:"20px"}} width={"500px"} src={h2} alt="" />
        </div>
         <div>
            <img style={{borderRadius:"20px"}} width={"500px"} src={h3} alt="" />
        </div>
       </div>
        </div>

      </div>

      <div>
        <HomeCarousel/>
      </div>

      <div className='container'>
      <div>
        <img src={h5} alt="" />
      </div>
      <div style={{margin: "0 0 15px 0 "}}>
      <HomeSale></HomeSale>
        
      </div>
      </div>


      </div>
  );
};

export default HomePage;
