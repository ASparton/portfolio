import axios from 'axios';

export const isRepoPortfolio = async (tagsUrl) => {
  const response = await axios.get(tagsUrl);
  return response.data.find(tag => tag.name === 'Portfolio') !== undefined;
}

export const getRepoCover = async (contentsUrl) => {  
  try {
    let response = await axios.get(contentsUrl);
    response = await axios.get(response.data.git_url);
    return response.data.content;
  } catch (e) {
    return null;
  }
}