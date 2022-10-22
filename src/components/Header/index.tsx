import { MapPin } from 'phosphor-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';
import { useProduct } from '../../contexts/ProductContext';
import { Cart } from '../Cart';
import { HeaderContainer, HeaderContent, Map } from './styles';

export function Header() {
  const { order } = useProduct();
  const navigate = useNavigate();

  function handleLogoClick() {
    navigate('/');
  }

  const isProducts = order.length > 0;

  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent onClick={handleLogoClick} title="Home">
          <img src={logo} alt="Logo" />
        </HeaderContent>
        <div>
          <Map>
            <MapPin size={22} weight="fill" color="#8047F8" />
            <span>São Paulo</span>
          </Map>
          <button
            type="button"
            onClick={() => {
              if (!isProducts) {
                toast.error('Adicione algum produto no carrinho');
              }
              navigate('/checkout');
            }}
          >
            <Cart
              color="#C47F17"
              weight="fill"
              containerColor="yellow"
              isCart
            />
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
}
