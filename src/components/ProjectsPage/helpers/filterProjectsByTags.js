export default function filterProjectsByTag(projects, tag) {
  if (tag === 'All') {
    return projects;
  }
  return projects.filter((project) => project.tags.includes(tag));
}
