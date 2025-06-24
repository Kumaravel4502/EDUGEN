Repository: kumaravel4502/edugen
Files analyzed: 65

Estimated tokens: 93.1k

Directory structure:
└── kumaravel4502-edugen/
    ├── README.md
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── index.jsx
        ├── Routes.jsx
        ├── API/
        │   ├── BlogData.jsx
        │   ├── BlogDetailData.jsx
        │   ├── CourseData.jsx
        │   ├── Data.jsx
        │   └── TeamData.jsx
        ├── Assets/
        │   ├── banner-shape1.webp
        │   ├── banner-shape8.webp
        │   └── banner1.webp
        ├── Components/
        │   ├── index.js
        │   ├── AboutChooseUs/
        │   │   └── AboutChooseUs.jsx
        │   ├── AboutSection/
        │   │   └── AboutSection.jsx
        │   ├── AboutUsPage/
        │   │   └── AboutUs.jsx
        │   ├── Background-Video/
        │   │   └── BackgroundVideo.jsx
        │   ├── Blog/
        │   │   └── Blog.jsx
        │   ├── Blog Details/
        │   │   └── BlogDetails.jsx
        │   ├── BlogGrid/
        │   │   └── BlogGrid.jsx
        │   ├── BlogStandard/
        │   │   └── BlogStandard.jsx
        │   ├── Choose/
        │   │   └── Choose.jsx
        │   ├── Contact/
        │   │   └── Contact.jsx
        │   ├── Course/
        │   │   └── Course.jsx
        │   ├── CourseCard/
        │   │   └── CourseCard.jsx
        │   ├── CourseCatalog/
        │   │   └── CourseCatalog.jsx
        │   ├── CourseCategory/
        │   │   └── CourseCategory.jsx
        │   ├── CourseCategoryCard/
        │   │   └── CourseCategoryCard.jsx
        │   ├── CourseDetails/
        │   │   └── CourseDetails.jsx
        │   ├── CourseGrid/
        │   │   └── CourseGrid.jsx
        │   ├── CourseList/
        │   │   └── CourseList.jsx
        │   ├── Email/
        │   │   └── Email.jsx
        │   ├── Footer/
        │   │   └── Footer.jsx
        │   ├── Header/
        │   │   └── Header.jsx
        │   ├── Hero/
        │   │   └── Hero.jsx
        │   ├── Layout/
        │   │   └── Layout.jsx
        │   ├── LiveClasses/
        │   │   └── LiveClasses.jsx
        │   ├── LoadingScreen/
        │   │   └── LoadingScreen.jsx
        │   ├── LoadingSpinner/
        │   │   └── LoadingSpinner.jsx
        │   ├── NavBar/
        │   │   └── NavBar.jsx
        │   ├── NotFound/
        │   │   └── NotFound.jsx
        │   ├── OurTeamMember/
        │   │   └── OurTeamMember.jsx
        │   ├── PrivacyPolicy/
        │   │   └── PrivacyPolicy.jsx
        │   ├── RouteWrapper/
        │   │   └── RouteWrapper.jsx
        │   ├── StatsCounter/
        │   │   └── StatsCounter.jsx
        │   ├── TeamDetails/
        │   │   └── TeamDetails.jsx
        │   ├── TeamMembers/
        │   │   ├── TeamMemberDetail.jsx
        │   │   ├── TeamMemberDetail2.jsx
        │   │   └── TeamMembers.jsx
        │   ├── TeamSection/
        │   │   └── OurTeam.jsx
        │   ├── TermsConditions/
        │   │   └── TermsConditions.jsx
        │   ├── Termsonditions/
        │   │   └── TermsCondition.jsx
        │   └── Testimonials/
        │       └── Testimonial.jsx
        ├── context/
        │   ├── LoadingContext.jsx
        │   └── TeamContext.jsx
        ├── hooks/
        │   └── useCounter.js
        ├── lib/
        │   └── utils.ts
        └── services/
            └── teamService.js


================================================
FILE: README.md
================================================
[[# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
](https://gitdocs1.s3.amazonaws.com/digests/kumaravel4502-edugen/c0001938-2883-4fb1-9bf5-b60fd4550689.txt)](https://gitdocs1.s3.amazonaws.com/digests/kumaravel4502-edugen/c0001938-2883-4fb1-9bf5-b60fd4550689.txt)



================================================
FILE: components.json
================================================
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}


================================================
FILE: eslint.config.js
================================================
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]



================================================
FILE: index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Edugen - Education & Online Learning</title>
  </head>
  <body>
    <div id="root">
    </div>
    <script type="module" src="./src/index.jsx"></script>
  </body>
</html>



================================================
FILE: package.json
================================================
{
  "name": "intern-work",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@fortawesome/free-brands-svg-icons": "^6.7.2",
    "@fortawesome/free-regular-svg-icons": "^6.7.2",
    "@fortawesome/free-solid-svg-icons": "^6.7.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@mui/material": "^7.1.0",
    "@tailwindcss/vite": "^4.0.0",
    "class-variance-authority": "^0.7.1",
    "classnames": "^2.5.1",
    "clsx": "^2.1.1",
    "color-thief-browser": "^2.0.2",
    "lucide-react": "^0.474.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.6.0",
    "styled-components": "^6.1.18",
    "tailwind-merge": "^3.2.0",
    "tailwindcss": "^4.0.0",
    "uuid": "^11.0.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "kill-port": "^2.0.1",
    "tw-animate-css": "^1.2.9",
    "vite": "^6.0.5"
  }
}



================================================
FILE: tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bounceText: {
          "0%, 100%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
            textShadow: "2px 2px 8px rgba(138, 71, 203, 0.5)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            textShadow: "2px 2px 4px rgba(138, 71, 203, 0.3)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: ".8",
            transform: "scale(0.95)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        bounce: "bounce 1s infinite",
        bounceText: "bounceText 0.5s ease infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 3s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};



================================================
FILE: vite.config.js
================================================
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});




================================================
FILE: src/App.jsx
================================================
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';
import { LoadingScreen } from './Components';
import NavBar from './Components/NavBar/NavBar';
import AppRoutes from './Routes';
// Import other components as needed

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        // In a real app, you might want to wait for important resources to load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show loading screen for 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <LoadingProvider>
            <LoadingScreen
                isLoading={isLoading}
                onLoadingComplete={() => console.log('Loading complete')}
            />
            <Router>
                <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                    <NavBar />
                    <AppRoutes />
                </div>
            </Router>
        </LoadingProvider>
    );
};

export default App; 


================================================
FILE: src/index.css
================================================
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap");
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/* .banner {
  background-image: url("https://demo.themeies.com/edugen/wp-content/uploads/2024/09/banner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
} */

.sub-title {
  background: var(
    --Gradient,
    linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%)
  );
  background-clip: text;
  font-weight: 700;
  color: transparent;
}

.sub-titlecontent {
  background: var(
    --Gradient,
    linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%)
  );
  background-clip: text;
  color: transparent;
}

.Exp {
  background: var(
    --Gradient,
    linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%)
  );

  font-weight: 700;
}

.video {
  /* background-image: url('https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video1-scaled-1.jpg'); */
  height: 80vh;
  background-repeat: no-repeat;
}

.faq-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #8a47cb;
  /* background-image: linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%); */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
.faq-button svg {
  height: 1.5em;
  fill: white;
}

:hover.butt {
  background-image: linear-gradient(100deg, #0063f4 7.82%, #00f0aa 87.12%);
}

.input-wrapper {
  width: fit-content;
  height: 45px;
  border-radius: 10px;
  padding: 15px;
  margin-right: 40px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}

.icon {
  width: 30px;
  fill: rgb(0, 0, 0);
  margin-left: 8px;
  transition: all 0.3s;
}
.input {
  max-width: 190px;
  height: 100%;
  border: none;
  outline: none;
  padding: 20px;
  background-color: #ffffff;
  color: black;
  font-size: 1.3em;
}
.input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #292524 inset;
  -webkit-text-fill-color: #ffffff;
}
.Subscribe-btn {
  height: 100%;
  width: 150px;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  background-color: rgb(0, 0, 0);
  font-weight: 500;
  overflow: hidden;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
}

.input-wrapper:active .icon {
  transform: scale(1.3);
}

.Subscribe-btn:active {
  transform: scale(0.9);
}

.text1 {
  font-family: "Lexend", serif;
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}



================================================
FILE: src/index.jsx
================================================
import ReactDOM from "react-dom/client";
import "../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TeamProvider } from "./context/TeamContext";
import { LoadingProvider } from "./context/LoadingContext";

// Import all components from barrel file
import {
  Layout,
  AboutUs,
  Contact,
  NotFound,
  CourseCategory,
  AboutSection,
  BackgroundVideo,
  Course,
  Choose,
  TeamMembers,
  Email,
  Testimonial,
  LiveClasses,
  Blog,
  Footer,
  Header,
  TeamDetails,
  OurTeamMember,
  RouteWrapper,
  PrivacyPolicy,
  TermsCondition,
  CourseGrid,
  CourseList,
  CourseDetails,
  CourseCatalog,
  BlogStandard,
} from "./Components";
import BlogGrid from "./Components/BlogGrid/BlogGrid";
import BlogDetails from "./Components/Blog Details/BlogDetails";

