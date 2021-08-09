import React, {useState} from 'react';
import styles from './slider.module.scss';
import firstSlide from '../../../assets/img/slide-one.jpg';
import secondSlide from '../../../assets/img/slide-two.jpg';
import thirdSlide from '../../../assets/img/slide-three.jpg';
import cn from 'classnames';

const slides = [firstSlide, secondSlide, thirdSlide];

function Slider() {
  const [actualSlide, setActualSlide] = useState(0);

  const nextSlide = () => {
    setActualSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setActualSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  };

  return (
    <>
      <div className={styles.promo}>
        <span className={styles.label}>new model</span>
        <img src={slides[actualSlide]} alt="Фото автомобиля" width='600' height='375'/>
      </div>
      <div className={styles.slider}>
        <button className={cn(styles.button)} type='button' onClick={prevSlide} disabled={actualSlide === 0}>
          <span className='visually-hidden'>Кнопка переключения слайдера</span>
        </button>
        <div className={styles.inner}>
          {
            slides.map((slide) => (
              <img
                className={styles.img}
                src={slide}
                alt="Фото автомобиля"
                key={slide}
                width='128'
                height='80'
              />
            ))
          }
        </div>
        <button className={cn(styles.button, styles.button_reverse)} type='button' onClick={nextSlide} disabled={actualSlide === slides.length - 1}>
          <span className='visually-hidden'>Кнопка переключения слайдера</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
