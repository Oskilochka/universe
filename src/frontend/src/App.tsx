import React from "react";
import { Empty, Spin, Table } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { getAllStudents } from "./api/students";
import { Student } from "./types/Student";
import { ColumnsType } from "antd/es/table";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [ getItem("Team 1", "6"), getItem("Team 2", "8") ]),
  getItem("Files", "9", <FileOutlined />),
];


const columns: ColumnsType<Student> = [
  {
    key: "id",
    title: "Id",
    dataIndex: "id",
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
  },
  {
    key: "email",
    title: "Email",
    dataIndex: "email",
  },
  {
    key: "gender",
    title: "Gender",
    dataIndex: "gender",
  },
];


function App() {
  const [ students, setStudents ] = React.useState<Student[]>([]);
  const [ isFetching, setIsFetching ] = React.useState(false);

  const fetchStudents = () => {
    try {
      setIsFetching(true);
      getAllStudents()
        .then(setStudents);
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  React.useEffect(() => {
    fetchStudents();
  }, []);

  const [ collapsed, setCollapsed ] = React.useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const renderStudents = () => {
    if (isFetching) {
      return <Spin />;
    }
    if (students.length === 0) {
      return <Empty />;
    } else {
      return <Table
        bordered={true}
        title={() => "Students"}
        rowKey={record => record.id}
        columns={columns}
        dataSource={students}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 240 }}
      />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={[ "1" ]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} items={[ { path: "/", title: "User" }, { path: "/", title: "Bill" } ]} />
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <div className="App">
              {renderStudents()}
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>©2023 Created by Oskilochka</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
