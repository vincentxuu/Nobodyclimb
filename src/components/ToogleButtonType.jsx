import * as React from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography style={{ marginRight: "32px" }}>類型</Typography>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="all" aria-label="all">
          <Typography>所有類型</Typography>
        </ToggleButton>
        <ToggleButton value="boulder" aria-label="boulder">
          <Typography>抱石</Typography>
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <Typography>上攀</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
