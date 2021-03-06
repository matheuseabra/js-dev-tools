import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media only screen and (max-width: 468px) {
    margin: 0 20px 0 10px;
  }

  @media only screen and (min-width: 600px) {
    margin: 0 20px 0 10px;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 auto;
  }

  @media only screen and (min-width: 968px) {
    margin: 0 auto;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Filter = styled.div`
  cursor: pointer;
  border: none;
  padding: 10px;
  background-color: ${props => props.theme.colors.body};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 0 5px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  animation: 0.35s ease-in-out 0s fadeInUp;
`;

export const CategoryLogo = styled.img`
  background-image: ${({ src }) => src};
  width: 50px;
  height: 50px;
`;

export const CategoryTitle = styled.h2`
  position: relative;
  bottom: 1.5px;
  color: ${props => props.theme.colors.text};
  padding: 1em 0.5em;
`;

export const RepoGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  animation: 0.35s ease-in-out 0s fadeInUp;

  @media only screen and (max-width: 468px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
