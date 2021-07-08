import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link'




const Item = (props) => {

  

  const {Name,Symbol,Liquidity,Volume,Price,Image,Pricechange} = props;

  return (
    <ListData>
      <td className="color-blue">1 &nbsp; <img src={Image} alt="" /> &nbsp; {Name}</td>
      <td>{Symbol}</td>
      <td>{Liquidity}</td>
      <td>{Volume}</td>
      <td>{Price}</td>
      <td className="color-blue">{Pricechange}</td>
    </ListData>
  );
}

const ListData = styled.tr`
  position: relative;
  
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


export default Item
