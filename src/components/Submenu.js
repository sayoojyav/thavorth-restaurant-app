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
  margin: 0 auto;
`;

export const MenusCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const MenusImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;
export const MenusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;
export const MenusTitle = styled.h2`
  font-weight: 400;
  color:'red';
  font-size: 1.5rem;
`;
export const MenusDesc = styled.p`
  margin-bottom: 1rem;
`;

export const MenusPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
export const MenusButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
const Submenu = ({match}) =>  {

      const {id} =match.params
      console.log(id);
      const {category_name} = match.params;      
       const dispatch = useDispatch()
       const menus = useSelector((state) =>state.menus)
      console.log(menus)
      useEffect(() => {
       dispatch(viewMenulist())
       
      },[dispatch])
   
        return (
      
            <div>
                <MenuContainer>
                  <MenusHeading>~{category_name}~</MenusHeading>
                    <MenusWrapper>
                     {menus.filter(menu => menu.category_id === 1).map(filteredmenu => (
                       <MenusCard key={filteredmenu.id}>
                          <MenusImg src={filteredmenu.photo} alt="" />
                          <MenusInfo>
                            <MenusTitle>{filteredmenu.name}</MenusTitle>
                            <MenusDesc>{filteredmenu.description}</MenusDesc>
                            <MenusPrice>${filteredmenu.price}</MenusPrice>
                            <MenusButton>Order Now</MenusButton>
                          </MenusInfo>
                        </MenusCard>
                     ))}
                   </MenusWrapper>
                  </MenuContainer>
                
            </div>
        )
    
}

export default Submenu
