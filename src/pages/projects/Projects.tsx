import { Box, Grid } from "@mui/material";
import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import movieinfo from "../../assets/img/movieinfo.png";
import supermarket from "../../assets/img/supermarket.png";
import calculadora from "../../assets/img/calculadora.png";

export const Projects: React.FC = () => {
  const cards = [
    {
      title: "MovieInfo",
      image: movieinfo,
      description: "Um site de filmes, feito consumindo a API TMDB.",
      technologies: "Material UI, TypeScript, Axios, React + Vite.",
      viewLink: "https://lendrw.github.io/movieinfo",
      repositoryLink: "https://github.com/lendrw/movieinfo",
    },
    {
      title: "Supermarket",
      image: supermarket,
      description:
        "E-commerce fictício de supermercado. Simula a listagem de produtos, carrinho de compras e consumo de API fake.",
      technologies:
        "Tailwind CSS, TypeScript, Axios, React + Vite, MSW, DummyJSON.",
      viewLink: "https://lendrw.github.io/supermarkt",
      repositoryLink: "https://github.com/lendrw/supermarkt",
    },
    {
      title: "Calculadora Dev",
      image: calculadora,
      description:
        "Simulador financeiro para desenvolvedores, com cálculo de juros compostos e progressão de carreira.",
      technologies:
        "React Native com Expo, TypeScript, Expo Router, Reanimated.",
      viewLink:
        "https://calculadora-dev-ajhzbi3t5-leandros-projects-672a1260.vercel.app/",
      repositoryLink: "https://github.com/lendrw/calculadoraDev",
    },
  ];

  return (
    <PageLayout id="projects" title="Projetos">
      <AnimatedSection id="motionProjects">
        <Box display="flex" justifyContent="center" padding={1}>
          <Grid
            container
            spacing={4}
            sx={{
              width: {
                xs: "90dvw",
                sm: "30em",
                md: "52em",
                lg: "65em",
              },
              justifyContent: "center",
            }}
          >
            {cards.map((card, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                display="flex"
                justifyContent="center"
              >
                <ProjectCard
                  title={card.title}
                  image={card.image}
                  description={card.description}
                  technologies={card.technologies}
                  viewLink={card.viewLink}
                  repositoryLink={card.repositoryLink}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
