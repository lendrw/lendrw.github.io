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
            Sou desenvolvedor <strong>Full-Stack</strong>, com experiência em{" "}
            <strong>
              React.js, JavaScript, TypeScript, Styled Components, Node.js,
              Docker e PostgreSQL
            </strong>
            , além de integração e consumo de <strong>APIs REST</strong>. Sou
            formado em <strong>Sistemas de Informação pela UFERSA</strong> e
            tenho como foco o desenvolvimento de{" "}
            <strong>
              interfaces intuitivas, performáticas e centradas na experiência do
              usuário
            </strong>
            . Atuo de forma <strong>autodidata</strong>, sempre buscando evoluir
            tecnicamente, explorar novas tecnologias e aplicar boas práticas no
            desenvolvimento de software.
          </Typography>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
