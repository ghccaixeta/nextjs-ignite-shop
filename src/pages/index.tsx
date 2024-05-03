import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import imgage1 from '../assets/camisetas/1.png'
import imgage2 from '../assets/camisetas/2.png'
import imgage3 from '../assets/camisetas/3.png'


const Button = styled('button',{
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px'
})


export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image
          src={imgage1}
          width={520}
          height={480}
          alt=""
         />
         <footer>
          Camiseta X
          <span>R$ 79,90</span>
         </footer>
      </Product>
      <Product>
        <Image
          src={imgage2}
          width={520}
          height={480}
          alt=""
         />
         <footer>
          Camiseta X
          <span>R$ 79,90</span>
         </footer>
      </Product>
      <Product>
        <Image
          src={imgage3}
          width={520}
          height={480}
          alt=""
         />
         <footer>
          Camiseta X
          <span>R$ 79,90</span>
         </footer>
      </Product>
    </HomeContainer>
  );
}
