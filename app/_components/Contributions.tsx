'use client'
import { motion } from 'framer-motion'

const Contributions = () => {
  const contributions = [
    {
      name: 'Omar Elshehawi',
      role: 'Fullstack Development',
      tasks: [
        'User Login/Signup',
        'Error management',
        'Form Validation',
        'Password Hashing',
        'Settings page Init layout',
        'Various Database Updates',
        'Project Showcase Site'
      ]
    },
    {
      name: 'Jonathan Gibbons',
      role: 'Frontend Polish',
      tasks: [
        'Image Taking, Handling, and Saving',
        'Firebase Cloud Storage Setup',
        'Posts and Feed Layout',
        'Like Database Updates',
        'General Layout Improvements'
      ]
    },
    {
      name: 'Zaid Arshad',
      role: 'Frontend Infrastructure',
      tasks: [
        'Server API extension',
        'Location services management',
        'Improved user feedback',
        'Replies',
        'Mapping',
        'Theming',
        'Video Presentations'
      ]
    },
    {
      name: 'Lex Rohweder',
      role: 'Backend Infrastructure',
      tasks: [
        'Main Server Structure',
        'Data Storage',
        'Database Interaction',
        'API creation and management',
        'Schema Creation',
        'Connection Management',
        'Server Hosting'
      ]
    }
  ]

  return (
    <section id="team" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Team Contributions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contributions.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <ul className="list-disc list-inside space-y-2">
                  {member.tasks.map((task, index) => (
                    <li key={index} className="text-gray-300">{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contributions 