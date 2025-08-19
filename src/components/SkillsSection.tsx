import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const interests = [
    { icon: '🤖', label: 'AI', description: 'Machine Learning & Neural Networks' },
    { icon: '💻', label: 'Coding', description: 'Full-Stack Development' },
    { icon: '📈', label: 'Finance', description: 'Investment & Trading' },
    { icon: '🌱', label: 'Self-Improvement', description: 'Personal Growth & Mindset' },
  ];

  const skills = [
    { title: 'AI Agents', description: 'Building intelligent assistants and automated systems', level: 85 },
    { title: 'Chatbots', description: 'LLM integration and conversational AI development', level: 90 },
    { title: 'Python & Web Dev', description: 'Backend development and web technologies', level: 80 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground mb-4">Interests & Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Interests Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-title text-foreground mb-8 text-center"
          >
            What I'm Passionate About
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="p-6 text-center h-full bg-card hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 rounded-2xl">
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{interest.label}</h4>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-title text-foreground mb-8 text-center"
          >
            Technical Skills
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="p-6 h-full bg-card hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 rounded-2xl">
                  <h4 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-secondary rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.3 }}
                      viewport={{ once: true }}
                      className="h-2 bg-primary rounded-full"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground text-right">{skill.level}%</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;