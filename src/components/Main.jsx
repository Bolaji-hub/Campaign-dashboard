import React, { useMemo } from "react";

const items = [
  {
    id: 1,
    status: "to-do",
    title: "Highfidelity Design",
    description: "Make clear design and color",
    img: "/src/assets/card1.png",
    progress: 2,
    commentCount: 7,
    linkCount: 2,
  },
  {
    id: 2,
    status: "to-do",
    title: "Usability testing",
    description: "Make clear design and color",
    progress: 2,
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
        { id: "in-progress", label: "In Progress" },
        { id: "completed", label: "Completed" },
      ].map(({ id, label }) => (
        <div key={id}>
          <input type="text" placeholder={label} />

          {itemsByCategory[id]?.map((item) => (
            <Item className="mb-4" item={item} key={item.id} />
          ))}

          <button className=" bg-gray-300 border border-dotted border-gray-400 rounded text-gray-600">
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
    <div className={className + " bg-white shadow-sm rounded-xl p-4"}>
      {item.img && <img src={item.img} />}
      <h4>{item.title}</h4>
      <p>{item.description}</p>

      <progress value={item.progress} max={10} />
    </div>
  );
};
