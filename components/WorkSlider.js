import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const linksMap = {
  '/work1.jpg': 'https://github.com/tossinramen/QuizAI',
  '/work2.jpg': 'https://github.com/tossinramen/tossinpicks',
  '/work3.jpg': 'https://github.com/tossinramen/mini-amazon',
  '/work4.jpg': 'https://github.com/tossinramen/512p2pchat',
  '/work5.jpg': 'https://github.com/tossinramen/animating-mondrian-art-inR',
};

const workSlider = {
  slides: [
    {
      images: [
        { title: 'title', path: '/work1.jpg' },
        { title: 'title', path: '/work2.jpg' },
        { title: 'title', path: '/work3.jpg' },
        { title: 'title', path: '/work4.jpg' },
      ],
    },
    {
      images: [
        { title: 'title', path: '/work5.jpg' },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[480px]"
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer sm:grid-rows-1">
          {slide.images.map((image, imgIndex) => {
            const card = (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imgIndex}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt=""
                    className="w-full h-auto max-w-[180px] sm:max-w-[240px] md:max-w-[280px] xl:max-w-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
      
            return linksMap[image.path] ? (
              <a
                href={linksMap[image.path]}
                target="_blank"
                rel="noopener noreferrer"
                key={imgIndex}
              >
                {card}
              </a>
            ) : (
              card
            );
          })}
        </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
};

export default WorkSlider;
