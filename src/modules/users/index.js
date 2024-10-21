import React, { useEffect, useReducer, useState } from "react";
import { getData, storeData } from "../../common/utils/storage";
import { useNavigate } from "react-router-dom";

const localInitialState = {
  data1: "value1",
  data2: 0,
  data3: [],
  data4: {},
  data5: false,
};

const localReducer = (state, action) => {
  switch (action.type) {
    case "string":
      state.data1 = action.payload;
      return state;
    case "number":
      state.data2 = action.payload;
      return state;
    case "array":
      state.data3 = action.payload;
      return state;
    case "object":
      state.data4 = action.payload;
      return state;
    case "boolean":
      state.data5 = action.payload;
      return state;

    default:
      return state;
  }
};

function Users() {
  const [storedData, setStoredData] = useState([]);
  const [localState, localDispatch] = useReducer(
    localReducer,
    localInitialState
  );
  console.log("localState********", localState);

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
      <button
        onClick={() => localDispatch({ type: "string", payload: "test" })}
      >
        change data 1
      </button>
      <button
        onClick={() =>
          localDispatch({ type: "number", payload: localState.data2 + 1 })
        }
      >
        change data 2
      </button>
      <button
        onClick={() =>
          localDispatch({
            type: "array",
            payload: [...localState.data3, 4],
          })
        }
      >
        change data 3
      </button>
      <button
        onClick={() =>
          localDispatch({ type: "object", payload: { test: "value" } })
        }
      >
        change data 4
      </button>
      <button onClick={() => localDispatch({ type: "boolean", payload: true })}>
        change data 5
      </button>
    </div>
  );
}

export default Users;
