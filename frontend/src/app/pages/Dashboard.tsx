import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  Cigarette,
  Calendar,
  Flame,
  Plus,
  TrendingDown,
} from "lucide-react";

export function Dashboard() {
  const [todayCount, setTodayCount] = useState(4);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setTodayCount((prev) => prev + count);
    setCount(1);
  };

  const monthTotal = 142;
  const streak = 7;
  const moneySpent = todayCount * 10;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* HERO SECTION - Primary Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 sm:p-12 min-h-[500px] flex flex-col justify-center relative overflow-hidden border-primary/20">
              {/* Decorative background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              
              <div className="relative z-10 space-y-10">
                {/* Title */}
                <div className="text-center space-y-2">
                  <p className="text-sm uppercase tracking-widest text-primary font-medium">
                    Monthly Insights
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    Your Transition<br />to Clarity.
                  </h2>
                </div>

                {/* Large Circular Button */}
                <div className="flex justify-center">
                  <motion.button
                    onClick={handleAdd}
                    className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-secondary via-yellow-500 to-secondary shadow-2xl shadow-secondary/40 flex items-center justify-center relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-transparent animate-pulse" />
                    <Plus className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10 group-hover:rotate-90 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Secondary info */}
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">
                    Log a Puff
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For a better per-cig.
                  </p>
                </div>

                {/* Today's stats */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-5 border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Today
                    </p>
                    <p className="text-4xl font-bold">{String(todayCount).padStart(2, '0')}</p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-5 border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Savings
                    </p>
                    <p className="text-2xl font-bold text-secondary">₹{moneySpent}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Stats - Secondary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              icon={<Cigarette className="w-5 h-5" />}
              label="This Month"
              value={monthTotal}
              subtext="units"
              gradient="from-emerald-500 to-teal-500"
            />
            <StatCard
              icon={<Flame className="w-5 h-5" />}
              label="Current Streak"
              value={streak}
              subtext="days strong"
              gradient="from-orange-500 to-amber-500"
            />
            <StatCard
              icon={<TrendingDown className="w-5 h-5" />}
              label="Progress"
              value="20%"
              subtext="reduction"
              gradient="from-primary to-emerald-600"
            />
          </div>

          {/* Quick add chips */}
          <div className="flex justify-center gap-3">
            {[1, 5, 10].map((num) => (
              <motion.button
                key={num}
                onClick={() => {
                  setCount(num);
                  setTodayCount((prev) => prev + num);
                }}
                className="px-6 py-3 rounded-xl backdrop-blur-sm bg-primary/10 hover:bg-primary/20 transition-all border border-primary/30 text-primary font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                +{num}
              </motion.button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext?: string;
  gradient: string;
}

function StatCard({ icon, label, value, subtext, gradient }: StatCardProps) {
  return (
    <GlassCard className="p-6 hover:scale-[1.02] transition-transform border-primary/10">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient}`}>
            <div className="text-white">{icon}</div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">{value}</p>
            {subtext && (
              <p className="text-xs text-muted-foreground">{subtext}</p>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </GlassCard>
  );
}