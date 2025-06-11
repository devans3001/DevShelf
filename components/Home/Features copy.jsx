"use cleint";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Box, ClipboardCheck, Code, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Code Snippets",
    description: "Copy-paste ready utility functions and hooks",
  },
  {
    icon: <Box className="w-5 h-5" />,
    title: "Boilerplates",
    description: "Starter templates for auth, forms, and layouts",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "VS Code Extensions",
    description: "Curated productivity boosters",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: "Best Practices",
    description: "Modern patterns and anti-patterns",
  },
];

function Features() {
  return (
    <section className="container mx-auto px-4 py-20 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything in One Place
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No more digging through documentation or StackOverflow - weve compiled
          the most useful resources for modern web development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
        <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ 
    scale: 1.02,
    transition: { duration: 0.2 }
  }}
  className="relative"
>
  {/* Floating highlight effect */}
  <motion.div
    className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"
    initial={{ opacity: 0 }}
    whileHover={{
      opacity: 1,
      transition: { duration: 0.3 }
    }}
    style={{
      backgroundPosition: 'var(--mouse-x) var(--mouse-y)',
      backgroundSize: '200% 200%'
    }}
  />

  <Card 
    className="h-full relative overflow-hidden"
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    }}
  >
    <CardHeader>
      <div className="flex items-center gap-3">
        <motion.div 
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          {feature.icon}
        </motion.div>
        <CardTitle className="hover:text-primary transition-colors">
          {feature.title}
        </CardTitle>
      </div>
      <CardDescription className="hover:text-foreground/80 transition-colors">
        {feature.description}
      </CardDescription>
    </CardHeader>
  </Card>
</motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
