import React, { useState } from 'react';

const Paymentupdatefrom = () => {
  const [paymentData, setPaymentData] = useState({
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

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here for handling form submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">update  Payment</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="studentId" className="block text-gray-800 font-bold mb-2">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={paymentData.studentId}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter student ID"
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
              value={paymentData.studentName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter student name"
            />
          </div>
          <div>
            <label htmlFor="selectCourse" className="block text-gray-800 font-bold mb-2">
              Select Course
            </label>
            <select
              id="selectCourse"
              name="selectCourse"
              value={paymentData.selectCourse}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            >
              <option value="">-- Select a course --</option>
              {/* Add your course options here */}
            </select>
          </div>
          <div>
            <label htmlFor="totalAmount" className="block text-gray-800 font-bold mb-2">
              Total Amount
            </label>
            <input
              type="text"
              id="totalAmount"
              name="totalAmount"
              value={paymentData.totalAmount}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter total amount"
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
              value={paymentData.Receiptno}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter receipt number"
            />
          </div>
          <div>
            <label htmlFor="paymentAmount" className="block text-gray-800 font-bold mb-2">
              Payment Amount
            </label>
            <input
              type="text"
              id="paymentAmount"
              name="paymentAmount"
              value={paymentData.paymentAmount}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter payment amount"
            />
          </div>
          <div>
            <label htmlFor="totalBalance" className="block text-gray-800 font-bold mb-2">
              Total Balance
            </label>
            <input
              type="text"
              id="totalBalance"
              name="totalBalance"
              value={paymentData.totalBalance}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter total balance"
            />
          </div>
          <div>
            <label htmlFor="paymentMode" className="block text-gray-800 font-bold mb-2">
              Payment Mode
            </label>
            <input
              type="text"
              id="paymentMode"
              name="paymentMode"
              value={paymentData.paymentMode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter payment mode"
            />
          </div>
          <div>
            <label htmlFor="note" className="block text-gray-800 font-bold mb-2">
              Note
            </label>
            <textarea
              id="note"
              name="note"
              rows="5"
              value={paymentData.note}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Enter note"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Paymentupdatefrom;
