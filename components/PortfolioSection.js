import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Card, CardMedia, CardContent, Grid, IconButton, useMediaQuery, Chip } from "@mui/material";
import { West, East } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import styles from "../styles/portfolioSection.module.css";

const projects = [
  {
    title: "Bella Vita Ristorante",
    description:
      "A responsive website for an authentic Italian restaurant, showcasing the menu, story, and reservation options with a modern, user-friendly design.",
    image: "./project1.png",
    liveDemo: "https://bella-vitta-restaurant.vercel.app/",
    githubLink: "https://github.com/aafernands/bella-vitta-restaurant",
    technologies: ["React", "Material UI", "Node.js", "Next.js"],
    tags: ["Responsive", "E-commerce"],
    date: "January 2025",
  },
  {
    title: "WeatherApp",
    description:
      "A simple and intuitive web application for checking the weather in any city worldwide.",
    image: "./project2.png",
    liveDemo: "https://weatherapp-demo.com",
    githubLink: "https://github.com/aafernands/weatherapp",
    technologies: ["JavaScript", "Bootstrap", "API Integration"],
    tags: ["API", "Utility"],
    date: "December 2024",
  },
  {
    title: "Realtor App",
    description:
      "A real estate app to browse and save properties, featuring user authentication and favorite listings.",
    image: "./project3.png",
    liveDemo: "https://realtorapp-demo.com",
    githubLink: "https://github.com/aafernands/realtorapp",
    technologies: ["React", "MongoDB", "JWT"],
    tags: ["Full Stack", "Authentication"],
    date: "November 2024",
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (!isLargeScreen) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isLargeScreen]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <Container>
      {isLargeScreen ? (
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: "center", padding: "16px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginBottom: 1 }}>
                    {project.technologies.map((tech, i) => (
                      <Chip key={i} label={tech} variant="outlined" size="small" />
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginBottom: 1 }}>
                    {project.tags.map((tag, i) => (
                      <Chip key={i} label={tag} color="primary" size="small" />
                    ))}
                  </Box>
                  <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                    {project.date}
                  </Typography>
                  <Box mt={2}>
                    <Button size="small" variant="contained" color="primary" href={project.liveDemo} target="_blank" sx={{ marginRight: 1 }}>
                      Live Demo
                    </Button>
                    <Button size="small" variant="outlined" href={project.githubLink} target="_blank">
                      GitHub
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box textAlign="center">
          <Card sx={{ maxWidth: 400, margin: "auto", padding: "16px" }}>
            <CardMedia component="img" height="200" image={projects[currentIndex].image} alt={projects[currentIndex].title} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {projects[currentIndex].title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                {projects[currentIndex].description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginBottom: 1 }}>
                {projects[currentIndex].technologies.map((tech, i) => (
                  <Chip key={i} label={tech} variant="outlined" size="small" />
                ))}
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginBottom: 1 }}>
                {projects[currentIndex].tags.map((tag, i) => (
                  <Chip key={i} label={tag} color="primary" size="small" />
                ))}
              </Box>
              <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                {projects[currentIndex].date}
              </Typography>
              <Box mt={2}>
                <Button size="small" variant="contained" color="primary" href={projects[currentIndex].liveDemo} target="_blank" sx={{ marginRight: 1 }}>
                  Live Demo
                </Button>
                <Button size="small" variant="outlined" href={projects[currentIndex].githubLink} target="_blank">
                  GitHub
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center" mt={2}>
            <IconButton onClick={handlePrev}>
              <West />
            </IconButton>
            <IconButton onClick={handleNext}>
              <East />
            </IconButton>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Slideshow;
