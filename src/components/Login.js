import React from 'react'
import styled from 'styled-components'



export const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href="/login">
                {/*  <img src="/images/login-background.png" alt="Logo-Svg" />  */}
                </a>
                <div>
                    <ConnectNow>Connect Now</ConnectNow>
                    <SignIn> Sign In</SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1> Where finding you a job is our priority!</h1>
                    <img src="/images/background.jpg" alt="" />
                </Hero>

            </Section>
        </Container>
    )
}


// CSS STYLING

//Using styled components to not do inline editing ( use styled components extension to ot see the styling as a string)

const Container = styled.div`
    padding: 0px;
`;

//Nav bar svg styling
const Nav = styled.nav`
    max-width: 95%;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    /*  & > a = anything inside the a tag do this { } */
    & > a {
        width: 150px;
        height: 40px;
        @media (max-width: 760px) {
            padding: 0 5px;
        }
    }
`;

// Connect Now button styling (kinda our take on sign up)
const ConnectNow = styled.a`
    font-size: 20px;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 25px;
    color: grey;
    margin-right: 12px;
    &:hover{
        background-color: white;
        color: black;
        text-decoration: none;
    }

`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0E87EA;
    color: #0E87EA;
    border-radius: 18px;
    transition-duration: 300ms;
    font-size: 20px;
    font-weight: 800;
    line-height: 60px;
    padding: 5px 15px;
    text-align: center;
    background-color: #ffffff;
    &:hover {
        background-color: #0E87EA;
        color: #ffffff;
        text-decoration: none ;
    }
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 800px;
    padding-bottom: 150px;
    padding-top: 50px;
    padding: 50px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 95%;
    align-items: center;
    margin: auto;
    @media (max-width:768px) {
        margin: auto;
        min-height: 0px;
    }
`

const Hero = styled.div`
    width: 100%;
    h1 {
        margin: 0;
        padding-bottom: 0;
        width: 100%;
        font-size: 50px;
        color: #0E87EA;
        font-weight: 200;
        line-height: 80px;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }    
    
    img {
        width: 1000px;
        height: 800px;
        border-radius: 500px;
        right: -1px;
        position: absolute;
        bottom: -120px;
        align-items: center;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;
