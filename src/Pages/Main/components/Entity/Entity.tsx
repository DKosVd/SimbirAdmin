import s from "./entity.module.css";
import CreatableSelect from "react-select/creatable";
import customStyles from "../../../../styles/select";
import { useState } from "react";

interface IEntity {
  children: React.ReactNode;
  withLine?: boolean;
}

const Entity = ({ children, withLine }: IEntity) => {
  const [active, setActive] = useState(0);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={s.entity}>
      <div
        className={`${s.entity__filter__btn} ${
          true ? s.entity__with__line : ""
        }`}
      >
        <div className={s.entity__filter}>
          <div className={s.entity__filter__elem}>
            <CreatableSelect
              styles={customStyles}
              options={options}
              maxMenuHeight={250}
              placeholder={"Field"}
            />
          </div>
          <div className={s.entity__filter__elem}>
            <CreatableSelect styles={customStyles} placeholder={"Field"} />
          </div>
          <div>
            <CreatableSelect styles={customStyles} placeholder={"Field"} />
          </div>
        </div>
        <div className={s.entity__btn}>
          <button className="btn btn-blue">Применить</button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Entity;
