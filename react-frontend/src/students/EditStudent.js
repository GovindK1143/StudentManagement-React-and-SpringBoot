import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {

    let navigate=useNavigate();

    const {id}=useParams();


const [student,setStudent]=useState({
    name:"",
    sub1:"",
    sub2:"",
    sub3:"",
    sub4:"",
    sub5:""
});

const{name,sub1,sub2,sub3,sub4,sub5}=student;

const onInputChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});

};

useEffect(()=>{
  loadStudent(); 
},[]);

const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:2022/student/${id}`,student);
    navigate("/");
};
const loadStudent=async () => {
  const result=await axios.get(`http://localhost:2022/student/${id}`);
  setStudent(result.data);
};

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit Student</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name:
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Enter Name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='sub1' className='form-label'>
                        Subject-One:
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Enter subject-1 marks'
                    name='sub1'
                    value={sub1}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='sub2' className='form-label'>
                        Subject-Two:
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Enter subject-2 marks'
                    name='sub2'
                    value={sub2}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='sub3' className='form-label'>
                        Subject-Three:
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Enter subject-3 marks'
                    name='sub3' 
                    value={sub3}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='sub4' className='form-label'>
                        Subject-Four:
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Enter subject-4 marks'
                    name='sub4'
                    value={sub4}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='sub5' className='form-label'>
                        Subject-Five:
                    </label>
                    <input
                    type={"number"}
                    className='form-control'
                    placeholder='Enter subject-5 marks'
                    name='sub5'
                    value={sub5}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                </form>

            </div>
        </div>

    </div>
  )
}
