import { Box, Grid } from "@mui/material";
import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import movieinfo from "../../assets/img/movieinfo.png";
import supermarket from "../../assets/img/supermarket.png";
import calculadora from "../../assets/img/calculadora.png";
import { FaReact, FaNode, FaDocker, FaCloudflare } from "react-icons/fa";
import { SiTypescript, SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileHtmlDuotone, PiFileCssDuotone } from "react-icons/pi";
import { TbBrandReactNative } from "react-icons/tb";

export const Projects: React.FC = () => {
  const cards = [
    {
      title: "MovieInfo",
      image: movieinfo,
      technologies: [
        <PiFileHtmlDuotone />,
        <PiFileCssDuotone />,
        <SiMui />,
        <FaReact />,
        <SiTypescript />,
      ],
      viewLink: "https://lendrw.github.io/movieinfo",
      repositoryLink: "https://github.com/lendrw/movieinfo",
    },
    {
      title: "Supermarket",
      image: supermarket,
      technologies: [
        <PiFileHtmlDuotone />,
        <RiTailwindCssFill />,
        <FaReact />,
        <SiTypescript />,
      ],
      viewLink: "https://lendrw.github.io/supermarkt",
      repositoryLink: "https://github.com/lendrw/supermarkt",
    },
    {
      title: "Calculadora Dev",
      image: calculadora,
      technologies: [<TbBrandReactNative />, <SiTypescript />],
      viewLink: "https://calculadora-dev-xbu.vercel.app",
      repositoryLink: "https://github.com/lendrw/calculadoraDev",
    },
    {
      title: "API de vendas",
      isApi: true,
      technologies: [
        <SiTypescript />,
        <FaNode />,
        <BiLogoPostgresql />,
        <FaDocker />,
        <FaCloudflare />,
      ],
      repositoryLink: "https://github.com/lendrw/API-vendas",
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
                  technologies={card.technologies}
                  viewLink={card.viewLink}
                  repositoryLink={card.repositoryLink}
                  isApi={card.isApi}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
