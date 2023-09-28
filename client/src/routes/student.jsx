import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [students, setStudents] = useState([]);

  //get all students
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  // delete a student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete-student/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to={"/create"} className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead className="table-borderless">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx}>
                <td>{student.Name}</td>
                <td>{student.Email}</td>
                <td>
                  <Link
                    to={`/update/${student.ID}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger ml-3"
                    onClick={() => handleDelete(student.ID)}
                  >
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

export default Student;
