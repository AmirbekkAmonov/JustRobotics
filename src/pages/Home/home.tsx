import Robotics from '/assets/images/home-robot.svg'

function home() {
  return (
    <div className="home" id="home">
      <div className="container home__container">
        <div className="home__content">
          <h1>JustRobotics</h1>
          <p>твой проводник в мир технологий и искусства</p>
          <span>получите бесплатное первое занятие</span>
          <button>Перейти к курсам</button>
        </div>
        <img src={Robotics} alt="robotics" className="home__robotics" />
      </div>
    </div>
  )
}

export default home