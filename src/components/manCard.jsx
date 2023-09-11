import {
  createStyles,
  Image,
  Card,
  Text,
  Group,
  Button,
  getStylesRef,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import Link from "next/link";

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

  console.log(images);

  // const images = [
  //   "http://localhost:8045/images/1694353535915-311468040.png",
  //   "http://localhost:8045/images/1694353535915-311468040.png",
  // ];
  console.log(images);

  const slides = images.map((image) => {
    console.log(image);
    return (
      <Carousel.Slide key={image}>
        <Image src={image} height={220} />
      </Carousel.Slide>
    );
  });

  return (
    <Card radius="md" withBorder>
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
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            {props.price}
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            monthly
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
          <Button radius="md">Book now</Button>
        </Link>
      </Group>
    </Card>
  );
}

export default CarouselCard;
