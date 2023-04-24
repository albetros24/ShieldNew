import styled from "styled-components/macro";

export const Container = styled.div`
  border-bottom: 9px solid #070707;
  display: flex;
  border:none;
  margin-top:2rem;
  
`;
export const Entity = styled.div`
  color: #070707;
  border: 1px #070707;
  max-width: 490px;
  width: 99%;
  margin-bottom:40px;
  gap:7;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  };
  
`;
export const Inner = styled.div`
  padding:0 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
  margin-bottom:4rem;
`;
export const Question = styled.div`
  font: 30px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 14px;
  display: flex;
  font-weight: bold;
  border:2px solid rgba(245, 160, 140, 1) ;
  //background-color: rgb(248, 244, 244);
  color:black;
  padding: 1em 1.5em;
  align-items: center;
  border-radius:9px;
  font-family:Poppins,sans-serif;
  transition:max-height 1.4s ease;
  
`;
export const Text = styled.p`
  max-height: 1190px;
  padding: 0 2.1em 0.7em 1.4em;
  // transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2,0.5);
  white-space: pre-wrap;
  font-weight: 500;
  user-select: none;
  transition:max-height 1.4s ease;
  margin-bottom:0.5rem;
 
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 7;
  // margin-top: 0 !important;
  margin-top:7rem;
  font-size: 38px;
  margin-bottom: -6rem;
  text-align: center;
  color: #070707;
  // font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family:Poppins;
  font-weight:bold;
  // font-style:italic
`;