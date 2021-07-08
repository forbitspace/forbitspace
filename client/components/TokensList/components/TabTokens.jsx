import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Item from './Item'
import Title from '../../../../components/Title'
import {Toptokens} from '../constants/index'




const TabTokens = (props) => {

  const renderItem = (element) => {
    return (
      <Item Name={element.name} Symbol={element.symbol} Liquidity={element.liquidity} Image={element.image} Volume={element.volume} Price={element.price} Pricechange={element.pricechange}/>
     
    )
  }

  

  return (
    <GroupData>
    <Title title="Top Tokens"/>
    <table className="customers">
      <tbody>
          <tr>
            <th style={{width: '25%'}}>Name</th>
            <th style={{width: '15%'}}>Symbol</th>
            <th style={{width: '15%'}}>Liquidity ↓</th>
            <th style={{width: '15%'}}>Volume (24hrs)</th>
            <th style={{width: '15%'}}>Price</th>
            <th style={{width: '15%'}}>Price Change (24hrs)</th>
          </tr>
          {Toptokens.map((item) => renderItem(item) )}
      </tbody>
    </table>
</GroupData>
   
  );
}



const GroupData = styled.div`
  margin-bottom: 50px;
  margin-top:50px;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  padding: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  border: 1px solid rgb(237, 238, 242);
  box-shadow: rgb(0 0 0 / 5%) 0px 6px 10px;
  border-radius: 8px;
  z-index: 1;
  
`



const TitleFeature = styled.h3`
  font-size:26px;
  margin-bottom: 30px;
  
  a{
    color:${(props) => props.color};
    margin-bottom: 15px;
    text-decoration: none;
    font-weight:600;
    display: -webkit-box;
    max-width: 100%;
    height: 25px;
    margin: 0 auto;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover{
      opacity: .5;
    }
  }
  
`

const ButtonFeature = styled.a`
    margin-bottom: 5px;
    display: block;
    height: 40px;
    border-radius:25px;
    color:#000;
    width:100%;
    border:soild 2px #000;
    text-decoration: underline;
    transition: background 300ms ease-in-out;

    img{
      max-width:25px;
      transition: ease-in-out .5s all;
      opacity: 0;
      margin-left: -5px;
    }

    &:hover{
      color:#e42916;

      img{
        opacity:1;
        margin-left: 15px;
      }
    }


    @media ( max-width: 870px){
      height:30px;
    }
`


const Thumblog = styled.div`
  position: relative;
  max-width: 700px;
  margin-left: 20px;
  width: 100%;
  
  @media ( max-width: 1025px){
    max-width: 550px;
  }

  @media ( max-width: 870px){
    margin-left: 0;
    max-width:100%;
  }
`

const DrepFeature = styled.p`
    text-align: justify;
    display: -webkit-box;
    max-width: 100%;
    height: 86px;
    margin: 0 auto;
    font-size: 17px;
    line-height: 20px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 30px;

    @media (max-width:870px){
      margin-bottom: 10px;
    }
`

const Author = styled.p`
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

    i{
      color: #888;
    }


`




export default TabTokens
