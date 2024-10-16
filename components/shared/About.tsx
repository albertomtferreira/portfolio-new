import React from 'react';
import { Code, Heart, BookOpen, Briefcase } from 'lucide-react';
import { FaReact, FaVuejs, FaHtml5, FaCss3, FaJs, FaNodeJs, FaPython, FaAws, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SkillIcon: React.FC<{ Icon: React.ElementType; name: string; color: string }> = ({ Icon, name, color }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full">
        <div className="flex items-center justify-center lg:justify-start p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${color}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700 truncate hidden lg:block flex-grow">
            {name}
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const skillsData = [
  { Icon: FaReact, name: "React", color: "bg-[#61DAFB]" },
  { Icon: FaVuejs, name: "Vue.js", color: "bg-[#4FC08D]" },
  { Icon: FaHtml5, name: "HTML5", color: "bg-[#E34F26]" },
  { Icon: FaCss3, name: "CSS3", color: "bg-[#1572B6]" },
  { Icon: FaJs, name: "JavaScript", color: "bg-[#F7DF1E]" },
  { Icon: FaNodeJs, name: "Node.js", color: "bg-[#339933]" },
  { Icon: SiExpress, name: "Express", color: "bg-[#000000]" },
  { Icon: FaPython, name: "Python", color: "bg-[#3776AB]" },
  { Icon: SiMongodb, name: "MongoDB", color: "bg-[#47A248]" },
  { Icon: SiMysql, name: "MySQL", color: "bg-[#4479A1]" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "bg-[#336791]" },
  { Icon: FaGitAlt, name: "Git", color: "bg-[#F05032]" },
  { Icon: FaDocker, name: "Docker", color: "bg-[#2496ED]" },
  { Icon: FaAws, name: "AWS", color: "bg-[#232F3E]" },
  { Icon: FaFigma, name: "Figma", color: "bg-[#F24E1E]" },
];

const About: React.FC = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center">About Me</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="sm:flex sm:flex-col lg:flex-none xl:flex xl:flex-col">
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center lg:justify-start">
                <Code className="mr-2" /> Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4">
                {skillsData.map((skill, index) => (
                  <SkillIcon key={index} Icon={skill.Icon} name={skill.name} color={skill.color} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="sm:flex sm:flex-col lg:flex-none xl:flex xl:flex-col space-y-6 gap-4 sm:space-y-0 sm:justify-between lg:space-y-6 xl:space-y-0 xl:justify-between">
          <Card className="sm:flex-grow lg:flex-none xl:flex-grow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center lg:justify-start">
                <Heart className="mr-2" /> Interests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beyond coding, I'm an avid bread baker and practice Reiki for holistic well-being.</p>
            </CardContent>
          </Card>
          <Card className="sm:flex-grow lg:flex-none xl:flex-grow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center lg:justify-start">
                <BookOpen className="mr-2" /> My Background
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>When I'm not coding, you can find me in the kitchen experimenting with sourdough recipes or practicing Reiki. I'm also an avid hiker and enjoy exploring nature trails on weekends.</p>
            </CardContent>
          </Card>
          <Card className="sm:flex-grow lg:flex-none xl:flex-grow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center lg:justify-start">
                <Briefcase className="mr-2" /> Future Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>My aim is to contribute to open-source projects that make a positive impact on society. I'm also working towards becoming a tech mentor to help guide the next generation of developers.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default About;