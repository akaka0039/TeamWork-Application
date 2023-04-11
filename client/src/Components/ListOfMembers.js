import styles from "../CSS/ListOfMembers.module.css";

const ListOfMembers = () => {
  // user_data
  const props = {
    data: [
      {
        id: 1,
        members: "G",
      },
      {
        id: 2,
        members: "E",
      },
      {
        id: 3,
        members: "C",
      },
    ],
  };
  const { data } = props;
  return data.map((item) => {
    return (
      <div key={item.id} className={styles["member"]}>
        <span>{item.members}</span>
      </div>
    );
  });
};

export default ListOfMembers;
