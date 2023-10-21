'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import HeartButton from '../HeartButton';
import useCountries from '@/app/hooks/useCountries';
import { SafeUser, SafeListing } from '@/app/types';
import Button from '../Button';

interface ListingCardProps {
  data: SafeListing;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

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
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className='font-semibold text-lg'>
          {location?.region}, {location?.label}
        </div>
        <div className='font-light text-neutral-500'>{data.category}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {data.price}</div>
          {actionLabel && (
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={handleCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
