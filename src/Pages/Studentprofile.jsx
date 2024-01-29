import React, { useContext } from 'react';
import { userconetxt } from '../context/Context';

const StudentProfilePage = () => {

 const {kcistuentdata}= useContext(userconetxt)



console.log("the data os ", kcistuentdata);
  const calculateExamSection = () => {
    const admissionDate = new Date(kcistuentdata.Admission_date);
    const courseDuration = 6; // Assuming the course duration is 6 months
    const examDate = new Date(admissionDate.setMonth(admissionDate.getMonth() + courseDuration));
    const currentDate = new Date();

    const daysLeft = Math.floor((examDate - currentDate) / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? `Exam in ${daysLeft} days` : 'Exam already passed';
  };

  return (
    <div className="flex flex-col items-center justify-center  p-28  min-h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4">
        <img src={kcistuentdata.photo} alt='no' className="w-24 h-24 rounded-full mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
        <div>
            <strong>Firstname Name:</strong> {kcistuentdata.firstname}
          </div>
          <div>
            <strong>lastname Name:</strong>  {kcistuentdata.lastname}
          </div>
          
          <div>
            <strong>Username:</strong> {kcistuentdata.username}
          </div>
          
          <div>
            <strong>stuendtId:</strong> {kcistuentdata.StudentID}
          </div>
          
          <div>
            <strong>Password:</strong> {kcistuentdata.password}
          </div>
          
          
          <div>
            <strong>Username:</strong> {kcistuentdata.username}
          </div>
          <div>
            <strong>Email:</strong> {kcistuentdata.Email}
          </div>
          <div>
            <strong>Address:</strong> {kcistuentdata.Address}, {kcistuentdata.City}, {kcistuentdata.State}, {kcistuentdata.Postcode}
          </div>
          <div>
            <strong>Mobile Number:</strong> {kcistuentdata.Mobilenumber}
          </div>
          <div>
            <strong>Other Number:</strong> {kcistuentdata.confirmnumber}
          </div>
          <div>
            <strong>Occupation:</strong> {kcistuentdata.Occupation}
          </div>
          <div>
            <strong>Course:</strong> {kcistuentdata.course}
          </div>
          <div>
            <strong>Admission Date:</strong> {kcistuentdata.Admission_date}
          </div>
          <div>
            <strong>Exam Section:</strong> {calculateExamSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;