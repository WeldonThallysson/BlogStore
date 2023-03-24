
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import configAPI from "../../axios/configAPI";

import '../home/Response-home.css'

const Home = () => {
    
    const [postid, setPostID] = useState('');
    const [posts, setPostsID] = useState([]);
 

    useEffect(() => {
   
       async function getPosts(){
       
            try {

            
            
                const response = await configAPI.get("/posts");
                const listagemPosts = response.data;
                listagemPosts.map((item) => {
                     return setPostID(item.userId) 
                });

                 const listagemPorUsuario = await configAPI.get(`/posts/${postid}`)
                 const resposta = listagemPorUsuario.data

                 setPostsID(resposta)


                 
              
                
            } catch(error){
                console.log(error)
            }
            
        }
       getPosts();

    },[])

    return (
        <section className="home">
         <h1 className="titulo__ultimos__poster">Últimos posts</h1>
         
        {posts.map((item)=> 
            (
                <div className="post" key={item.id}>
                  
                  <h2 className="nome__post">{item.title}</h2>
                  <p className="descricao__post">{item.body}</p>
                   <Link className="botao" to={`/post/${item.id}/${item.userId}`}>Ler Mais...</Link>
                </div>
            )
        )}
        
        </section>
        
    )
}

export default Home