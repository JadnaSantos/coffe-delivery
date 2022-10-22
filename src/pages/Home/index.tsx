import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import coffeDeliveryImg from '../../assets/coffeDeliveryImg.svg';
import { CoffeeList } from './components/CoffeeList';
import backgroud from '../../assets/background.svg';
import {
  CartIcon,
  CoffeeIcon,
  HomeBackground,
  HomeContainer,
  HomeContent,
  HomeImage,
  OurCoffeeContainer,
  PackageIcon,
  TimerIcon,
} from './styles';

export function Home() {
  return (
    <main>
      <HomeContainer className="container">
        <HomeBackground src={backgroud} />
        <HomeContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <CartIcon as={ShoppingCartSimple} weight="fill" />
              Compra simples e segura
            </li>
            <li>
              <PackageIcon as={Package} weight="fill" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <TimerIcon as={Timer} weight="fill" />
              Entrega rápida e rastreada
            </li>
            <li>
              <CoffeeIcon as={Coffee} weight="fill" />O café chega fresquinho
              até você
            </li>
          </ul>
        </HomeContent>
        <HomeImage>
          <img src={coffeDeliveryImg} />
        </HomeImage>
      </HomeContainer>

      <OurCoffeeContainer className="container">
        <h1>Nossos cafés</h1>
        <div>
          <CoffeeList />
        </div>
      </OurCoffeeContainer>
    </main>
  );
}
