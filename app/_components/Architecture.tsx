'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Architecture = () => {
  return (
    <section className="min-h-[50vh] bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Architecture</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* MVVM Diagram */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">MVVM Pattern</h3>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/MVVM.png"
                  alt="MVVM Architecture Diagram"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>

            {/* Threading Diagram */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Threading Model</h3>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/threading.png"
                  alt="Threading Model Diagram"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Architecture 