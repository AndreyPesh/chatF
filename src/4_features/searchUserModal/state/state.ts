import { create } from 'zustand';
import { ModalStateManagement } from '../../../5_entities/modal/types/interfaces';

const useSearchUserModalStore = create<ModalStateManagement>((set) => ({
  isShow: false,
  openModal: () => set(() => ({ isShow: true })),
  closeModal: () => set(() => ({ isShow: false })),
}));

export default useSearchUserModalStore;
