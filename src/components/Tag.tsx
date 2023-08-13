interface TagProps {
  name: string
}

export function Tag({ name }: TagProps) {
  return (
    <div className="py-[4px] px-[16px] rounded-sm bg-primary-100 text-primary-500">
      {name}
    </div>
  )
}
