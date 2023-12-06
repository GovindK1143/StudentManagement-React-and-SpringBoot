import React,{ useEffect, useState} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [students,setStudents]=useState([])

    const {id}=useParams();

    useEffect(()=>{
        loadStudents();        
    }, []);

    const loadStudents=async () => {
        const result=await axios.get("http://localhost:2022/students");
        setStudents(result.data);
    };

    const deleteStudent=async(id)=>{
        await axios.delete(`http://localhost:2022/student/${id}`);
        loadStudents();

    }


  return (
    
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">SUB1</th>
      <th scope="col">SUB2</th>
      <th scope="col">SUB3</th>
      <th scope="col">SUB4</th>
      <th scope="col">SUB5</th>
      <th scope="col">TOTAL</th>
      <th scope="col">PERCENT</th>
      <th scope="col">GRADE</th>
      <th scope="col">RESULT</th>
      <th scope="col">ACTION</th>

    </tr>
  </thead>
  <tbody>
    {
        students.map(
            student=>
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.sub1}</td>
                <td>{student.sub2}</td>
                <td>{student.sub3}</td>
                <td>{student.sub4}</td>
                <td>{student.sub5}</td>
                <td>{student.total}</td>
                <td>{student.percent}</td>
                <td>{student.grade}</td>
                <td>{student.res}</td>
                <td>
                <Link className="btn btn-primary mx-2"
                    to={`/viewstudent/${student.id}`}>View
                  </Link>

                   <Link className='btn btn-outline-primary mx-2'
                    to={`/editstudent/${student.id}`}
                    >Edit</Link>
                    <button className='btn btn-danger mx-2'
                    onClick={()=>deleteStudent(student.id)}
                    >Delete</button>
                </td>

            </tr>
        )
    }
    
    
  </tbody>
</table>
        </div>
    </div>
  )
}
