import React from 'react';
import { Table } from 'react-bootstrap';
import Dashboard from "./Dashboard"
import { CSVLink, CSVDownload } from "react-csv"; 
import './App.css'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
 


const Resume = (props) => {

    return(
          <div> 
           <Table striped bordered hover variant="dark" id="emp" className="center">
  
  <tbody>
    <tr>
      <td>1. Name </td><td>- </td>
      <td>{props.username}</td>
    </tr>
     <br />
    <tr>
      <td>2. Email </td><td>-</td>
      <td>{props.email}</td>
    </tr>
 <br />
    <tr>
      <td>3. Phone </td><td>-</td>
      <td>{props.phone}</td>
    </tr>
 <br />
    <tr>
      <td>4. Location </td><td>-</td>
      <td>{props.location}</td>
    </tr>
 <br />
    <tr>
      <td>5. Experience </td><td>- </td>
      <td>{props.experience}</td>
    </tr>
 <br />
    <tr>
      <td>6. 10th Marks </td><td>- </td>
      <td>{props.marks_10}</td>
    </tr>
 <br />
    <tr>
      <td>7. 12th Marks </td><td>- </td>
      <td>{props.marks_12}</td>
    </tr>
 <br />
    <tr>
      <td>8. Graduation Marks </td><td>-</td>
      <td>{props.marks_grad}</td>
    </tr>
 <br />
    <tr>
      <td>9. Linkedin URL</td><td>-</td>
      <td>{props.linkedin}</td>
    </tr>
 <br />
    <tr>
      <td>10. Github URL</td><td>-</td>
      <td>{props.github}</td>
    </tr>
     <br />
     <tr>
     <div>  

<ReactHTMLTableToExcel  className="submit" table="emp" filename="ReportExcel"  
    sheet="Sheet" buttonText="Export excel" />      

 </div>  
     </tr>

  </tbody>
  
</Table>


 </div>
    );
}
export default Resume;