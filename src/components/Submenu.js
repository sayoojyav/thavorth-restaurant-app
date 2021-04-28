import React,{useEffect} from 'react'
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux';
import { viewMenulist } from './../store/Actions/menuAction';

export const MenuContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;
export const MenusHeading = styled.h1`
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
  width: 300px;
  background:#fff;
  text-align: center;
  font-family: arial;
  margin-bottom:4rem; 
`;

export const MenusImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius:8px;  
  position:'center';

`;
export const MenusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const MenusPrice = styled.p`
 color: grey;
  font-size: 22px;
`;
export const MenusDesc = styled.p`
  color:#000;
  `;
export const Menufooter = styled.div`
margin:auto;              
        
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
const Submenu = ({match}) =>  {

      const {id} =match.params;
      const {category_name} = match.params;      
      const dispatch = useDispatch()
      const menus = useSelector((state) =>state.menus)
      // console.log(menus)      
      const menu = menus.map((value)=>{return value;});
      // console.log(menu)
     
      useEffect(() => {
       dispatch(viewMenulist())
       
      },[dispatch])
   
        return (
        <div>
          <MenuContainer>
            <MenusHeading>~{category_name}~</MenusHeading>
            <MenusWrapper>
              {menu && menu.filter((m)=>{return m.category_id ===1}).map((filteredmenu,index) => (
                      <MenusCard key={filteredmenu.id}>
                <MenusImg src={filteredmenu.photo} alt="foodpic"></MenusImg>
                <MenusInfo>
                <h1 style={{color:'green'}}>{filteredmenu.name}</h1>
                <MenusDesc>{filteredmenu.description}</MenusDesc>
                <MenusPrice>${filteredmenu.price}</MenusPrice>                    
                </MenusInfo>
                <Menufooter><MenusButton>Add to Cart</MenusButton></Menufooter>
                
              </MenusCard>
                     ))}
            </MenusWrapper>
          </MenuContainer>
        </div>
                
              
              
        )
    
}

export default Submenu
