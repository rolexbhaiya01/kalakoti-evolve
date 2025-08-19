import { motion } from 'framer-motion';
import aiTechIllustration from '../assets/ai-tech-illustration.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-display text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my BCA degree, passionate about building AI agents, 
              LLM chatbots, and exploring how technology can shape the future.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alongside coding, I love reading financial and self-growth books to 
              constantly make myself better. I believe in continuous learning and 
              the power of technology to create meaningful impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['AI & ML', 'Python', 'Web Development', 'Finance', 'Self-Growth'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src={aiTechIllustration}
                alt="AI and Technology Illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <span className="text-2xl">🤖</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <span className="text-xl">💡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;