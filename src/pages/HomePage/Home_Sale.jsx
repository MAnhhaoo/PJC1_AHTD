import React, { useState } from 'react';
import { Tabs } from 'antd';
import './HomeSale.css'; // chứa CSS custom
import h2 from "../../assets/img/homePage/h2.webp"
import h3 from "../../assets/img/homePage/h3.webp"
import h4 from "../../assets/img/homePage/h4.webp"
import thuoc from "../../assets/img/homePage/thuoc1.webp"
import SimpleSlider from '../../SlickComponent/SlickComponent';

const HomeSale = () => {
  const [activeKey, setActiveKey] = useState('1');

  const items = [
    {
      label: (
        <div className={`custom-tab ${activeKey === '1' ? 'active-tab' : ''}`}>
          <div className="time-text red-text">08:00 - 13:00, 29/07</div>
          <div className="status-text red-text">Sắp diễn ra</div>
        </div>
      ),
      key: '1',
      children: <div className='test'>
        <div className="tab-content "> 
        <SimpleSlider settings={{  arrows: false,  slidesToShow: 2}}>
          <div className='border content_tab' style={{backgroundColor: "white"}}>
            <div>
               <img
              height="140px"
              src={thuoc}
              alt=""
              style={{ width: "140px%", objectFit: "cover" }}
            />
            </div>
            <div>
              <p style={{textAlign: "start" , fontWeight: "600", padding: "0 10px"}}>Thực phẩm bảo vệ sức khỏe Natural Vitamin E 400 IU giúp cải thiện sức khỏe... </p>
              <span>xxx.800đ</span>
              <p>251.000đ</p>
            </div>
            
           
          </div>
          <div>
            <img
              height="315px"
              src={h4}
              alt=""
              style={{ width: "50%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              height="315px"
              src={h3}
              alt=""
              style={{ width: "50%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              height="315px"
              src={h3}
              alt=""
              style={{ width: "50%", objectFit: "cover" }}
            />
          </div>
        </SimpleSlider>
      </div>
      </div>,
    },
    {
      label: (
        <div className={`custom-tab ${activeKey === '2' ? 'active-tab' : ''}`}>
          <div className="time-text">13:05 - 15:55, 29/07</div>
          <div className="status-text">Sắp diễn ra</div>
        </div>
      ),
      key: '2',
      children: <div className="tab-content">       
       <SimpleSlider settings={{  arrows: false}}>
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
        </SimpleSlider></div>,
    },
    {
      label: (
        <div className={`custom-tab ${activeKey === '3' ? 'active-tab' : ''}`}>
          <div className="time-text">16:00 - 21:00, 29/07</div>
          <div className="status-text">Sắp diễn ra</div>
        </div>
      ),
      key: '3',
      children: <div className="tab-content">        <SimpleSlider settings={{  arrows: false}}>
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
        </SimpleSlider></div>,
    },
  ];

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        type="card"
        items={items}
      />
    </div>
  );
};

export default HomeSale;
