import { Box, Typography } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => (
  <Box component="li" sx={{ listStyleType: "none" }}>
    <Typography
      component={RouterNavLink}
      to={to}
      variant="caption"
      fontSize={16}
      sx={{
        textDecoration: "none",
        "&:hover": { fontWeight: 700 },
        "&:visited": { color: (theme) => theme.palette.primary.main },
      }}
    >
      {children}
    </Typography>
  </Box>
);

export default NavLink;
