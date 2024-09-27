import { DiscussionEmbed } from "disqus-react";

interface Props {
  article: {
    url: string;
    id: string;
    title: string;
  };
}

const DisqusComponent = (props: Props) => {
  return (
    <DiscussionEmbed
      shortname="fiction-read"
      config={{
        url: props.article.url,
        identifier: props.article.id,
        title: props.article.title,
        language: "en", //e.g. for Traditional Chinese (Taiwan)
      }}
    />
  );
};

export default DisqusComponent;