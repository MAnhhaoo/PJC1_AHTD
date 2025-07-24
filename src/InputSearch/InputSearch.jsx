import React  from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const SearchBar = ({style , ...rests}) => {
  return (
    <Input
      placeholder="Tìm kiếm..."
      {...rests}
      prefix={<SearchOutlined style={{ color: '#999' }} />}
      style={style}
    />
  );
};

export default SearchBar;
