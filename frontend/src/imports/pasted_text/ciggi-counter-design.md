Design a modern, minimal, and premium web app UI for a product called **"Ciggi Counter"** — a cigarette tracking and habit analytics platform.

---

## 🧠 CONTEXT (IMPORTANT)

This is a real full-stack app with:

* Frontend: React (Vite) + Tailwind CSS
* Backend: FastAPI (Python)
* Auth: JWT-based authentication
* Database: NeonDB (PostgreSQL)

Users:

* Register/Login
* Add daily cigarette count
* Track usage over time
* View analytics (daily + monthly)

Design should reflect a **modern SaaS dashboard**, not a generic app.

---

## 🎨 DESIGN STYLE

* Aesthetic: **Liquid Glass / Frosted Glass UI**
* Feel: Minimal, premium, calming, slightly futuristic
* Avoid clutter — focus on whitespace and clarity
* Use subtle gradients and blur effects
* Rounded corners (12px–20px radius)
* Soft shadows, not harsh ones

---

## 🌗 THEMES

### Light Mode

* Background: soft off-white (#f8fafc)
* Cards: semi-transparent white with blur (glass effect)
* Text: dark gray (#0f172a)
* Accent: soft blue / teal gradient

### Dark Mode

* Background: deep charcoal (#0b0f19)
* Cards: translucent dark glass (blur + opacity)
* Text: light gray/white
* Accent: neon blue / purple gradient

Include a **toggle switch (light/dark mode)** in navbar.

---

## 🧩 MAIN SCREENS

---

### 1️⃣ AUTH SCREEN (Login / Register)

Layout:

* Centered card with glass effect
* Split screen (optional):

  * Left: branding / quote / illustration
  * Right: form

Components:

* Email input
* Password input
* CTA button (Login / Register)
* Toggle between login/register

Style:

* Inputs with soft glow on focus
* Button with gradient + subtle hover animation

---

### 2️⃣ DASHBOARD (MAIN APP)

Layout:

* Top Navbar
* Main content area (grid-based)

---

### 🧭 NAVBAR

* Logo: "🚬 Ciggi Counter"
* Right side:

  * Dark mode toggle
  * Profile avatar

Glass background with blur

---

### 📊 MAIN DASHBOARD CONTENT

#### 🔹 Section 1: Quick Add Card

* Title: "Add Today’s Count"
* Input: number stepper (0–50)
* Button: “+ Add Cig”
* Optional: quick buttons (1, 5, 10)

---

#### 🔹 Section 2: Stats Cards (3–4 cards)

* Today’s count 🚬
* This month total 📅
* Money spent 💸 (optional)
* Streak 🔥

Each card:

* Glass style
* Icon + number + label
* Subtle hover lift

---

#### 🔹 Section 3: Graph (IMPORTANT)

* Line chart (monthly trend)
* X-axis: dates
* Y-axis: cig count
* Smooth curved line

Glass container with padding

---

#### 🔹 Section 4: History List

* List of past entries
* Each row:

  * Date
  * Count
* Minimal separators
* Scrollable card

---

## ✨ MICRO INTERACTIONS

* Button hover: slight scale + glow
* Card hover: lift + shadow
* Toggle: smooth transition
* Graph: animated line draw

---

## 📱 RESPONSIVENESS

* Mobile-first
* Stack layout on small screens
* Floating add button on mobile

---

## 🧱 COMPONENT SYSTEM

Design reusable components:

* Button (primary, secondary)
* Card (glass style)
* Input fields
* Toggle switch
* Chart container

---

## 🎯 DESIGN GOAL

The UI should feel like:

* A premium habit tracker
* Calm, not aggressive
* Slightly addictive to use
* Clean enough for daily usage

---

## 🚀 EXTRA (IF POSSIB
