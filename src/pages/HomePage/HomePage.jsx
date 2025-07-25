import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import "./Homepage.css";
import FooterPage from '../FooterPage/FooterPage';
import SimpleSlider from '../../SlickComponent/SlickComponent';

import sick1 from '../../assets/img/homePage/sick1 .webp';
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
    <div>
    <div className='Home_drop' >
    
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
      <div style={{maxWidth: "1550px"}}>
        <SimpleSlider settings={{infinite: false}}>
          <div >
            <img src={sick1} alt="" />
          </div>
        </SimpleSlider>
      </div>


        <div>
        </div>
      </div>
  );
};

export default HomePage;
