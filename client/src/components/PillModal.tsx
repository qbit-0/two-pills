import backendInstance from "@/api/backend";
import Pill from "@/models/pill";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Modal,
  Slide,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Form, Formik, FormikHelpers } from "formik";
import { ComponentProps, FC } from "react";
import * as yup from "yup";

const urlRegrex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type Values = { url: string; label: string };
const initialValues: Values = { url: "", label: "" };
const pillSchema = yup.object().shape({
  url: yup.string().matches(urlRegrex, "Must be a URL"),
  label: yup
    .string()
    .when("url", {
      is: (val: string) => val,
      then: (schema) => schema.required("Required if replacing pill"),
    })
    .max(280, "Label must be less than 280 characters long"),
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
      await backendInstance.post(`/api/pill/${pillId}`, { url, label });
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

    // window.location.href = pill.url;
    setSubmitting(false);
  };

  const pillColor = pillId === 0 ? "primary" : "secondary";

  const pillTitle = pillId === 0 ? "The Red Pill" : "The Blue Pill";

  const slideDirection = pillId === 0 ? "right" : "left";

  let pillLabelVariant: "h3" | "h4" | "h5";
  if (pill.label.length > 200) {
    pillLabelVariant = "h5";
  } else if (pill.label.length > 100) {
    pillLabelVariant = "h4";
  } else {
    pillLabelVariant = "h3";
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Slide in={open} direction={slideDirection} timeout={150}>
        <Container>
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
                    <Typography
                      variant={pillLabelVariant}
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        wordWrap: "break-word",
                      }}
                    >
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
        </Container>
      </Slide>
    </Modal>
  );
};

export default PillModal;
