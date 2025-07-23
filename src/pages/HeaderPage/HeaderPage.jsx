import React from 'react'
import { Col, Row } from 'antd';
import logo1 from "../../assets/img/logo1.webp";
import { Flex, Input } from 'antd';
import { Button, Divider, Radio } from 'antd';
import {
 SearchOutlined ,
 PhoneOutlined,
 UserOutlined,
 ShoppingCartOutlined 
} from '@ant-design/icons';
import "./Header.css"
import SearchBar from '../../InputSearch/InputSearch';
const HeaderPage = () => {
    const ArrName = ['Omega 3' , 'Thuốc nhỏ mắt' , 'Dung dịch vệ sinh ', 'Sửa rửa mặt' , 'Men vi sinh' , 'Canxi' , 'Kem chống nắng' , 'Kẽm']
  return (

    <div className='Header_Bg' >
        <div className="container" >
        <div className='Header_Text'>
            <div>
<span>
                <SearchOutlined /> 

            </span>
            <span>
                Tra cứu nguồn gốc xuất xứ hàng hóa <i className='span_text'>Kiểm tra ngay</i>
            </span>
            </div>

            <div className='Header_phone'>
                <span>
                    <PhoneOutlined />
                    Tư vấn ngay: 0347 683890
                </span>
            </div>
            
        </div>
        <div>
 <Row style={{textAlign: "center"}}>
      <Col span={6}>
      <img style={{width: "200px" , textAlign: "center"}} src={logo1} alt="" />
      </Col>
      <Col span={10}>
      <div style={{padding: "7px 0px"}}>
        <SearchBar style={{fontSize: "22px"}} />
      </div>
      </Col>
      <Col span={8}>
      <div className='Header_Btn'>
<div>
          <Button style={{margin:"0 45px" , fontWeight: "600" , height: "45px" , fontSize: "16px"}} > <UserOutlined /> Đăng nhập</Button>
      </div>
        <div>
            <Button type="primary" style={{fontWeight: "600" , height: "45px" ,fontSize: "16px" }}>
            <ShoppingCartOutlined />Giỏ Hàng
          </Button>
        </div>
      </div>
      

      
      </Col>
    </Row>
        </div>

        <div style={{ maxWidth: "1250px", margin: "0 auto" }} className='header_arr'>
           { ArrName.map((item)=>{
            return (
                <span key={item}>
                    {item}
                </span>
            )
           })}
        </div>
        
        </div>

    </div>
  )
}

export default HeaderPage