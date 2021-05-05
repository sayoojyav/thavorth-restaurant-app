import React,{useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { searchOrder,fetchsearchOrder,setLoading } from '../store/Actions/cartAction';
import Fade from "react-reveal/Fade";
export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;
export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const Order = (props) => {
    const [open, setOpen] = useState(false);   
    const  onChange = e => {
        props.searchOrder(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        props.fetchsearchOrder(props.text);
        props.setLoading();        
        console.log("submitted data:",props.orders);
        setOpen(true);
    }
    
        return (
            <div>
               <Container>
                   <Heading>~My Order~</Heading>
                   <Wrapper>
                       <div className="jumbotron-fluid mt-3 text-center">
                           <div className="container">
                               <h1 className="display-4 mb-3 text-white">
                                   <i className="fa fa-search" /> Search for a order 
                                </h1>
                                <form id="searchForm" onSubmit={onSubmit}>
                                    <input type="text" className="form-control" name="searchText" placeholder="Search orders ..."onChange={onChange} />
                                    <button type="submit" className="btn btn-primary btn-lg btn-bg mt-3">Search </button>
                                </form>
                            </div>
                        </div>
                        <Fade in={open}>
                            <div className="card col-14 col-lg-4 mx-auto mt-5 bg-primary">
                                <label htmlFor="exampleInputNumber"> Tablenumber:{props.orders.tablenumber}</label>
                                <label htmlFor="exampleInputNumber">Customername:{props.orders.customername}</label>
                                <label htmlFor="exampleInputNumber">Status:{props.orders.status}</label>                                
                            </div>
                        </Fade>   
                    </Wrapper>
               </Container>
                
            </div>
        );
    
};

const mapStateToProps = state => ({
    text:state.orders.text,
    orders: state.orders.orders,
    loading:state.orders.loading,
    
    
});
export default connect(mapStateToProps,{searchOrder,fetchsearchOrder,setLoading}) (Order); 