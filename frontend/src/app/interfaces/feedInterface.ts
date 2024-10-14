export interface FeedCardProps {
  title: string;
  hashtags: string[];
  readTime: string;
  image: string;
}

export interface FeedItem {
  _id: string;
  title: string;

  hashtags: string[];
  readTime: string;
  image: string;
}
