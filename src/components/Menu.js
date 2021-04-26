import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import styled from 'styled-components';
import { getCategory } from './../store/Actions/categoryAction';
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

const Menu =() => { 
   
       const dispatch = useDispatch()
       const categories = useSelector((state) =>state.categories)
      console.log(categories)
      useEffect(() => {
       dispatch(getCategory())
       
      },[dispatch])
        return (
            <div>
                <MenuContainer>
                    <MenusHeading>~Menus~</MenusHeading>
                    <MenusWrapper>
                      {categories && categories.map((category =>{
                        return(
                          <MenusCard key={category.id}>
                            <MenusImg src={category.photo} alt="categoryphoto" />
                            <MenusInfo>
                            <Link to={`/submenu/${category.id}/${category.name}`}><MenusButton>{category.name}</MenusButton></Link>  
                            </MenusInfo>
                          </MenusCard> 
                        )
                      }))}                                            
                    </MenusWrapper>
                </MenuContainer>                
            </div>
        )

}

export default Menu
