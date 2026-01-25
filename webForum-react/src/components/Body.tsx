
type Props = {
  comment: string;
  
};

export function Body({ comment}: Props) {

  return (
    <>
      <div>
        <p>{comment}</p>
      </div>
    </>
  );
}