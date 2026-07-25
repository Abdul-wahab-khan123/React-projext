import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentTable = ({ students, handleEdit }) => {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="tabel_hight max-h-125 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-[#e9b849] text-white z-10">
            <tr>
              <th className="text-sm font-medium px-5 py-3 text-left">No.</th>
              <th className="text-sm font-medium px-5 py-3 text-left">Name</th>
              <th className="text-sm font-medium px-5 py-3 text-left">Email</th>
              <th className="text-sm font-medium px-5 py-3 text-left">Course</th>
              <th className="text-sm font-medium px-5 py-3 text-center">Status</th>
              <th className="text-sm font-medium px-5 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="text-sm px-5 py-3">{index + 1}</td>
                <td className="text-sm px-5 py-3">{student.name}</td>
                <td className="text-sm px-5 py-3">{student.email}</td>
                <td className="text-sm px-5 py-3">{student.course}</td>
                <td className="text-sm px-5 py-3 text-center">
                  <span className={`block m-auto w-20 px-4 py-2 rounded-full text-xs font-medium ${student.status === "Active"
                      ? "bg-[#ebb9474a] text-[#f0ad00]"
                      : "bg-red-100 text-red-600"
                    }`}>{student.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-center">
                  <button onClick={() => navigate(`/edit-student/${student.id}`)}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700">
                    Edit
                  </button>
                  <button className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;