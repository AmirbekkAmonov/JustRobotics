import { Select } from "antd";
import "antd/dist/reset.css";
import { useState } from "react";

function contacts() {
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);
  const courses = [
    "Работотехника",
    "Живопись для взрослых",
    "Живопись для детей",
    "Шахмат",
    "Английский",
  ];

  return (
    <div className="contacts" id="contact">
      <div className="container contacts_container">
          <h3>получите бесплатный
          первый урок</h3>
          <div className="contacts_input">
            <input type="text"  placeholder="Ваше имя"/>
            <input type="text" placeholder="Номер телефона" />
            <Select
              style={{ width: "100%", borderRadius: 9, fontSize: 22 }}
              placeholder="Выберете курс"
              value={selectedCourse}
              onChange={setSelectedCourse}
              options={courses.map((c) => ({ value: c, label: c }))}
              size="large"
              dropdownStyle={{ borderRadius: 9, fontSize: 22 }}
            />
            <input type="text"  placeholder="Возраст"/>
            <button>получить</button>
          </div>
      </div>
    </div>
  )
}

export default contacts