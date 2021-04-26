import React, { Component } from 'react'
import styled from 'styled-components';
export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;  
  background: #150f0f;
  color: #fff;
`;
export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;
export class Order extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Heading>~Order~</Heading>
                    <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key="1">
                        <div className="row mb-3">
                            <div className="col-lg-6 col-md-6 col-12">
                                <h5 className="">TableName</h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                <span className="text-uppercase text-danger order-req-status">Pending</span>
                            </div>
                        </div>
                        <div className="row mb-3" key="">
                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                <img style={{ width: "150px", height: "150px" }} alt="Natural Healthy Food" src="https://image.freepik.com/free-photo/orange-juice-with-fresh-orange_29393-102.jpg" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                <h6 className="">Orange juice</h6>
                                <p className="mb-1"><small>Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges.</small></p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.70</b></span>
                             </div>
                        </div>
                         <div className="row mb-3" key="">
                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                <img style={{ width: "150px", height: "150px" }} alt="Natural Healthy Food" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoShxXBLcP8CObDdYkBSWAB0kHeXqRKXDYfQ&usqp=CAU" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                <h6 className="">Apple juice</h6>
                                <p className="mb-1"><small>Apple juice is a liquid extract of the Apple, produced by squeezing or reaming apples.</small></p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.70</b></span>
                             </div>
                        </div>
                        <div className="row mb-3 mb-md-0 mb-lg-0">
                            <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">                                
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.140</span></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Order
