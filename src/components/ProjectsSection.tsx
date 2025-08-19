import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Personal AI Agents',
      description: 'Exploring intelligent assistants that can automate daily tasks and provide personalized insights.',
      icon: '🤖',
      status: 'In Progress',
      tech: ['Python', 'OpenAI API', 'LangChain']
    },
    {
      title: 'Tech Side Hustles',
      description: 'Learning dropshipping automation and exploring various online business opportunities.',
      icon: '💼',
      status: 'Learning',
      tech: ['E-commerce', 'Automation', 'Analytics']
    },
    {
      title: 'Gamified Self-Improvement App',
      description: 'Building a Solo Leveling-inspired app to gamify personal growth and habit tracking.',
      icon: '🎮',
      status: 'Planning',
      tech: ['React', 'Node.js', 'MongoDB']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground mb-4">What I'm Working On</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group"
            >
              <Card className="p-8 h-full bg-card hover:shadow-large transition-all duration-500 border-2 hover:border-primary/30 rounded-2xl relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:animate-swing">{project.icon}</div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'In Progress' 
                        ? 'bg-primary/20 text-primary' 
                        : project.status === 'Learning'
                        ? 'bg-yellow-500/20 text-yellow-600'
                        : 'bg-gray-500/20 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;