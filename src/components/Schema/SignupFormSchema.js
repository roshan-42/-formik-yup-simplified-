import * as Yup from "yup";

const SignupFormSchema = Yup.object().shape({
  firstName: Yup.string().required("required").default(""),
  lastName: Yup.string().required("required").default(""),
  userName: Yup.string().required("Required").default(""),
  password: Yup.string().required("Required").default(""),
});
export default SignupFormSchema;
