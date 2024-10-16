import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, getProducts, increment } from "../../common/redux/reducers/myReducer";
import "./dashboard.css";

function Dashboard() {
  const data = useSelector((state) => state.my);
  const dispatch = useDispatch();
  console.log("data**", data);

  useEffect(() => {
    dispatch(getProducts('rrr'))
  }, [])

  return (
    <div>
      {
        data.loading === 'loading' ?
          <>loading.............</> :
          <>
            dashboard{" "}
            <Link className="test" to={"/contactus"}>
              To Contact us
            </Link>
            {data.count}
            <button onClick={() => dispatch(increment({ number: 5 }))}>
              Increment 5
            </button>
            <button onClick={() => dispatch(increment({ number: 10 }))}>
              Increment 10
            </button>
            <button onClick={() => dispatch(decrement({ number: 2 }))}>
              Decrement 2
            </button>
            <button onClick={() => dispatch(decrement({ number: 1 }))}>
              Decrement 1
            </button>
          </>
      }
    </div>
  );
}

export default Dashboard;
