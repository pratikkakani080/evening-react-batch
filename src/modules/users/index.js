import React, { useEffect, useState } from "react";
import { getData } from "../../common/utils/storage";
import { useNavigate } from "react-router-dom";

function Users() {
  const [storedData, setStoredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setStoredData(getData("users"));
  }, []);

  const handleEdit = (user) => {
    navigate(`/register?id=${user.id}`);
  };

  return (
    <div>
      <table>
        <thead>
          {storedData.length > 0 && (
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          )}
        </thead>
        <tbody>
          {storedData.length > 0
            ? storedData.map((el) => {
                return (
                  <tr>
                    <td>{el.fName}</td>
                    <td>{el.lName}</td>
                    <td>{el.email}</td>
                    <td>{el.password}</td>
                    <td>
                      <button onClick={() => handleEdit(el)}>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })
            : "No data found"}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
