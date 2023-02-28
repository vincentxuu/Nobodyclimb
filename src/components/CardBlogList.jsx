import React from "react";
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
  max-width: 1200px;
  background-color: #f5f5f5 !important;
`;

export default function ActionAreaCard() {
  return (
    <CardWrapper>
      <Card>
        {BlogList.map((item) => (
          <Link
            to={`/blog/${item.id}`}
            key={item.title}
            style={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#000"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        ))}
      </Card>
    </CardWrapper>
  );
}
