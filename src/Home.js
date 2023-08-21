// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
  //   let name = 'mario';
  //   const [name, setName] = useState('mario');
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName('luigi');
  //     setAge('30');
  //   };

  //   const handleClickAgain = (name, e) => {
  //     console.log('hello ' + name, e.target);
  //   };

  //   const [name, setName] = useState('mario');

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  const {
    data: blogs,
    ispending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
