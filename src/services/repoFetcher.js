import axios from 'axios';

export const isRepoPortfolio = async (tagsUrl) => {
  const response = await axios.get(tagsUrl);
  return response.data.find(tag => tag.name === 'Portfolio') !== undefined;
}

export const getRepoCover = async (contentsUrl) => {
  try {
    const response = await axios.get(contentsUrl);
    return response.data.content;
  } catch (e) {
    return null;
  }
}