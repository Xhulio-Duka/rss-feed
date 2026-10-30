import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";

const parser = new RSSParser();

let articles: any[] = [];

const parse = async (feedURL: string) => {
  const feed = await parser.parseURL(feedURL);

  console.log(feed.title);

  feed.items.forEach((item) => {
    console.log(`${item.title} - ${item.link}`);

    articles.push({ item });
  });
};

parse(feedURL);

export { articles };
