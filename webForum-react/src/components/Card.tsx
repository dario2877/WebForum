import { Body } from "./Body";
import { Header } from "./Header";

export function Card({
  commentObject,
}: {
  commentObject: { profileImg: string; username: string; comment: string };
}) {
  return (
    <div>
      <Header
        profilePicUrl={commentObject.profileImg}
        username={commentObject.username}
      />
      <Body comment={commentObject.comment} />
    </div>
  );
}
