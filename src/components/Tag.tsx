interface TagProps {
  name: string
}

export function Tag({ name }: TagProps) {
  return (
    <h5 className="py-[4px] px-[16px] rounded-sm bg-primary-100 text-primary-500">
      {name}
    </h5>
  )
}
