import React, { useMemo } from "react";
import mark from "../assets/Mark.svg";
import vector from "../assets/Vector23.svg";
import comment from "../assets/Vector24.svg";
import vector25 from "../assets/Vector25.svg";
import image8 from "../assets/image8.svg";
import vector26 from "../assets/Vector26.svg";

const items = [
  {
    id: 1,
    status: "to-do",
    title: "Highfidelity Design",
    description: "Make clear design and color",
    img: "/src/assets/card1.png",
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
    img: "/src/assets/card2.png",
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
    img: "/src/assets/card3.png",
    progress: 10,
    commentCount: 7,
    linkCount: 2,
  },
];

const Main = () => {
  const itemsByCategory = useMemo(() =>
    items.reduce((prev, curr) => {
      if (!(curr.status in prev)) prev[curr.status] = [];
      prev[curr.status].push(curr);

      return prev;
    }, {})
  );

  return (
    <main className="container py-16 grid grid-cols-3 gap-10">
      {[
        { id: "to-do", label: "To Do" },
        { id: "in-progress", label: "InProgress" },
        { id: "completed", label: "Completed" },
      ].map(({ id, label, svg }) => (
        <div key={id}>
          <div className="relative">
            <input
              type="text"
              placeholder={label}
              className="bg-[#F4F6F8] text-[#858A93] rounded-md py-3 px-9 mb-4"
            />
            <span className="grid place-content-center absolute rounded shadow-lg-white text-white right-2 top-2 w-9 aspect-square bg-slate-950 mr-4">
              {itemsByCategory[id]?.length ?? 0}
            </span>
          </div>

          {itemsByCategory[id]?.map((item) => (
            <Item className="mb-4" item={item} key={item.id} />
          ))}

          <button className=" flex gap-3 w-full bg-[#F2F4F5] border border-dashed border-[#D5D5D5] rounded-lg text-[#7D8088] py-3 px-16 ml-auto text-sm">
            <img src={vector} />
            Add Task
          </button>
        </div>
      ))}
    </main>
  );
};

export default Main;

const Item = ({ item, className }) => {
  return (
    <div className={className + " bg-white rounded-xl  p-4"}>
      {item.img && <img src={item.img} />}
      <div className="flex justify-between items-center mt-4 mb-2">
        <h6 className="text-[#000000] font-semibold">{item.title}</h6>
        <img src={vector26} />
      </div>

      <div className="text-gray">
        <p className="text-sm text-[#B8B9BD] font-light ">{item.description}</p>
        <p className="flex relative gap-2 text-[#B8B9BD] font-light text-sm mt-3 ">
          <img src={mark} />
          Progress
          <span className="text-md font-normal ml-auto text-black">2/10</span>
        </p>
        <Progress value={item.progress / 10} />
        <div className="flex text-[#B8B9BD] gap-3">
          <p className="flex gap-1 font-light text-sm mt-1">
            <img src={comment} />7
          </p>
          <p className="flex gap-1 font-light text-sm mt-1">
            <img src={vector25} />2
          </p>
          <img src={image8} className="rounded-full -mr-4 ml-auto" />
          <img src={image8} className="rounded-full -mr-4" />
          <img src={image8} className="rounded-full -mr-1" />
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
      className="h-2 rounded bg-gray-200 before:h-full before:block before:rounded before:w-[var(--progress)] before:bg-[var(--color)]"
    ></div>
  );
}
