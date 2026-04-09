import { login } from "../../services/auth"; // 👈 add this at top
import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { GlassCard } from "../components/GlassCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Cigarette } from "lucide-react";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("LOGIN CLICKED");

  try {
    const res = await login(email, password);

    console.log("LOGIN RESPONSE:", res);

    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
      navigate("/dashboard");
    } else {
      alert("Login failed ❌");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <motion.div
          className="hidden md:flex flex-col justify-center space-y-6 p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-emerald-600 shadow-lg shadow-primary/30">
              <Cigarette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Ciggi Counter
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Track your habits, understand your patterns, and take control of your journey.
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
            "The secret of change is to focus all of your energy not on fighting the old, but on building the new."
          </blockquote>
        </motion.div>

        {/* Right side - Form */}
        <GlassCard className="p-8 w-full border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-center">
              <div className="md:hidden flex items-center justify-center gap-2 mb-4">
                <Cigarette className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Ciggi Counter</h2>
              </div>
              <h2 className="text-3xl font-bold">
                {isLogin ? "Welcome back" : "Get started"}
              </h2>
              <p className="text-muted-foreground">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="backdrop-blur-sm bg-input-background border-border focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="backdrop-blur-sm bg-input-background border-border focus:ring-2 focus:ring-primary transition-all"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary/30"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}