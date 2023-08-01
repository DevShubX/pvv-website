import React from 'react'
import NavBar from '../components/NavBar'
import { styled } from 'styled-components'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
        <NavBar/>
        <MainDiv>
        <TextContainer>
            <div className='text-box-1'>
                <LeaderInText className="leader-in-text">
                <span className="text-wrapper">WE ARE THE LEADER IN THE</span>
                <span className="span">&nbsp;</span>
                <span className="text-wrapper-2">RESIDENTIAL AND COMMERCIAL BUILDING</span>
                <span className="text-wrapper-3">&nbsp;</span>
                <span className="text-wrapper">CONSTRUCTION</span>
                </LeaderInText>
                <p>
                    M/s. PVV Infra Limited, a listed company since 2000, into infrastructure business and clients include L&T, NCC, NTPC, MCL, NPCC, COAL INDIA and IRCON. PVV Infra Limited joined the fray for construction of affordable homes whose objective is to cover One crore households by 2019 under PMAY scheme.
                </p>
            </div>
        </TextContainer>
            <div className='image-box-1'>
                <div className='image-with-line'>
                    {/* Image Div with house 1 image */}
                    <div className="house-1"></div>
                    <div className='line-1'></div>
                </div>
                {/* Image Div with house 2 image */}
                <div className="house-2"></div>
            </div>
            <TextBox2>
                <div className='image-with-text'>
                    <div className='house-3'></div>
                    <p className='our-text'>OUR</p>
                    <p className='history-text'>HISTORY</p>
                </div>
                <div className='text-box'>
                    <p>
                        M/s. PVV Infra Limited, was incorporated on July 07, 1995 in the name and style as Twin Cities Infotech Private Limited. Subsequently the name of the company was changed to Twin Cities Infotech Limited on February 17, 2000, and then changed to Sambhav Info-Infra Limited on January 17, 2008 and changed to Sambhav Infra (India) Limited on November 18, 2009 to Thirthankar Infra Limited and on August 30, 2010 and finally changed to PVV Infra Limited on 7th October, 2014
                    </p>
                    <p>
                        PVV Infra is engaged into infrastructure business like multi-storied commercial and residential buildings, landscaping, duplex housing and housing for EWS, low, middle and high income groups.
                    </p>
                </div>
            </TextBox2>
            <VisionMissionBox>
                <div className='box'>
                    <img src="assets/brain-svg.svg" alt="brain" />
                    <p className='title'>
                        Vision
                    </p>
                    <p className='subtitle'>
                        Our Endeavour is to build & provide Housing/Sanitation as a primary need for every Indian. PVV Infra Limited as a company strikes a chord with this terminology and now plays a pivotal role in transforming rural India. We have come a long way since our inception and the diagram illustrates our vision.
                    </p>
                </div>
                <div className='box'>
                    <img src="assets/mountain-svg.svg" alt="mountain" />
                    <p className='title'>
                        Mission
                    </p>
                    <p className='subtitle'>
                        To become an organisation of world class benchmark by offering cost effective and superior quality services driven by technology that fulfill and surpass the expectations of our clients and also the needs of the environment.
                    </p>
                </div>
            </VisionMissionBox>
            <TurnOverBox>
                <div className='bg-image'></div>
                <div className='content-box'>
                    <div className='inner-div'>
                        <div className='rect-1'></div>
                        <div className='rect-2'></div>
                        <div className='box-1'>
                            <div className='content'>
                                <p className="title">
                                    Financial year 31 March 2021
                                </p>
                                <p className='ruppe'>
                                ₹ 214
                                </p>
                                <p className='subtitle'>
                                    Lakhs
                                </p>
                                <div className='line'></div>
                            </div>
                            <div className='content'>
                                <p className="title">
                                    Financial year 31 March 2020
                                </p>
                                <p className='ruppe'>
                                ₹ 3835
                                </p>
                                <p className='subtitle'>
                                    Lakhs
                                </p>
                                <div className='line'></div>

                            </div>
                            <div className='content'>
                                <p className="title">
                                    Financial year 31 March 2019
                                </p>
                                <p className='ruppe'>
                                ₹ 5042.17
                                </p>
                                <p className='subtitle'>
                                    Lakhs
                                </p>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='download-box'>
                        <p>
                            Download Master Data
                        </p>
                        <button type="button">
                            DOWNLOAD <img src="assets/ci_download.svg" alt="" />
                        </button>
                    </div>
                    
                </div>
            </TurnOverBox>
            <OurTeamBox>
                <div className='heading'>
                    <p className="our">
                        OUR
                    </p>
                    
                    <p className="team">
                        TEAM
                    </p>
                </div>
                <div className='image-container'>
                    <div className='image-box'>
                        <img src="assets/person-1.jpg" alt="person" />
                        <p className="title">
                            Vakkala Fayaz
                        </p>
                        <p className="position">
                            Director & CFO
                        </p>
                    </div>
                    <div className='image-box'>
                        <img src="assets/person-2.jpg" alt="person" />
                        <p className="title">
                            Zameer Ahammed Kottala
                        </p>
                        <p className="position">
                            Director
                        </p>
                    </div>
                    <div className='image-box'>
                        <img src="assets/person-3.jpg" alt="person" />
                        <p className="title">
                            Zeba Ruhin shaik Kottala
                        </p>
                        <p className="position">
                            Director
                        </p>
                    </div>
                    <div className='image-box'>
                        <img src="assets/person-4.jpg" alt="person" />
                        <p className="title">
                            ANIL PANDURANG SONAWANE
                        </p>
                        <p className="position">
                            Additional Director
                        </p>
                    </div>
                    
                </div>
            </OurTeamBox>
            <JoinTeamBoxHeading>
                <span className='s1'>
                    JOIN OUR GROWING
                </span>
                <span className='s2'>
                    TEAM
                </span>
            </JoinTeamBoxHeading>
            <JoinTeamBox>
                    <img src="assets/line-1.svg" alt="line" className='line1'/>
                    <img src="assets/line-2.svg" alt="line" className='line2'/>
                    <form action="" className='resume-form'>
                        <p className='title'>
                            Upload your Resume
                        </p>
                        <input type="text" name="" id="name" placeholder='Name'/>
                        <input type="text" name="" id="email" placeholder='Email*'/>
                        <input type="file" name="" id="file" />
                        <input type="text" name="" className='text-area'/>
                        <button type="submit" className='submit'>
                            SEND MESSAGE
                        </button>
                    </form>
            </JoinTeamBox>
        </MainDiv>
        <Footer/>
       
    </div>
        
  )
}
const JoinTeamBoxHeading = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0 2rem 0;
    .s1{
        color: var(--text-black, #232323);
        text-align: center;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 39px; /* 121.875% */
    }
    .s2{
        color: var(--secondary, #0178A0);
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 39px;
    }
    @media screen and (max-width:800px){
        .s1{
            color: var(--text-black, #232323);
            text-align: center;
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 39px; /* 195% */
        }
        .s2{
            color: var(--secondary, #0178A0);
            font-family: Montserrat;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 39px;
        }
    }
`
const JoinTeamBox = styled.div`
    overflow-x: hidden;
    position: relative;
    top: 60px;
    display: flex;
    justify-content: center;
    .line1{
        position: relative;
        right: 200px;
        @media screen and (max-width:800px){
            right: -200px;
        }
    }
    .line2{
        position: relative;
        left: 200px;
        top: -50px;
        @media screen and (max-width:800px){
            top: -280px;
        }
    }
    .resume-form{
        position: absolute;
        width: 493px;
        height: 586px;
        border-radius: 20px;
        background: linear-gradient(310deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%);
        box-shadow: 2px 4px 32px 0px rgba(157, 157, 157, 0.25);
        backdrop-filter: blur(100px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1rem 0 0 0;
        @media screen and (max-width:800px){
            width: 330px;
            height: 426px;
            flex-shrink: 0;
            padding: 2rem 2rem 2rem 2rem;
        }
    }
    .title{
        color: #232323;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 116.667% */
    }
    #name,#email,#file{
        display: flex;
        width: 295px;
        height: 30px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: 0.75px solid #D1D1D1;
        background: #FFF;
    }
    .text-area{
        width: 295px;
        height: 79px;
        border-radius: 4px;
        border: 0.75px solid #D1D1D1;
        background: #FFF;

    }
    .submit{
        display: flex;
        width: 295px;
        height: 40px;
        padding: 4.5px 19.522px 4.5px 19.5px;
        justify-content: center;
        align-items: center;
        color: #FFF;
        border-radius: 3px;
        border: 1.5px solid #F0A31E;
        background: #F0A31E;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 112.5% */
        letter-spacing: 0.375px;
        text-transform: uppercase;
        @media screen and (max-width:800px) {
            border-radius: 3px;
            border: 1.5px solid #232323;
            background: #232323;
        }
    }

`

const OurTeamBox = styled.div`
    margin: 2rem 0 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .heading{
        display: flex;
        gap: 0.5rem;
    }
    .our{
        text-align: center;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 39px;
    }
    .team{
        color: #2B769E;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px;
    }
    .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-wrap: wrap;
    }
    .image-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 284px;
            height: 312px;
            object-fit: cover;
        }
    }
    .title{
        margin: 1rem 0 0 0;
        color: #232323;
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 171.429% */
    }
    .subtitle{
        color: #6F6F6F;
        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
    }
    @media screen and (max-width:800px) {
        .image-container{
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        .image-box{
            align-items: start;
            justify-content: start;
            img{
                width: 154px;
                height: 166px;
                flex-shrink: 0;
                object-fit: cover;
            }
        }
        .title{
            font-size: 11px;
        }
        .subtitle{
            color: #6F6F6F;
            font-family: Montserrat;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 200% */
        }
        
    }
`



const TurnOverBox = styled.div`
    position: relative;
    .bg-image{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.72) 100%), url("assets/image-2.jpg"), lightgray 0px -99.937px / 100% 120.504% no-repeat;
        width: 100%;
        height: 531px;
    }
    .content-box{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .box-1{
        width: 1123px;
        height: 320px;
        border-radius: 20px;
        background: linear-gradient(310deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.10) 100%); 
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: space-around;
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title ,.subtitle{
        margin: 0 0 1rem 0;
        color: #FFF;
        text-align: center;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
    }
    .ruppe{
        margin: 0 0 1rem 0;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 125% */
    }
    .line{
        width: 4px;
        height: 42px;
        background-color: #F0A31E;
    }
    .rect-1,.rect-2{
        width: 122px;
        height: 122px;
        border-radius: 17px;
        background-color: #F0A31E;
    }
    .inner-div{
        position: relative;
    }
    .rect-1{
        position: absolute;
        bottom: -30px;
        left: -40px;
    }
    .rect-2{
        position: absolute;
        top: -30px;
        right: -40px;
    }
    .download-box{
        position: relative;
        top: 30px;
        margin: 2rem 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            margin: 0 2rem 0 0 ;
            color: #FFF;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            border-radius: 76px;
            background:  #FFF;
            padding: 15.5px 54px 15.5px 54px;
            color: #0178A0;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px; /* 125% */
        }
    }
    @media screen and (max-width:800px){
        .box-1{
            flex-direction: column;
            row-gap: 1rem;
            padding: 2rem 2rem;
            width: 60vw;
            height: auto;
        }
        .bg-image{
            height: 900px;
        }
        .rect-1,.rect-2{
            width: 80px;
            height: 80px;
            border-radius: 17px;
            background-color: #F0A31E;
        }
        .download-box{
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
        }
    }
