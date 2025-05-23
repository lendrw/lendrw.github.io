import { Box, Grid } from "@mui/material"
import { PageLayout } from "../../shared/layouts"
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection"
import { ProjectCard } from "./ProjectCard"
import movieinfo from "../../assets/img/movieinfo.png"


export const Projects: React.FC = () => {
    const cards = [
        {
            title: "MovieInfo", 
            image: movieinfo, 
            description: "Um site de filmes, feito consumindo a API TMDB.",
            technologies: "Material UI, JavaScript, TypeScript, Axios, React + Vite.",
            link: "https://lendrw.github.io/movieinfo",
        },
        {
            title: "", 
            image: "", 
            description: "",
            technologies: "",
            link: "",
        },
        {
            title: "", 
            image: "", 
            description: "",
            technologies: "",
            link: "",
        },
        {
            title: "", 
            image: "", 
            description: "",
            technologies: "",
            link: "",
        },
    ]

    return (
        <PageLayout id="projects" title="Projetos">
            <AnimatedSection id="motionProjects">
                <Box 
                    display="flex"
                    justifyContent="center"
                    padding={1}
                >
                    <Grid container spacing={4} sx={{
                            width: {
                                xs: '31em',  
                                sm: '43em',  
                                md: '52em',
                                lg: '65em'
                            },
                            justifyContent: 'center'
                        }}>
                        {cards.map((card, index) => (
                            <Grid 
                                key={index} 
                                size={{ xs: 6, sm: 6, md: 6, lg: 6 }} 
                                display="flex" 
                                justifyContent="center">
                                <ProjectCard 
                                    title={card.title} 
                                    image={card.image} 
                                    description={card.description} 
                                    technologies={card.technologies}
                                    link={card.link}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </AnimatedSection>
        </PageLayout>
    )
}