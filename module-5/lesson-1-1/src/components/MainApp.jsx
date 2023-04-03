const Main = () => {
  return (
    <>
      <main>
        <section className='intro'>
          <div className='container'>
            <div className='wrapper'>
              <div className='card'>
                <img
                  src='https://picsum.photos/id/432/300/230'
                  alt='smth'
                  className='card-img'
                />
                <div className='card-body'>
                  <h2 className='card-title'>Card title</h2>
                  <p className='card-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores nemo possimus eaque corrupti nulla dicta doloribus,
                    aperiam, reiciendis doloremque quas optio distinctio
                    ducimus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main;
