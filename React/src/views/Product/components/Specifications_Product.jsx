import React from "react";


const SpecificationsProducts = ()=>{
  return(
    <>
    <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
        <tbody>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Color
            </th>
            <th className="py-2 px-4 border border-gray-300 ">
              Blank, Brown, Red
            </th>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Material
            </th>
            <th className="py-2 px-4 border border-gray-300 ">Latex</th>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Weight
            </th>
            <th className="py-2 px-4 border border-gray-300 ">55kg</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default SpecificationsProducts;
