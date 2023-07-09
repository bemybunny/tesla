import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
       <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            background_image="/tesla/model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
       />
       <Section
            title="Model Y"
            description="Order Online for Touchless Delivery"
            background_image="/tesla/model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory" />
       <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            background_image="/tesla/model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
       />
       <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            background_image="/tesla/model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory" />
       <Section
            title="Solar Pannels"
            description="Schedule a Virtual Consultation"
            background_image="/tesla/solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
       />
       <Section
            title="Solar Roofs"
            description="Produce Clean Energy From Your Roof"
            background_image="/tesla/solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
       />
        <Section
            title="Powerwall"
            description=""
            background_image="/tesla/powerwall.webp"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
       />
       <Section
            title="Accessories"
            description=""
            background_image="accessories.jpg"
            leftBtnText="Shop Now"
       />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`
