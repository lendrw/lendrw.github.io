import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import { Box, Grid } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaCloud,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiMui, SiJest } from "react-icons/si";
import { RiEnglishInput, RiTailwindCssFill } from "react-icons/ri";
import { BiMobileVibration, BiLogoPostgresql } from "react-icons/bi";
import { SkillCard } from "./SkillCard"; // ajuste o caminho se necessário

export const Skills: React.FC = () => {
  const icons = [
    { component: <FaHtml5 />, title: "HTML" },
    { component: <FaCss3Alt />, title: "CSS" },
    { component: <RiTailwindCssFill />, title: "Tailwind CSS" },
    { component: <FaJsSquare />, title: "JavaScript" },
    { component: <FaReact />, title: "React" },
    { component: <SiTypescript />, title: "TypeScript" },
    { component: <SiMui />, title: "Material UI" },
    { component: <BiMobileVibration />, title: "Responsive Design" },
    { component: <SiJest />, title: "Jest" },
    { component: <FaGithub />, title: "Git/GitHub" },
    { component: <FaCloud />, title: "Consumo de APIs" },
    { component: <RiEnglishInput />, title: "Inglês intermediário" },
    { component: <FaNodeJs />, title: "NodeJS" },
    { component: <FaDocker />, title: "Docker" },
    { component: <BiLogoPostgresql />, title: "PostgreSQL" },
  ];

  return (
    <PageLayout id="skills" title="Minhas Habilidades">
      <AnimatedSection id="motionSkills">
        <Box
          display="flex"
          justifyContent="center"
          padding={{ xs: 0, sm: 3, md: 4, lg: 6 }}
        >
          <Grid
            container
            spacing={{ xs: 3, lg: 5 }}
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            {icons.map((icon, index) => (
              <Grid
                key={index}
                sx={{
                  maxWidth: "50%",
                }}
                display="flex"
                justifyContent="center"
              >
                <SkillCard title={icon.title} icon={icon.component} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
