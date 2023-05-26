export default function truncateBlogTitle(title, limit) {
  if (title.length <= limit) {
    return title;
  } else {
    var truncatedTitle = title.slice(0, limit - 3) + '...';
    return truncatedTitle;
  }
}
