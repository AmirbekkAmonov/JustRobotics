function coursesCard({image, title, showButton}: {image: string, title: string, showButton: boolean}) {
  return (
    <div className="coursesCard">
        <div className="coursesCard__content">
            <img src={image} alt="coursesCard" />
            <h3>{title}</h3>
            <button>{showButton? "Подробнее o кусе ->" : ""}</button>
        </div>
    </div>
  )
}

export default coursesCard