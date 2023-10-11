import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const PageHeader = ({ showModal }: any) => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);

  let id:any = null
  if (typeof window !== 'undefined') {
    id = localStorage.getItem("id")  
  }

  const {data:studentData} =  api.example.studentDetails.useQuery({id:id})

  const  removeStorage = () => {

    localStorage.clear();
    router.push("/")


  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <button onClick={showModal}>Update Profile</button>,
    },
    {
      key: "1",
      label: <button onClick={removeStorage}>Logout</button>,
    },
  ];
  return (
    <div className="h-15 mb-6 flex w-full items-center justify-between border border-solid border-gray-500 px-10">
      <h1 className="ml-36 font-mono text-3xl font-bold text-gray-500">
      {router.pathname.replace(/\//g," ")}</h1>

      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className="flex flex-row items-center justify-center gap-4">
              <img src="/ccis-logo.png" className="h-12 w-12" alt="logo" />
              <h1 className="font-mono text-xl font-bold text-gray-500">
               {studentData?.firstname}
              </h1>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default PageHeader;
