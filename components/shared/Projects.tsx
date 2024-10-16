// components/Projects.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiNextdotjs } from 'react-icons/si';

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: Technology[];
  liveDemo: string;
  githubRepo: string;
}

const technologies: { [key: string]: Technology } = {
  React: { name: 'React', icon: FaReact, color: '#61DAFB' },
  Node: { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  MongoDB: { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  PostgreSQL: { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  Express: { name: 'Express', icon: SiExpress, color: '#000000' },
  Next: { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  AWS: { name: 'AWS', icon: FaAws, color: '#FF9900' },
  Docker: { name: 'Docker', icon: FaDocker, color: '#2496ED' },
};

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with...",
    fullDescription: "A comprehensive e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment integration. The backend uses Express and MongoDB for efficient data management and real-time inventory updates.",
    image: "/assets/projects/ecommerce.jpeg",
    technologies: [technologies.React, technologies.Node, technologies.MongoDB, technologies.Express],
    liveDemo: "https://ecommerce-demo.com",
    githubRepo: "https://github.com/yourusername/ecommerce-project"
  },
  {
    title: "Task Management App",
    description: "Efficient task tracking and team...",
    fullDescription: "A robust task management application designed for team collaboration. Built with Next.js for optimal performance and SEO. Features include real-time updates, task assignment, progress tracking, and detailed reporting. Utilizes PostgreSQL for data persistence and AWS for scalable hosting.",
    image: "/assets/projects/taskmanager.jpeg",
    technologies: [technologies.Next, technologies.PostgreSQL, technologies.AWS],
    liveDemo: "https://task-manager-demo.com",
    githubRepo: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "Real-time weather data visualization...",
    fullDescription: "An interactive weather forecast dashboard that provides real-time weather data and visualizations. Built with React for the frontend and Node.js for the backend. Integrates with multiple weather APIs to provide accurate and up-to-date information. Features include location-based forecasts, interactive maps, and severe weather alerts.",
    image: "/assets/projects/weather.jpeg",
    technologies: [technologies.React, technologies.Node, technologies.Express],
    liveDemo: "https://weather-dashboard-demo.com",
    githubRepo: "https://github.com/yourusername/weather-dashboard"
  },
  {
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media data analysis...",
    fullDescription: "A powerful social media analytics tool that helps businesses track and analyze their social media presence. Built with React and Node.js, it integrates with various social media APIs to gather data. Features include sentiment analysis, engagement metrics, and customizable reporting. Utilizes MongoDB for efficient data storage and retrieval.",
    image: "/assets/projects/social-analytics.jpeg",
    technologies: [technologies.React, technologies.Node, technologies.MongoDB, technologies.AWS],
    liveDemo: "https://social-analytics-demo.com",
    githubRepo: "https://github.com/yourusername/social-analytics"
  },
  {
    title: "Fitness Tracking App",
    description: "Personalized workout plans and progress...",
    fullDescription: "A comprehensive fitness tracking application that helps users create and follow personalized workout plans. Built with React Native for cross-platform compatibility. Features include exercise logging, progress tracking, nutritional guidance, and social sharing. Backend powered by Node.js and MongoDB for efficient data management.",
    image: "/assets/projects/fitness-app.jpeg",
    technologies: [technologies.React, technologies.Node, technologies.MongoDB],
    liveDemo: "https://fitness-app-demo.com",
    githubRepo: "https://github.com/yourusername/fitness-app"
  },
  {
    title: "DevOps Automation Platform",
    description: "Streamlined CI/CD pipelines and infrastructure...",
    fullDescription: "A DevOps automation platform designed to streamline CI/CD pipelines and infrastructure management. Built with Node.js and React, it integrates with popular DevOps tools and cloud platforms. Features include automated testing, deployment workflows, and infrastructure provisioning. Utilizes Docker for containerization and AWS for cloud infrastructure.",
    image: "/assets/projects/devops-platform.jpeg",
    technologies: [technologies.React, technologies.Node, technologies.Docker, technologies.AWS],
    liveDemo: "https://devops-platform-demo.com",
    githubRepo: "https://github.com/yourusername/devops-platform"
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollPosition = 0;

    const scroll = () => {
      if (scrollRef.current && !isPaused) {
        const currentScrollPosition = scrollRef.current.scrollLeft;
        scrollRef.current.scrollLeft += 1;

        // Check if we've reached the end of the original set of projects
        if (currentScrollPosition >= scrollRef.current.scrollWidth / 2) {
          // Reset to the start of the duplicated set
          scrollRef.current.scrollLeft = 0;
        }

        // Check if scrolling has stalled
        if (currentScrollPosition === lastScrollPosition) {
          // Force a small jump to unstick
          scrollRef.current.scrollLeft += 10;
        }

        lastScrollPosition = currentScrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <section id="projects" className="py-20 bg-background">
      <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-4 pb-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...projects, ...projects].map((project, index) => (
          <Card
            key={index}
            className="flex-none w-80 sm:h-96 h-64 flex flex-col cursor-pointer bg-foreground/5 border-foreground/30 rounded-md shadow-md"
            onClick={() => setSelectedProject(project)}
          >
            <Image src={project.image} alt={project.title} width={320} height={160} className="w-full h-1/3 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto mb-2">
                {project.technologies.map((tech, i) => (
                  <tech.icon key={i} className="text-xl" style={{ color: tech.color }} title={tech.name} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:min-w-[639px] sm:min-h-[725px] ">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="flex flex-col space-y-8">
              <div className="relative w-full h-64 sm:min-h-[400px] overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
              <DialogDescription>
                <p className="text-sm text-gray-600 text-justify">{selectedProject.fullDescription}</p>
              </DialogDescription>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center">
                    <tech.icon className="text-xl mr-1" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <div className='flex gap-2 justify-between w-full'>
                  <Button asChild variant="default">
                    <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                  <Button asChild variant="default">
                    <a href={selectedProject.githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                  </Button>
                </div>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;