`

const VisionMissionBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #D7EAF4;
    padding: 4rem 5rem 4rem 5rem;
    margin: 4rem 0 0 0 ;
    gap: 3rem;
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 555px;
        padding: 50px 50px 75px 50px;
        gap: 10px;
        background: #FFF;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);
    }
    img{
        width: 80px;
        height: 80px;
    }   
    .title{
        color: #232323;
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
    }
    .subtitle{
        color: #6F6F6F;
        text-align: center;
        font-family: Roboto;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5rem; /* 171.429% */
    }
    @media screen and (max-width:800px) {
        padding: 2rem 2rem 2rem 2rem;
        flex-direction: column;
        .box{
            width: auto;
            padding: 2rem 1rem;
        }
       
    }
`
const TextBox2 = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 40px;
    .image-with-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5rem 0 0 ;
    }
    .our-text{
        margin: 0;
        position: relative;
        top: -40px;
        color: #F0A31E;
        text-align: center;
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.4375rem; /* 121.875% */
    }
    .history-text{
        margin:0;
        position: relative;
        top: -30px;
        color: #2B769E;
        font-family: Roboto;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.4375rem;
    }   
    .house-3{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.52) 100%), url("assets/image-3.jpg"), lightgray 0px 0px / 217.747% 100% no-repeat;
        width: 348px;
        height: 222px;
        
    }
    .text-box{
        width: 50.125rem;
        p{
            margin: 0 0 1rem 0;
            color: #6F6F6F;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5rem;
        }
    }
    @media screen and (max-width:1160px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .text-box{
            width: auto;
            margin: 0 0.5rem 0 0.5rem;
            p{
                color: #6F6F6F;
                font-family: Roboto;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
            }
        }
        .image-with-text{
            margin: 0 ;
        }
    } 
