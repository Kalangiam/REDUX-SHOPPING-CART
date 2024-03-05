import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);


  const dispatch = useDispatch();

  return (
    <div className="m-2 outer-container">
      <MDBContainer className="inner-container">
        <MDBRow className="product-row">
          {items.map((item) => (
            <MDBCol key={item.id} className="col-4 product-col">
              <MDBCard className="product-card text-center">
                <MDBCardImage className="product-img"src={item.img} position="top" alt="Internet required" />
                <MDBCardBody className="product-body">
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>Price : <b className="text-danger">${item.price}</b></MDBCardText>
                  <MDBCardText>Rating : {item.rating} / 5</MDBCardText>
                  <MDBCardText>Discount : {item.discountPercentage} %</MDBCardText>
                  <MDBBtn className="btn btn-black"onClick={() => dispatch(addToCart(item))}>
                    Add to cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
