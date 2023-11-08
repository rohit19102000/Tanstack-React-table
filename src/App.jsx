import BasicTable from "./components/BasicTable"
import './App.css'
import  mData  from "./MOCK_DATA.json";

import { useMemo } from "react";

import {DateTime} from 'luxon'
const App = () => {

  const data = useMemo(() => mData, []);
  /** @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      columns:[
        {
          header: "First",
          accessorKey:"first_name",
          footer: "First",
        },
        {
          header: "Last",
          accessorKey:"last_name",
          footer: "Last",
        },
        
      ]
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth", 
      accessorKey: "dob",
      footer: "Date of Birth",
      cell:info=>DateTime.fromISO(info.getValue()).toLocaleString(DateTime.data_MED)
    },
  ];


  return (
    <div className="app">
      <h1>react-table</h1>
      <BasicTable data={data} columns={columns}/>      
    </div>
  )
}

export default App
