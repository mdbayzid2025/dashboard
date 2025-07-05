import React from "react";
import { Layout, theme } from "antd";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sidebar />
      <Layout>
        <HeaderDashboard />
        <Content style={{ margin: 10 }} className="overflow-y-scroll">
          <div style={{
            padding: 0,
            minHeight: "50vh",
            width: "100%",
            background: "#F6F6F6",
            borderRadius: borderRadiusLG,
          }} className="">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
