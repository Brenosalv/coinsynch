import { CryptoType } from '@/types/crypto'
import Image from 'next/image'

interface CryptoProfileProps extends CryptoType {
  iconSize?: number
}

export function CryptoProfile({
  icon_url: iconUrl,
  name,
  asset_id: assetId,
  iconSize = 16,
}: CryptoProfileProps) {
  return (
    <div className="flex items-center gap-2 w-fit">
      <Image src={iconUrl ?? ''} alt="" width={iconSize} height={iconSize} />
      <p className="text-sm max-sm:text-xs text-foreground leading-4">
        {name}{' '}
        <span className="text-sm max-sm:text-xs leading-4 text-secondary-500">
          {assetId}
        </span>
      </p>
    </div>
  )
}
