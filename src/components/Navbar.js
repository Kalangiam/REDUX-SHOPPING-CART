import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <MDBNavbar light bgColor="dark">
      <MDBContainer fluid >
        <MDBNavbarBrand className="text-light">REDUX SHOP</MDBNavbarBrand>
        <span>
          <Link to="/" className="text-light">Shop</Link>
          {/* <Link to="/">Electronics </Link>
          <Link to="/">Furniture </Link>
          <Link to="/">Accessories </Link>
          <Link to="/">Mobile </Link>
          <Link to="/">Fancy </Link>
          <Link to="/">New Deal </Link> */}

        </span>
        <MDBBtn color="light">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
