import { Header } from './components/Header.jsx';
import {Post} from './components/Post.jsx';
import { Sidebar } from './components/Sidebear.jsx';

import styles from './App.module.css';
import './global.css';

const posts =[
  {
      id: 1,
      author:{
          avatarUrl: 'https://github.com/rafael-papito.png',
          name:'Rafael Porto',
          role: 'CTO PapitoCode'
      },
      content:[
          {type: 'paragraph', content: ' Fala galeraa 👋'},
          {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content:'👉jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-02-11 20:00:00')
  },
  {
      id: 2,
      author:{
          avatarUrl: 'https://github.com/diego3g.png',
          name:'Diego Fernandez',
          role: 'CTO Rocketseat'
      },
      content:[
          {type: 'paragraph', content: ' Fala galeraa 👋'},
          {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          {type: 'link', content:'👉jane.design/doctorcare'}
      ],
      publishedAt: new Date('2023-01-27 22:14:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            
          })}
        </main>
      </div>
    </div>
  )
}

export default App