import { 
            Box, 
            Button, 
            Card, 
            CardContent, 
            CardMedia, 
            Typography 
        } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import soon from '../../assets/img/movieinfo.png'

interface Card {
    title?: string;
    image?: string;
    description?: string;
    technologies?: string;
    link?: string;
}

export const ProjectCard: React.FC<Card> = ({ title, image, description, technologies, link }) => {

    return (
        <Card 
            sx={(theme) => ({
                borderLeft: `4px solid ${theme.palette.secondary.light}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            })}
        >
            {image && 
                <CardMedia
                    component="img"
                    image={image}
                    title={title}
                />
            }
            {!image && 
                <Box position="relative">
                <CardMedia
                  component="img"
                  image={soon}
                  title={title}
                  sx={{ objectFit: 'cover' }}
                />
              
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize="1.5rem"
                  sx={(theme) => ({
                    background: `${theme.palette.primary.dark}`,
                    fontFamily: `${theme.typography.fontFamily}`
                    })}
                >
                  Em breve
                </Box>
              </Box>
            }

            <CardContent sx={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Box
                    display='flex' 
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    gap={3}
                >
                    <Typography variant='h6'>
                        {title ? `${title}` : '...'}
                    </Typography>
                    <Typography variant='body1' textAlign='justify' sx={{fontSize: {xs: '', sm: ''}}}>
                        {description ? `${description}` : '...'}
                    </Typography>
                    <Typography variant="body1" textAlign="justify" sx={{fontSize: {xs: '', sm: ''}}}>
                        {technologies ? (
                            <>
                            <Typography
                                component="span"
                                color="secondary.contrastText"
                                fontWeight="bold"
                                sx={{ display: 'inline',
                                      fontSize: {xs: '', sm: ''}
                                 }}
                            >
                                Tecnologias usadas no projeto:
                            </Typography>{' '}
                                {technologies}
                            </>
                        ) : (
                            '...'
                        )}
                    </Typography>

                    <Button 
                        variant="contained" 
                        startIcon={<LinkIcon />}
                        href={link || undefined}
                        disabled={!link}
                        sx={(theme) => ({
                            backgroundColor: theme.palette.secondary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.secondary.dark,
                            },
                          })}
                    >
                        {link ? 'visualizar' : '...'}
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}