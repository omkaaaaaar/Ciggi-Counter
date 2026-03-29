import { Cigarette, Moon, Sun, User, BarChart3 } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isAnalytics = location.pathname === "/analytics";

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/dashboard")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Cigarette className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ciggi Counter
            </span>
          </motion.div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Analytics Button */}
            <motion.button
              onClick={() => navigate(isAnalytics ? "/dashboard" : "/analytics")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                isAnalytics
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "hover:bg-accent/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">
                {isAnalytics ? "Dashboard" : "Analytics"}
              </span>
            </motion.button>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-accent/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            {/* Profile */}
            <motion.div
              className="p-2 rounded-full bg-gradient-to-br from-primary to-secondary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}