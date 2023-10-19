'use client';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
  listingId: string;
  currentUser?: any | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  return (
    <div className='relative hover:opacity-80 transition cursor-pointer'>
      <AiOutlineHeart
        size={28}
        className='fill-white absolute -top-[2px] -right-[2px]'
      />
      <AiFillHeart size={24} className='fill-rose-500' />
    </div>
  );
};

export default HeartButton;
