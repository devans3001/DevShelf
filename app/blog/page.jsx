// app/blog/page.js
"use client";
import { Hammer, Code2, Clock, Construction } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center p-8 rounded-3xl bg-background/50 border border-dashed border-primary/30"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          className="inline-flex p-4 rounded-full bg-primary/10 mb-6"
        >
          <Construction className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Blog Under Construction
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Our team of digital craftsmen are hammering out exceptional content.
          Check back soon for developer insights, tutorials, and industry
          trends!
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: <Hammer className="w-6 h-6 mx-auto" />, text: "Building" },
            { icon: <Code2 className="w-6 h-6 mx-auto" />, text: "Coding" },
            { icon: <Clock className="w-6 h-6 mx-auto" />, text: "Polishing" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="bg-secondary/30 p-4 rounded-xl"
            >
              {item.icon}
              <p className="mt-2 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href="/docs"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-lg hover:shadow-primary/30 transition-all inline-flex items-center gap-2"
          >
            <Code2 className="w-4 h-4" />
            Explore Documentation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
