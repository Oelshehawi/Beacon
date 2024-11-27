'use client'
import { motion } from 'framer-motion'

const Project = () => {
  const features = [
    {
      title: 'Mobile-First Design',
      items: [
        'Native Android application built with Kotlin',
        'Material Design components for modern UI',
        'Responsive layout for different screen sizes'
      ]
    },
    {
      title: 'Real-Time Location Services',
      items: [
        'Google Maps integration for precise location tracking',
        'Dynamic post radius visualization',
        'Location permission handling'
      ]
    },
    {
      title: 'Media Integration',
      items: [
        'Firebase Storage for image uploads',
        'Image compression and optimization',
        'Secure file handling'
      ]
    },
    {
      title: 'Authentication Flow',
      items: [
        'Persistent login sessions',
        'Secure credential management',
        'User profile management'
      ]
    }
  ]

  return (
    <section id="project" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">About Beacon</h2>
          <p className="text-lg mb-12">
            Beacon is a local social network that revolutionizes how we connect with our community through location-based interactions.
          </p>

          {/* Features Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/20"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            {/* Features */}
            <div className="space-y-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-[-8px] top-3 w-4 h-4 bg-blue-500 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-gray-800 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {feature.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (itemIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="text-gray-300"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Project 