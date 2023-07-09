import React from 'react'
import styled from 'styled-components'
function Heading() {
  return (
    <HeadingTop>
        <span>$7,500 Federal Tax Credit</span>
        <p>Available for new Model 3 and Model Y</p>
    </HeadingTop>
  )
}

export default Heading

const HeadingTop=styled.div`
      position: fixed;
      left: 0;
      right: 0;
      min-height:50px;
      padding :20px;
      top:0;
      display:flex;
      justify-content:center;
      align-items:center;
      background-image:radial-gradient(54.97% 272.54% at 27.36% -134.72%,rgba(108,148,255,.92) 0,rgba(0,0,0,.92) 100%);
      gap:20px;
      span{
        color:white;
        font-size:20px;
        font-weight:500;
      }
      p{
        font-size:18px;
        color:white;
        font-weight:400;
      }
      @media(max-width:768px){
        display: inline-block;
        padding :10px 0;
      }
      
`