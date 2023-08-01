import React, { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import {HiMenu} from 'react-icons/hi';
import {IoClose} from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'
const NavBar = () => {
    const location = useLocation();
    const {width} = useWindowDimensions();
    const [isNavOpen,setIsNavOpen] = useState(false);
  return (
    <MainDiv>
            <IconBox>
                <img src="assets/logo.gif" alt="logo" />
            </IconBox>
            {width! < 1160 && (
                <button type="button" onClick={()=>setIsNavOpen(!isNavOpen)} className='menu-icon'>
                  <HiMenu/>
                </button>
            )}
            {width! > 1160 &&(
                <MenuItems>
                    <Link to={"/"} className={location.pathname === "/" ? "activeLink" : "notActiveLink"} >
                        HOME
                    </Link>
                    <Link to={"/aboutus"} className={location.pathname.includes("aboutus") ? "activeLink" : "notActiveLink"}>
                        ABOUT US
                    </Link>
                    <Link to={"/investor-relations"} className={location.pathname.includes("investor-relations") ? "activeLink" : "notActiveLink"}>
                        INVESTOR RELATIONS
                    </Link>
                    <Link to={"/contactus"} className={location.pathname.includes("contactus") ? "activeLink" : "notActiveLink"}>
                        CONTACT US
                    </Link>
                    <ShareButton to={"/shareprice"}>
                        SHARE PRICE
                    </ShareButton>
                </MenuItems>
            )}
             {(width! < 1160 && isNavOpen )&&(
                <MenuItems>
                    <button onClick={()=>setIsNavOpen(false)} className='close-icon'>
                        <IoClose/>
                    </button>
                    <Link to={"/"} className={location.pathname === "/" ? "activeLink" : "notActiveLink"} onClick={()=>setIsNavOpen(false)}>
                        HOME
                    </Link>
                    <Link to={"/aboutus"} className={location.pathname.includes("aboutus") ? "activeLink" : "notActiveLink"} onClick={()=>setIsNavOpen(false)}>
                        ABOUT US
                    </Link>
                    <Link to={"/investor-relations"} className={location.pathname.includes("investor-relations") ? "activeLink" : "notActiveLink"} onClick={()=>setIsNavOpen(false)}>
                        INVESTOR RELATIONS
                    </Link>
                    <Link to={"/contactus"} className={location.pathname.includes("contactus") ? "activeLink" : "notActiveLink"} onClick={()=>setIsNavOpen(false)}>
                        CONTACT US
                    </Link>
                    <ShareButton to={"/shareprice"} onClick={()=>setIsNavOpen(false)}>
                        SHARE PRICE
                    </ShareButton>
                </MenuItems>
            )}
            
            
        </MainDiv>
  )
}

const ShareButton = styled(Link)`
    text-decoration: none;
    color: #232323;
    border-radius: 0.5rem;
    background: #F0A31E;
    display: flex;
    padding: 0.84rem 2.72rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
`

const MenuItems = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    // a is for the Link
    a{
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 0.9375rem; /* 93.75% */
        letter-spacing: 0.00844rem;
        text-decoration: none;
    }
    .activeLink{
        color: #232323;
    }   
    .notActiveLink{
        color: #767676;
    }
    @media screen and (max-width:1160px){
        position: absolute;
        flex-direction: column;
        top: 0;
        right: 0;
        background-color: #f0f0f0;
        height: 100%;
        width: 60%;
        padding: 3rem 2rem 0 2rem;
        a{
            color: black;
            font-size: 1.3rem;
        }
    }
    @media screen and (max-width:400px){
        width: 100%;
    } 
`



const IconBox = styled.div`
    display: flex;
    align-items: center;
    /// Logo size
    img{
        height: 32px;
        width: 90px;
    }
`

const MainDiv = styled.div`
    color: white;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 1.25rem 6rem 1rem 6rem;
    border-bottom: 1px solid #E3E3E3;
    .menu-icon{
        border: none;
        background-color: transparent;
        font-size: 3rem;
        color: rgba(240, 163, 30, 1);
        margin: 0.5rem 0 0 0;
    }
    .close-icon{
            position: absolute;
            top: 2.1rem;
            right: 2rem;
            border: none;
            background-color: transparent;
            font-size: 2rem;
            color: rgba(240, 163, 30, 1);
    }
    @media screen and (max-width:1160px){
        padding: 0rem 1rem;
        .menu-icon{
            margin: 1rem 0 0 0;
        }
    }
`

export default NavBar


