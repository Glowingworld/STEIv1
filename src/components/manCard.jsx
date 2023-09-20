import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
  Badge,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));

function CarouselCard(props) {
  const { classes } = useStyles();
  let images = [];

  if (props.imageUrl !== undefined) {
    props.imageUrl.map((image) => {
      images.push(`http://localhost:8045/images/${image}`);
    });
  }

  const slides = images.map((image) => {
    console.log(image);
    return (
      <Carousel.Slide key={image}>
        <Image src={image} height={220} />
      </Carousel.Slide>
    );
  });

  return (
    <Card style={{ height: "" }} radius="md" withBorder>
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>
      <div style={{ height: "140px" }}>
        <Group position="apart" mt="lg">
          <Text fw={400} fz="lg">
            {props.title}
          </Text>

          <Group spacing={5}>
            <IconStar size="1rem" />
            <Text fz="xs" fw={500}>
              4.78
            </Text>
          </Group>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          {props.Description}
        </Text>

        <Group position="apart" mt="md">
          <Group position="center">
            <Badge size="md">{props.Purpose}</Badge>
          </Group>
          <div>
            <Text fz="xl" span fw={500} className={classes.price}>
              {props.price}
            </Text>
            <Text span fz="sm" c="dimmed">
              {" "}
              {props.Duration}
            </Text>
          </div>

          <Link
            href={{
              pathname: "/Property/Detail",
              query: {
                id: props.id,
              },
            }}
          >
            <button className=" text-white bg-secondary-100 p-2 bg-blue-500 hover:bg-blue-600 rounded transition duration-300 ease-in-out hover:translate-x-2 ">
              Book now
            </button>
          </Link>
        </Group>
      </div>
    </Card>
  );
}

export default CarouselCard;
