import { Container, Space, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';

import { CardSkeleton, CloseButtonsGroup, Feed } from './components';
import { useGetFeedByUsernames, useSaveArrayState } from './hooks';
import { SearchField } from './search-field';

const App = () => {
  const [localStorageUserNames, setLocalStorageUserNames] = useLocalStorage<
    string[]
  >({
    key: 'userNames',
    defaultValue: [],
  });
  const {
    state: userNames,
    add: addUserName,
    remove: removeUserName,
  } = useSaveArrayState<string>(localStorageUserNames);

  useEffect(() => {
    setLocalStorageUserNames(userNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync on userNames change
  }, [userNames.length]);

  const { feed, isLoading } = useGetFeedByUsernames(userNames);

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
      <Space h="xl" />
      {isLoading && <CardSkeleton />}
      {!isLoading && <Feed feed={feed} />}
      <Space h="xl" />
    </Container>
  );
};

export { App };
