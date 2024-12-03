'use client'
import { motion } from 'framer-motion'

const Milestones = () => {
  const milestones = [
    {
      title: 'Project Inception',
      date: 'Initial Pitch',
      description: 'Project idea presentation and team formation',
      videoUrl: 'https://www.youtube.com/embed/kHoy_4lCWHI'
    },
    {
      title: 'First Milestone',
      date: 'Show and Tell 1',
      description: 'Progress update and initial prototype demonstration',
      videoUrl: 'https://www.youtube.com/embed/aCHL9NKNtLA'
    },
    {
      title: 'Second Milestone',
      date: 'Show and Tell 2',
      description: 'Feature implementation and testing results',
      videoUrl: 'https://www.youtube.com/embed/NBzsVF-75fQ'
    },
    {
      title: 'Final Presentation',
      date: 'Project Completion',
      description: 'Final demonstration and project overview',
      videoUrl: 'https://www.youtube.com/embed/JqgNXDbLPOg'
    }
  ]

  return (
    <section id="milestones" className="min-h-screen relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-20 text-center text-white"
        >
          Project Timeline
        </motion.h2>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Path - Hidden on mobile */}
          <div className="hidden md:block">
            <svg
              className="absolute left-1/2 top-0 h-full w-[100px] -translate-x-1/2"
              viewBox="0 0 100 800"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M50,0 Q60,200 40,400 Q20,600 50,800"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              />
            </svg>
          </div>

          {/* Milestones */}
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-32 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Arrow - Hidden on mobile */}
              <div className="hidden md:block">
                <motion.div
                  className={`absolute top-1/2 ${
                    index % 2 === 0 ? 'right-[calc(50%-25px)]' : 'left-[calc(50%-25px)]'
                  } w-[50px] h-[2px] bg-blue-500`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 50 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`absolute top-[-4px] ${
                      index % 2 === 0 ? 'right-0' : 'left-0'
                    } w-3 h-3 bg-blue-500 rounded-full`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className={`bg-gray-800 rounded-lg p-4 md:p-6 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-blue-400 mb-2">{milestone.date}</p>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>

                {/* Video Container with Gradient Border */}
                <div className="relative p-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={milestone.videoUrl}
                      title={milestone.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] md:h-[500px] rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Milestones 