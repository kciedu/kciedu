import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API_ENDPOINT from '../../../config';

function Studentlist() {

    const [newstudentdata , setnewstudnetdata]= useState([])
console.log("the dtaa is ", newstudentdata);


    useEffect(() => {
        const checkToken = async () => {
          const storedToken = localStorage.getItem('token');
          if (storedToken) {
            try {
              const response = await fetch(`${API_ENDPOINT}/Allstudentdata`, {
                headers: {
                  Authorization: `Bearer ${storedToken}`,
                },
              });
    
              if (response.ok) {
                const data = await response.json();
               console.log("the log dta a", data.data);
               setnewstudnetdata(data.data)
              } else {
                console.log("error somthing went wrong");
              }
            } catch (error) {
              console.error("Error fetching profile data:", error);
            } 
          } 
        };
    
        checkToken();
      }, []);



      const handleDelete = async (id) => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          try {
            const response = await fetch(`${API_ENDPOINT}/deleteStudent/${id}`, {
              method: 'DELETE',
              headers: {
                Authorization: `Bearer ${storedToken}`,
              },
            });
    
            if (response.ok) {
              // Remove the deleted student from the state
              setnewstudnetdata((prevData) => prevData.filter((student) => student._id !== id));
            } else {
              console.log("Error: Something went wrong");
            }
          } catch (error) {
            console.error("Error deleting student:", error);
          }
        }
      };
    



  return (
   
    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-600 font-semibold ">All students data</h2>
                <span class="text-xs">All student currect data</span>
            </div>
            <Link to={'/dashbord/newstudent'}>
                <button class="bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400  rounded shadow">Add new Items </button>
                </Link>
            <div class="flex items-center justify-between">
                <div class="flex bg-gray-150 items-center p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                    <input class="bg-gray-100 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
              </div>
                    
                </div>
            </div>
            <div className="bg-gray-200 p-4 overflow-scroll  min-h-screen">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Photo</th>
            <th className="py-2 px-4 border-b border-gray-300">First Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Last Name</th>
            <th className="py-2 px-4 border-b border-gray-300">Course</th>
            <th className="py-2 px-4 border-b border-gray-300">Mobile Number</th>
            <th className="py-2 px-4 border-b border-gray-300">Confirm Number</th>
            <th className="py-2 px-4 border-b border-gray-300">Email</th>
            <th className="py-2 px-4 border-b border-gray-300">Date of Birth</th>
            <th className="py-2 px-4 border-b border-gray-300">Gender</th>
            <th className="py-2 px-4 border-b border-gray-300">Student ID</th>
            <th className="py-2 px-4 border-b border-gray-300">Username</th>
            <th className="py-2 px-4 border-b border-gray-300">Status</th>
            <th className="py-2 px-4 border-b border-gray-300">Admission Date</th>
            <th className="py-2 px-4 border-b border-gray-300">Password</th>
            <th className="py-2 px-4 border-b border-gray-300">Detel</th>
            <th className="py-2 px-4 border-b border-gray-300">Update</th>
     
          </tr>
        </thead>
        <tbody>
          {newstudentdata.map((student, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="py-2 px-4">
                <img src={student.photo} alt="Student" className="w-10 h-10 rounded-full" />
              </td>
              <td className="py-2 px-4">{student.firstname}</td>
              <td className="py-2 px-4">{student.lastname}</td>
              <td className="py-2 px-4">{student.course}</td>
              <td className="py-2 px-4">{student.Mobilenumber}</td>
              <td className="py-2 px-4">{student.confirmnumber}</td>
              <td className="py-2 px-4">{student.Email}</td>
              <td className="py-2 px-4">{student.Date_of_brith}</td>
              <td className="py-2 px-4">{student.Gender}</td>
              <td className="py-2 px-4">{student.StudentID}</td>
              <td className="py-2 px-4">{student.username}</td>
              <td className="py-2 px-4">{student.Status ? 'Active' : 'Inactive'}</td>
              <td className="py-2 px-4">{student.Admission_date}</td>
              <td className="py-2 px-4">{student.password}</td>
              <td className="py-2 px-4">  <button onClick={() => handleDelete(student._id)}>Delete</button></td>
              <td className="py-2 px-4"><button>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
  )
}

export default Studentlist