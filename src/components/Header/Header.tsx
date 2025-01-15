import { Container, Stack, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
import { NavItem } from "../../types";

const Header = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      component="header"
      sx={{ px: 4, py: 2, backgroundColor: "#f1f1f1" }}
    >
      <Stack component="nav">
        <Stack
          spacing={4}
          direction="row"
          component="ul"
          height={40}
          alignItems="center"
          useFlexGap
          sx={{ m: 0, p: 0 }}
        >
          {NAV_ITEMS.map((item: NavItem) => (
            <Box key={item.path} component="li" sx={{ listStyleType: "none" }}>
              <Typography
                component={NavLink}
                to={item.path}
                variant="caption"
                fontSize={16}
                sx={{
                  textDecoration: "none",
                  "&:hover": { fontWeight: 700 },
                  "&:visited": { color: (theme) => theme.palette.primary.main },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Header;
