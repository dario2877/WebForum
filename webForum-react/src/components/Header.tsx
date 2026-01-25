
type HeaderProps = {
  profilePicUrl: string;
  username: string;
};


export function Header({ profilePicUrl, username }: HeaderProps) {
  return (
    <>
    <img src={profilePicUrl} alt={username} />
    <h1>{username}</h1>
    </>
  );
}