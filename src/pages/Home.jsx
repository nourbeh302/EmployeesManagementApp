import React, { useEffect, useState, useRef } from 'react'

import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import db from "../db"
import "../App.css";
import { Link } from 'react-router-dom';

function Home() {

  const [employees, setEmployees] = useState([])
  useEffect(() => {
    fetchEmployees();
    return () => { }
  }, [])

  let fetchEmployees = _ => {

    const colRef = collection(db, "employees")

    onSnapshot(colRef, (snapshot) => {
      const employees = [];
      snapshot.forEach((doc) => {
        employees.push({ id: doc.id, ...doc.data() });
      });
      setEmployees(employees)
    });

  }

  let deleteEmployee = id => {
    let docRef = doc(db, "employees", id)
    deleteDoc(docRef)
  }

  // let filterEmployees = () => {
  //   let filteredEmployees = employees.filter(employee => employee.name.includes(inputRef.current.value))
  //   setEmployees(filteredEmployees)
  // }

  // let inputRef = useRef()

  return (
    <>
      {/* <input type="text" ref={inputRef} onChange={() => filterEmployees()} /> */}
      <div className="row">
        {employees.length > 0 ? employees.map(employee => {
          return (
            <div className="col-12 col-md-6 col-lg-4 my-3" key={employee.id}>
              <div className="card shadow border-2">
                <div className="card-body">
                  <div>{employee.name}</div>
                  <div className="btn-group w-100 mt-3">
                    <Link to={`/updateEmployee/${employee.id}`} className="btn btn-info d-flex justify-content-center align-items-center">
                      <small>Update</small>
                      <i className="fa-solid fa-pen-to-square ms-3" />
                    </Link>
                    <button className="btn btn-danger d-flex justify-content-center align-items-center" type="button" onClick={() => deleteEmployee(employee.id)}>
                      <small>Delete</small>
                      <i className="fa-solid fa-trash ms-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : <h1 className="text-muted fw-bold">Loading...</h1>}
      </div>
    </>
  )
}

export default Home