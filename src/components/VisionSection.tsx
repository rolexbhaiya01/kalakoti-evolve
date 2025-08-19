import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 0px hsl(var(--primary))",
                "0 0 20px hsl(var(--primary) / 0.3)",
                "0 0 0px hsl(var(--primary))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <h2 className="text-display text-foreground italic font-light leading-relaxed">
              "I want to{' '}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-semibold">
                build
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-semibold">
                learn
              </span>
              , and keep{' '}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent font-semibold">
                evolving
              </span>{' '}
              day by day."
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every day is an opportunity to grow, learn something new, and push the boundaries 
              of what's possible. I'm committed to continuous improvement and making a meaningful 
              impact through technology.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="relative pt-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-primary/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-12 border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-primary rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;