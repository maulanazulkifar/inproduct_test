const base_url = 'https://jsonplaceholder.typicode.com/';

const get = async (url, params = {}) => {
  const res = await
    fetch(base_url + url);
  const allPostsData = await res.json();
  return allPostsData;
}

export default get;