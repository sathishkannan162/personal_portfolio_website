import projects from './projectInfoArray.js';
function getUniqueTags(projects) {
  const tagsSet = new Set();

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });
  return Array.from(tagsSet);
}

const projectTags = getUniqueTags(projects);

export default projectTags;
