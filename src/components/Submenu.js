import React,{useEffect} from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {connect, useDispatch,useSelector} from 'react-redux';
import { viewMenulist } from './../store/Actions/menuAction';
import { addcart } from './../store/Actions/orderAction';
export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);  
  color: #000;
`;
export const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
`;
export const Wrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  float: left;
  justify-content: center;
 `;
export const Info = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;  
  text-align: center;
  font-family: arial;  
`;
export const Img = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius:8px;  
  position:'center';

`;
export const Desc = styled.p`
  color:#000;
  `;
export const Price = styled.p`
 color: grey;
  font-size: 22px;
`;
export const MenusButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;  
  &:hover {
    opacity: 0.7;
  }
`;
const Submenu = (props) => {
  const {id} =useParams();
  const {category_name} =useParams();
  const dispatch = useDispatch()
  const menus = useSelector((state) =>state.menus)
  const menu = menus.filter((item) => item.category_id == id);
  useEffect(() => {
    dispatch(viewMenulist())
  },[dispatch])
  return (
    <div>
      <Container>
        <Heading>~{category_name}~</Heading>
        {menu && menu.map((filteredmenu,index) =>{
          return(
            <Wrapper>
              <Info>
                <Card key={index}>
                  <Img src={filteredmenu.photo} alt="foodpic"/>
                <h2>{filteredmenu.name}</h2>
                <Desc>{filteredmenu.description}</Desc>
                <Price>Rs.{filteredmenu.price}</Price>
                <MenusButton onClick={()=>props.addcart(filteredmenu)}>Add to Cart</MenusButton>
              </Card>
            </Info>

            </Wrapper>
            


          )        
        })}
      </Container>
      
    </div>
  )
}
export default connect(null,{addcart})(Submenu);