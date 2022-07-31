import { Card, Group, Stack, Text } from '@mantine/core';
import { FC } from 'react';

import { TweetToDisplay } from '../types';

type Props = {
  feed: TweetToDisplay[];
};

const Feed: FC<Props> = ({ feed }) => {
  if (!feed.length) {
    return null;
  }

  return (
    <Stack>
      {feed.map(({ id, username, name, text }) => (
        <Card key={id} p="lg" radius="md" shadow="sm" withBorder>
          <Group spacing="xs">
            <Text>{name}</Text>
            <Text
              component="a"
              href={`//twitter.com/${username}`}
              variant="link"
              weight={600}
            >
              (@{username})
            </Text>
          </Group>
          <Text>{text}</Text>
        </Card>
      ))}
    </Stack>
  );
};

export { Feed };
