

'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, CircleFadingArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-3 z-50"
        >
          <Button
            onClick={scrollToTop}
            className=" flex items-center gap-2 border-0 p-0 m-0"
            variant="outline"
          >
            <span>

            Scroll to top
            </span>
            <CircleFadingArrowUp size={16} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}