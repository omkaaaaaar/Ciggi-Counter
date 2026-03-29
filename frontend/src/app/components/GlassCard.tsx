import { motion } from "motion/react";
import { cn } from "./ui/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-xl bg-card border border-border rounded-2xl shadow-lg",
        hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
