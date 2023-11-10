import userApi from '../6_shared/api/user/userApi';
import { axiosInstance } from '../6_shared/axios/axiosInstance';

const ContactsPage = () => {
  const fetchUser = async () => {
    const user = await axiosInstance(
      '/user/05d85b68-98de-4990-8de0-0ea8fe49b649'
    );
    console.log(user);
  };

  const fetchParticipants = async () => {
    const users = await userApi.getListParticipants()
    console.log(users);
    
  } 

  return (
    <>
      <div>Contacts</div>
      <button onClick={fetchUser}>Get user</button>
      <button onClick={fetchParticipants}>Get list user</button>
    </>
  );
};

export default ContactsPage;
