import React, { Box } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import BlogList from "../constants/BlogList.json";
import img from "../images/photo/blog-mid-left.jpeg";

const CardWrapper = styled.div`
  padding: 12px;
  //display: flex;
  //flex-direction: row;
  //margin: 0 auto;
  max-width: 1200px;
  background-color: #f5f5f5 !important;
`;

export default function ActionAreaCard() {
  return (
    <CardWrapper>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Card
          sx={{
            maxWidth: 1000,
            columns: 3,
            // columnWidth: "50%",
            // columnGap: "10px",
            // columnRuleWidth: "#f5f5f5",
          }}
        >
          {BlogList.map((item) => (
            <CardActionArea key={item.title}>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
        </Card>
      </Link>
    </CardWrapper>
  );
}
