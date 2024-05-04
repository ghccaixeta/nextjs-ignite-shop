import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import imgage1 from '../assets/camisetas/1.png'
import imgage2 from '../assets/camisetas/2.png'
import imgage3 from '../assets/camisetas/3.png'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


const Button = styled('button',{
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px'
})


export default function Home() {

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides:{
        perView: 3,
        spacing: 48,
      },
      slideChanged() {
        console.log('slide changed')
      },
    },
    [
      // add plugins here
    ]
  )

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
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
      <Product className="keen-slider__slide">
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
      <Product className="keen-slider__slide">
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
      <Product className="keen-slider__slide">
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
