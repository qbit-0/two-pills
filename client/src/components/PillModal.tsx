import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Formik } from "formik";
import { ComponentProps, FC } from "react";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

type Values = { link: string; label: string };
const initialValues: Values = { link: "", label: "" };
const pillSchema = Yup.object().shape({
  link: Yup.string().required("Required"),
  label: Yup.string().required("Required"),
});

type Props = {
  open: boolean;
  onClose: () => void;
  pillId: "red" | "blue";
  pillLabel: string;
} & Omit<ComponentProps<typeof Modal>, "children">;

const PillModal: FC<Props> = ({ open, onClose, pillId, pillLabel }) => {
  const handleSubmit = () => {};

  const pillTitle = pillId === "red" ? "The Red Pill" : "The Blue Pill";

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={pillSchema}
          onSubmit={handleSubmit}
        >
          <Card>
            <CardContent>
              <Typography variant="h5" color="grey.700">
                {pillTitle}
              </Typography>
              <Typography variant="h3" gutterBottom>
                {pillLabel}
              </Typography>
              <Card variant="outlined">
                <CardContent>
                  <Grid2 container spacing={4}>
                    <Grid2 xs={12}>
                      <Typography>
                        {`(Optional) You can replace this pill with another. You can label it anything, be it true or not.`}
                      </Typography>
                    </Grid2>
                    <Grid2 xs={12}>
                      <TextField
                        fullWidth
                        label="Link"
                        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      />
                    </Grid2>
                    <Grid2 xs={12}>
                      <TextField
                        fullWidth
                        label="Label"
                        placeholder="Not a Rickroll"
                      />
                    </Grid2>
                  </Grid2>
                </CardContent>
              </Card>
            </CardContent>
            <CardActions>
              <Button onClick={onClose}>Back</Button>
              <Button type="submit">Confirm</Button>
            </CardActions>
          </Card>
        </Formik>
      </Box>
    </Modal>
  );
};

export default PillModal;
