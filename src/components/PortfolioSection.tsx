import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import chatbotPrototype from '../assets/chatbot-prototype.jpg';
import aiNotesSummarizer from '../assets/ai-notes-summarizer.jpg';
import selfImprovementDashboard from '../assets/self-improvement-dashboard.jpg';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Chatbot Prototype',
      description: 'An experimental chatbot using LLMs for intelligent conversations and task automation.',
      image: chatbotPrototype,
      technologies: ['Python', 'OpenAI API', 'Streamlit'],
      status: 'Prototype'
    },
    {
      id: 2,
      title: 'AI Notes Summarizer',
      description: 'Tool to condense financial book notes and extract key insights using natural language processing.',
      image: aiNotesSummarizer,
      technologies: ['Python', 'NLP', 'Flask'],
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Self-Improvement Dashboard',
      description: 'Early design of gamified app inspired by Solo Leveling for tracking personal growth and habits.',
      image: selfImprovementDashboard,
      technologies: ['React', 'Node.js', 'MongoDB'],
      status: 'Design Phase'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground mb-4">Portfolio</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my projects and experiments in AI, automation, and personal development technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden bg-card hover:shadow-large transition-all duration-500 border-2 hover:border-primary/30 rounded-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      item.status === 'Prototype' 
                        ? 'bg-primary/80 text-white' 
                        : item.status === 'In Progress'
                        ? 'bg-yellow-500/80 text-white'
                        : 'bg-gray-500/80 text-white'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1 transition-colors">
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Portfolio Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground italic">
            More projects coming soon as I continue to explore and build in the AI space! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;