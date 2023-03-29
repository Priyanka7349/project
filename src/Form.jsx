import React, { useState } from "react";
import Navbar from "./Navbar";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingIndex === null) {
      setTableData([...tableData, formData]);
    } else {
      const newData = [...tableData];
      newData[editingIndex] = formData;
      setTableData(newData);
      setEditingIndex(null);
    }
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  };

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  const handleEdit = (index) => {
    const editData = tableData[index];
    setFormData(editData);
    setEditingIndex(index);
  };

  return (
    <>
    <Navbar/>
      <div className="container bg-light">
        <form onSubmit={handleSubmit}>
            

           <label htmlFor="firstName">First Name:</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            className="form-control"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="Email"
            id="Email"
            value={formData.Email}
            onChange={handleInputChange}
          />
           <label htmlFor="Gender">Gender</label>
           <br />
         <label >
          <input
            className="form-control"
            type="radio"
            name="Gender"
            id="Gender"
            value="Male"
            onChange={handleInputChange}
          />
          Male:
          </label>
          <label >
          <input
            className="form-control"
            type="radio"
            name="Gender"
            id="Gender"
            value="Female"
            onChange={handleInputChange}
          />
          Female:
          </label>
         <label >
          <input
            className="form-control"
            type="radio"
            name="Gender"
            id="Gender"
            value="Other"
            onChange={handleInputChange}
          />
          Other:
          </label>
          <label htmlFor="des">Designation:</label>
          <input
            className="form-control"
            type="text"
            name="Designation"
            id="Designation"
            value={formData.Designation}
            onChange={handleInputChange}
          />
           <label htmlFor="search">Search Course:</label>
          <input
            className="form-control"
            type="search"
            name="Search"
            id="Search"
            value={formData.Search}
            onChange={handleInputChange}
          />

        <button className="btn btn-primary" type="submit">
            {editingIndex !== null ? "Update" : "Submit"}
          </button>
        </form>

         <table className="tab" border="2px" rules="all" cellPadding="10px">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Designation</th>
              <th>Search course</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.Email}</td>
                <td>{data.Gender}</td>
                <td>{data.Designation}</td>
                <td>{data.Search}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
      </div>
    </>
  );
}

export default Form;
