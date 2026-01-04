import styles from "./Home.module.css";
import { Box, Paper, Theme, Typography, useMediaQuery } from "@mui/material";
import { PageLayout } from "../../shared/layouts";
import AnimatedSection from "../../shared/components/animatedSection/AnimatedSection";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { keyframes } from "@mui/system";
import background from "../../assets/img/dev_background.png";

export const Home: React.FC = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const iconFontSize = smDown ? "medium" : mdDown ? "medium" : "large";

  const waveAnimation = keyframes`
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
    `;

  const icons = [
    { component: HorizontalRuleIcon, link: null },
    { component: GitHubIcon, link: "https://github.com/lendrw" },
    {
      component: LinkedInIcon,
      link: "https://www.linkedin.com/in/leandro-freire-2aab41205/",
    },
    { component: EmailIcon, link: "mailto:leandrocabral321@gmail.com" },
    { component: HorizontalRuleIcon, link: null },
  ];

  return (
    <PageLayout id="home" backgroundImage={background} hasBgFilter>
      <AnimatedSection id="motionHome">
        <Box
          width={{ xs: "92vw", sm: "30em", md: "35em", xl: "45em" }}
          height={{ xs: "15em", sm: "16em", md: "20em", xl: "25em" }}
          component={Paper}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius={13}
          gap={2}
        >
          <Typography
            variant={smDown ? "body1" : mdDown ? "h6" : "h5"}
            textAlign="center"
          >
            Olá, forasteiro!{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                animation: `${waveAnimation} 2s infinite`,
                transformOrigin: "70% 70%",
              }}
            >
              👋
            </Box>
          </Typography>
          <Typography
            variant={smDown ? "h6" : mdDown ? "h5" : "h4"}
            textAlign="center"
            fontWeight="bold"
            className={styles.typing}
          >
            Meu nome é Leandro :)
          </Typography>
          <Typography
            variant={smDown ? "body1" : mdDown ? "h6" : "h5"}
            textAlign="center"
          >
            Desenvolvedor Full-Stack
          </Typography>
          <Box display="flex" justifyContent="center" gap={1}>
            {icons.map(({ component: Icon, link }, index) =>
              link ? (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  <Icon fontSize={iconFontSize} />
                </a>
              ) : (
                <Icon key={index} fontSize={iconFontSize} />
              )
            )}
          </Box>
        </Box>
      </AnimatedSection>
    </PageLayout>
  );
};
