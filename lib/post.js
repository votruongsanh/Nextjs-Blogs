import axios from "axios";

export const getPosts = async limit => {
  try {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getPostIds = async limit => {
  const posts = await getPosts(limit)
  // return posts.map(post => (
  //   {
  //     params: {
  //       id: `${post.id}`
  //     }
  //   }
  // ))
  return posts.map(post => `/posts/${post.id}`)
}

export const getPostById = async id => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}