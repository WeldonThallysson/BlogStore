import '../new-post/NewPost.css'

const NewPost = () => {
  return (
    <section className='new-post'>

      <h2> Inserir novo post:</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="title">Título</label>
          <input
            type="Text"
            name='title'
            id='title'
            placeholder='Digite o título '
          />
        </div>
        <div className='form-control'>
          <label htmlFor="body">Descrição</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo'
          ></textarea>
        </div>
        <input className='botao--input' type="submit" value="Criar Post"/>
      </form>

    </section>
  )
}

export default NewPost