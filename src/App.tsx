import { Container } from '@mantine/core';

const App = () => {
  return (
    <>
      <Container>Default container</Container>

      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>

      <Container size={200} px={0}>
        200px container with 0px horizontal padding
      </Container>
    </>
  );
};

export { App };
