import { Fragment } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Hero from "../components/section/Hero";
import SectionAbout from "../components/section/SectionAbout";
import SectionImage from "../components/section/SectionImage";
import SectionReview from "../components/section/SectionReview";
import NavigationCard from "../components/card/NavigationCard";

const Homepage = () => {
  return (
    <Fragment>
      <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="satified woman eating in restaurant"
        title="De West Sakura"
        subtitle="Best Western &amp; Japanese Fusion Restaurant In Town"
      />
      <SectionAbout />

      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" />

      <SectionReview />

      <SectionImage imgSrc="/sushi.jpg" imgAlt="sushi" />

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/catering"
              ctaText="Find Out"
            />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Homepage;
