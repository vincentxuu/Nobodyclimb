import * as React from "react";
import styled from "@emotion/styled";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { hover } from "@testing-library/user-event/dist/hover";

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
        maxWidth: 1000,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography style={{ marginRight: "32px" }}>地區</Typography>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <StyleToggleButton value="all" aria-label="all">
          <Typography>所有地區</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="north" aria-label="north">
          <Typography>北部地區</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="central" aria-label="central">
          <Typography>中部地區</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="sourth" aria-label="sourth">
          <Typography>南部地區</Typography>
        </StyleToggleButton>
        <StyleToggleButton value="east" aria-label="east">
          <Typography>東部地區</Typography>
        </StyleToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
