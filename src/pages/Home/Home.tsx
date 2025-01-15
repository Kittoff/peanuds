import { Container, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/CustomButton/CustomButton";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Stack>
          <Typography variant="h4" component="h1">
            Welcome to the StarWars Universe!
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Let&#39;s do a deep dive together.
          </Typography>
          <Typography variant="body1" mt={3}>
            Discover all the{" "}
            <Button variant="contained" onClick={() => navigate("/people")}>
              Characters
            </Button>{" "}
            and the{" "}
            <Button variant="contained" onClick={() => navigate("/films")}>
              Movies
            </Button>
            .
          </Typography>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
