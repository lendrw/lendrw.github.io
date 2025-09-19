import { Box, Typography } from "@mui/material";
import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";

export const About: React.FC = () => {
  return (
    <PageLayout id="about" title="Sobre mim">
      <AnimatedSection id="motionAbout">
        <Box
          height="20em"
          width={{ xs: "90vw", sm: "35em", md: "45em" }}
          display="flex"
          alignItems="center"
        >
          <Typography
            variant="body1"
            textAlign="justify"
            fontSize={{ xs: "small", sm: "medium", md: "large" }}
          >
            Sou um desenvolvedor front-end com experiência em React.js,
            JavaScript, TypeScript, Styled Components e consumo de APIs. Formado
            em Sistemas de Informação pela UFERSA, tenho como objetivo
            transmitir experiências agradáveis para os usuários. Sou um
            profissional autodidata, estou sempre buscando melhorar minhas
            habilidades e aprender novas tecnologias.
          </Typography>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
