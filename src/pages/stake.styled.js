import styled from 'styled-components';

export const StakeContainer = styled.div`
  background-color: #09080d;
  width: 100vw;
  padding: 10vh 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    text-transform: uppercase;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    background-image: linear-gradient(150deg, var(--secondary-color) 0%, var(--primary-color) 78%);
  }
  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.75rem;
    color: white;
  }
`;

export const StakeCard = styled.div`
  max-width: 750px;
  width: 100%;
  background-color: #16151a;
  border-radius: 15px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  grid-gap: 1.5em;
`;

export const TabHeader = styled.div`
  display: flex;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #09080d;
`;

export const TabHeaderItem = styled.div`
  display: flex;
  background-color: ${props => (props.active ? '#09080d' : 'transparent')};
  border-radius: 10px;
  width: 50%;
  justify-content: center;
  padding: 8px 0;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    width: 350px;
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    a {
      color: #8e8e8e !important;
      text-decoration: underline !important;
      z-index: 5;
    }
  }
`;

export const ContentSection = styled.div`
  display: flex;
  grid-gap: 2.5em;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2.5em;
  span {
    text-align: center;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const FormLabel = styled.div`
  display: flex;
  width: 336px;
  justify-content: space-between;
  span {
    font-size: 12px;
  }
`;

export const FormInput = styled.div`
  padding: 0.25rem 0.5rem;
  background-color: #1f2733 !important;
  border: 1px solid #0a111c !important;
  border-radius: 5px !important;
  height: 55px;
  width: 336px;
  display: grid;
  grid-template-columns: 1fr auto;

  input {
    padding: 0;
    margin: 0;
    font-size: 0.875rem;
    border: none;
    outline: none;
    color: #fff !important;
    height: auto;
  }
  div {
    display: flex;
    align-items: center;
    grid-gap: 0.3rem;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35em 0.65em;
    font-size: 0.85em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    background-color: rgb(108, 117, 125);
    border-radius: 0.25rem;
    width: 44px;
    height: 20px;
  }
`;

export const Icon = styled.div`
  border-radius: 50%;
  background-color: #5a69e1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
`;

export const StyledButton = styled.div`
  outline: none;
  background-image: linear-gradient(150deg, #4528dc 0%, #57048a 78%);
  border-color: transparent;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-image: linear-gradient(150deg, #57048a 0%, #4528dc 78%);
  }
  :active {
    transform: scale(0.85);
  }
`;

export const ButtonLabel = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;

  span {
    font-size: 1rem;
  }

  svg {
    font-size: 1rem !important;
    margin-bottom: 2px;
  }
`;

export const Description = styled.span`
  font-size: 12px;
  color: #8e8e8e !important;
  max-width: 336px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 100%;
`;

export const StyledCard = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  background-color: transparent;
  border: 2px solid #09080d;
  border-radius: 5px;

  hr {
    width: 100%;
    background-color: #5e636e;
    padding: 0;
    margin: 0;
  }
  .top {
    font-size: 20px;
    color: #a1abb9 !important;
  }
  .bottom {
    font-size: 32px;
  }
`;
