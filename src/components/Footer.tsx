import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Footer = () => {
    const {width} = useWindowDimensions();
  return (
    <div>
        <MainDiv>
        <div className='logo-box'>
            <img src="assets/logo.gif" alt="logo" />
            {width! > 1000 && (
                <div>
                    <p className='title'>
                        © 2019 PVV Infra | Designed & Developed by
                    </p>
                    <p className='subtitle'>
                        TheBrandWorks
                    </p>
                </div>
            )}
            
            
        </div>
        <div className='nav'>
            <Link to="/aboutus">
              ABOUT US
            </Link>
            <Link to="/investor-relations">
                INVESTOR RELATIONS
            </Link>
            <Link to="/contactus">
              CONTACT US
            </Link>
        </div>
        <div className='social'>
            <p>
                On social network
            </p>
            <div className='social-icon'>
                <img src="assets/linkedin.svg" alt="linkedin" />
                <img src="assets/facebook.svg" alt="facebook" />
                <img src="assets/twitter.svg" alt="twitter" />
                <img src="assets/google-plus.svg" alt="google-plus" />
                <img src="assets/instagram.svg" alt="instagram" />
            </div>
        </div>

        {width! < 1000 &&(
            <div className='bottom-text'>
                <p className='title'>
                    © 2019 PVV Infra | Designed & Developed by
                </p>
                <p className='subtitle'>
                TheBrandWorks
                </p>
            </div>
        )}
        </MainDiv>
        
    </div>
  )
}

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #6F6F6F;
    padding: 1rem 0 2rem 0;
    margin: 5rem 0 0 0;
    .logo-box{
       .subtitle, .title{
        margin: 0.5rem 0 0.5rem 0;
            color: #6F6F6F;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px; /* 142.857% */
        }

    }
    .bottom-text{
        margin: 0 0 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #6F6F6F;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
    }
    .nav{
        display: flex;
        justify-content: space-between;
        gap: 8rem;
        a{
            text-decoration: none;
            color: #767676;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 600;
            line-height: 15px; /* 93.75% */
            letter-spacing: 0.135px;
        }
        @media screen and (max-width:1100px){
            gap: 4rem;
        }
    }
    .social{
        p{
            color: #6F6F6F;
            text-align: right;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 500;
            line-height: 15px; /* 107.143% */
        }
        .social-icon{
            display: flex;
            gap: 0.5rem;
            img{
                width: 15px;
                height: 15px;
            }
        }
        
    }
    @media screen and (max-width:1000px){
        flex-direction: column;
        .nav{
            margin: 3rem 0 1rem 0;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        .social{
            margin: 1rem 0 2rem 0;
        }
    }
`

export default Footer