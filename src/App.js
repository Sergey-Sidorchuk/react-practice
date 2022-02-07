import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Ascription' },
    { id: 3, title: 'PHP', body: 'Hescription' },
    { id: 3, title: 'C++', body: 'Bescription' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты по JS" />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
