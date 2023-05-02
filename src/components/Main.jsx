import React, { useEffect, useMemo, useState } from "react";
import mark from "../assets/Mark.svg";
import vector from "../assets/Vector23.svg";
import comment from "../assets/Vector24.svg";
import vector25 from "../assets/Vector25.svg";
import image8 from "../assets/image8.svg";
import vector26 from "../assets/Vector26.svg";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const items = [
  {
    id: 1,
    status: "to-do",
    title: "Highfidelity Design",
    description: "Make clear design and color",
    img: card1,
    progress: 0,
    commentCount: 7,
    linkCount: 2,
  },
  {
    id: 2,
    status: "to-do",
    title: "Usability testing",
    description: "Make clear design and color",
    progress: 0,
    commentCount: 7,
    linkCount: 2,
  },
  {
    id: 3,
    status: "in-progress",
    title: "Highfidelity Design",
    description: "Make clear design and color",
    img: card2,
    progress: 7,
    commentCount: 7,
    linkCount: 2,
  },
  {
    id: 4,
    status: "completed",
    title: "Usability testing",
    description: "Make clear design and color",
    progress: 10,
    commentCount: 7,
    linkCount: 2,
  },
  {
    id: 5,
    status: "completed",
    title: "Highfidelity Design",
    description: "Make clear design and color",
    img: card3,
    progress: 10,
    commentCount: 7,
    linkCount: 2,
  },
];
const tabs = [
  { id: "to-do", label: "To Do" },
  { id: "in-progress", label: "InProgress" },
  { id: "completed", label: "Completed" },
];
const onSmallScreen = window.matchMedia("(max-width: 768px)");

const Main = () => {
  const itemsByCategory = useMemo(() =>
    items.reduce((prev, curr) => {
      if (!(curr.status in prev)) prev[curr.status] = [];
      prev[curr.status].push(curr);

      return prev;
    }, {})
  );

  const [currentTab, setCurrentTab] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(onSmallScreen.matches);

  useEffect(() => {
    const handleResize = ({ matches }) => setIsSmallScreen(matches);
    onSmallScreen.addEventListener("change", handleResize);

    return () => onSmallScreen.removeEventListener("change", handleResize);
  });

  return (
    <>
      {isSmallScreen && (
        <div className="flex justify-between text-sm  rounded py-2 px-4">
          {tabs.map(({ label, id }, i) => (
            <button
              key={id}
              className={`py-1 px-4 rounded transition-all duration-700${
                i === currentTab && " bg-gray-600 text-white"
              }`}
              onClick={() => setCurrentTab(i)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <main className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tabs.map(
          ({ id, label, svg }, i) =>
            (i === currentTab || !isSmallScreen) && (
              <div key={id}>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder={label}
                    className="bg-[#F4F6F8] text-[#858A93] rounded-md py-3 px-9 w-full"
                  />
                  <span className="grid place-content-center absolute rounded shadow-lg-white text-white right-2 -translate-y-1/2 top-[50%] w-9 h-9 bg-slate-950 mr-1">
                    {itemsByCategory[id]?.length ?? 0}
                  </span>
                </div>

                {itemsByCategory[id]?.map((item) => (
                  <Item className="mb-4" item={item} key={item.id} />
                ))}

                <button className="flex justify-center gap-3 w-full text-center bg-[#F2F4F5] border border-dashed border-[#D5D5D5] rounded-lg text-[#7D8088] py-3 ml-auto px-16 text-sm">
                  <img src={vector} />
                  Add Task
                </button>
              </div>
            )
        )}
      </main>
    </>
  );
};

export default Main;

const Item = ({ item, className }) => {
  return (
    <div className={className + " bg-white rounded-xl p-4"}>
      {item.img && <img className="w-full" src={item.img} />}
      <div className="flex justify-between items-center mt-4 mb-2">
        <h6 className="text-[#000000] font-semibold">{item.title}</h6>
        <img src={vector26} />
      </div>

      <div className="text-gray">
        <p className="text-sm text-[#B8B9BD] font-light ">{item.description}</p>
        <p className="flex relative gap-2 text-[#B8B9BD] font-light text-sm mt-3 ">
          <img src={mark} />
          Progress
          <span className="text-md font-normal ml-auto text-black">
            {item.progress}/10
          </span>
        </p>
        <Progress value={item.progress / 10} />
        <div className="flex text-[#B8B9BD] gap-3">
          <p className="flex gap-1 font-light text-sm mt-1">
            <img src={comment} />
            {item.commentCount}
          </p>
          <p className="flex gap-1 font-light text-sm mt-1">
            <img src={vector25} />
            {item.linkCount}
          </p>
          <img src={image8} className="rounded-full -mr-4 ml-auto" />
          <img
            src={image8}
            className="rounded-full -mr-4 border border-solid border-white"
          />
          <img
            src={image8}
            className="rounded-full -mr-1 border border-solid border-white"
          />
        </div>
      </div>
    </div>
  );
};

// progress value between 0 and 1
function Progress({ value }) {
  const color = value === 1 ? "#8BC488" : "#FF5F37";

  return (
    <div
      style={{
        "--color": color,
        "--progress": `${value * 100}%`,
      }}
      className="my-2 h-2 rounded bg-gray-200 before:h-full before:block before:rounded before:w-[var(--progress)] before:bg-[var(--color)]"
    ></div>
  );
}
