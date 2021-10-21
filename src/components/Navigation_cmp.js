import React from "react";
import Logo from "../assets/logo_nobackground.png";
import Confirmation_modal_cmp from "./Confirmation_modal_cmp";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, initialState } from "../global/userStore";

const Navigation_cmp = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logedInUser = useSelector((state) => state.user.lastName);

  return (
    <div
      style={{ backgroundColor: "wheat" }}
      className="mb-2 row bg-secondary text-center align-items-center"
    >
      <div className="col-3 text-end">
        <img src={Logo} width={80} className="img-fluid" alt="..." />
      </div>
      <div className="col-3 m-4 text-start pt-2">
        <h3 style={{ color: "white" }} className="mt-1">
          Elephant Face
        </h3>
        <p style={{ color: "lightgrey" }}>Shoping on your own way</p>
      </div>
      <div className="col-3 m-4">
        <nav
          className="nav nav-masthead justify-content-left"
          style={{ color: "white", fontSize: 18 }}
        >
          <Link to={"/shop"} style={{ color: "white" }} className="nav-link">
            Products
          </Link>
          <Link to={"/basket"} style={{ color: "white" }} className="nav-link">
            Cart
          </Link>
          <a
            style={{ color: "white" }}
            className="nav-link active"
            aria-current="page"
            href=""
            data-bs-toggle="modal"
            data-bs-target="#signOut_modal_cmp"
            onClick={props.onClick}
          >
            Sign out
          </a>

          <p style={{ color: "white" }} className="nav-link">
            {logedInUser}
          </p>
        </nav>
      </div>
      <Confirmation_modal_cmp
        id="signOut_modal_cmp"
        mainBtnText="Sign Out"
        message="Are you sure?"
        type="Warning !"
        onClickBtn2={() => {
          dispatch(changeUser({ ...initialState }));
          history.push("/");
        }}
      />
    </div>
  );
};

export default Navigation_cmp;
