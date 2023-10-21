import React, { useState } from "react";
import './TabComponent.css'
import AdvancedTodoList from "./advancedToDoList/AdvancedTodoList";
import { UseFetch } from "./useFetch/UseFetch";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Advanced Todo List",
    "useFetch",
    "useArray",
    "useLocalStorage",
    "useContext",
    "useReducer",
    "Blog Project",
  ];

  const tabContent = [
    <AdvancedTodoList />,
    <UseFetch />,
    "Content for Tab 3",
    "Content for Tab 4",
    "Content for Tab 5",
    "Content for Tab 6",
    "Blog Project",
  ];

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => changeTab(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TabComponent;
