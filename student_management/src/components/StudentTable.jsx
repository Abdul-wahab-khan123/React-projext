import React from "react";

const StudentTable = () => {
  const students = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      course: "React JS",
      status: "Active",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      course: "Node JS",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Sara Ali",
      email: "sara@gmail.com",
      course: "UI/UX Design",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-5 py-3 text-left">No.</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Course</th>
            <th className="px-5 py-3 text-center">Status</th>
            <th className="px-5 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
              <td className="text-sm px-5 py-3">{student.id}</td>
              <td className="text-sm px-5 py-3 font-medium">{student.name}</td>
              <td className="text-sm px-5 py-3">{student.email}</td>
              <td className="text-sm px-5 py-3">{student.course}</td>
              <td className="text-sm px-5 py-3 text-center">
                <span
                  className={`block w-20 px-4 py-2 rounded-full text-xs font-medium ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {student.status}
                </span>
              </td>
              <td className="px-5 py-3 text-center">
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded mr-2 hover:bg-blue-700">
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
  );
};

export default StudentTable;