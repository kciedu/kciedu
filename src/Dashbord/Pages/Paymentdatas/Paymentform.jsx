import React, { useEffect, useState } from 'react';
import Paymenthistory from './Paymenthistory';
import API_ENDPOINT from '../../../config';

const Paymentform = () => {


    const [formData, setFormData] = useState({
        studentId: '',
        studentName: '',
        selectCourse: '',
        totalAmount: '',
        Receiptno: '',
        paymentAmount: '',
        totalBalance: '',
        paymentMode: '',
        note: '',
      });
    

      useEffect(() => {
        const fetchStudentData = async () => {
          try {
            if (formData.studentId !== '') {
              const response = await fetch(`${API_ENDPOINT}/getStudents/${formData.studentId}`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
              });
    
              if (response.ok) {
                const studentData = await response.json();
                // Update form fields with the retrieved student data

                setFormData((prevFormData) => ({
                  ...prevFormData,
                  studentName: studentData.data.firstname,
                  selectCourse : studentData.data.course // Assuming 'firstname' is the field in student data
                  // Update other fields as needed
                }));
              } else {
                console.error('Failed to fetch student data');
              }
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchStudentData();
      }, [formData.studentId]);


      // Function to handle form input changes
      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // Function to handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
      
      
        try {
          
          const formdata = new FormData();
formdata.append('studentId', formData.studentId);
formdata.append('studentName', formData.studentName);
formdata.append('selectCourse', formData.selectCourse);
formdata.append('totalAmount', formData.totalAmount);
formdata.append('Receiptno', formData.Receiptno);
formdata.append('paymentAmount', formData.paymentAmount);
formdata.append('totalBalance', formData.totalBalance);
formdata.append('paymentMode', formData.paymentMode);
formdata.append('note', formData.note);

const response = await fetch(`${API_ENDPOINT}/payments`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
  body: new URLSearchParams(formData),
});
      
          if (response.ok) {
            console.log('Payment added successfully');
            alert(" Payment added successfully")
          
          } else {
            alert(" Failed to add payment ")
            console.error('Failed to add payment');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      


      const [paymentHistory, setPaymentHistory] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          const storedToken = localStorage.getItem('token');
          if (storedToken) {
            try {
              const response = await fetch(`${API_ENDPOINT}/payments/${formData.studentId}`, {
                headers: {
                  Authorization: `Bearer ${storedToken}`,
                },
              });
    
              if (response.ok) {
                const data = await response.json();
              
                setPaymentHistory(data);
              } else {
                console.log("Error: Something went wrong");
              }
            } catch (error) {
              console.error("Error fetching student data:", error);
            }
          }
        };
        
        fetchData();
      }, []);
      
      
      console.log("the data o fpayt", paymentHistory);
    



  return (
    <div className=" grid  grid-cols-1 lg:grid-cols-2 p-10 gap-4 min-h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold mb-4">Add Student Payment  </h1>
        <form className="space-y-6" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="studentId" className="block text-gray-800 font-bold mb-2">
              Student ID
            </label>
            <input
              type="number"
              id="studentId"
              name="studentId"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter student ID"
              value={formData.studentId}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="studentName" className="block text-gray-800 font-bold mb-2">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter student name"
              value={formData.studentName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="selectCourse" className="block text-gray-800 font-bold mb-2">
              Select Course
            </label>
            <input
              id="selectCourse"
              name="selectCourse"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.selectCourse}
              onChange={handleInputChange}
              placeholder=' enter course name here'
              readOnly
            >
              
            </input>
          </div>


          <div>
            <label htmlFor="totalAmount" className="block text-gray-800 font-bold mb-2">
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter total amount"
              value={formData.totalAmount}
              onChange={handleInputChange}
            />
          </div>

          
          <div>
            <label htmlFor="Receiptno" className="block text-gray-800 font-bold mb-2">
              Receipt No.
            </label>
            <input
              type="text"
              id="Receiptno"
              name="Receiptno"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter Receipt No...."
              value={formData.Receiptno}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="paymentAmount" className="block text-gray-800 font-bold mb-2">
              Enter Payment Amount
            </label>
            <input
              type="number"
              id="paymentAmount"
              name="paymentAmount"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter payment amount"
              value={formData.paymentAmount}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="totalBalance" className="block text-gray-800 font-bold mb-2">
              Total Balance Amount
            </label>
            <input
              type="number"
              id="totalBalance"
              name="totalBalance"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter total balance amount"
              value={formData.totalBalance}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="paymentMode" className="block text-gray-800 font-bold mb-2">
              Payment Mode
            </label>
            <select
              id="paymentMode"
              name="paymentMode"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={formData.paymentMode}
              onChange={handleInputChange}
            >
              <option value="">Select a payment mode</option>
              <option value="upi">UPI</option>
              <option value="cash">Cash</option>
            </select>
          </div>
          <div>
            <label htmlFor="note" className="block text-gray-800 font-bold mb-2">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter note"
              value={formData.note}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-blue-500 hover:bg-blue-700 px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Add Payment
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-full rounded-3xl bg-red-500 hover:bg-red-700 px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className=''>

      <Paymenthistory Paymenthistory={paymentHistory}></Paymenthistory>
      </div>
    </div>
  );
};

export default Paymentform;

