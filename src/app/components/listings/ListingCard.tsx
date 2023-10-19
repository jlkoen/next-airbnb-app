'use client';

import Image from 'next/image';

import HeartButton from '../HeartButton';
import useCountries from '@/app/hooks/useCountries';

interface ListingCardProps {
  data: any;
}

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  const { getByValue } = useCountries();
  const location = getByValue(data.locationValue);

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
          <div className='absolute top-3 right-3'>
            <HeartButton listingId={data.id} />
          </div>
        </div>
        <div className='font-semibold text-lg'>
          {location?.region}, {location?.label}
        </div>
        <div className='font-light text-neutral-500'>{data.category}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
