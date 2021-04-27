import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FrontContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('coverimage.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const FrontContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const FrontItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const FrontH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const FrontP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const FrontBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #000;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export class Home extends Component {
    render() {
        return (
            <div>
                <FrontContainer>
                    <FrontContent>
                        <FrontItems>
                          <FrontH1>Greatest Food Ever</FrontH1>
                          <FrontP>Ready in 60 seconds</FrontP>
                          <Link exact to="/menu"><FrontBtn>Let me see the menu</FrontBtn></Link>
                        </FrontItems>
                    </FrontContent>
                </FrontContainer>

                
            </div>
        )
    }
}

export default Home
