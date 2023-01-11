import * as React from "react";
import styled from "@emotion/styled";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
const StyleToggleButton = styled(ToggleButton)`
  background-color: "#FFFFFF";
  border-radius: "8px";
  border: unset;
  margin-right: "16px";
  &:hover {
    background-color: #dbd8d8;
    border-radius: "8px";
  }
  &:active {
    background-color: #1b1a1a;
    color: #ffffff;
    border-radius: "8px";
  }
`;

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Box
      sx={{
        width: "100%",
        //maxWidth: 1000,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <StyleToggleButton value="all" aria-label="all">
          <Typography>所有文章</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="equipment" aria-label="equipment">
          <Typography>裝備介紹</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="skill" aria-label="skill">
          <Typography>技巧介紹</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="technique" aria-label="technique">
          <Typography>技術研究</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="competition" aria-label="competition">
          <Typography>比賽介紹</Typography>
        </StyleToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
