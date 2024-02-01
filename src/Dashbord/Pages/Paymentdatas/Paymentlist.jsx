import React from 'react';

const Paymentlist = () => {
  const data = [
    {
      studentId: '123',
      name: 'John Doe',
      course: 'Computer Science',
      receiptNumber: 'R123',
      receiptDate: '2022-01-01',
      fees: 5000,
      paymentMode: 'Cash',
    },
    {
      studentId: '456',
      name: 'Jane Smith',
      course: 'Business Administration',
      receiptNumber: 'R456',
      receiptDate: '2022-01-02',
      fees: 6000,
      paymentMode: 'Credit Card',
    },
    // Add more data objects as needed
  ];



  
  return (
    <div className=" min-h-screen bg-gray-100">

<div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-gray-600 font-semibold">All students data</h2>
          <span className="text-xs">All student current data</span>
        </div>
      
        <div className="flex items-center justify-between">
        <form action="">
        <div className="flex bg-gray-150 items-center p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            className="bg-gray-50 outline-none ml-1 p-2 block border-2 border-solid border-blue-300 rounded-lg"
            type="text"
            name=""
            id=""
            placeholder="Search..."
            // value={searchTerm}
            // onChange={(e)=> setSearchTerm(e.target.value)}
          />
        </div>
      </form>
        </div>
      </div>


      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Edit</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Student ID</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Name</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Course</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Receipt Number</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Receipt Date</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Fees</th>
            <th className="py-3 px-6 bg-gray-200 font-bold uppercase text-sm text-gray-600">Payment Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-4 px-6 border-b border-gray-300">
                <button className="text-blue-500">Edit</button>
              </td>
              <td className="py-4 px-6 border-b border-gray-300">{item.studentId}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.name}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.course}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.receiptNumber}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.receiptDate}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.fees}</td>
              <td className="py-4 px-6 border-b border-gray-300">{item.paymentMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Paymentlist;



