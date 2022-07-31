import { Card, Skeleton } from '@mantine/core';
import { FC } from 'react';

const CardSkeleton: FC = () => (
  <Card p="lg" radius="md" shadow="sm" withBorder>
    <Skeleton height={8} radius="xl" />
    <Skeleton height={8} mt={6} radius="xl" />
    <Skeleton height={8} mt={6} radius="xl" width="70%" />
  </Card>
);

export { CardSkeleton };
