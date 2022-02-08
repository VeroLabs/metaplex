import { Layout, Row } from 'antd';
import React from 'react';

const { Content } = Layout;

// eslint-disable-next-line react/prop-types
export const WelcomeView = ({clickCallback}) => {
  return (
    <>
      <Layout id={'main-layout'}>
        <span id={'main-bg'}></span>
        <span id={'bg-gradient'}></span>
        <span id={'static-header-gradient'}></span>
        <span id={'static-end-gradient'}></span>
        <Layout id={'width-layout'}>
          <Content
            style={{
              overflow: 'scroll',
              padding: '30px 48px ',
            }}
          >
            <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
              <Content
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Row style={{ marginTop: 50 }}>
                  <a href="#" onClick={() => clickCallback(false)}>
                    <img src={'/vero-logo.svg'} />
                  </a>
                </Row>
                <Row style={{ marginTop: 50 }}>
                  <Content
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  >
                      <div className="info-header">WELCOME TO VEROPLEX</div>
                      <a href="#" onClick={() => clickCallback(false)}>Click here to shop NFTs</a>
                  </Content>

                </Row>
              </Content>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
