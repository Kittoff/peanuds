import { ButtonProps } from "@mui/material";
import { CustomButton } from "./CustomButton.styles";

const Button = (props: ButtonProps) => {
  return <CustomButton {...props} />;
};

export default Button;
