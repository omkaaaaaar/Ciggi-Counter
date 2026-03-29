import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Navbar } from "../components/Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingDown, Award, Cigarette } from "lucide-react";

// Mock data
const mockChartData = [
  { date: "Mar 1", count: 15 },
  { date: "Mar 3", count: 12 },
  { date: "Mar 5", count: 14 },
  { date: "Mar 7", count: 10 },
  { date: "Mar 9", count: 8 },
  { date: "Mar 11", count: 11 },
  { date: "Mar 13", count: 7 },
  { date: "Mar 15", count: 9 },
  { date: "Mar 17", count: 6 },
  { date: "Mar 19", count: 5 },
  { date: "Mar 21", count: 4 },
];

const mockHistory = [
  { date: "Mar 21, 2026", count: 4 },
  { date: "Mar 20, 2026", count: 5 },
  { date: "Mar 19, 2026", count: 5 },
  { date: "Mar 18, 2026", count: 6 },
  { date: "Mar 17, 2026", count: 6 },
  { date: "Mar 16, 2026", count: 7 },
  { date: "Mar 15, 2026", count: 9 },
  { date: "Mar 14, 2026", count: 8 },
  { date: "Mar 13, 2026", count: 7 },
  { date: "Mar 12, 2026", count: 10 },
];

export function Analytics() {
  const weeklyAverage = 7.2;
  const bestStreak = 14;
  const lifetimeTotal = 1247;
  const moneySpent = (lifetimeTotal * 10).toFixed(0); // ₹10 per cigarette

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold">Analytics & Insights</h1>
            <p className="text-muted-foreground mt-2">
              Track your progress and understand your patterns
            </p>
          </motion.div>

          {/* Additional Insights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <InsightCard
              icon={<TrendingDown className="w-5 h-5" />}
              label="Weekly Average"
              value={`${weeklyAverage}/day`}
              gradient="from-primary to-emerald-600"
            />
            <InsightCard
              icon={<Award className="w-5 h-5" />}
              label="Best Streak"
              value={`${bestStreak} days`}
              gradient="from-amber-500 to-orange-500"
            />
            <InsightCard
              icon={<Cigarette className="w-5 h-5" />}
              label="Lifetime Total"
              value={lifetimeTotal}
              gradient="from-teal-500 to-cyan-500"
            />
            <InsightCard
              icon={<span className="text-lg">₹</span>}
              label="Money Spent"
              value={`₹${moneySpent}`}
              gradient="from-secondary to-yellow-600"
            />
          </div>

          {/* Monthly Trend Graph */}
          <GlassCard className="p-6 border-primary/10">
            <h3 className="mb-6 text-primary">Monthly Trend</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockChartData}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="currentColor"
                    opacity={0.1}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="currentColor"
                    opacity={0.5}
                    fontSize={12}
                  />
                  <YAxis stroke="currentColor" opacity={0.5} fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: "12px",
                      backdropFilter: "blur(12px)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="url(#lineGradient)"
                    strokeWidth={3}
                    dot={{ fill: "#10b981", r: 4 }}
                    activeDot={{ r: 6, fill: "#10b981" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          {/* History List */}
          <GlassCard className="p-6 border-primary/10">
            <h3 className="mb-4 text-primary">History</h3>
            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
              {mockHistory.map((entry, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center p-4 rounded-xl hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <span className="text-muted-foreground">{entry.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{entry.count}</span>
                    <Cigarette className="w-4 h-4 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}

interface InsightCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  gradient: string;
}

function InsightCard({ icon, label, value, gradient }: InsightCardProps) {
  return (
    <GlassCard className="p-5 hover:scale-[1.02] transition-transform border-primary/10">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient}`}>
          <div className="text-white">{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
          <p className="text-xl font-bold truncate">{value}</p>
        </div>
      </div>
    </GlassCard>
  );
}