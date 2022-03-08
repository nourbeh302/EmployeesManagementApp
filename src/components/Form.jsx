import React, { useEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  collection, addDoc, // For add
  doc, getDoc, updateDoc // For update
} from "firebase/firestore";
import db from '../db';

function Form({ method }) {

  let { id } = useParams()

  let navigate = useNavigate()

  let nameRef = useRef()
  let ageRef = useRef()
  let salaryRef = useRef()
  let nationRef = useRef()
  let departmentIdRef = useRef()

  useEffect(() => { method === 'update' && getEmployee(id); return () => { } }, [])

  function getEmployee(empId) {
    let docRef = doc(db, "employees", empId)
    getDoc(docRef).then(doc => {
      nameRef.current.value = doc.data().name
      ageRef.current.value = doc.data().age
      salaryRef.current.value = doc.data().salary
      nationRef.current.value = doc.data().nation
      departmentIdRef.current.value = doc.data().departmentId
    })
  }

  function updateEmployee(empId) {
    let docRef = doc(db, "employees", empId)
    let newDoc = {
      name: nameRef.current.value,
      age: parseInt(ageRef.current.value),
      salary: parseInt(salaryRef.current.value),
      nation: nationRef.current.value,
      departmentId: parseInt(departmentIdRef.current.value),
    }
    updateDoc(docRef, newDoc)
    navigate("/")
  }

  function addEmployee() {
    let colRef = collection(db, "employees")
    let newDoc = {
      name: nameRef.current.value,
      age: parseInt(ageRef.current.value),
      salary: parseInt(salaryRef.current.value),
      nation: nationRef.current.value,
      departmentId: parseInt(departmentIdRef.current.value),
    }
    if (
      newDoc.name !== "" &&
      newDoc.age !== "" &&
      newDoc.salary !== "" &&
      newDoc.nation !== "" &&
      newDoc.departmentId !== ""
    ) {
      addDoc(colRef, newDoc)
      navigate("/")
    }

  }

  function reset() {
    nameRef.current.value = ""
    ageRef.current.value = ""
    salaryRef.current.value = ""
    nationRef.current.value = ""
    departmentIdRef.current.value = ""
  }

  return (
    <div className="row g-3">

      <div className="col-12 col-md-6">
        <label className="mb-1" htmlFor="name">Name</label>
        <input ref={nameRef} className="form-control" type="text" name="name" placeholder="Enter your name" required />
      </div>

      <div className="col-12 col-md-6">
        <label className="mb-1" htmlFor="age">Age</label>
        <input ref={ageRef} className="form-control" type="text" name="age" placeholder="Enter your age" required />
      </div>

      <div className="col-12 col-md-6">
        <label className="mb-1" htmlFor="salary">Salary</label>
        <input ref={salaryRef} className="form-control" type="text" name="salary" placeholder="Enter your salary" required />
      </div>

      <div className="col-12 col-md-6">
        <label className="mb-1" htmlFor="nation">Nation</label>
        <input ref={nationRef} className="form-control" type="text" name="nation" placeholder="Enter your nationality" required="required" />
      </div>

      <div className="col-12 col-md-6">
        <label className="mb-1" htmlFor="departmentId">Department ID</label>
        <input ref={departmentIdRef} className="form-control" type="text" name="departmentId" placeholder="Enter your Department ID" required="required" />
      </div>

      <div className="btn-group mt-5">
        <button className="btn btn-success" type="submit" onClick={() => { method === 'update' ? updateEmployee(id) : addEmployee() }}>
          <small>Done</small>
          <i className="fa-solid fa-circle-check ms-3" />
        </button>
        <button className="btn btn-info" onClick={() => reset()}>
          <small>Reset</small>
          <i className="fa-solid fa-retweet ms-3"></i>
        </button>
        <Link className="btn btn-warning" to="/">
          <small>Go Back</small>
          <i className="fa-solid fa-backward ms-3" /></Link>
      </div>
    </div>
  )
}

export default Form