'use client';

import Image from 'next/image';
import React from 'react';

interface ListingCardProps {
  data: any;
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <Image
            fill
            className='object-cover h-full w-full group-hover:scale-110 transition'
            src={data.imageSrc}
            alt='Listing'
          />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
