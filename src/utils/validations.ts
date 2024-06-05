import * as Yup from "yup";

//------------------|REGISTER|----------------//
export const signUpValidationSchema = Yup.object({
        first_name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
        last_name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
        phone_number: Yup.string().required("Phone Number is required"), 
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
        password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .required("Password is required"),
});

//------------------|LOGIN|------------------//
export const signInValidationSchema = Yup.object({
        PhoneNumber: Yup.string()
        // .email("Invalid email address")
        .required("Email is required"),
        password: Yup.string()
        .min(6, "Password must be at least 8 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .required("Password is required"),
});

export const postCategorySchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        // parent_category_id: Yup.number().required("Required"),
        // positon: Yup.number().required("Required"),
      });