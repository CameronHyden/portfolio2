import "./ProjectList.scss";

const ProjectList = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "projectList active" : "projectList"}
      onClick={() => setSelected(id)}
    >
      {title}{" "}
    </li>
  );
};

export default ProjectList;
