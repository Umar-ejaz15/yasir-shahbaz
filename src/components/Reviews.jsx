import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    initial: "J",
    review: "Amazing service! The quality exceeded my expectations. Highly recommended!"
  },
  {
    id: 2,
    name: "Sarah Smith",
    initial: "S",
    review: "Professional team and outstanding results. Will definitely use their services again!"
  },
  {
    id: 3,
    name: "Mike Johnson",
    initial: "M",
    review: "Great experience from start to finish. The team was very responsive and delivered on time."
  },
  {
    id: 4,
    name: "Emma Wilson",
    initial: "E",
    review: "Fantastic work! They went above and beyond my expectations."
  },
  {
    id: 5,
    name: "David Brown",
    initial: "D",
    review: "Very professional and efficient service. Would recommend to anyone!"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    initial: "L",
    review: "Excellent communication and amazing results. Thank you!"
  }
]

const Reviews = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="py-8 sm:py-12 md:py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-500 mb-8 md:mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <Swiper
          slidesPerView="3"
          spaceBetween={16}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide 
              key={review.id}
              className="w-[280px] sm:w-[320px] md:w-96"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-2 sm:p-3 md:p-4"
              >
                <div className="bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-green-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      {review.initial}
                    </div>
                    <div className="ml-3 md:ml-4">
                      <h3 className="text-white text-sm sm:text-base font-semibold">{review.name}</h3>
                      <div className="flex text-green-500 text-sm sm:text-base">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base">{review.review}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Reviews