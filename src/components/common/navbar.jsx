// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";
// import styles from "@/styles/components.module.scss";

// import { logout } from "@/Features/auth/authetication";
// import { Logout } from "@mui/icons-material";
// import { UnstyledButton, Badge, Group } from "@mantine/core";
// import ButtonMenu from "../Buttons/dropdownMenubtn";

// export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const { data: session, status } = useSession();
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const user = session?.user;
//   let userData = user?.user;

//   let fname = userData?.First_name;
//   let lastname = userData?.Last_name;
//   console.log(user);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";

//   const mobileMenuId = "primary-search-account-menu-mobile";

//   return (
//     <Group
//       sx={{ flexGrow: 1, backgroundColor: "white" }}
//       className={styles.navbar}
//     >
//       <AppBar className={styles.appbar}>
//         <Toolbar>
//           <Typography
//             variant="h7"
//             noWrap
//             component="div"
//             sx={{
//               display: { xs: "none", sm: "block" },
//               paddingLeft: "10px",
//               color: " rgba(0, 0, 0, 0.5)",
//             }}
//           >
//             <Link href="/">STEI</Link>
//           </Typography>
//           <Typography
//             variant="h7"
//             noWrap
//             component="div"
//             sx={{
//               display: {
//                 xs: "none",
//                 sm: "block",
//                 paddingLeft: "10px",
//                 color: " rgba(0, 0, 0, 0.5)",
//               },
//             }}
//           >
//             <Link href="/Property">Property</Link>
//           </Typography>
//           <Typography
//             variant="h7"
//             noWrap
//             component="div"
//             sx={{
//               display: {
//                 xs: "none",
//                 sm: "block",
//                 paddingLeft: "10px",
//                 color: " rgba(0, 0, 0, 0.5)",
//               },
//             }}
//           >
//             <Link href="/AboutUs"> AboutUs</Link>
//           </Typography>
//           <Typography
//             variant="h7"
//             noWrap
//             component="div"
//             sx={{
//               display: {
//                 xs: "none",
//                 sm: "block",
//                 paddingLeft: "10px",
//                 color: " rgba(0, 0, 0, 0.5)",
//               },
//             }}
//           >
//             <Link href="/Dashboard">
//               {status == "authenticated" ? "Dashboard" : null}
//             </Link>
//           </Typography>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex", color: " rgba(0, 0, 0, 0.5)" },
//             }}
//           >
//             {status === "autheticated" ? (
//               <ButtonMenu link="#" title={`${fname} ${lastname}`} />
//             ) : (
//               <Typography
//                 variant="h7"
//                 noWrap
//                 component="div"
//                 sx={{
//                   display: { xs: "none", sm: "block" },
//                   padding: "4px",
//                   color: " rgba(0, 0, 0, 0.5)",
//                 }}
//               >
//                 <Link href="/Auth/Login">Login</Link>
//               </Typography>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Group>
//   );
// }

import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
//import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconUser,
  IconLockAccess,
  IconHelp,
  IconServicemark,
  IconRecharging,
} from "@tabler/icons-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconLockAccess,
    title: "Fast and Secure",
    description:
      " Find your perfect place and book it within minutes through our secure platform",
  },
  {
    icon: IconHelp,
    title: "Visited for you",
    description: " We have visited nearly 1800 rooms for you!",
  },
  {
    icon: IconServicemark,
    title: "All Included",
    description:
      " All Bills, Linen, Kitchen and Laundry facilities are included in the rent.",
  },

  {
    icon: IconRecharging,
    title: "Fair and Fixed Rent",
    description:
      " Affordable rooms only and the rent can't be increased during your stay.",
  },
];

function HeaderMegaMenu() {
  const { data: session, status } = useSession();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={50}>
      <Header position="fixed" height={80} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <IconUser size={30} />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" color="dimmed">
                        See what we have in the list
                      </Text>
                    </div>
                    <Link href="/Property">
                      <Button variant="default">Get started</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/Property" className={classes.link}>
              Property
            </Link>
            <Link href="#" className={classes.link}>
              About us
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            {status == "authenticated" ? (
              <Link href="/Dashboard">
                <Button variant="default">Dashboard</Button>
              </Link>
            ) : (
              <Link href="/Auth/Login">
                <Button variant="default">Log in</Button>
              </Link>
            )}

            <Link href="/Auth/Register">
              <Button variant="outline">Sign up</Button>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            {status == "authenticated" ? (
              <Link>
                <Button variant="default">Dashboard</Button>
              </Link>
            ) : (
              <Link href="/Auth/Login">
                <Button variant="default">Log in</Button>
              </Link>
            )}

            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HeaderMegaMenu;
