const linkImage = '/avatars/Avatar1.png';

const Avatar = () => {
  return (
    <div className="w-[44px] h-[44px] rounded-full overflow-hidden">
      <img src={linkImage} alt="user photo" />
    </div>
  );
};

export default Avatar;
