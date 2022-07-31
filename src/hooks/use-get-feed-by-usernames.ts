import { useEffect, useState } from 'react';

import { TweetToDisplay } from '../types';

const baseUrl =
  'https://nca3wrcallnv4gsf7ffl2xf5ve0mwxcz.lambda-url.ap-southeast-2.on.aws/';

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
  }, [userNames, userNames.length]);

  return { feed, isLoading };
};

export { useGetFeedByUsernames };
