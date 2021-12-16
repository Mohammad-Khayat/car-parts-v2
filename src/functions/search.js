function listSearch(list, keys, query) {
  if(query)
  return list.filter((el) => {
    return keys.some((key) => {   
     return el[key].toLowerCase().indexOf(query.toLowerCase()) != -1
    });
  });
  else{
    return list
  }
}
export default listSearch;