const HomePage = () => {
  return (
    <>
      <Header />
      <CourseCategory />
      <AboutSection />
      <BackgroundVideo />
      <Course />
      <Choose />
      <TeamMembers />
      {/* <OurTeamMember /> */}
      <Email />
      <Testimonial />
      <LiveClasses />
      <Blog />
      <Footer />
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RouteWrapper><HomePage /></RouteWrapper>,
  },
  {
    element: <Layout />,
    children: [
      { path: "/about-us", element: <RouteWrapper><AboutUs /></RouteWrapper> },
      { path: "/our-team", element: <RouteWrapper><OurTeamMember /></RouteWrapper> },
      { path: "/our-team/:id", element: <RouteWrapper><TeamDetails /></RouteWrapper> },
      { path: "/team-details", element: <RouteWrapper><TeamDetails /></RouteWrapper> },
      { path: "/course-grid", element: <RouteWrapper><CourseGrid /></RouteWrapper> },
      { path: "/course-list", element: <RouteWrapper><CourseList /></RouteWrapper> },
      { path: "/course-details/:id", element: <RouteWrapper><CourseDetails /></RouteWrapper> },
      { path: "/courses", element: <RouteWrapper><CourseCatalog /></RouteWrapper> },
      { path: "/privacy-policy", element: <RouteWrapper><PrivacyPolicy /></RouteWrapper> },
      { path: "/terms-conditions", element: <RouteWrapper><TermsCondition /></RouteWrapper> },
      { path: "/contact", element: <RouteWrapper><Contact /></RouteWrapper> },
      { path: "/blog", element: <RouteWrapper><BlogStandard /></RouteWrapper> },
      { path: "/blog-standard", element: <RouteWrapper><BlogStandard /></RouteWrapper> },
      { path: "/blog-grid", element: <RouteWrapper><BlogGrid /></RouteWrapper> },
      { path: "/blog-details", element: <RouteWrapper><BlogDetails /></RouteWrapper> },
      { path: "/blog-details/:id", element: <RouteWrapper><BlogDetails /></RouteWrapper> },
      { path: "/404", element: <RouteWrapper><NotFound /></RouteWrapper> },
      { path: "*", element: <RouteWrapper><NotFound /></RouteWrapper> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <TeamProvider>
    <LoadingProvider>
      <RouterProvider router={Router} />
    </LoadingProvider>
  </TeamProvider>
);



================================================
FILE: src/Routes.jsx
================================================
import { Routes, Route } from "react-router-dom";
import RouteWrapper from "./Components/RouteWrapper/RouteWrapper";

// Import all pages/components that need routing
import Home from "./Components/HomePage/Home";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import CourseCatalog from "./Components/CourseCatalog/CourseCatalog";
import BlogStandard from "./Components/BlogStandard/BlogStandard";
import BlogGrid from "./Components/BlogGrid/BlogGrid";
import BlogDetails from "./Components/Blog Details/BlogDetails";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";
import OurTeam from "./Components/TeamSection/OurTeam";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<RouteWrapper><Home /></RouteWrapper>} />
      <Route path="/about-us" element={<RouteWrapper><AboutUs /></RouteWrapper>} />
      <Route path="/contact" element={<RouteWrapper><Contact /></RouteWrapper>} />

      {/* Course routes */}
      <Route path="/courses" element={<RouteWrapper><CourseCatalog /></RouteWrapper>} />
      <Route path="/courses/:id" element={<RouteWrapper><CourseDetails /></RouteWrapper>} />
      <Route path="/course-grid" element={<RouteWrapper><CourseCatalog view="grid" /></RouteWrapper>} />
      <Route path="/course-list" element={<RouteWrapper><CourseCatalog view="list" /></RouteWrapper>} />

      {/* Blog routes */}
      <Route path="/blog" element={<RouteWrapper><BlogStandard /></RouteWrapper>} />
      <Route path="/blog-grid" element={<RouteWrapper><BlogGrid /></RouteWrapper>} />
      <Route path="/blog-details/:id" element={<RouteWrapper><BlogDetails /></RouteWrapper>} />

      {/* Other pages */}
      <Route path="/our-team" element={<RouteWrapper><OurTeam /></RouteWrapper>} />
      <Route path="/privacy-policy" element={<RouteWrapper><PrivacyPolicy /></RouteWrapper>} />
      <Route path="/terms-conditions" element={<RouteWrapper><TermsConditions /></RouteWrapper>} />

      {/* 404 Not Found route */}
      <Route path="/not-found" element={<RouteWrapper><NotFound /></RouteWrapper>} />
      <Route path="*" element={<RouteWrapper><NotFound /></RouteWrapper>} />
    </Routes>
  );
};

export default AppRoutes; 


================================================
FILE: src/API/BlogData.jsx
================================================
export const BlogData = [
  {
    id: 1,
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog9.jpg",
    Description: "Co-Education Makes You Respect The People",
  },
  {
    id: 2,
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog10.jpg",
    Description: "Professional Ceramic Maudling for Beginners",
  },
  {
    id: 3,
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog11.jpg",
    Description: "Education Is About Create Leaders For Tomorrow",
  },
];



================================================
FILE: src/API/BlogDetailData.jsx
================================================
export const BlogDetailData = [
    {
        id: 1,
        title: "Co-Education Makes You Respect The People",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog9.jpg",
        category: "Education",
        date: "September 29, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team1.jpg"
        },
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at semper magna. Sed at eleifend ligula. Nullam laoreet, ligula a commodo condimentum.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at semper magna. Sed at eleifend ligula. Nullam laoreet, ligula a commodo condimentum, lorem urna scelerisque felis, vel pharetra justo libero vel eros. Praesent gravida vel velit ut ultrices. Nullam sit amet scelerisque metus, in lacinia risus. Proin eu lectus ac sapien congue porttitor eu ut purus.",
        comments: 3,
        tags: ["Education", "Learning", "Classroom"]
    },
    {
        id: 2,
        title: "Professional Ceramic Maudling for Beginners",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog10.jpg",
        category: "Art & Design",
        date: "September 15, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg"
        },
        excerpt: "Suspendisse potenti. Donec at dui in sapien mattis efficitur in non dui. Quisque ut lacus enim. Proin vel leo pretium, pretium enim eget.",
        content: "Suspendisse potenti. Donec at dui in sapien mattis efficitur in non dui. Quisque ut lacus enim. Proin vel leo pretium, pretium enim eget, lacinia libero. Donec eleifend, justo vel volutpat fringilla, libero justo pellentesque purus, vel dignissim leo augue a turpis. Nullam vehicula ornare nisi eget posuere.",
        comments: 5,
        tags: ["Art", "Ceramic", "Design", "Crafts"]
    },
    {
        id: 3,
        title: "Education Is About Create Leaders For Tomorrow",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog11.jpg",
        category: "Leadership",
        date: "September 10, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg"
        },
        excerpt: "Vivamus sodales tellus eu libero sollicitudin, vitae tincidunt mauris commodo. Duis viverra elit at mi venenatis, vel commodo sem interdum.",
        content: "Vivamus sodales tellus eu libero sollicitudin, vitae tincidunt mauris commodo. Duis viverra elit at mi venenatis, vel commodo sem interdum. Sed ut metus quis magna pulvinar dictum. Sed commodo nibh sit amet accumsan semper. Vestibulum eget orci non nisi tempor placerat vel sit amet velit. Sed tempus scelerisque nulla, vel congue dui dignissim nec.",
        comments: 8,
        tags: ["Leadership", "Education", "Future"]
    },
    {
        id: 4,
        title: "Mastering Digital Marketing for Small Businesses",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog1.jpg",
        category: "Marketing",
        date: "September 5, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team4.jpg"
        },
        excerpt: "Curabitur scelerisque lorem eget purus dictum, vel vulputate risus tempus. Morbi tincidunt aliquam eros, vel eleifend arcu ullamcorper sit amet.",
        content: "Curabitur scelerisque lorem eget purus dictum, vel vulputate risus tempus. Morbi tincidunt aliquam eros, vel eleifend arcu ullamcorper sit amet. Nunc eu augue non enim porttitor feugiat. Aenean non dolor ut ipsum egestas euismod. Maecenas elementum volutpat sem id posuere. Vivamus egestas dapibus dolor, ac aliquam ipsum elementum in.",
        comments: 12,
        tags: ["Marketing", "Digital", "Business"]
    },
    {
        id: 5,
        title: "The Importance of Early Childhood Education",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog2.jpg",
        category: "Education",
        date: "August 28, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team5.jpg"
        },
        excerpt: "Maecenas luctus massa sit amet mauris eleifend, eu vehicula orci finibus. Etiam cursus ligula ut purus faucibus facilisis. Aenean molestie elit id.",
        content: "Maecenas luctus massa sit amet mauris eleifend, eu vehicula orci finibus. Etiam cursus ligula ut purus faucibus facilisis. Aenean molestie elit id tristique condimentum. Proin pharetra eros vel orci ultricies, eu finibus nisl semper. Ut in metus urna. Integer et mauris cursus, auctor orci non, porttitor velit. Duis hendrerit et nisi ac iaculis.",
        comments: 6,
        tags: ["Education", "Childhood", "Learning"]
    },
    {
        id: 6,
        title: "Web Development Trends to Watch in 2025",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/blog3.jpg",
        category: "Technology",
        date: "August 20, 2024",
        author: {
            name: "Admin",
            avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team6.jpg"
        },
        excerpt: "Pellentesque nec odio vel mi bibendum eleifend. Quisque congue tortor at magna lacinia, quis consequat eros dignissim. Nulla facilisi.",
        content: "Pellentesque nec odio vel mi bibendum eleifend. Quisque congue tortor at magna lacinia, quis consequat eros dignissim. Nulla facilisi. Donec ut neque tortor. Suspendisse at lectus ac purus lacinia accumsan nec a tellus. Cras eget ex eget lectus auctor ultrices vel ac libero. Morbi blandit massa ut metus ullamcorper, sed aliquet purus accumsan.",
        comments: 15,
        tags: ["Technology", "Web Development", "Trends"]
    }
]; 


