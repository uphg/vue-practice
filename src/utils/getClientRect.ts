// 获取相对当前客户端位置的距离
export const getClientRect = (el: HTMLElement | null, property?: string) => {
  const rect = el?.getBoundingClientRect()
  if (!property) return rect
  return rect && rect[property as keyof DOMRect] as number
}