`



const LeaderInText = styled.div`
    width: 32.1875rem;
    height: 12.375rem;
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.25rem; /* 130% */
    letter-spacing: 0.01563rem;
    .text-wrapper {
        color: #232323;
        font-weight: 600;
    }
    .span {
        color: #232323;
        font-family: "Montserrat-Bold", Helvetica;
        font-weight: 700;
    }
    .text-wrapper-2 {
        color: #0178a0;
        font-weight: 600;
    }

    .text-wrapper-3 {
        color: #0178a0;
        font-family: "Montserrat-Bold", Helvetica;
        font-weight: 700;
    }
    @media screen and (max-width:1160px) {
        text-align: center;
        width: 70%;
        height: auto;
    }
    @media screen and (max-width:800px) {
        text-align: center;
        width: 320px;
        font-size: 1.5rem;
        line-height: 2rem;
    }
    
    
`

const TextContainer = styled.div`
    justify-content: center;
    display: flex;
    .text-box-1{
        display: flex;
        p{
            margin: 0.2rem 0 0 4rem ;
            width: 41.8125rem;
            color: #232323;
            font-family: Roboto;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.3125rem;
        }
        @media screen and (max-width:1160px) {
            p{
                margin:2rem 0 3rem  0 ;
                text-align: center;
            }
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }
        @media screen and (max-width:800px) {
            p{
                width: 90%;
            }
          
        }
        /* @media screen and (max-width:500px) {
            p{
                width: 90%;
            }
          
        } */
    }
