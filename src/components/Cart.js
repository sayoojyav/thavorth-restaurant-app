import React, { useState} from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { productQuantity, removeCart } from '../store/Actions/orderAction';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import { createOrder,clearOrder } from '../store/Actions/cartAction';
export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;  
  color: #000;
  
`;
export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;
export const MenusWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
 `;

export const MenusCard = styled.div`
  margin:0 2em;    
  width: 600px;
  background:#fff;
  text-align: center;
  font-family: arial;
  margin-bottom:4rem; 
`;
export const MenusInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color:#000;
`;
export const Orderdetails = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Orderlist = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Cart = ({cartProps,productQuantity,removeCart,createOrder,clearOrder}) =>  {
    console.log(cartProps);
    let ListCart = []
    let Totalcart =cartProps.cartcost;
    Object.keys(cartProps.carts).forEach(function(item){
        
        if(cartProps.carts[item].inCart){
            ListCart.push(cartProps.carts[item]);
        }
        
    })
    const [open, setOpen] = useState(false);    
    const [modalIsOpen,setIsOpen] = useState(false);
    const [order,setOrder] = useState({
        id:'',        
        tablenumber:'',
        customername:'',
        status:'pending',
        CartItems:ListCart       
        
    })
    const { id,tablenumber,customername} = order;
    const onInputChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  
    const onSubmit = async e => {
    e.preventDefault();
    createOrder(order);    
    setIsOpen(true);
    };
   
    const closeModal = () =>{
      window.location.reload(false);
        
    }
        return (
                 
            <div>
                <Container>
                    <Heading>~My Cart~</Heading>                   
                    {order &&  (
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
                            <Zoom>
                                <button className="close-modal" onClick={closeModal}>x</button>
                                <MenusWrapper>
                    <MenusCard>
                        <MenusInfo>                           
                    <Orderdetails>
                         <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Your order is placed and Status is pending .</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <h2>Order{order.id}</h2>
                        <ul>
                             <Orderlist>
                                <div style= {{padding:'10px'}}>OrderId:</div>
                                <div>{order.id}</div>                                
                            </Orderlist>
                            <Orderlist>
                                <div style= {{padding:'10px'}}>TableNumber:</div>
                                <div>{order.tablenumber}</div>                                
                            </Orderlist>
                            <Orderlist>
                                <div style= {{padding:'10px'}}>customername:</div>
                                <div>{order.customername}</div>
                            </Orderlist>
                            <Orderlist>
                                <div style= {{padding:'10px',textAlign:'right'}}>CartItems:</div>
                                <div>{order.CartItems.map((x) =>(
                                    <div>
                                        {x.count} {x.name}-{x.numbers}
                                    </div>
                                ))}</div>                                
                            </Orderlist>
                            <Orderlist>
                                <div style= {{padding:'10px'}}>Total:</div>
                                <div>RS.{Totalcart}</div>
                            </Orderlist>
                        </ul>

                    </Orderdetails>                    
                    </MenusInfo>
                    </MenusCard>
                </MenusWrapper>         

                            </Zoom>

                        </Modal>

                    )}
                    {ListCart.length!==0 &&(
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table text-dark" >
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
                                            <td><span className="btn btn-danger" style={{margin:'2px'}} onClick={() =>removeCart(item.id)}>x</span></td>
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
                            <div class="form-row text-center">
                                <div class="col-12">
                                    <button class="btn btn-success btn-lg" style={{width:200}}onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>Proceed</button>
                                </div>
                            </div>
                            <Fade in={open}>                               
                                   <div className="card col-14 col-lg-4 mx-auto mt-5 bg-primary">
                                       <form onSubmit={e => onSubmit(e)}>
                                           <div className="form-group text-left">
                                                <label htmlFor="exampleInputNumber">OrderId:</label>
                                                <input type="text" className="form-control" placeholder="Enter Number" name="id" value={id} onChange={e => onInputChange(e)}  />
                                            </div>
                                           <div className="form-group text-left">
                                                <label htmlFor="exampleInputNumber">TableNumber:</label>
                                                <input type="text" className="form-control" placeholder="Enter Number" name="tablenumber" name="tablenumber" value={tablenumber} onChange={e => onInputChange(e)}  />
                                            </div>
                                            <div clkassName="form-group text-left">
                                                <label htmlFor="exampleInputName">Customer Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter Name" name="customername" name="customername" value={customername} onChange={e => onInputChange(e)}/>
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-secondary" type="submit">Checkout</button>
                                            </div>
                                       </form>
                                    </div>
                            </Fade>
                        </div>
                    </div>
                    )}
                    {ListCart.length === 0 &&(
                        <div class="alert alert-info" style={{width: "20%",marginLeft:'500px'}} role="alert">
                            <p style={{textAlign:'center',fontSize:20}}>Your Cart is empty!</p>
                            <p style={{textAlign:'center'}}>Add items to it now.</p>
                        </div>
                    )}                   
                </Container> 
            </div>

        )

}


const mapStateToProps = state => ({
    order:state.orders,
    cartProps :state.carts
});
export default connect(mapStateToProps,{productQuantity,removeCart,createOrder,clearOrder}) (Cart);
