import { SignupSchema } from "../AddCart/AddCartValidation";
import { Formik, Field } from "formik";
import { Box } from "@mui/material";
import { FC } from "react";

interface FormFieldProps {
  name: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  value: string;
}

export const FormField: FC<FormFieldProps> = ({
  name,
  errors,
  touched,
  value,
}) => {
  return (
    <Box>
      <Box>{name} </Box>
      <Field name={name} value={value} />
      {errors[name] && touched[name] ? <Box>{errors[name]}</Box> : null}
    </Box>
  );
};

const AddCart = () => {

  return (
    <>
      <Formik
        initialValues={{
          CartName: "",
        }}
        validationSchema={SignupSchema}
        // onSubmit={}
      >
                {({  }) => (
        <Form onSubmit={handleSubmit}
        <Field name={"CartName"}>
          {({ field, meta }) => (
            <Box>
              <input
                className={style.login__input}
                type="text"
                placeholder="CartName"
                {...field}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Login}
              />
              {meta.touched && meta.error && (
                <Box>{meta.error}</Box>
              )}
    </Field>
            <Button type="submit">
            Zaloguj
          </Button>
          )}
       
        </Form>
            )}
      </Formik>
    </>
  );
};

export default AddCart;
