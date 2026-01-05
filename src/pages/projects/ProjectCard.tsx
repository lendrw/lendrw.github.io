import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { FaCloud } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import soon from "../../assets/img/movieinfo.png";
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  image?: string;
  isApi?: boolean;
  technologies?: ReactNode[];
  viewLink?: string;
  repositoryLink?: string;
}

export const ProjectCard: React.FC<CardProps> = ({
  title,
  image,
  isApi = false,
  technologies,
  viewLink,
  repositoryLink,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Card
      sx={(theme) => ({
        borderLeft: `4px solid ${theme.palette.secondary.light}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      })}
    >
      <Typography variant={smDown ? "h6" : mdDown ? "h5" : "h5"} p={1}>
        {title ? `${title}` : "..."}
      </Typography>
      {image && <CardMedia component="img" image={image} title={title} />}
      {!image && !isApi && (
        <Box position="relative">
          <CardMedia
            component="img"
            image={soon}
            title={title}
            sx={{ objectFit: "cover" }}
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
              fontFamily: `${theme.typography.fontFamily}`,
            })}
          >
            Em breve
          </Box>
        </Box>
      )}
      {isApi && (
        <Box position="relative">
          <CardMedia
            component="img"
            image={soon}
            title={title}
            sx={{ objectFit: "cover" }}
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
              fontFamily: `${theme.typography.fontFamily}`,
            })}
          >
            <Typography fontSize={80} color="white" sx={{ display: "flex" }}>
              <FaCloud />
            </Typography>
          </Box>
        </Box>
      )}

      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={3}
        >
          {technologies && technologies.length > 0 ? (
            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
              {technologies.map((tech, index) => (
                <Box
                  key={index}
                  fontSize={32}
                  color="secondary.main"
                  display="flex"
                  alignItems="center"
                >
                  {tech}
                </Box>
              ))}
            </Box>
          ) : (
            <Typography variant={smDown ? "body2" : mdDown ? "body1" : "body1"}>
              ...
            </Typography>
          )}

          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              startIcon={<LinkIcon />}
              href={viewLink || undefined}
              disabled={!viewLink}
              sx={(theme) => ({
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              })}
            >
              {viewLink ? "visualizar" : "..."}
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href={repositoryLink || undefined}
              disabled={!repositoryLink}
              sx={(theme) => ({
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              })}
            >
              {repositoryLink ? "repositório" : "..."}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
