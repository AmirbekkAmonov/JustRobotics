import CoursesCard from "../../components/coursesCard/coursesCard";
import coursesCard1 from "/assets/images/coursesCard1.svg";
import coursesCard2 from "/assets/images/coursesCard2.svg";
import coursesCard3 from "/assets/images/coursesCard3.svg";
import coursesCard4 from "/assets/images/coursesCard4.svg";
import coursesCard5 from "/assets/images/coursesCard5.svg";


function courses() {

  const coursesCards = [
    {
      image: coursesCard1,
      title: "Робототехника",
      showButton: true
    },
    {
      image: coursesCard2,
      title: "Живопись для детей",
      showButton: true
    },
    {
      image: coursesCard3,
      title: "Живопись для взрослых",
      showButton: true
    },
    {
      image: coursesCard4,
      title: "Английский язык для детей",
      showButton: true
    },
    {
      image: coursesCard5,
      title: "Шахмат",
      showButton: true
    },
  ]
  
  return (
    <div className="courses" id="courses">
      <div className="container courses__container">     
          <h2>Авторские кусы
          от JustRobotics</h2>
          <div className="courses__cards">
            {coursesCards.map((card) => (
              <CoursesCard key={card.image} image={card.image} title={card.title} showButton={card.showButton} />
            ))}
          </div>
          <h4>Отзывы</h4>
      </div>
    </div>
  )
}

export default courses