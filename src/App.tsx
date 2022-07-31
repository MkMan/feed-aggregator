import { Container, Space, Title } from '@mantine/core';

import { CloseButtonsGroup } from './components';
import { useSaveArrayState } from './hooks';
import { SearchField } from './search-field';

const App = () => {
  const {
    state: userNames,
    addValue: addUserName,
    removeValue: removeUserName,
  } = useSaveArrayState<string>();

  return (
    <Container size="sm">
      <Title style={{ margin: '20px 0' }}>Feed aggregator</Title>
      <SearchField
        label="Enter a twitter user name"
        name="twitter"
        onSubmit={addUserName}
        placeholderText="mustafa_k_man"
      />
      <Space h="sm" />
      <CloseButtonsGroup buttonLabels={userNames} onClick={removeUserName} />
    </Container>
  );
};

export { App };
