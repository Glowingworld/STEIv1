import {
  Button,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
  IconUser,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Badge, Avatar } from "@mantine/core";

export default function ButtonMenu(props) {
  const theme = useMantineTheme();
  let avatar = <Avatar alt="" size={24} mr={5} />;
  return (
    <Menu
      transitionProps={{ transition: "pop-top-right" }}
      position="top-end"
      width={220}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          rightIcon={<IconChevronDown size="1.05rem" stroke={1.5} />}
          pr={12}
        >
          <Badge pl={3} size="lg" leftSection={avatar}>
            {" "}
            {props.title}
          </Badge>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Link style={{ textDecoration: "none" }} href={props.link}>
          <Menu.Item
            icon={
              <IconUser size="1rem" color={theme.colors.teal[6]} stroke={1.5} />
            }
            rightSection={
              <Text
                size="xs"
                transform="uppercase"
                weight={700}
                color="dimmed"
              ></Text>
            }
          >
            Profile
          </Menu.Item>
        </Link>

        <Menu.Item
          onClick={() => {
            signOut();
          }}
          icon={
            <IconLogout size="1rem" color={theme.colors.red[6]} stroke={1.5} />
          }
          rightSection={
            <Text
              size="xs"
              transform="uppercase"
              weight={700}
              color="dimmed"
            ></Text>
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
