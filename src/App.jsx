import './App.css'
import { Button, Flex } from 'antd';
import React, { Fragment } from 'react'
import styled from"styled-components";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { routes } from './Routes';
import { DefaultComponent } from './DefaultComponents/DefaultComponent';
function App() {
const Button = styled.button`
  color: red;
`;
  return (
    <>
       <div>
        <Router>
          <Routes>
            {
              routes.map((route)=>{
                const Page = route.page 
                const Layout = route.isShowHeader ? DefaultComponent  : Fragment
                return (
                  <Route key={route.path} path={route.path} element={
                    <Layout>
                      <Page/>
                    </Layout>
                  } />
                )
                
              })
            }
          </Routes>
        </Router>
       </div>
    </>
  )
}

export default App
