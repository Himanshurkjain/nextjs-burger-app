import styled from 'styled-components';

const StyledButton = styled.div`
  display: inline-block;
  padding: 10px 100px;
  margin-top: 15px;
  background-color: rgb(100, 72, 72);
  color: #ffffff;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;


type ButtonLinkProps = {
    children: React.ReactNode;
    onClickHandler: () => void
}

const ButtonLink = ({ children, onClickHandler}: ButtonLinkProps) => {
  return (
    <StyledButton onClick={onClickHandler}>{children}</StyledButton>
  );
};

export default ButtonLink;