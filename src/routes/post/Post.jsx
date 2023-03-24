import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import configAPI from '../../axios/configAPI';
import { HiUserCircle } from 'react-icons/hi'
import './Post.css'
import './Post-Response.css'


export default function Post() {


  const { id, userId } = useParams();

  const [detalhesPost, setDetalhesPost] = useState([]);
  const [detalhesUsuario, setDetalhesUsurario] = useState([]);
  const [comentariosRecuperados, setComentariosRecuperados] = useState([]);


  useEffect(() => {


    async function carregarDetalhesPost() {

      try {
        const response = await configAPI.get(`/posts/${parseInt(id)}`)

        const data = response.data
        setDetalhesPost(data)

      } catch (err) {
        console.error("Ops' ocorreu um erro" + err)

      }
    }

    async function carregarDetalhesUsuario() {

      try {
        const response = await configAPI.get(`/users/${parseInt(userId)}`)

        const data = response.data
        setDetalhesUsurario(data)

      } catch (err) {
        console.error("Ops' ocorreu um erro" + err)

      }
    }

    async function carregarComentarios() {

      try {
        const response = await configAPI.get(`/posts/${parseInt(userId)}/comments`)

        const data = response.data
        setComentariosRecuperados(data)

      } catch (err) {
        console.error("Ops' ocorreu um erro" + err)

      }
    }


    carregarDetalhesPost();
    carregarDetalhesUsuario();
    carregarComentarios()

  }, [])


  return (

    <section>

      <div className='detalhe__posts'>

        <h2>Post</h2>
        <h3>{Object.values(detalhesPost)[2]}</h3>
        <p>{Object.values(detalhesPost)[3]}</p>

      </div>

      <div className='detalhe__usuario'>
        <h2>Criado por:</h2>
        <h3> {Object.values(detalhesUsuario)[2]}</h3>
      </div>

      <div className='titulo__comentarios '>
        <h2 >
          Comentários:
        </h2>
      </div>

      {comentariosRecuperados.map((item) => {
        return (
          
          <div className='conteiner__comentarios'>

            <div className='img__email__user'>
              <HiUserCircle  size={32} />
              <h3>
                {item.email}
              </h3>
            </div>

            <p>
              {item.body}
            </p>

          </div>

        )

      })}

    </section>








  )
}