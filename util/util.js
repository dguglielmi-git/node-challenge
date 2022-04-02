
const searchById = (projects, id) => {
  const res = projects.filter(elem => elem.id === parseInt(id));
  return res;
}

const searchActive = (projects) => {
  const res = projects.filter(elem => elem.isActive === true);
  return res;
}

const sortArray = () => {
  return (a, b) => {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    }
    return 0;
  }
}

const searchProjOrderAsc = (projects) =>
  projects.sort(sortArray());


module.exports = {
  searchById,
  searchActive,
  searchProjOrderAsc,
}