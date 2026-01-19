import { comments } from "../assets/commentData";



type Comments = {
    listOfComments: typeof comments
  
};

export function Body({ listOfComments }: Comments) {

  return (
    <>
      {listOfComments.map((c, i) => (
        <div key={i}>
          <img src={c.profileImg} alt={c.username} />
          <h3>{c.username}</h3>
          <p>{c.comment}</p>
        </div>
      ))}
    </>

  );
}
