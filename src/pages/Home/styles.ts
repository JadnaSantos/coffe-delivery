import styled from 'styled-components';

interface HomeBackgroundProps {
  src: string;
}

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 5.75rem 0;
  position: relative;
`;

export const HomeBackground = styled.div<HomeBackgroundProps>`
  background: url(${props => props.src}) center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(80px);
  position: absolute;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95%;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
    color: ${props => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3rem;
    color: ${props => props.theme['base-subtitle']};
  }

  ul {
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem 2.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }

  @media (max-width: 976px) {
    text-align: center;
    align-items: center;
  }
`;

export const BaseIcon = styled.div`
  padding: 0.5rem;
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  color: ${props => props.theme.background};
`;

export const CartIcon = styled(BaseIcon)`
  background-color: ${props => props.theme['yellow-dark']};
`;

export const PackageIcon = styled(BaseIcon)`
  background-color: ${props => props.theme['base-title']};
`;

export const TimerIcon = styled(BaseIcon)`
  background-color: ${props => props.theme.yellow};
`;

export const CoffeeIcon = styled(BaseIcon)`
  background-color: ${props => props.theme.purple};
`;

export const HomeImage = styled.div`
  @media (max-width: 976px) {
    display: none;
  }
`;

export const OurCoffeeContainer = styled.div`
  padding-bottom: 5rem;

  h1 {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 3rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    h1 {
      display: flex;
      justify-content: center;
    }
  }
`;
