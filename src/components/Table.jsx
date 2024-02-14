import React from 'react'
import { Data } from '../utils/data';
const Table = () => {
    return (
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 text-center text-black w-[70%] bg-blue-100 px-4 border-1">
              Department
            </th>
            <th className="py-2 text-center text-black w-[30%] bg-blue-100 px-4 border-1">
              Completion %
            </th>
            {/* <th className="py-2 bg-blue-100 px-4 border-b">Email</th> */}
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td className="py-2 text-center px-4 w-[70%] text-black border">
                {data.name}
              </td>
              <td className="py-2 text-center px-4 w-[30%] text-black  border">
                {data.completionPercentage}
              </td>
            </tr>
          ))}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    );
  };

export default Table