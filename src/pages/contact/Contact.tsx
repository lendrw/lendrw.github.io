import { Box, Grid } from "@mui/material";
import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactCard } from "./ContactCard";

export const Contact: React.FC = () => {
    const icons = [
        { component: <FaGithub />, title: "@lendrw", url: "https://github.com/lendrw" },
        { component: <FaLinkedin />, title: "@leandrocabral", url: "https://www.linkedin.com/in/leandro-freire-2aab41205/" },
        { component: <FaEnvelope />, title: "leandrocabral321@gmail.com", url: "mailto:leandrocabral321@gmail.com" },
        { component: <FaPhone />, title: "(84)9 9991-7798", url: "tel:+5584999917798" },
    ];

    return (
        <PageLayout id="contact" title="Contato">
            <AnimatedSection id='motionContact'>
                <Box 
                    display="flex"
                    justifyContent="center"
                    padding={1}
                >
                    <Grid container spacing={4} sx={{
                        width: {
                            sm: '35em',  
                            md: '40em',
                            lg: '45em'   
                        },
                    }}>
                        {icons.map((icon, index) => (
                            <Grid 
                                key={index} 
                                size={{ xs: 12, sm: 6 }} 
                                display="flex" 
                                justifyContent="center">
                                <a 
                                    href={icon.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <ContactCard title={icon.title} icon={icon.component} />
                                </a>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </AnimatedSection>
        </PageLayout>
    )
}