`

const MainDiv = styled.div`
    margin: 7.5rem 0 7.5rem 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    .image-box-1{
        display: flex;
        align-items: baseline;
        justify-content: center;
    }    
    .house-1{
        background: linear-gradient(0deg, rgba(43, 118, 158, 0.50) 0%, rgba(43, 118, 158, 0.50) 100%), url("assets/image-1.jpg"), lightgray 50% / cover no-repeat;
        width: 473px;
        height: 340px;
        margin: 0 3rem 0 0 ;
    }
    .house-2{
        position: relative;
        right: -40px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.72) 100%), url("assets/image-2.jpg"), lightgray 50% / cover no-repeat;
        width: 713px;
        height: 459px;
        @media screen and (max-width:1350px){
            width: 400px;
            height: 340px;
        }
        
    }
    .image-with-line{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .line-1{
        position: relative;
        right: 90px;
        top: 20px;
        background: #6F6F6F;
        width: 3px;
        height: 157px;
    }
    @media screen and (max-width:1160px){
        margin: 1rem 0 1rem 0;
    }

    @media screen and (max-width:600px) {
        margin: 1rem 0 1rem 0;
        .house-1,.house-2{
            right: 0;
            margin: 0;
            width: 200px;
        }
        .line-1{
            right: 50px;
            height: 50px;
        }
    }
    
`

export default AboutUs