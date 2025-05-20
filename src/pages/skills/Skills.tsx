import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import { Box, Grid } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaCloud } from "react-icons/fa";
import { SiTypescript, SiMui, SiJest } from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { SkillCard } from "./SkillCard"; // ajuste o caminho se necessário

export const Skills: React.FC = () => {
  const icons = [
    { component: <FaHtml5 />, title: "HTML" },
    { component: <FaCss3Alt />, title: "CSS" },
    { component: <FaJsSquare />, title: "JavaScript" },
    { component: <FaReact />, title: "React" },
    { component: <SiTypescript />, title: "TypeScript" },
    { component: <SiMui />, title: "Material UI" },
    { component: <SiJest />, title: "Jest" },
    { component: <FaGithub />, title: "GitHub" },
    { component: <FaCloud />, title: "Consumo de APIs" },
    { component: <RiEnglishInput />, title: "Inglês intermediário" },
  ];

  return (
    <PageLayout id="skills" title="Minhas Habilidades">
      <AnimatedSection id="motionSkills">
        <Box 
            display="flex"
            justifyContent="center"
            padding={1}
        >
            <Grid container spacing={4} sx={{
                    width: {
                        xs: '90%',  
                        sm: '80%',  
                        md: '80%',   
                        },
                }}>
            {icons.map((icon, index) => (
                <Grid 
                    key={index} 
                    size={{ xs: 6, sm: 4, md: 4, lg: 3, xl: 2 }} 
                    display="flex" 
                    justifyContent="center">
                <SkillCard title={icon.title} icon={icon.component} />
                </Grid>
            ))}
            </Grid>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
