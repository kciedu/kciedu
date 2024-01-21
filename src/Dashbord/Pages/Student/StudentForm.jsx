import React, { useState } from 'react';
import API_ENDPOINT from '../../../config';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    course: '',
    phoneNumber: '',
    confirmPhoneNumber: '',
    email: '',
    dob: '',
    gender: '',
    occupation: '',
    state: '',
    city: '',
    postcode: '',
    address: '',
    Files: null, // For the file input
  });

  const handleChange = (e) => {
    console.log("the valueis ", e.target.type);
    if (e.target.type === 'file') {
      setFormData({ ...formData, Files: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const searchParams = new URLSearchParams();

      Object.entries(formData).forEach(([key, value]) => {
        // Append each key-value pair to URLSearchParams
        if (key === 'Files') {
          // If it's a file, append it separately
          searchParams.append(key, value);
        } else {
          searchParams.append(key, value);
        }
      });
      console.log("the value is ", searchParams.toString());
      const response = await fetch(`${API_ENDPOINT}/newstudents`, {
        method: 'POST',
        body: searchParams.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        console.log('Student data submitted successfully');
        // Add any additional logic after successful submission
      } else {
        console.error('Failed to submit student data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      course: '',
      phoneNumber: '',
      confirmPhoneNumber: '',
      email: '',
      dob: '',
      gender: '',
      occupation: '',
      state: '',
      city: '',
      postcode: '',
      address: '',
      Files: null,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-200 p-9">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Student Form</h1>
        <form className="space-y-6  " onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-800 font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="middleName" className="block text-gray-800 font-bold mb-2">
                Middle Name
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter middle name"
                value={formData.middleName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-800 font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="course" className="block text-gray-800 font-bold mb-2">
              Course
            </label>
            <select
              id="course"
              name="course"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="ms-word">MS Word</option>
              <option value="excel">Excel</option>
              <option value="web-design">Web Design</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">

          <div>
            <label htmlFor="phoneNumber" className="block text-gray-800 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPhoneNumber" className="block text-gray-800 font-bold mb-2">
              Confirm Phone Number
            </label>
            <input
              type="text"
              id="confirmPhoneNumber"
              name="confirmPhoneNumber"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Confirm phone number"
              value={formData.confirmPhoneNumber}
              onChange={handleChange}
            />
          </div>
          </div>
          <div>
          

<label htmlFor="email" className="block text-gray-800 font-bold mb-2">
  email
</label>
            <input
  type="email"
  id="email"
  name="email"
  className="w-full border border-gray-300 p-2 rounded-lg"
  placeholder="Enter email"
  value={formData.email}
  onChange={handleChange}
/>

          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-800 font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-800 font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div>
            <label htmlFor="occupation" className="block text-gray-800 font-bold mb-2">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="state" className="block text-gray-800 font-bold mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-800 font-bold mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="postcode" className="block text-gray-800 font-bold mb-2">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                className="w-full border border-gray-300 p-2 rounded-lg"
                placeholder="Enter postcode"
                value={formData.postcode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-800 font-bold mb-2">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="File" className="block text-gray-800 font-bold mb-2">
              Image
            </label>
            <input
  type="file"
  id="File"
  name="Files"  // Change 'File' to 'Files' to match the state key
  className="w-full border border-gray-300 p-2 rounded-lg"
 
  onChange={handleChange}
/>

          </div>
          <div className="flex justify-between flex-wrap">
            <button
              type="submit"
              className="rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Submit
            </button>
            <button
              type="button"
              className="rounded-3xl bg-gray-500 px-6 py-2 text-xl font-medium uppercase text-white"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="button"
              className="rounded-3xl bg-red-500 px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-3xl bg-blue-500 px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Add New Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;