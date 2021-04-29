import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { productQuantity } from './../store/Actions/orderAction';
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

const Order = ({cartProps,productQuantity}) =>  {
    console.log(cartProps);
    let ListCart = []
    let Totalcart =cartProps.cartcost;  
    Object.keys(cartProps.carts).forEach(function(item){
        
        if(cartProps.carts[item].inCart){
            ListCart.push(cartProps.carts[item]);
        }
    })
    return (
            <div>
                <Container>
                    <Heading>~Order~</Heading>
                          
            <div className="row">
                <div className="col-md-12">
                    <table className="table text-white" >
                        <thead >
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            ListCart.map((item,index)=>{
                                return(
                                <tr key={index}>
                                    <td><i className="badge badge-danger">X</i></td>
                                    <td>{item.name}</td>
                                    <td><img src={item.photo} alt="cartfoodimage" style={{width:'100px',height:'80px'}}/></td>
                                    <td>Rs.{item.price}</td>
                                    <td>
                                        <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>productQuantity('decrease',item.id)} >-</span>
                                        <span className="btn btn-info">{item.numbers}</span>
                                        <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>productQuantity('increase',item.id)}>+</span>
                                    </td>
                                    <td>Rs.{item.numbers * item.price}</td>
                                </tr>
                                )
                            })
                            }
                            <tr>
                                <td colSpan="5">Total Carts</td>
                                <td>Rs.{Totalcart}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             </Container> 
            </div>

        )

}


const mapStateToProps = state => ({
    cartProps :state.carts
});
export default connect(mapStateToProps,{productQuantity}) (Order);
