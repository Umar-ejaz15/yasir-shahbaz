import React from 'react'
import { motion } from 'framer-motion'

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
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      className=" py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-center text-green-500 mb-12"
        >
          What Our Customers Say
        </motion.h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {[...reviewsData, ...reviewsData].map((review, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-96 p-4"
              >
                <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                      {review.initial}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold">{review.name}</h3>
                      <div className="flex text-green-500">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-zinc-300">{review.review}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0)
          }
          100% {
            transform: translateX(-50%)
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite
        }
      `}</style>
    </motion.div>
  )
}

export default Reviews