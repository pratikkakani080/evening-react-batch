import React, { useEffect, useState } from "react";
import { getData, storeData } from "../../common/utils/storage";
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

  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "are you sure you want to delete this data?"
    );
    if (confirmation) {
      const data = getData("users");
      const filteredData = data.filter((el) => el.id !== id);
      storeData("users", filteredData);
      setStoredData(filteredData);
    }
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
          {storedData.length > 0 ? (
            storedData.map((el) => (
              <tr key={el.id}>
                <td>{el.fName}</td>
                <td>{el.lName}</td>
                <td>{el.email}</td>
                <td>{el.password}</td>
                <td>
                  <button onClick={() => handleEdit(el)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(el.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
