import { useEffect, useState } from 'react';

import { TweetToDisplay } from '../types';

const baseUrl = import.meta.env.VITE_API_URL;

const useGetFeedByUsernames = (userNames: string[]) => {
  const [feed, setFeed] = useState<TweetToDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userNames.length === 0) {
      setFeed([]);
      return;
    }

    setIsLoading(true);

    const url = new URL(baseUrl);
    url.searchParams.set('q', userNames.join(','));

    fetch(url.toString())
      .then((res) => res.json())
      .then((parsedResponse: TweetToDisplay[]) => {
        setIsLoading(false);
        setFeed(parsedResponse);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run only when the count changes
  }, [userNames.length]);

  return { feed, isLoading };
};

export { useGetFeedByUsernames };
