import style from './layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {

  const styleRoot = urlBg ? {background: `url(${urlBg}) center center no-repeat`} : {background: `${colorBg}`};

  return (
    <section className={style.root} style={ styleRoot }>
      <div className={style.wrapper}>
          <article>
              <div className={style.title}>
                  <h3>{title}</h3>
                  <span className={style.separator}></span>
              </div>
              <div className={`${style.desc} ${style.full}`}>
                  <p>{descr}</p>
              </div>
          </article>
      </div>
  </section>
  )
}

export default Layout;