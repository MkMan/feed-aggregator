type User = {
  id: string;
  username: string;
  name: string;
};

type Tweet = {
  id: string;
  text: string;
  created_at: string;
};

type TweetToDisplay = Tweet & Pick<User, 'username' | 'name'>;

export type { Tweet, TweetToDisplay, User };
