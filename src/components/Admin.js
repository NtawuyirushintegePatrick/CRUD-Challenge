

import { React, useEffect, useState } from 'react'
import autoTable from 'jspdf-autotable';
import { jsPDF } from "jspdf";
import axios from 'axios';
import Register from '../components/Register';
import { CSVLink } from "react-csv";



const Admin = () => {
  const [tasks, setTasks] = useState([]);
  const [datas, setDatas] = useState([])
  const [showModel, setShowModel] = useState([])
  const doc = new jsPDF();


  const getData = async () => {
    const { data: res } = await axios.get("http://localhost:3004/employee");
    
    setDatas(res);
    console.log(res)
  }
  console.log(datas)
  useEffect(() => {
    getData();

  }, []);

  function handleShowModel() {
    setShowModel(!showModel);
  }


  const Pdf = () => {
    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table' })
    doc.save('Employee informations .pdf')
  }



  const assignCsvData = () => {
    let arr = [['Names', 'Telephone', 'Position', 'Email']]
    for (let i = 0; i < tasks.length; i++) {
      arr.push(Object.values(tasks[i]));

    }
    return arr;
  }
  const Csv = assignCsvData();







  // const assignCsvData = () =>{
  //   let arr = [['EmployeeId','Names', 'Telephone','Position', 'Email']]
  //   for (let i=0;i<tasks.length;i++){
  //     arr.push(Object.values(tasks[i]));

  //   }
  //   return arr;
  // }

  // const csvData = assignCsvData();

  // const api = "http://localhost:3004/employee";
  //   useEffect(() => {
  //       const getPosts = async () => {
  //           const { data: response } = await axios.get(api);

  //       };
  //       getPosts()
  //   }, []);


  // const [studentData, setStudentData] = useState(jsonData);





  return (
    <>

      {/* {showModel ? <Register /> : ""} */}
      <div className='admin'>
        <div className='alignBtn'>
        <button type="submit" className="AddBtn"><a href="Register">Add Employee</a></button>
          <button type="submit" className="AddBtn" onClick={Pdf}>Download PDF file</button>
          <button type="submit" className="AddBtn"><CSVLink data={Csv}>Download Csv</CSVLink></button>
        </div>
        <table id="my-table" >
          <thead>
            <tr>
              <th>Names</th>
              <th>Telephone</th>
              <th>Position</th>
              <th>Email</th>


            </tr>
          </thead>
          <tbody>
            {
              datas.map((data, idx) => (
                <tr>
                  <td>{data.Names}</td>
                  <td>{data.Telephone}</td>
                  <td>{data.Position}</td>
                  <td>{data.Email}</td>
          
                </tr>
              ))}

          </tbody>
        </table>

      </div>


    </>
  )
}

export default Admin