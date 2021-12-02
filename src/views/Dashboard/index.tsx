import React from "react";
import Layout from "../../layout/Dashboard";

const Dashboard: React.FC & { Layout: React.FC } = () => {
  return <div>DASH!</div>;
};

Dashboard.Layout = Layout;

export default Dashboard;
