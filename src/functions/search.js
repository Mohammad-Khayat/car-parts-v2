function search(list, keys, query) {
    console.log(list)
    console.log(keys)
    console.log(query)
  return list.filter((el) => {
        return el[keys[0]].indexOf(query) != -1
  });
}
export default search;
