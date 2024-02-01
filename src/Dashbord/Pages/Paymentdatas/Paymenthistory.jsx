import React, { useState, useEffect } from 'react';
import API_ENDPOINT from '../../../config';

const Paymenthistory = ({Paymenthistory =[]}) => {


  return (
    <div className=" min-h-screen  bg-gray-100 overflow-scroll ">
  
        <h1 className="text-3xl font-bold mb-4">Payment History</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b border-gray-300 font-bold" colSpan={2}>Date</th>
        
            
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Course Name</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Total Course Fees</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Fees Paid</th>
            <th className="py-2 px-4 border-b border-gray-300 font-bold">Fees Balance</th>
          </tr>
        </thead>
        <tbody>
          {Paymenthistory.map((payment) => (
            <tr key={payment.id}>
              <td className="py-2  px-4 border-b border-gray-300 " colSpan={2}>{payment.createdAt}</td>
              <td className="py-2 px-4 border-b border-gray-300">{payment.selectCourse
}</td>
              <td className="py-2 px-4 border-b border-gray-300">{payment.totalAmount}</td>
              <td className="py-2 px-4 border-b border-gray-300">{payment.paymentAmount}</td>
              <td className="py-2 px-4 border-b border-gray-300">{payment.totalBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paymenthistory;