================================================
FILE: src/API/CourseData.jsx
================================================
export const CourseData = [
  {
    id: 1,
    title: "Basic Fundamentals of Interior & Graphics Design",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",
    price: 0, // Free
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: true,
    category: "Web Development",
    lastUpdated: "25 February, 2024",
    instructor: {
      name: "Natasha Rajput",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg",
      position: "Senior Instructor"
    },
    duration: "2h 36m",
    level: "Intermediate",
    language: "English",
    enrolled: "26 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to the Course",
        duration: "30 min",
        isUnlocked: true
      },
      {
        title: "Understanding Design Principles",
        duration: "45 min",
        isUnlocked: false
      },
      {
        title: "Basic Color Theory",
        duration: "1h 15m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Paper & Pencil",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 2,
    title: "Increasing Engagement with Instagram & Facebook",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.33,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Digital Marketing",
    lastUpdated: "18 March, 2024",
    instructor: {
      name: "Daniel Smith",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg",
      position: "Marketing Expert"
    },
    duration: "4h 15m",
    level: "Beginner",
    language: "English",
    enrolled: "35 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to Social Media Marketing",
        duration: "45 min",
        isUnlocked: true
      },
      {
        title: "Instagram Marketing Fundamentals",
        duration: "1h 30m",
        isUnlocked: false
      },
      {
        title: "Facebook Ads and Analytics",
        duration: "2h",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Social Media Accounts",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 3,
    title: "Introduction to Color Theory & Basic UI/UX",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.05,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Design",
    lastUpdated: "10 January, 2024",
    instructor: {
      name: "Julia B. Corbin",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
      position: "UI/UX Designer"
    },
    duration: "3h 45m",
    level: "Intermediate",
    language: "English",
    enrolled: "42 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Understanding Color Psychology",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Color Schemes and Palettes",
        duration: "1h 15m",
        isUnlocked: false
      },
      {
        title: "Applying Color Theory to UI/UX",
        duration: "1h 30m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 4,
    title: "Financial Security Thinking and Principles Theory",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 0, // Free
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: true,
    category: "Finance",
    lastUpdated: "5 April, 2024",
    instructor: {
      name: "Robert Johnson",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team1.jpg",
      position: "Finance Specialist"
    },
    duration: "5h 20m",
    level: "Advanced",
    language: "English",
    enrolled: "18 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to Financial Security",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Risk Management Principles",
        duration: "2h",
        isUnlocked: false
      },
      {
        title: "Building a Financial Security Plan",
        duration: "2h 20m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Spreadsheet Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 5,
    title: "Logo Design: From Concept to Presentation",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses5.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 10.50,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Graphic Design",
    lastUpdated: "12 March, 2024",
    instructor: {
      name: "Alex Crawford",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team14.jpg",
      position: "Graphic Designer"
    },
    duration: "6h 10m",
    level: "Beginner",
    language: "English",
    enrolled: "55 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to Logo Design",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Sketching and Concept Development",
        duration: "2h",
        isUnlocked: false
      },
      {
        title: "Digital Execution and Presentation",
        duration: "3h 10m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 6,
    title: "Professional Ceramic Molding for Beginners",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.33,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Arts & Crafts",
    lastUpdated: "28 February, 2024",
    instructor: {
      name: "Cheryl J. Solomon",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team12.jpg",
      position: "Ceramic Artist"
    },
    duration: "8h 45m",
    level: "Beginner",
    language: "English",
    enrolled: "33 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to Ceramic Materials",
        duration: "1h 30m",
        isUnlocked: true
      },
      {
        title: "Basic Molding Techniques",
        duration: "3h 15m",
        isUnlocked: false
      },
      {
        title: "Firing and Glazing",
        duration: "4h",
        isUnlocked: false
      }
    ],
    requirements: [
      "Ceramic Materials",
      "Basic Tools",
      "Work Space"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 7,
    title: "Introduction to Color Theory & Basic UI/UX",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.05,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Design",
    lastUpdated: "10 January, 2024",
    instructor: {
      name: "Julia B. Corbin",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
      position: "UI/UX Designer"
    },
    duration: "3h 45m",
    level: "Intermediate",
    language: "English",
    enrolled: "42 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Understanding Color Psychology",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Color Schemes and Palettes",
        duration: "1h 15m",
        isUnlocked: false
      },
      {
        title: "Applying Color Theory to UI/UX",
        duration: "1h 30m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",

      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 8,
    title: "Introduction to Color Theory & Basic UI/UX",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.05,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Design",
    lastUpdated: "10 January, 2024",
    instructor: {
      name: "Julia B. Corbin",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
      position: "UI/UX Designer"
    },
    duration: "3h 45m",
    level: "Intermediate",
    language: "English",
    enrolled: "42 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Understanding Color Psychology",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Color Schemes and Palettes",
        duration: "1h 15m",
        isUnlocked: false
      },
      {
        title: "Applying Color Theory to UI/UX",
        duration: "1h 30m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 9,
    title: "Introduction to Color Theory & Basic UI/UX",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.05,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: true,
    category: "Design",
    lastUpdated: "10 January, 2024",
    instructor: {
      name: "Julia B. Corbin",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
      position: "UI/UX Designer"
    },
    duration: "3h 45m",
    level: "Intermediate",
    language: "English",
    enrolled: "42 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Understanding Color Psychology",
        duration: "1h",
        isUnlocked: true
      },
      {
        title: "Color Schemes and Palettes",
        duration: "1h 15m",
        isUnlocked: false
      },
      {
        title: "Applying Color Theory to UI/UX",
        duration: "1h 30m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  }
  ,
  {
    id: 10,
    title: "Basic Fundamentals of Interior & Graphics Design",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 0, // Free
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: true,
    category: "Web Development",
    lastUpdated: "25 February, 2024",
    instructor: {
      name: "Natasha Rajput",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg",
      position: "Senior Instructor"
    },
    duration: "2h 36m",
    level: "Intermediate",
    language: "English",
    enrolled: "26 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to the Course",
        duration: "30 min",
        isUnlocked: true
      },
      {
        title: "Understanding Design Principles",
        duration: "45 min",
        isUnlocked: false
      },
      {
        title: "Basic Color Theory",
        duration: "1h 15m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Paper & Pencil",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 11,
    title: "Increasing Engagement with Instagram & Facebook",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
    price: 24.33,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: false,
    category: "Digital Marketing",
    lastUpdated: "18 March, 2024",
    instructor: {
      name: "Daniel Smith",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg",
      position: "Marketing Expert"
    },
    duration: "4h 15m",
    level: "Beginner",
    language: "English",
    enrolled: "35 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Introduction to Social Media Marketing",
        duration: "45 min",
        isUnlocked: true
      },
      {
        title: "Instagram Marketing Fundamentals",
        duration: "1h 30m",
        isUnlocked: false
      },
      {
        title: "Facebook Ads and Analytics",
        duration: "2h",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Social Media Accounts",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
  {
    id: 12,
    title: "Introduction to Color Theory & Basic UI/UX",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
    smallImage: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg",

    price: 24.05,
    lessons: 2,
    students: "4k",
    rating: 5,
    isFree: true,
    category: "Design",
    lastUpdated: "10 January, 2024",
    instructor: {
      name: "Julia B. Corbin",
      avatar: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
      position: "UI/UX Designer"
    },
    duration: "3h 45m",
    level: "Intermediate",
    language: "English",
    enrolled: "42 Students",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    curriculum: [
      {
        title: "Understanding Color Psychology",
        duration: "1h",
        isUnlocked: false
      },
      {
        title: "Color Schemes and Palettes",
        duration: "1h 15m",
        isUnlocked: false
      },
      {
        title: "Applying Color Theory to UI/UX",
        duration: "1h 30m",
        isUnlocked: false
      }
    ],
    requirements: [
      "Computer/Mobile",
      "Design Software",
      "Internet Connect"
    ],
    features: [
      "Digital skill empowerment",
      "Expert-led courses",
      "Career guidance",
      "Supportive learning",
      "Life-changing digital education"
    ]
  },
];




================================================
FILE: src/API/Data.jsx
================================================
export const Data = [
  {
    id: 1,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories1.svg",
    title: "Web Design",
    description: "78 Courses",
    bg: "#FFEBDF",
  },
  {
    id: 2,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories8.svg",
    title: "Digital Marketing",
    description: "78 Courses",
    bg: "#EFFFDF",
  },
  {
    id: 3,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories9.svg",
    title: "Data Science",
    description: "78 Courses",
    bg: "#FFEBDF",
  },
  {
    id: 4,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories4.svg",
    title: "Software Development",
    description: "78 Courses",
    bg: "#EFFFDF",
  },
  {
    id: 5,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories5.svg",
    title: "Graphic Design",
    description: "78 Courses",
    bg: "#FFEBDF",
  },
  {
    id: 6,
    OuterImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories-bg-shape.svg",
    InnerImage:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/categories6.svg",
    title: "Network Administration",
    description: "78 Courses",
    bg: "#EFFFDF",
  },
];



================================================
FILE: src/API/TeamData.jsx
================================================
export const TeamData = [
  {
    id: 1,
    name: "John Mack",
    designation: "Lecturer",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg",
    linkedin: "https://www.linkedin.com/in/JohnMack/",
    github: "https://github.com/JohnMack",
    google: "https://www.google.com/search?q=JohnMack",
  },
  {
    id: 2,
    name: "Tim R. Moyer",
    designation: "Lecturer",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team1.jpg",
    linkedin: "https://www.linkedin.com/in/TimRMoyer/",
    github: "https://github.com/TimRMoyer",
    google: "https://www.google.com/search?q=TimRMoyer",
  },
  {
    id: 3,
    name: "Rsoy Rose",
    designation: "Lecturer",
    image:
      "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg",
    linkedin: "https://www.linkedin.com/in/RsoyRose/",
    github: "https://github.com/RsoyRose",
    google: "https://www.google.com/search?q=RsoyRose",
  },
];

export const TeamData2 = [
  {
    id: 1,
    name: "John Mack",
    position: "Senior Lecturer",
    designation: "Computer Science Department",
    description: "Professor & Chair of Department of Computer Science at Harvard University. Leads the elite research team.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team2.jpg",
    email: "john.mack@example.com",
    location: "422 Science Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/JohnMack/",
    github: "https://github.com/JohnMack",
    google: "https://www.google.com/search?q=JohnMack",
    stats: {
      students: 75,
      programs: 30,
      awards: 12
    },
    featuredCourses: [
      {
        id: 1,
        title: "Introduction to Digital Marketing",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",

        price: 27.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      },
      {
        id: 2,
        title: "Full Stack Web Development Bootcamp",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
        price: 24.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      }
    ]
  },
  {
    id: 2,
    name: "Tim R. Moyer",
    position: "Professor",
    designation: "Digital Marketing",
    description: "Leading expert in digital marketing strategies and social media optimization. Passionate about helping students succeed in the digital world.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team1.jpg",
    email: "tim.moyer@example.com",
    location: "315 Marketing Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/TimRMoyer/",
    github: "https://github.com/TimRMoyer",
    google: "https://www.google.com/search?q=TimRMoyer",
    stats: {
      students: 52,
      programs: 18,
      awards: 12
    },
    featuredCourses: [
      {
        id: 3,
        title: "Advanced Digital Marketing Strategies",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
        price: 29.00,
        duration: "5h 45m",
        lessons: 3.2,
        rating: 4.8
      },
      {
        id: 4,
        title: "Social Media Marketing Mastery",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
        price: 32.00,
        duration: "6h 15m",
        lessons: 4.0,
        rating: 4.7
      }
    ]
  },
  {
    id: 3,
    name: "Rsoy Rose",
    position: "Associate Professor",
    designation: "Web Development",
    description: "Full-stack web development expert with over 10 years of industry experience. Specializes in modern web technologies and frameworks.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team3.jpg",
    email: "rsoy.rose@example.com",
    location: "508 Tech Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/RsoyRose/",
    github: "https://github.com/RsoyRose",
    google: "https://www.google.com/search?q=RsoyRose",
    stats: {
      students: 38,
      programs: 15,
      awards: 6
    },
    featuredCourses: [
      {
        id: 5,
        title: "Modern JavaScript Development",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses5.jpg",
        price: 25.00,
        duration: "4h 30m",
        lessons: 2.5,
        rating: 4.6
      },
      {
        id: 6,
        title: "React.js for Beginners",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
        price: 28.00,
        duration: "5h 15m",
        lessons: 3.0,
        rating: 4.7
      }
    ]
  },
  {
    id: 4,
    name: "Cheryl J. Solomon",
    position: "Senior Lecturer",
    designation: "Data Science",
    description: "Data science and machine learning expert. Focuses on practical applications of AI in business and education.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team12.jpg",
    email: "cheryl.solomon@example.com",
    location: "245 Data Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/CherylSolomon/",
    github: "https://github.com/CherylSolomon",
    google: "https://www.google.com/search?q=CherylSolomon",
    stats: {
      students: 42,
      programs: 20,
      awards: 9
    },
    featuredCourses: [
      {
        id: 7,
        title: "Introduction to Data Science",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
        price: 30.00,
        duration: "5h 30m",
        lessons: 3.5,
        rating: 4.8
      },
      {
        id: 8,
        title: "Machine Learning Fundamentals",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
        price: 35.00,
        duration: "6h 45m",
        lessons: 4.2,
        rating: 4.9
      }
    ]
  },
  {
    id: 5,
    name: "Julia B. Corbin",
    position: "Professor",
    designation: "UI/UX Design",
    description: "Creative design expert specializing in user experience and interface design. Brings real-world design challenges to the classroom.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team13.jpg",
    email: "julia.corbin@example.com",
    location: "156 Design Studio, Sydney",
    linkedin: "https://www.linkedin.com/in/JuliaCorbin/",
    github: "https://github.com/JuliaCorbin",
    google: "https://www.google.com/search?q=JuliaCorbin",
    stats: {
      students: 48,
      programs: 22,
      awards: 11
    },
    featuredCourses: [
      {
        id: 9,
        title: "UI Design Principles",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
        price: 26.00,
        duration: "4h 15m",
        lessons: 2.8,
        rating: 4.7
      },
      {
        id: 10,
        title: "Advanced UX Research",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
        price: 31.00,
        duration: "5h 30m",
        lessons: 3.4,
        rating: 4.8
      }
    ]
  }
  , {
    id: 6,
    name: "Adrian V. Ginsberg ",
    position: "Senior Lecturer",
    designation: "Lecturer",
    description: "Professor & Chair of Department of Computer Science at Harvard University. Leads the elite research team.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team14.jpg",
    email: "john.mack@example.com",
    location: "422 Science Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/JohnMack/",
    github: "https://github.com/JohnMack",
    google: "https://www.google.com/search?q=JohnMack",
    stats: {
      students: 75,
      programs: 30,
      awards: 12
    },
    featuredCourses: [
      {
        id: 1,
        title: "Introduction to Digital Marketing",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",

        price: 27.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      },
      {
        id: 2,
        title: "Full Stack Web Development Bootcamp",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
        price: 24.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      }
    ]
  }, {
    id: 7,
    name: "Daniel C. Almonte ",
    position: "Professor",
    designation: "Digital Marketing",
    description: "Leading expert in digital marketing strategies and social media optimization. Passionate about helping students succeed in the digital world.",
    image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/team15.jpg",
    email: "tim.moyer@example.com",
    location: "315 Marketing Hall, Sydney",
    linkedin: "https://www.linkedin.com/in/TimRMoyer/",
    github: "https://github.com/TimRMoyer",
    google: "https://www.google.com/search?q=TimRMoyer",
    stats: {
      students: 52,
      programs: 18,
      awards: 12
    },
    featuredCourses: [
      {
        id: 3,
        title: "Advanced Digital Marketing Strategies",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
        price: 29.00,
        duration: "5h 45m",
        lessons: 3.2,
        rating: 4.8
      },
      {
        id: 4,
        title: "Social Media Marketing Mastery",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
        price: 32.00,
        duration: "6h 15m",
        lessons: 4.0,
        rating: 4.7
      }
    ]
  }
];


export const TeamData3 = [
  {
    featuredCourses: [
      {
        id: 1,
        title: "Introduction to Digital Marketing",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg",

        price: 27.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      },
      {
        id: 2,
        title: "Full Stack Web Development Bootcamp",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses2.jpg",
        price: 24.00,
        duration: "4h 30m",
        lessons: 2.1,
        rating: 4.5
      },

      {
        id: 3,
        title: "Advanced Digital Marketing Strategies",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses3.jpg",
        price: 29.00,
        duration: "5h 45m",
        lessons: 3.2,
        rating: 4.8
      },
      {
        id: 4,
        title: "Social Media Marketing Mastery",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses4.jpg",
        price: 32.00,
        duration: "6h 15m",
        lessons: 4.0,
        rating: 4.7
      },
      {
        id: 5,
        title: "Modern JavaScript Development",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses5.jpg",
        price: 25.00,
        duration: "4h 30m",
        lessons: 2.5,
        rating: 4.6
      },
      {
        id: 6,
        title: "React.js for Beginners",
        image: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses6.jpg",
        price: 28.00,
        duration: "5h 15m",
        lessons: 3.0,
        rating: 4.7
      }

    ],

  }
]


================================================
FILE: src/Assets/banner-shape1.webp
================================================
[Non-text file]


================================================
FILE: src/Assets/banner-shape8.webp
================================================
[Non-text file]


================================================
FILE: src/Assets/banner1.webp
================================================
[Non-text file]


================================================
FILE: src/Components/index.js
================================================
// Barrel file for all components
// Layout Component
export { default as Layout } from "./Layout/Layout";

// Navigation Components
export { default as NavBar } from "./NavBar/NavBar";
export { default as Header } from "./Header/Header";
export { default as Footer } from "./Footer/Footer";

// Home Page Components
export { default as Hero } from "./Hero/Hero";
export { default as AboutSection } from "./AboutSection/AboutSection";
export { default as Choose } from "./Choose/Choose";
export { default as LiveClasses } from "./LiveClasses/LiveClasses";
export { default as Course } from "./Course/Course";
export { default as CourseCard } from "./CourseCard/CourseCard";
export { default as CourseCategory } from "./CourseCategory/CourseCategory";
export { default as CourseCategoryCard } from "./CourseCategoryCard/CourseCategoryCard";
export { default as CourseGrid } from "./CourseGrid/CourseGrid";
export { default as CourseList } from "./CourseList/CourseList";
export { default as CourseDetails } from "./CourseDetails/CourseDetails";
export { default as CourseCatalog } from "./CourseCatalog/CourseCatalog";
export { default as Testimonial } from "./Testimonials/Testimonial";
export { default as BackgroundVideo } from "./Background-Video/BackgroundVideo";
export { default as Blog } from "./Blog/Blog";
export { default as BlogStandard } from "./BlogStandard/BlogStandard";

export { default as Email } from "./Email/Email";

// Team Components
export { default as TeamMembers } from "./TeamMembers/TeamMembers";
export { default as TeamMemberDetail } from "./TeamMembers/TeamMemberDetail";
export { default as TeamMemberDetail2 } from "./TeamMembers/TeamMemberDetail2";
export { default as OurTeamMember } from "./OurTeamMember/OurTeamMember";
export { default as OurTeam } from "./TeamSection/OurTeam";
export { default as TeamDetails } from "./TeamDetails/TeamDetails";

// About Us Components
export { default as AboutUs } from "./AboutUsPage/AboutUs";
export { default as AboutChooseUs } from "./AboutChooseUs/AboutChooseUs";

// Utility Components
export { default as StatsCounter } from "./StatsCounter/StatsCounter";
export { default as RouteWrapper } from "./RouteWrapper/RouteWrapper";
export { default as LoadingScreen } from "./LoadingScreen/LoadingScreen";
export { default as NotFound } from "./NotFound/NotFound";

// Contact and Policy Pages
export { default as Contact } from "./Contact/Contact";
export { default as TermsCondition } from "./Termsonditions/TermsCondition";
export { default as PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy";

// Common components
export { default as LoadingSpinner } from "./LoadingSpinner/LoadingSpinner";
export { default as BlogGrid } from "./BlogGrid/BlogGrid";



================================================
FILE: src/Components/AboutChooseUs/AboutChooseUs.jsx
================================================
const AboutChooseUs = () => {
    return (
        <div className="2xl:container mx-auto px-6 py-12">
            <div className="w-[90%] mx-auto">
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 items-center">
                    {/* Left Section */}
                    <div>
                        <h4 className="font-semibold text-xl text-[#00CCBD]">
                            Why Choose Us
                        </h4>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
                            One Platform & Many Courses{" "}
                            <span className="relative inline-block sub-title">
                                For You
                                <img
                                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                                    alt="Shape"
                                    className="absolute left-0 right-0 -bottom-2 w-full"
                                    loading="lazy"
                                />
                            </span>
                        </h1>
                        <p className="mt-5 mb-10 text-gray-600 text-[16px] font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            tempora dolores temporibus neque, voluptas magnam aperiam dolorem
                            quasi laborum sunt, placeat consectetur.
                        </p>

                        {/* Progress Bars */}
                        <div className="progress-bar space-y-8">
                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Skill Mastery Levels
                                    </span>
                                    <span className="text-2xl font-semibold">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "80%" }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Learning Milestones
                                    </span>
                                    <span className="text-2xl font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "90%" }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[#555]">
                                    <span className="text-2xl font-semibold">
                                        Digital Proficiency Journey
                                    </span>
                                    <span className="text-2xl font-semibold">99%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="Exp h-2 bg-[#00CCBD] rounded-full"
                                        style={{ width: "99%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="relative flex justify-center items-center w-full md:ml-10 lg:ml-15">
                        {/* Background Shape & Woman Image */}
                        <img
                            src="https://ik.imagekit.io/ixthr16gh/Intern-Work/woman-5987428_1280.jpg?updatedAt=1738760885560"
                            alt="Woman"
                            className="rounded-full max-h-[400px] md:max-h-[480px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutChooseUs;



================================================
FILE: src/Components/AboutSection/AboutSection.jsx
================================================
import { useState, useEffect } from "react";

const AboutSection = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const targetYears = 15;

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < targetYears) {
        start++;
        setYearsOfExperience(start);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [targetYears]);

  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
            {/* Left Section - Image Gallery */}
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4">
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about1.jpg"
                    alt="Students studying together"
                    className="w-full h-[200px] md:h-[280px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about3.jpg"
                    alt="Modern classroom"
                    className="w-full h-[325px] md:h-[320px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>

                <div className="pt-8 md:pt-12">
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about2.jpg"
                    alt="Learning environment"
                    className="w-full h-[360px] md:h-[410px] object-cover rounded-2xl"
                    loading="lazy"
                  />

                  <div className="mt-6 Exp p-6 rounded-2xl text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-4xl md:text-5xl font-bold">
                        {yearsOfExperience}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="w-10 h-10"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="4"
                        >
                          <path d="M19 11H37V29" />
                          <path d="M11.5439 36.4559L36.9997 11" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-lg mt-2">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="space-y-6">
                {/* Header */}
                <div>
                  <span className="inline-block sub-title text-lg font-semibold mb-3">
                    About Edugen
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Discover Our Vision for Digital{" "}
                    <span className="relative inline-block">
                      Education
                      <img
                        src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                        alt="Decorative shape"
                        className="absolute left-0 right-0 -bottom-2 w-full"
                        loading="lazy"
                      />
                    </span>
                  </h2>
                  <p className="mt-6 text-gray-600 text-lg font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam et doloremque magnam adipisci quam sapiente
                    ratione doloribus incidunt dignissimos repudiandae.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    OUR MISSION & VISION
                  </h3>
                  <div className="space-y-4 text-gray-600 font-semibold text-lg">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Doloremque, modi nesciunt! Beatae et porro, illo
                      voluptates officiis officia magni sequi possimus labore
                      accusantium explicabo a consequatur.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Necessitatibus odio, quas fugiat sapiente reiciendis
                      eveniet rerum tenetur ipsum iste minima sint vero.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <button className="cursor-pointer relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
                    <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                      View All Categories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about4.jpg"
                      alt="Jason S. Ellis - CEO"
                      className="w-16 h-16 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xl font-bold">Jason S. Ellis</p>
                      <p className="text-[#4B4956] font-semibold">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



================================================
FILE: src/Components/AboutUsPage/AboutUs.jsx
================================================
import Choose from "../Choose/Choose";
import TeamMembers from "../TeamMembers/TeamMembers";
import App from "../Testimonials/Testimonial";

const AboutUs = () => {
  const ListItem = [
    {
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
      text: "Digital skill empowerment",
    },
    {
      text: "Expert-led courses",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Career guidance",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Supportive learning",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
    {
      text: "Life-changing digital education",
      img: "https://demo.themeies.com/edugen/wp-content/uploads/2024/09/check.svg",
    },
  ];
  return (
    <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
      <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
        {/* Main Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            About Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <a href="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </a>
            <span className="text-[#8A47CB] font-semibold"> – About Us</span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 lg:top-20 lg:left-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
        />
      </div>
      <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
              {/* Left Section - Image Gallery */}
              <div className="md:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about5.jpg"
                      alt="Students studying together"
                      className="w-full h-[200px] md:h-[280px] object-cover rounded-2xl"
                      loading="lazy"
                    />
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about3.jpg"
                      alt="Modern classroom"
                      className="w-full h-[325px] md:h-[320px] object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>

                  <div className="pt-8 md:pt-12">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/about6.jpg"
                      alt="Learning environment"
                      className="w-full h-[360px] md:h-[410px] object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Content */}

              <div className="md:w-1/2 mt-12 md:mt-0">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <span className="inline-block sub-title text-lg font-semibold mb-3">
                      About Edugen
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Discover Our Vision for Digital{" "}
                      <span className="relative inline-block sub-title ">
                        Education
                        <img
                          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                          alt="Decorative shape"
                          className="absolute left-0 right-0 -bottom-2 w-full"
                          loading="lazy"
                        />
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-4 text-gray-600 font-semibold text-lg">
                      <ul className="space-y-6 text-black">
                        {ListItem.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-2xl"
                          >
                            <img
                              decoding="async"
                              width="25"
                              height="25"
                              src={item.img}
                              alt=""
                            />
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Another right section */}
                <div className="md:w-4/4 mt-12 md:mt-7 bg-white rounded-2xl shadow-xl hover:-translate-y-2 duration-700">
                  <div className=" flex items-start justify-center h-[250px] mb-[-60px]">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/awards-logo.svg"
                      alt="Learning environment"
                      className="w-35 h-35"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-4 pb-10">
                    <p className="text-3xl font-bold">30+</p>
                    <p className="text-xl font-semibold text-gray-400">
                      Winning Awards
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 sm:p-5 lg:p-6 mb-8 mt-8">
                  {/* Icon Wrapper */}
                  <div className="rounded-full bg-white shadow-md p-5 transition-transform duration-500 hover:-translate-y-2 cursor-pointer ">
                    <img
                      src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/video-play.svg"
                      alt="Video Icon"
                      className="sm:w-12 sm:h-12"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col max-w-xl">
                    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-black">
                      All Classes Video Provided
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 font-medium">
                      There are many variations of passages of but the majority
                      have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Choose />
        <App />
        <TeamMembers />
      </section>
    </div>
  );
};

export default AboutUs;



================================================
FILE: src/Components/Background-Video/BackgroundVideo.jsx
================================================
/* eslint-disable no-unused-vars */
import { useState } from "react";

const BackgroundVideo = () => {
 
  const [spinSpeed, setSpinSpeed] = useState(10);

  // Function to dynamically update the spinning speed
  // const handleSpeedChange = (e) => {
  //   setSpinSpeed(e.target.value);
  // };

  return (
    <section>
      <div className="2xl:container mx-auto mt-10 mb-15 rounded-3xl relative">
        <div
          className="w-[90%] mx-auto relative h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video1-scaled-1.jpg')",
          }}
        >
          {/* Heading */}
          <h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold pt-32 sm:pt-40 lg:pt-48 ml-6 sm:ml-12 lg:ml-14"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)",
              textStroke: "2px rgba(255, 255, 255, 0.3)",
            }}
          >
            INTRO{" "}
            <span className="block md:inline md:ml-8 lg:ml-10 mt-2">VIDEO</span>
          </h1>

          {/* Video Button Container */}
          <div className="absolute inset-0 flex justify-end items-center pr-8 sm:pr-12 md:pr-16 lg:pr-20">
            <div
              className="relative round"
              style={{
                animation: `spin ${spinSpeed}s linear infinite`, // Dynamic animation speed
              }}
            >
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/10/video-shapessx.svg"
                alt=""
                className="w-[160px] sm:w-[220px] md:w-[300px] lg:w-[360px] background-Animation"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="5em"
                    height="5em"
                    className="bg-white rounded-[50px] p-5"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m9.524 4.938l10.092 6.21a1 1 0 0 1 0 1.704l-10.092 6.21A1 1 0 0 1 8 18.21V5.79a1 1 0 0 1 1.524-.852"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Speed Control */}
      {/* <div className="mt-4 text-center">
        <label htmlFor="speed" className="text-xl font-semibold">
          Spinning Speed (Seconds):
        </label>
        <input
          type="range"
          id="speed"
          min="1"
          max="20"
          step="0.5"
          value={spinSpeed}
          onChange={handleSpeedChange}
          className="w-full mt-2"
        />
        <span className="block mt-2">{spinSpeed}s</span>
      </div> */}
    </section>
  );
};

export default BackgroundVideo;



================================================
FILE: src/Components/Blog/Blog.jsx
================================================
import { BlogData } from "../../API/BlogData";

const Blog = () => {
  return (
    <div className="2xl:container mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-40">
      {/* Header Section */}
      <div className="w-[87%]  mx-auto mb-10 lg:mb-16">
        <p className="text-lg sm:text-xl mb-3 sm:mb-4 sub-title">Our Blog</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Read Our latest
            <span className="relative inline-block sub-title ml-2">
              Blog
              <img
                src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                alt="Shape"
                className="absolute left-0 right-0 w-full "
                loading="lazy"
              />
            </span>
          </h2>
          <button className="relative rounded-sm h-[46px] w-full sm:w-auto min-w-[140px] bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              View All Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-[90%]  mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 ">
          {BlogData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md"
            >
              <div className="w-full relative">
                <div className="card card-compact bg-base-100 w-full ">
                  <figure className="relative w-full lg:h-52 sm:h-56 md:h-46 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt="Blog"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlapping the image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm rounded-xl py-3 px-4 shadow-md w-[90%] max-w-[250px]">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.98919 11.5098C6.08847 11.5098 3.61133 11.9483 3.61133 13.7048C3.61133 15.4612 6.07276 15.9155 8.98919 15.9155C11.8899 15.9155 14.3663 15.4762 14.3663 13.7205C14.3663 11.9648 11.9056 11.5098 8.98919 11.5098Z"
                            stroke="#8A47CB"
                          />
                          <path
                            d="M8.99013 9.00441C10.8937 9.00441 12.4366 7.46084 12.4366 5.55727C12.4366 3.6537 10.8937 2.11084 8.99013 2.11084C7.08656 2.11084 5.54299 3.6537 5.54299 5.55727C5.53656 7.45441 7.06942 8.99798 8.96585 9.00441H8.99013Z"
                            stroke="#8A47CB"
                          />
                        </svg>
                        admin
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.32031 7.05334H15.6883"
                            stroke="#8A47CB"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.1787 2.68457H5.82822C3.6257 2.68457 2.25 3.91152 2.25 6.16684V12.9541C2.25 15.2449 3.6257 16.5002 5.82822 16.5002H12.1718C14.3812 16.5002 15.75 15.2661 15.75 13.0108V6.16684C15.7569 3.91152 14.3882 2.68457 12.1787 2.68457Z"
                            stroke="#8A47CB"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Sept 29, 2024
                      </div>
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="text-center mt-6">
                    <h3 className="font-bold text-lg sm:text-xl mb-4 px-2">
                      {item.Description}
                    </h3>
                    <button className="inline-flex items-center justify-center text-gray-600 hover:text-black transition-colors duration-200 gap-1">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          fill="currentColor"
                          d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;



================================================
FILE: src/Components/Blog Details/BlogDetails.jsx
================================================
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BlogDetailData } from '../../API/BlogDetailData'

const categoryQuotes = {
  Education: {
    text: "Education is one of the most powerful aspects of life. Education and learning allow us to make sense of the world around us, the world inside of us, and where we fit within the world.",
    author: "Rosalina D. Jackson",
    color: "#2fdab8"
  },
  "Art & Design": {
    text: "Art enables us to find ourselves and lose ourselves at the same time.",
    author: "Thomas Merton",
    color: "#8A47CB"
  },
  Technology: {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    color: "#ffb400"
  },
  Leadership: {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
    color: "#f25767"
  },
  Marketing: {
    text: "Marketing is no longer about the stuff you make, but about the stories you tell.",
    author: "Seth Godin",
    color: "#00bcd4"
  },
  // Add more categories as needed
  Default: {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
    color: "#8A47CB"
  }
};

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: ''
  })
  const [comments, setComments] = useState([])
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Find the current post and related posts
  useEffect(() => {
    if (!id) {
      navigate('/blog')
      return
    }

    const currentPost = BlogDetailData.find(p => p.id === parseInt(id))
    if (!currentPost) {
      navigate('/404')
      return
    }
    setPost(currentPost)

    // Get related posts (any category, excluding current post)
    const related = BlogDetailData
      .filter(p => p.id !== currentPost.id)
      .slice(0, 5)
    setRelatedPosts(related)
  }, [id, navigate])

  // Handle comment form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      alert('Please fill in all fields')
      return
    }

    const newComment = {
      id: Date.now(),
      author: commentForm.name,
      email: commentForm.email,
      content: commentForm.comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    setComments([...comments, newComment])
    setCommentForm({ name: '', email: '', comment: '' })
  }

  // Handle comment form input changes
  const handleCommentChange = (e) => {
    const { name, value } = e.target
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  // Handle social sharing
  const handleShare = (platform) => {
    const url = window.location.href
    const title = post?.title

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank')
        break
      default:
        break
    }
    setShowShareMenu(false)
  }

  if (!post) return null

  const quote = categoryQuotes[post.category] || categoryQuotes.Default;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            {post.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </Link>
            <span className="text-[#8A47CB] font-semibold"> – Blog Details </span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-[#8A47CB] text-white text-xs font-bold px-3 py-1.5 rounded-md">
              {post.category}
            </span>
          </div>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#8A47CB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#8A47CB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{comments.length + post.comments} Comments</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold text-[#8A47CB] mb-4">{post.title}</h2>
            <p className="text-gray-600 leading-relaxed">{post.content}</p>
          </div>

          {/* Category-based Quote Block */}
          {quote && (
            <div
              className="rounded-lg p-6 my-8 shadow-md relative"
              style={{ backgroundColor: quote.color, color: "#fff" }}
            >
              <svg className="absolute top-4 left-4 w-8 h-8 opacity-20" fill="white" viewBox="0 0 24 24">
                <path d="M7.17 6A5.001 5.001 0 002 11v1a3 3 0 003 3h2a1 1 0 001-1v-1a1 1 0 00-1-1H5v-1a3 3 0 013-3h.17zM17.17 6A5.001 5.001 0 0012 11v1a3 3 0 003 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-1v-1a3 3 0 013-3h.17z" />
              </svg>
              <div className="pl-12">
                <p className="text-lg font-semibold italic">&ldquo;{quote.text}&rdquo;</p>
                <div className="mt-4 font-bold">&ndash; {quote.author}</div>
              </div>
            </div>
          )}

          {/* Tags and Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-[#8A47CB] text-white rounded-md hover:bg-[#7a3db8] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold mb-1">{post.author.name}</h3>
                <p className="text-gray-600 text-sm">
                  Author and content creator with expertise in {post.category.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Comments ({comments.length + post.comments})</h3>

            {/* Existing Comments */}
            {comments.length > 0 && (
              <div className="space-y-6 mb-8">
                {comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#8A47CB] text-white flex items-center justify-center font-bold">
                        {comment.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{comment.author}</h4>
                        <p className="text-sm text-gray-500">{comment.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Comment form */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <textarea
                    name="comment"
                    value={commentForm.comment}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    rows="4"
                    placeholder="Your comment"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={commentForm.name}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={commentForm.email}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    placeholder="Your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#8A47CB] text-white px-6 py-3 rounded-lg hover:bg-[#7a3db8] transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8A47CB]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Related Posts Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="flex gap-3">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-medium text-sm hover:text-[#8A47CB] transition-colors line-clamp-2">
                      <Link to={`/blog-details/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {Array.from(new Set(BlogDetailData.map(post => post.category))).map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <Link
                    to={`/blog?category=${encodeURIComponent(category)}`}
                    className="text-gray-600 hover:text-[#8A47CB] transition-colors"
                  >
                    {category}
                  </Link>
                  <span className="text-gray-500 text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                    {BlogDetailData.filter(post => post.category === category).length}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(BlogDetailData.flatMap(post => post.tags))).map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails

















================================================
FILE: src/Components/BlogGrid/BlogGrid.jsx
================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BlogDetailData } from "../../API/BlogDetailData";

const BlogGrid = () => {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 6; // Show more items in grid layout

    // Generate categories from blog data
    const categories = useMemo(() => {
        const categoriesCount = {};
        BlogDetailData.forEach(post => {
            if (categoriesCount[post.category]) {
                categoriesCount[post.category]++;
            } else {
                categoriesCount[post.category] = 1;
            }
        });
        return [{ name: "All", count: BlogDetailData.length },
        ...Object.entries(categoriesCount).map(([name, count]) => ({ name, count }))];
    }, []);

    // Filter and search blog posts
    const filteredPosts = useMemo(() => {
        return BlogDetailData.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    // Get current posts for pagination
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    // Function to format dates in a more readable way
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setActivePage(1); // Reset to first page on new search
    };

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActivePage(1); // Reset to first page on new category
    };

    return (
        <div className="bg-gray-50 min-h-screen 2xl:container mx-auto">
            {/* Hero Section */}
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Blog Grid
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Blog Grid</span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 lg:top-20 lg:left-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 w-12 sm:w-16 md:w-20 lg:w-24 z-10"
                />
            </div>

            {/* Main Blog Content with Grid Layout */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                {/* Search and Filter Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search Bar */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search posts..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#8A47CB] focus:border-[#8A47CB] pl-10"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-1/2 lg:w-1/3">
                            <div className="flex flex-wrap gap-2">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategoryChange(category.name)}
                                        className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === category.name
                                            ? "bg-[#8A47CB] text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        {category.name}
                                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-opacity-20 inline-flex justify-center items-center min-w-[22px]"
                                            style={{
                                                backgroundColor: selectedCategory === category.name
                                                    ? 'rgba(255, 255, 255, 0.2)'
                                                    : 'rgba(138, 71, 203, 0.1)'
                                            }}>
                                            {category.count}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active filters summary */}
                    {(selectedCategory !== "All" || searchTerm) && (
                        <div className="bg-white p-4 rounded-lg mb-8 shadow-sm flex justify-between items-center">
                            <p className="text-gray-600">
                                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                                {selectedCategory !== "All" && <span> in <span className="font-semibold text-[#8A47CB]">{selectedCategory}</span></span>}
                                {searchTerm && <span> containing &quot;<span className="italic">{searchTerm}</span>&quot;</span>}
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("All");
                                    setActivePage(1);
                                }}
                                className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Blog Posts Grid */}
                {currentItems.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 mx-auto text-gray-400 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">No Posts Found</h3>
                        <p className="text-gray-500 mb-6">We couldn&apos;t find any blog posts matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSearchTerm("");
                                setSelectedCategory("All");
                                setActivePage(1);
                            }}
                            className="px-4 py-2 bg-[#8A47CB] text-white rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {currentItems.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                {/* Post Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-[#8A47CB] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Post Content */}
                                <div className="p-6">
                                    {/* Meta Info */}
                                    <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={post.author.avatar}
                                                alt={post.author.name}
                                                className="w-5 h-5 rounded-full object-cover"
                                            />
                                            <span>{post.author.name}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1 text-[#8A47CB]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {formatDate(post.date)}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-[#8A47CB] transition-colors">
                                        <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                                    {/* Footer with Comments Count and Read More */}
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1 text-[#8A47CB]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                />
                                            </svg>
                                            {post.comments} Comment{post.comments !== 1 ? 's' : ''}
                                        </div>
                                        <Link
                                            to={`/blog-details/${post.id}`}
                                            className="text-sm font-medium text-[#8A47CB] hover:underline flex items-center"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {filteredPosts.length > itemsPerPage && (
                    <div className="flex justify-center">
                        <div className="flex space-x-1">
                            <button
                                onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                                disabled={activePage === 1}
                                className={`px-4 py-2 rounded-md ${activePage === 1
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePage(index + 1)}
                                    className={`px-4 py-2 rounded-md ${activePage === index + 1
                                        ? "bg-[#8A47CB] text-white"
                                        : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() =>
                                    setActivePage((prev) => Math.min(prev + 1, totalPages))
                                }
                                disabled={activePage === totalPages}
                                className={`px-4 py-2 rounded-md ${activePage === totalPages
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogGrid; 


================================================
FILE: src/Components/BlogStandard/BlogStandard.jsx
================================================
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { BlogDetailData } from "../../API/BlogDetailData";

const BlogStandard = () => {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 3;

    // Generate categories from blog data
    const categories = useMemo(() => {
        const categoriesCount = {};
        BlogDetailData.forEach(post => {
            if (categoriesCount[post.category]) {
                categoriesCount[post.category]++;
            } else {
                categoriesCount[post.category] = 1;
            }
        });
        return [{ name: "All", count: BlogDetailData.length },
        ...Object.entries(categoriesCount).map(([name, count]) => ({ name, count }))];
    }, []);

    // Generate unique tags from blog data
    const allTags = useMemo(() => {
        const tags = new Set();
        BlogDetailData.forEach(post => {
            post.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    }, []);

    // Filter and search blog posts
    const filteredPosts = useMemo(() => {
        return BlogDetailData.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    // Get current posts for pagination
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    // Function to format dates in a more readable way
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setActivePage(1); // Reset to first page on new search
    };

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActivePage(1); // Reset to first page on new category
    };

    return (
        <div className="bg-gray-50 min-h-screen 2xl:container mx-auto">
            {/* Hero Section */}
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Our Blog
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Our Blog </span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
                />
            </div>

            {/* Main Blog Content */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Blog Posts */}
                    <div className="lg:col-span-2">
                        {/* Results Summary */}
                        {selectedCategory !== "All" && (
                            <div className="bg-white p-4 rounded-lg mb-6 shadow-sm">
                                <p className="text-gray-600">
                                    Showing results for: <span className="font-semibold text-[#8A47CB]">{selectedCategory}</span>
                                    {searchTerm && <span> containing &quot;<span className="italic">{searchTerm}</span>&quot;</span>}
                                </p>
                            </div>
                        )}

                        {/* Blog Posts */}
                        {currentItems.length === 0 ? (
                            <div className="bg-white rounded-xl shadow-md p-8 text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 mx-auto text-gray-400 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <h3 className="text-xl font-bold text-gray-700 mb-2">No Posts Found</h3>
                                <p className="text-gray-500 mb-6">We couldn&apos;t find any blog posts matching your criteria.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory("All");
                                        setActivePage(1);
                                    }}
                                    className="px-4 py-2 bg-[#8A47CB] text-white rounded-md hover:bg-purple-700 transition-colors"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-10">
                                {currentItems.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg"
                                    >
                                        {/* Featured Image */}
                                        <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-4 left-4 bg-[#8A47CB] text-white text-xs font-bold px-3 py-1.5 rounded-md">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Post Content */}
                                        <div className="p-6 sm:p-8">
                                            {/* Post Meta */}
                                            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={post.author.avatar}
                                                        alt={post.author.name}
                                                        className="w-6 h-6 rounded-full object-cover"
                                                    />
                                                    <span>{post.author.name}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-[#8A47CB]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                    <span>{formatDate(post.date)}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-[#8A47CB]"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                        />
                                                    </svg>
                                                    <span>{post.comments} Comments</span>
                                                </div>
                                            </div>

                                            {/* Post Title */}
                                            <h2 className="text-xl sm:text-2xl font-bold mb-4 hover:text-[#8A47CB] transition-colors">
                                                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                            </h2>

                                            {/* Post Excerpt */}
                                            <p className="text-gray-600 mb-6">{post.excerpt}</p>

                                            {/* Tags */}
                                            {post.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {post.tags.slice(0, 3).map((tag, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                        >
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Read More Button */}
                                            <div className="flex">
                                                <Link
                                                    to={`/blog-details/${post.id}`}
                                                    className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-md overflow-hidden group hover:bg-[#8A47CB] transition-colors duration-300"
                                                >
                                                    <span className="relative z-10">Read More</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredPosts.length > 0 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex space-x-1">
                                    <button
                                        onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
                                        disabled={activePage === 1}
                                        className={`px-4 py-2 rounded-md ${activePage === 1
                                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                            : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActivePage(index + 1)}
                                            className={`px-4 py-2 rounded-md ${activePage === index + 1
                                                ? "bg-[#8A47CB] text-white"
                                                : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                                }`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() =>
                                            setActivePage((prev) => Math.min(prev + 1, totalPages))
                                        }
                                        disabled={activePage === totalPages}
                                        className={`px-4 py-2 rounded-md ${activePage === totalPages
                                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                            : "bg-white text-gray-700 hover:bg-[#8A47CB] hover:text-white transition-colors"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Search Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Search</h3>
                            <div className="mt-4 relative">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#8A47CB] focus:border-[#8A47CB] pl-10"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Categories</h3>
                            <ul className="mt-4 space-y-3">
                                {categories.map((category, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <button
                                            onClick={() => handleCategoryChange(category.name)}
                                            className={`text-gray-700 hover:text-[#8A47CB] transition-colors flex items-center ${selectedCategory === category.name ? "text-[#8A47CB] font-medium" : ""
                                                }`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-4 w-4 mr-2 ${selectedCategory === category.name ? "text-[#8A47CB]" : "text-gray-400"
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                            {category.name}
                                        </button>
                                        <span className="text-gray-500 text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                                            {category.count}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Recent Posts</h3>
                            <div className="mt-4 space-y-4">
                                {BlogDetailData.slice(0, 3).map((post) => (
                                    <div key={post.id} className="flex gap-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div>
                                            <h4 className="font-medium text-sm hover:text-[#8A47CB] transition-colors line-clamp-2">
                                                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-gray-500 text-xs mt-1">{formatDate(post.date)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Widget */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">Tags</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {allTags.map((tag, index) => (
                                    <Link
                                        key={index}
                                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Ad Widget */}
                        <div className="bg-[#8A47CB] p-6 rounded-xl shadow-md text-white text-center">
                            <h3 className="text-xl font-bold mb-2">Ad Space</h3>
                            <p className="mb-4">Perfect place to advertise your courses</p>
                            <Link
                                to="#"
                                className="inline-block px-6 py-2 bg-white text-[#8A47CB] font-medium rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogStandard; 


================================================
FILE: src/Components/Choose/Choose.jsx
================================================
const Choose = () => {
  return (
    <div className="2xl:container mx-auto px-6 py-12">
      <div className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 items-center">
          {/* Left Section */}
          <div>
            <h4 className="font-semibold text-xl text-[#00CCBD]">
              Why Choose Us
            </h4>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-5">
              One Platform & Many Courses{" "}
              <span className="relative inline-block sub-title">
                For You
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                  alt="Shape"
                  className="absolute left-0 right-0 -bottom-2 w-full"
                  loading="lazy"
                />
              </span>
            </h1>
            <p className="mt-5 mb-10 text-gray-600 text-[16px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              tempora dolores temporibus neque, voluptas magnam aperiam dolorem
              quasi laborum sunt, placeat consectetur.
            </p>

            {/* Progress Bars */}
            <div className="progress-bar space-y-8">
              <div>
                <div className="flex justify-between text-[#555]">
                  <span className="text-2xl font-semibold">
                    Skill Mastery Levels
                  </span>
                  <span className="text-2xl font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="Exp h-2 bg-[#00CCBD] rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#555]">
                  <span className="text-2xl font-semibold">
                    Learning Milestones
                  </span>
                  <span className="text-2xl font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="Exp h-2 bg-[#00CCBD] rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#555]">
                  <span className="text-2xl font-semibold">
                    Digital Proficiency Journey
                  </span>
                  <span className="text-2xl font-semibold">99%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="Exp h-2 bg-[#00CCBD] rounded-full"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex justify-center items-center w-full md:ml-10 lg:ml-15">
            {/* Background Shape & Woman Image */}
            <img
              src="https://ik.imagekit.io/ixthr16gh/Intern-Work/woman-5987428_1280.jpg?updatedAt=1738760885560"
              alt="Woman"
              className="rounded-full max-h-[400px] md:max-h-[480px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;



================================================
FILE: src/Components/Contact/Contact.jsx
================================================
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12 max-w-6xl mx-auto">
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Contact Us
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </Link>
            <span className="text-[#8A47CB] font-semibold"> – Contact </span>
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-12 left-8 sm:top-16 sm:left-16 w-12 sm:w-16 md:w-20 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-12 right-8 sm:top-16 sm:right-16 w-12 sm:w-16 md:w-20 z-10"
        />
      </div>

      {/* Contact Card Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="text-sm sub-title font-semibold mb-2 text-blue-500">Contact Us</div>
          <div className="text-3xl font-bold text-black mb-6">
            Get In <span className="text-green-500">Touch</span>
          </div>
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 text-purple-600 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact1.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Email-Us:</div>
                <div className="text-gray-600 text-sm">edugenmail@gmail.com</div>
              </div>
            </div>
            {/* Call */}
            <div className="flex items-start gap-4">
              <div className="bg-teal-400/10 text-teal-500 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact2.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Call Us:</div>
                <div className="text-gray-600 text-sm">+91 9876543210</div>
              </div>
            </div>
            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 text-purple-600 rounded-lg p-3">
                <img src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/contact3.svg" alt="" />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Office:</div>
                <div className="text-gray-600 text-sm">Mountain Green Road 2389 NY, USA</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 justify-center">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" className="flex-1 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Name*" required />
            <input type="email" className="flex-1 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Email*" required />
          </div>
          <input type="text" className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Website Address" />
          <textarea className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4" placeholder="Your Message*" required></textarea>
          <button type="submit" className="bg-[#8A47CB] text-white font-semibold py-2 rounded-md hover:bg-[#6C2CA7] transition mt-2">Send Message</button>
        </form>
      </div>

      {/* Full-width Map */}
      <div className="w-full mt-10 rounded-xl overflow-hidden shadow border border-gray-200 max-w-6xl mx-auto">
        <iframe
          title="Edugen Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=0.0%2C51.3%2C0.3%2C51.6&amp;layer=mapnik"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;



================================================
FILE: src/Components/Course/Course.jsx
================================================
import { CourseData } from "../../API/CourseData";
import CourseCard from "../CourseCard/CourseCard";

const Course = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="text-center">
            <p className="text-[25px] sub-title">Most Featured Courses</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6">
              Choose Our Top{" "}
              <span className="relative inline-block sub-title">
                Courses
                <img
                  src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                  alt="Shape"
                  className="absolute left-0 right-0 -bottom-2 w-full"
                  loading="lazy"
                />
              </span>
            </h1>
          </div>
          {/* Cards */}
          <div className="2xl:container mx-auto">
            <div className="w-[99%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {/* {CourseData.map((items,index) => {
                return (
                  <>
                    <CourseCard key={index} data={items} />
                  </>
                );
              })} */}

              {CourseData.map((item, index) => (
                <CourseCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-30 -mb-10">
          <button className="cursor-pointer relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
            <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  fill="currentColor"
                  d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Course;



================================================
FILE: src/Components/CourseCard/CourseCard.jsx
================================================
const CourseCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data = {} } = props;
  const { image, level, smallImage, students, ratings, title } = data;

  return (
    <div className="w-full px-4 sm:px-0 hover:-translate-y-2  duration-700">
      <div className="shadow-lg rounded-lg group h-full w-full sm:w-[85%] md:w-full mx-auto ">
        <figure className="overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-45 sm:h-87 md:h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <p className="bg-[#8A47CB] text-white text-base sm:text-[20px] font-semibold w-auto sm:w-21 text-center p-1.5 sm:p-2 rounded-t-2xl absolute bottom-[1px] left-8 sm:left-12">
            $ 26.00
          </p>
        </figure>

        <div className="flex justify-between items-end p-3 sm:p-4">
          <p className="relative rounded-sm h-[40px] sm:h-[45px] w-28 sm:w-34 ml-1 sm:ml-2 mt-1 bg-[#F0F0F0] text-[#5F5555] px-2 sm:px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
            <span className="relative z-10 flex justify-center items-center pt-3 text-[13px] sm:text-[15px] font-bold">
              {level}
            </span>
          </p>
          <div className="relative rounded-sm h-[40px] sm:h-[45px] w-12 sm:w-14 overflow-hidden group/heart">
            <div className="absolute inset-0 w-full h-full bg-[#8A47CB] transition-transform duration-500 -translate-x-full group-hover/heart:translate-x-0"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center bg-[#f0f0f0] group-hover/heart:bg-transparent transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="1.75em"
                height="1.75em"
                className="group-hover/heart:text-white transition-colors sm:w-8 sm:h-8"
              >
                <path
                  fill="currentColor"
                  d="M17.718 8.893c6.457 0 12.902 4.058 14.274 8.78c1.012-4.496 7.61-8.735 14.256-8.735c5.17 0 10.368 2.564 12.99 9.567c6.445 17.219-25 33.753-27.247 35.799C29.744 51.729-1.699 36.02 4.75 18.515c2.58-7.003 7.778-9.623 12.968-9.622m0-1.893h-.002C10.902 7 5.535 10.957 2.993 17.855c-5.788 15.71 15.228 29.479 24.2 35.356c1.445.947 3.082 2.02 3.404 2.354L31.851 57l1.396-1.292c.232-.204 1.305-.891 2.343-1.555c8.604-5.508 31.458-20.141 25.401-36.318c-2.566-6.858-7.94-10.791-14.742-10.791c-5.744 0-11.426 2.763-14.312 6.554C28.955 9.75 23.345 7.001 17.718 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 pl-4 sm:pl-6">
          <h2 className="text-xl font-bold -mb-4 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h2>
          <div className="flex items-center ">
            <p className="text-[#878787] font-semibold pt-2 sm:pt-1 text-sm sm:text-base">
              {ratings}
            </p>
            <img
              src="https://ik.imagekit.io/ixthr16gh/rating.png?updatedAt=1738567890274"
              alt="Rating"
              className="h-20 pl-10 sm:pl-12 pt-2"
            />
          </div>
          <div className="flex items-center gap-4 sm:gap-7 mt-4 sm:mt-2">
            <img src={smallImage} alt="Professor" className="h-10 sm:h-12" />
            <p className="font-semibold text-base sm:text-[18px]">
              Prof. Donnie Ball
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 mt-4 ml-4 sm:ml-6">
          <img
            src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user-icon2.svg"
            alt="Students"
            className="h-4 sm:h-5"
          />
          <p className="text-[#878787] font-semibold text-sm sm:text-base">
            {students}
          </p>
        </div>

        <div className="-mt-6 flex justify-end group/enroll pb-4 sm:pb-5">
          <p className="group-hover/enroll:text-[#8A47CB] cursor-pointer flex justify-end mr-2 text-sm sm:text-base">
            Enroll Now
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="2em"
            className="pb-[3px] mr-[10px] group-hover/enroll:text-[#8A47CB]"
          >
            <path
              fill="currentColor"
              d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// const CourseCard = ({ data }) => {
//   return (
//     <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
//       <div className="relative">
//         <img
//           src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses1.jpg"
//           alt=""
//           className="w-full h-40 xs:h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <p className="absolute bottom-0 left-3 sm:left-4 bg-[#8A47CB] text-white text-base sm:text-lg font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-xl transition-transform duration-300 group-hover:scale-110">
//           $ 26.00
//         </p>
//       </div>

//       <div className="p-3 sm:p-4 lg:p-5 flex-grow flex flex-col">
//         <div className="flex justify-between items-center mb-3 sm:mb-4">
//           <p className="relative inline-flex px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F0F0F0] text-[#5F5555] text-xs sm:text-sm font-bold rounded hover:text-white group-hover:bg-[#8A47CB] transition-colors duration-300">
//             Beginner
//           </p>

//           <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#f0f0f0] rounded group-hover:bg-[#8A47CB] transition-colors duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 64 64"
//               className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
//             >
//               <path
//                 fill="currentColor"
//                 d="M17.718 8.893c6.457 0 12.902 4.058 14.274 8.78c1.012-4.496 7.61-8.735 14.256-8.735c5.17 0 10.368 2.564 12.99 9.567c6.445 17.219-25 33.753-27.247 35.799C29.744 51.729-1.699 36.02 4.75 18.515c2.58-7.003 7.778-9.623 12.968-9.622"
//               />
//             </svg>
//           </button>
//         </div>

//         <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
//           Introduction to Digital marketing
//         </h2>

//         <div className="flex justify-between items-center mb-3 sm:mb-4">
//           <p className="text-[#878787] text-xs sm:text-sm font-semibold">
//             (4.5 ratings)
//           </p>
//           <img
//             src="https://ik.imagekit.io/ixthr16gh/rating.png?updatedAt=1738567890274"
//             alt="Rating"
//             className="h-4 sm:h-5"
//           />
//         </div>

//         <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
//           <img
//             src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/courses-user1.jpg"
//             alt="Professor"
//             className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
//           />
//           <p className="font-semibold text-base sm:text-lg">Prof.Donnie Ball</p>
//         </div>

//         <hr className="my-3 sm:my-4 border-gray-200" />

//         <div className="flex justify-between items-center mt-auto">
//           <div className="flex items-center gap-1.5 sm:gap-2">
//             <img
//               src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/user-icon2.svg"
//               alt="Students"
//               className="h-4 sm:h-5"
//             />
//             <p className="text-[#878787] text-xs sm:text-sm font-semibold">
//               70+ students
//             </p>
//           </div>

//           <button className="flex items-center gap-1 text-gray-600 hover:text-[#8A47CB] transition-colors duration-300 group">
//             <span className="text-sm sm:text-base font-medium">Enroll Now</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
//             >
//               <path
//                 fill="currentColor"
//                 d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;



================================================
FILE: src/Components/CourseCatalog/CourseCatalog.jsx
================================================
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CourseData } from "../../API/CourseData";

const CourseCatalog = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");

    // Get unique categories from course data
    const categories = ["All", ...new Set(CourseData.map((course) => course.category))];

    useEffect(() => {
        // Simulate data fetching with a delay
        const timer = setTimeout(() => {
            setCourses(CourseData);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Filter courses based on search term, category and price
    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "All" || course.category === categoryFilter;
        const matchesPrice =
            priceFilter === "All" ||
            (priceFilter === "Free" && course.isFree) ||
            (priceFilter === "Paid" && !course.isFree);

        return matchesSearch && matchesCategory && matchesPrice;
    });

    // Render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen 2xl:container mx-auto">
            {/* Hero Section */}
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
                {/* Main Content */}
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        All Courses
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – All Courses </span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
                />
            </div>

            {/* Filters and Search */}
            <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search Input */}
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Courses
                            </label>
                            <input
                                type="text"
                                id="search"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                placeholder="Search by title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Filter */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                Price
                            </label>
                            <select
                                id="price"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                            >
                                <option value="All">All Prices</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Courses Display */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {filteredCourses.length} Courses Found
                        </h2>
                    </div>

                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">No courses found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search term to find what you&apos;re looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <Link to={`/course-details/${course.id}`}>
                                        <div className="relative">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-48 object-cover"
                                            />
                                            {course.isFree && (
                                                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    FREE
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                                                {course.category}
                                            </span>
                                            <div className="flex items-center">
                                                <span className="text-yellow-500 mr-1">
                                                    {course.rating}.0
                                                </span>
                                                <div className="flex">
                                                    {renderStars(course.rating)}
                                                </div>
                                            </div>
                                        </div>

                                        <Link to={`/course-details/${course.id}`}>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors line-clamp-2">
                                                {course.title}
                                            </h3>
                                        </Link>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={course.instructor.avatar}
                                                    alt={course.instructor.name}
                                                    className="w-8 h-8 rounded-full mr-2"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {course.instructor.name}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 mr-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                {course.duration}
                                            </div>
                                            <div className="text-lg font-bold text-purple-600">
                                                {course.isFree ? "Free" : `$${course.price.toFixed(2)}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseCatalog; 


================================================
FILE: src/Components/CourseCategory/CourseCategory.jsx
================================================
import { Data } from "../../API/Data";
import CourseCategoryCard from "../CourseCategoryCard/CourseCategoryCard";


const CourseCategory = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
            <div className="space-y-4">
              <span className="inline-block text-lg sm:text-xl lg:text-2xl font-semibold sub-title ">
                Course Category
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Explore Top{" "}
                <span className="relative inline-block sub-title">
                  Categories
                  <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/title-shape.svg"
                    alt="Shape"
                    className="absolute left-0 right-0 -bottom-2 w-full"
                    loading="lazy"
                  />
                </span>
              </h1>
            </div>

            <button className="relative rounded-sm h-[46px] md:w-55 bg-black px-3 text-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-1 before:h-full before:w-0 before:bg-[#8A47CB] before:transition-all before:duration-500 hover:text-white hover:before:w-full hover:before:rounded-sm">
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
                View All Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Data.map((items) => (
              <CourseCategoryCard key={items.id} data={items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;



================================================
FILE: src/Components/CourseCategoryCard/CourseCategoryCard.jsx
================================================
const CourseCategoryCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { OuterImage, InnerImage, description, title, bg } = props.data;

  return (
    <div className=" h-[40%]">
      <div
        className="relative  rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        style={{ backgroundColor: bg || "#ffebdf" }}
      >
        {/* Image Container */}
        <div className="relative aspect-square w-full max-w-[280px] mx-auto  flex justify-center items-center">
          <img
            className=" h-[70%] object-contain transition-transform duration-300 group-hover:scale-105"
            src={OuterImage}
            alt="Background Shape"
            loading="lazy"
          />
          <img
            src={InnerImage}
            alt="HEX Element"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-30 object-contain"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-2">
            {title}
          </h3>

          <p className="text-base sm:text-lg text-gray-600 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCategoryCard;



================================================
FILE: src/Components/CourseDetails/CourseDetails.jsx
================================================
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CourseData } from "../../API/CourseData";

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("overview");

    // Find the course by ID and set to state
    useEffect(() => {
        // Simulate API fetch with a delay
        const timer = setTimeout(() => {
            const foundCourse = CourseData.find(c => c.id === parseInt(id));
            setCourse(foundCourse);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [id]);

    // Render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
                <p className="mt-4 text-gray-600">The course you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link to="/course-list" className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Back to Courses
                </Link>
            </div>
        );
    }

    return (

        <div className="bg-gray-50 2xl:container mx-auto">
            <div className="relative w-[90%] mx-auto bg-[#FFF7FA] pt-20 mb-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl ">
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                        Course Details
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
                        <Link to="/" className="hover:text-[#8A47CB] font-semibold">
                            Home
                        </Link>
                        <span className="text-[#8A47CB] font-semibold"> – Project </span>
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 z-0">
                    <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
                </div>
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
                    alt="Arrow Decoration"
                    className="absolute top-12 left-8 sm:top-16 sm:left-16 w-12 sm:w-16 md:w-20 z-10"
                />
                <img
                    src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
                    alt="Book Decoration"
                    className="absolute top-12 right-8 sm:top-16 sm:right-16 w-12 sm:w-16 md:w-20 z-10"
                />
            </div>
            {/* Hero Section with Course Image */}
            <div className="2xl:container mt-20 mx-auto bg-gradient-to-r from-[#8A47CB] to-[#6B21A8] py-16 relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row">
                        {/* Left side - Course Image */}
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="relative">
                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-8 w-8 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Course Info */}
                        <div className="md:w-1/2 md:pl-8 text-white">
                            <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
                                {course.category}
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>

                            {/* Instructor */}
                            <div className="flex items-center mb-6">
                                <img
                                    src={course.instructor.avatar}
                                    alt={course.instructor.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                />
                                <div className="ml-3">
                                    <p className="font-semibold text-sm sm:text-base">{course.instructor.name}</p>
                                    <p className="text-white text-opacity-80 text-xs sm:text-sm">{course.instructor.position}</p>
                                </div>
                            </div>

                            {/* Last Update */}
                            <div className="text-xs sm:text-sm mb-4 sm:mb-6">
                                <span className="text-white text-opacity-80">Last Updated: </span>
                                <span className="font-medium">{course.lastUpdated}</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4 sm:mb-6">
                                <div className="flex mr-2">
                                    {renderStars(course.rating)}
                                </div>
                                <span className="text-white text-opacity-80 text-xs sm:text-sm">({course.rating}.0 rating)</span>
                            </div>

                            {/* Price & Enroll Button */}
                            <div className="mt-4 sm:mt-6">
                                <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                                    {course.isFree ? "Free" : `$${course.price.toFixed(2)}`}
                                </div>
                                <Link to="/Contact">
                                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base">
                                        Enroll Now
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Details & Tabs */}
            <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
                {/* Course Details Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Duration</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.duration}</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Lectures</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.lessons} Lessons</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Language</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.language}</p>
                        </div>
                    </div>

                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm">Level</h3>
                            <p className="font-semibold text-sm sm:text-base">{course.level}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="border-b mb-6 sm:mb-8 overflow-x-auto">
                    <nav className="flex space-x-4 sm:space-x-8 min-w-max">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "overview"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab("curriculum")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "curriculum"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Curriculum
                        </button>
                        <button
                            onClick={() => setActiveTab("instructor")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "instructor"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Instructor
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`px-1 py-3 sm:py-4 text-xs sm:text-sm font-medium border-b-2 ${activeTab === "reviews"
                                ? "border-purple-500 text-purple-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                }`}
                        >
                            Reviews
                        </button>
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Left side - Tab Content */}
                    <div className="lg:col-span-2">
                        {activeTab === "overview" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4">Course Description</h2>
                                <p className="mb-6 text-gray-700 text-sm sm:text-base leading-relaxed">{course.description}</p>

                                <h3 className="text-lg sm:text-xl font-bold mb-3">What You Will Learn?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 sm:mb-8">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold mb-3">Requirements</h3>
                                <ul className="list-disc pl-5 mb-6 sm:mb-8 text-gray-700 text-sm sm:text-base space-y-2">
                                    {course.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === "curriculum" && (
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Course Curriculum</h2>
                                <div className="space-y-3 sm:space-y-4">
                                    {course.curriculum.map((i
