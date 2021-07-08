import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Item from './Item'
import Title from '../../../../components/Title'
import {transactions} from '../constants/index'




const TabTransactions = (props) => {

  const renderItem = (element) => {
    return (
      <Item Name={element.name} Symbol={element.symbol} Liquidity={element.liquidity} Image={element.image} Volume={element.volume} Price={element.price} Pricechange={element.pricechange}/>
     
    )
  }

  return (
    <GroupData>
    <Title title="Transactions"/>
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
          {transactions.map((item) => renderItem(item) )}
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





export default TabTransactions
