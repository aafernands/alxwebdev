import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faChartLine,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Box, Typography, Grid, Paper } from "@mui/material";
import styles from "../styles/servicesSection.module.css";

const services = [
  { bold: "100 + ", text: " projects successful delivered", icon: faBriefcase },
  {
    bold: "50 +",
    text: " businesses transformed with our expertise",
    icon: faBuilding,
  },
  { bold: "98%", text: " client satisfaction rate", icon: faChartLine },
  { bold: "Rated 4.9", text: " service for excellence", icon: faStar },
];

const Services = () => {
  return (
    <Box className={styles.servicesContainer}>
      <Typography variant="h2" align="center" className={styles.title}>
      Proven Results
      </Typography>
      <Typography variant="p" align="center" gutterBottom >
        FNDS Labs: Empowering businesses with cutting-edge web solutions! Join
        our growing community and experience the impact of our innovative
        digital solutions.{" "}
      </Typography>
      <Grid container sx={{ py: "40px", justifyContent:"center"}}>
        {services.map((service, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Box className={styles.serviceCard} elevation={3}>
              <FontAwesomeIcon icon={service.icon} className={styles.icon} />
              <Typography variant="p" className={styles.serviceName}>
                <strong>{service.bold}</strong>
              </Typography>
              <Typography variant="p" className={styles.serviceCardDesc}>
                {service.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="body1"
        align="center"
        sx={{ py: "40px", fontWeight: 600 }}
      >
        "FNDS Labs took our online presence to the next level! Their expertise
        and dedication made all the difference."
        <Typography
          component="span"
          sx={{ alignText: "left", fontStyle: "normal" }}
        >
          <br></br>— Michael Carter, CEO of TechWave
        </Typography>
      </Typography>
      <Box sx={{align: "center"}}>
      <Button
						href="/pricing"
						variant="contained"
						aria-label="Get Started"
						sx={{
							margin: "0 10px",
							backgroundColor: "var(--button-bg, #1976d2)",
							color: "var(--button-text, #fff)",
							"&:hover": {
								backgroundColor: "var(--button-bg-hover, #1565c0)",
							},
						}}
					>
						Get Started
					</Button>
      </Box>
     
    </Box>
  );
};

export default Services;
