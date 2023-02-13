import backendInstance from "@/api/backend";
import Pill from "@/models/pill";
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
import { Form, Formik, FormikHelpers } from "formik";
import { ComponentProps, FC } from "react";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const urlRegrex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

type Values = { url: string; label: string };
const initialValues: Values = { url: "", label: "" };
const pillSchema = yup.object().shape({
  url: yup.string().matches(urlRegrex, "Must be a URL"),
  label: yup.string().when("link", {
    is: (val: string) => val,
    then: (schema) => schema.required("Required if replacing pill"),
  }),
});

type Props = {
  open: boolean;
  onClose: () => void;
  pillId: 0 | 1;
  pill: Pill;
} & Omit<ComponentProps<typeof Modal>, "children">;

const PillModal: FC<Props> = ({ open, onClose, pillId, pill }) => {
  const replacePill = async (pillId: number, url: string, label: string) => {
    try {
      await backendInstance.put(`/api/pill/${pillId}`, { url, label });
    } catch (err) {
      console.error(err);
    }
  };

  const pickPill = async (pillId: number) => {
    try {
      await backendInstance.post(`/api/pill/${pillId}/pick`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (
    { url, label }: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    if (url.length > 0) await replacePill(pillId, url, label);
    await pickPill(pillId);

    window.location.href = pill.url;
    setSubmitting(false);
  };

  const pillColor = pillId === 0 ? "primary" : "secondary";

  const pillTitle = pillId === 1 ? "The Red Pill" : "The Blue Pill";

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={pillSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, isValid, handleChange, isSubmitting }) => (
            <Form>
              <Card>
                <CardContent>
                  <Typography variant="h5" color={pillColor}>
                    {pillTitle}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" gutterBottom>
                    {pill.label}
                  </Typography>
                  <Card variant="outlined">
                    <CardContent>
                      <Grid2 container spacing={4}>
                        <Grid2 xs={12}>
                          <Typography>
                            {`(Optional) Replace this pill with another. You can label it anything, be it truthful or not.`}
                          </Typography>
                        </Grid2>
                        <Grid2 xs={12}>
                          <TextField
                            fullWidth
                            label="URL"
                            placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            color={pillColor}
                            name="url"
                            value={values.url}
                            onChange={handleChange}
                            error={!!errors.url}
                            helperText={errors.url}
                          />
                        </Grid2>
                        <Grid2 xs={12}>
                          <TextField
                            fullWidth
                            label="Label"
                            placeholder="Not a Rickroll"
                            color={pillColor}
                            name="label"
                            value={values.label}
                            onChange={handleChange}
                            error={!!errors.label}
                            helperText={errors.label}
                          />
                        </Grid2>
                      </Grid2>
                    </CardContent>
                  </Card>
                </CardContent>
                <CardActions>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    fullWidth
                    color={pillColor}
                  >
                    {values.label || values.url
                      ? "Replace Pill and Down the Rabbithole"
                      : "Down the Rabbithole"}
                  </Button>
                </CardActions>
              </Card>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default PillModal;
