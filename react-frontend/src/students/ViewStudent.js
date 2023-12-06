import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    name:"",
    sub1:"",
    sub2:"",
    sub3:"",
    sub4:"",
    sub5:"",
    total:"",
    percent:"",
    grade:"",
    res:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:2022/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Student id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {student.name}
                </li>

                <li className="list-group-item">
                  <b>Subject-1:</b>
                  {student.sub1}
                </li>

                <li className="list-group-item">
                  <b>Subject-2:</b>
                  {student.sub2}
                </li>

                <li className="list-group-item">
                  <b>Subject-3:</b>
                  {student.sub3}
                </li>

                <li className="list-group-item">
                  <b>Subject-4:</b>
                  {student.sub4}
                </li>

                <li className="list-group-item">
                  <b>Subject-5:</b>
                  {student.sub5}
                </li>

                <li className="list-group-item">
                  <b>Total:</b>
                  {student.total}
                </li>

                <li className="list-group-item">
                  <b>PERCENT:</b>
                  {student.percent}
                </li>

                <li className="list-group-item">
                  <b>GRADE:</b>
                  {student.grade}
                </li>

                <li className="list-group-item">
                  <b>RESULT:</b>
                  {student.res}
                </li>

                

              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
