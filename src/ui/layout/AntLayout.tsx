"use client";
import React, { HTMLAttributes } from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

interface AntLayout extends HTMLAttributes<HTMLDivElement> {}

const AntLayout: React.FC<AntLayout> = ({ children }) => {
  return (
    <Layout className="bg-none">
      <Header className="flex items-center gap-2 text-2xl text-white">
        AppointMe
      </Header>
      <Content className="bg-none">
        <div
          style={{
            // background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            // borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AntLayout;
