import { Box, Button, Card, CardContent, CardMedia, Icon, Typography } from "@mui/material";


interface Card {
    title?: string;
    image?: string;
    description?: string;
    technologies?: string;
    link?: string;
}

export const ProjectCard: React.FC<Card> = ({ title, image, description, technologies }) => {

    return (
        <Card >
            <CardMedia
                component="img"
                image={image}
                title={title}
                
            />
            <CardContent>
                <Box
                    display='flex' 
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    gap={1}
                >
                    <Typography variant='h6' textAlign='justify'>
                        {title}
                    </Typography>
                    <Typography variant='body1' textAlign='center'>
                        {description}
                    </Typography>
                    <Typography variant='body1' textAlign='center'>
                        Tecnologias usadas no projeto: {technologies}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}