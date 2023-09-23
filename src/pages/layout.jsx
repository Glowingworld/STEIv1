// components/Layout.js
import React, { ReactNode, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import ButtonMenu from "../components/Buttons/dropdownMenubtn";
import {
  Image,
  Text,
  AppShell,
  Group,
  Navbar,
  createStyles,
  getStylesRef,
  rem,
  Space,
  Header,
  Container,
  Avatar,
  Grid,
  Burger,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBell,
  IconCreditCard,
  IconHome2,
  IconNotification,
  IconSettings,
  IconPlus,
} from "@tabler/icons-react";
//import styles from "../../styles/home.module.css";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

const userLinks = [
  { link: "/Dashboard", label: "Dashboard", icon: IconHome2 },
  { link: "/Dashboard/Submit", label: "Submit", icon: IconPlus },
  {
    link: "/Dashboard/Request",
    label: "Requests",
    icon: IconBell,
  },
  { link: "#", label: "Settings", icon: IconSettings },
];

const adminLinks = [
  { link: "/Dashboard", label: "Dashboard", icon: IconHome2 },
  { link: "/Dashboard/Users", label: "Users", icon: IconCreditCard },
  { link: "/Dashboard/Meters", label: "Meters", icon: IconBell },
  { link: "#", label: "Settings", icon: IconSettings },
];

const Layout = ({ children }) => {
  let pathname = usePathname();
  pathname = pathname.substring(pathname.lastIndexOf("/") + 1);

  const { classes, cx } = useStyles();
  const [active, setActive] = useState(pathname);
  const [user_name, setUserName] = useState("");
  const [user_img, setUserImg] = useState("");
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { data: session } = useSession();

  const user = session?.user;
  let userData = user?.user;

  let fname = userData?.First_name;
  let lastname = userData?.Last_name;
  useEffect(() => {
    setUserName(userData?.fullName);
  }, []);

  const userlinks = userLinks.map((item) => (
    <Link
      href={item.link}
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  const adminlinks = adminLinks.map((item) => (
    <Link
      href={item.link}
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ xm: 10, lg: 300 }}
        >
          <Navbar.Section mt="xs">
            <Group spacing="xs">
              {/* <Image maw={95} radius="xs" src="/chap.png" alt="Logo" /> */}
              <Text size="xl" fw="bold">
                <Link href="/">STEI</Link>
              </Text>
            </Group>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Space h="xl" />
          </Navbar.Section>
          <Navbar.Section grow>
            {userData?.role?.type == "admin" ? adminlinks : userlinks}
          </Navbar.Section>
        </Navbar>
      }
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <Container px="lg" py="md" size="xl">
        <Grid>
          <Grid.Col span={3}>
            <Group spacing="xs">
              <Text fw="bold" fz="lg">
                {active}
              </Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={3} offset={6}>
            <Group>
              {user_img == "" ? (
                <Avatar radius="xl" />
              ) : (
                <Avatar src={user_img} alt="it's me" />
              )}

              <ButtonMenu link="#" title={`${fname} ${lastname}`} />
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      {/* <div className={styles.thinBorder} /> */}
      {children}
    </AppShell>
  );
};

export default Layout;
