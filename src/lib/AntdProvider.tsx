'use client';
import React from 'react';
import { ConfigProvider } from 'antd';
import AntdRegistry from './AntdRegistry';

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};
export default AntdProvider;
