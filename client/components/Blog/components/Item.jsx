import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Social from './Social'
import Link from 'next/link'




const Item = (props) => {

  

  const {Title,Dreption,Dates,Pu,Image,Author} = props

  return (
    <Col md="6" lg="4" >
      <BoxItem className="visi">
        <Thumbnails href={Pu} > 
            <img src={Image} alt=""/>
         </Thumbnails>
         <h3 className="titleblog"> <Link href={Pu}><a>{Title}</a></Link></h3>
        <p className="drepitem">{Dreption}</p>
        <Authors>Post by: <strong title={Author} > {Author}</strong></Authors>
        <div className="dateitem">{Dates}</div>
        <Social/>
      </BoxItem>
    </Col>
    
  );
}

const BoxItem = styled.div`
  position: relative;
  box-shadow: 1px 2px 4px 0px #cecece;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  background-color: rgb(255 255 255 / 82%);
  backdrop-filter: blur(2px);
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  margin-bottom: 30px;

  
  .drepitem{
    display: -webkit-box;
    max-width: 100%;
    height: 73px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 18px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
  }

  .titleblog{
    font-size: 20px;
    margin-bottom: 15px;
    height:27px;
    
    a{
      text-decoration: none;
      color: #0f4c7b;
      font-weight: bold;
      display: -webkit-box;
      max-width: 100%;
      height: 25px;
      margin: 0 auto;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .thumitem{
    display: block;
    overflow: hidden;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
    &:hover{
      img{
        transform: scale(1.2);
        opacity: .5;
      }
    }

    img{
      width: 100%;
      object-fit: cover;
      transition: ease-in-out .6s all;
    }
  }
`

const Thumbnails = styled.a`
    display: block;
    overflow: hidden;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 10px;
    &:hover{
      img{
        transform: scale(1.2);
        opacity: .5;
      }
    }

    img{
      width: 100%;
      object-fit: cover;
      transition: ease-in-out .6s all;
    }
`;





const Authors = styled.p`
    display: -webkit-box;
    max-width: 100%;
    height: 24px;
    font-style: italic;
    margin: 0 auto;
    font-size: 16px;
    line-height: 20px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0;
    cursor: pointer;
    transition: ease-in-out .5s all;

    strong{
      font-style: initial;

      &:hover{
        color:#e42916;
      }
    }


`


export default Item
