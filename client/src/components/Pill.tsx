import backendInstance from "@/api/backend";
import PillModal from "@/components/PillModal";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { FC, useEffect, useState } from "react";

type Props = { pillId: 0 | 1 };

const Pill: FC<Props> = ({ pillId: pillId }) => {
  const [open, setOpen] = useState(false);
  const [pill, setPill] = useState({
    url: "",
    label: "",
    replaceCount: 0,
    pickCount: 0,
  });

  const handlePillClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const pillImage =
  //   pillId === 0
  //     ? "https://news.emory.edu/features/2021/11/molnupiravir_experts_weigh_in_treatment_covid_19-11-2021/assets/T6ei4HzRxZ/social-media-molnupiravir-1024x512.jpeg"
  //     : "https://c8.alamy.com/comp/DD93G4/blue-pill-in-the-palm-of-a-hand-DD93G4.jpg";

  const pillColor = pillId === 0 ? "primary" : "secondary";

  const pillTitle = pillId === 0 ? "The Red Pill" : "The Blue Pill";

  useEffect(() => {
    const updatePill = async () => {
      try {
        const { data } = await backendInstance.get(`/api/pill/${pillId}`);
        setPill(data);
      } catch (err) {
        console.error(err);
      }
    };

    updatePill();
  }, []);

  let pillLabelVariant: "h3" | "h4" | "h5";
  if (pill.label.length > 200) {
    pillLabelVariant = "h5";
  } else if (pill.label.length > 100) {
    pillLabelVariant = "h4";
  } else {
    pillLabelVariant = "h3";
  }

  return (
    <>
      <Card
        variant="outlined"
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardActionArea
          onClick={handlePillClick}
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "stretch",
          }}
        >
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body2">
              Picked {pill.pickCount} times.
            </Typography>
            <Typography variant="body2">
              Replaced {pill.replaceCount} times.
            </Typography>
          </CardContent>
          {/* <CardMedia image={pillImage} style={{ height: 150 }} /> */}
          <CardContent
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" color={pillColor} textAlign="center">
              {pillTitle}
            </Typography>
            <Typography
              variant={pillLabelVariant}
              textAlign="center"
              fontWeight="bold"
              sx={{ wordBreak: "break-word" }}
            >
              {pill.label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <PillModal
        pillId={pillId}
        pill={pill}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default Pill;
