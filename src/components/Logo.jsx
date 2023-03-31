import Image from 'next/image'
import blogo from '@/images/logos/banklessdao-logo.png'

export function Logo(props) {
  return (
    <div className='flex justify-center'>
    <Image
        src={blogo}
        alt=""
        width={200}
        height={40}
        unoptimized
      />
    </div>
  )
}
