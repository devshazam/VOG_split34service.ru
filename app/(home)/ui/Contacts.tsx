"use client"
import { useEffect , useState} from 'react';
import {Carousel, Image} from 'react-bootstrap';

const imgArray = [["phone", "tel:+79377283649", '/img/phone.png'], ["Max", "https://max.ru/u/f9LHodD0cOIkX6ZznQSDr7YeoscPsjY4GlJo-f3CLeiD_0jrTCvCWeuE_Rw", '/max.webp']]


export default function Contacts() {
  const [img, setImg] = useState(2)

  useEffect(() => {
      setTimeout(() =>{setImg(img + 1)}, 3000)

  }, [img])

  return (

        <div className='fixed bottom-10 right-10 w-content'>
          <a title={imgArray[img % 2][0]} href={imgArray[img % 2][1]} target="_blank"  className='phone-ya'>
            <Image src={imgArray[img % 2][2]} className='w-20 h-20' alt='phone'/>
          </a>
        </div>

   
  );
};
