import { useParams } from 'react-router-dom';
import BlogCards from './BlogList';

export default function ProjectsByTags() {
  const { tag } = useParams();
  console.log(tag);
  return (
    <BlogCards
      title={`${tag} Projects`}
      skip={0}
      interactive={false}
      tag={tag}
    />
  );
}