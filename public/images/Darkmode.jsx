import React, { useState, useEffect, } from "react";
import styled from "styled-components";





const Darkmode = () => {



  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    if (!document.body.classList.contains('dark-mode')) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }


  };


  const [Status, setStatus] = useState(false);


  return (
    <div className="dark-mode">
      <Dark_mode onClick={handleToggle}>
        <span className="mon-sun"><img src='../images/sun.svg' alt='sun icon' /></span>
        <span className="moon-dark" ><img src='../images/moon.svg' alt='moon icon' /></span>
      </Dark_mode>
    </div>
  );


}



const Dark_mode = styled.div`
  margin-right: 10px;
  font-size: 20px;
<<<<<<< HEAD
  display: flex;
  align-items: center;
  cursor:pointer;

  span {
    line-height: 18px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
=======
  cursor:pointer;

  .group-dark{
    overflow: hidden;
    width: 65px;
    height:30px;
    background: #fcfeff;
    position: relative;
    transition: all 1500ms ease-in-out;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    box-shadow: 1px 2px 2px 1px #c7c2c2;

    .moon-dark{
      i{
        color:#000;
      }
    }

    .mon-sun{
      i{
        color: #fff;
      }
    }


    .nextdark{
      width: 30px;
      height: 30px;
      border-radius: 20px;
      // background: #fff9c4;
      background: linear-gradient( 45deg,rgb(0 120 240) 0%,rgb(0 215 251) 100%)!important;
      position: absolute;
      display: block;
      z-index:5;
      left: 0;
      top: 0;
      transition: ease-in-out .5s all;
    }

    span{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index:6;

      i{
        font-size:15px;
        font-weight:bold;
      }
    }
  }


  i{
    color: #4593f8;
>>>>>>> 9c3defcdff297806d69dbc08ca72a09b39cb87a2
  }
`;

export default Darkmode;
