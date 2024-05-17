import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
//icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//svg
import LOGO from "./assets/images/logo.svg";
import SIGNUP from "./assets/images/signup.svg";
//import component
import InputField from "./components/Input";
import LoadingButton from "./components/LoadingButton";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  businessName: yup.string().required("Business name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(12, "Password must be at least 12 characters")
    .required("Password is required"),
});

const StyledImage = styled("img")`
  height: 30%;
  width: 65%;
  margin-top: 10%;
`;

const StyledGrid = styled(Grid)`
  height: 100vh;
  background: linear-gradient(140deg, #dfeaf0, #d5e4ea, #f4e7f4);
`;

const App = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const isMobileOrTablet = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box height={"100vh"}>
      <Stack>
        <Grid container>
          <StyledGrid
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
            item
            xs={12}
            md={6}
            px={4}
            py={2}
          >
            <Box>
              <img src={LOGO} height={65} width={35} alt="logo" />
            </Box>
            <Stack
              sx={{ marginTop: "2vh" }}
              position="relative"
              alignItems="center"
              spacing={4}
            >
              <StyledImage src={SIGNUP} alt="signup" />
              <Typography
                fontSize={"2vw"}
                textAlign={"center"}
                fontWeight={"500"}
              >
                Royalty collections,
                <br /> simplified. It’s next level!
              </Typography>
              <Typography fontSize={"1vw"} textAlign={"center"}>
                Revenue based invoice collection to <br /> make royalty
                collection as easy as...
              </Typography>
            </Stack>
          </StyledGrid>
          <Grid
            item
            sx={{ backgroundColor: "#F8F8FB", overflow: "auto" }}
            height={"100vh"}
            xs={12}
            md={6}
            py={isMobileOrTablet ? 2 : 4}
          >
            <Box>
              <Stack
                px={3}
                direction={"row"}
                justifyContent={isMobileOrTablet ? "space-between" : "flex-end"}
              >
                {isMobileOrTablet && (
                  <img src={LOGO} height={35} width={"auto"} alt="logo" />
                )}
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Typography>Log in</Typography>
                  <ChevronRightIcon />
                </Stack>
              </Stack>
              <Box px={isMobileOrTablet ? 3 : 7.5} mt={5}>
                <Typography
                  fontSize={isMobileOrTablet ? 22 : 35}
                  fontWeight={"500"}
                >
                  Get started with Franchain
                </Typography>
                <Typography fontSize={isMobileOrTablet ? 20 : 16} mt={1}>
                  Create an account in 5 minutes.
                </Typography>
                <Box mt={4}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2}>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            label="First name"
                            helperText={errors.firstName?.message}
                          />
                        )}
                      />
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            label="Last name"
                            helperText={errors.lastName?.message}
                          />
                        )}
                      />
                      <Controller
                        name="businessName"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            label="Business name and HQ location"
                            helperText={errors.businessName?.message}
                          />
                        )}
                      />
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            label="Work email"
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <InputField
                            {...field}
                            label="Password"
                            type="password"
                            helperText={errors.password?.message}
                          />
                        )}
                      />
                      <Box width={"200px"}>
                        <LoadingButton
                          sx={{ marginBlock: "20px" }}
                          type="submit"
                          disabled={!isValid}
                        >
                          Sign up
                        </LoadingButton>
                      </Box>
                    </Stack>
                  </form>
                </Box>
                <Typography fontSize={isMobileOrTablet ? 10 : 14} mt={1}>
                  By clicking “Start Application“, I agree to
                  <u>Mercury’s Terms of Use</u>, <u>Privacy Policy</u> and to
                  receive electronic communication about my accounts and
                  services per
                  <u>Mercury’s Electronic Communications Agreement</u>, and
                  acknowledge receipt of
                  <u> Mercury’s USA PATRIOT Act disclosure</u>.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default App;
