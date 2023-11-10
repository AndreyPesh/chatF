import { useQuery } from '@tanstack/react-query';
import userApi from '../api/user/userApi';

const PARTICIPANT_KEY = 'participants';

const useQueryParticipant = () => {
  const { data: participantList } = useQuery({
    queryKey: [PARTICIPANT_KEY],
    queryFn: userApi.getListParticipants,
  });
  return {
    participantList,
  };
};

export default useQueryParticipant;
