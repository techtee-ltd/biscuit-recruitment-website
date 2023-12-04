/**
 * this function helps get a text from blocks for summary cards
 * @param blocks
 * @returns string
 */
export function getTextFromBlocks(blocks: { children: any[] }[]) {
  if (!blocks || blocks.length === 0) {
    return "";
  }
  return blocks
    .map((item: { children: any[] }) =>
      item.children.map((child) => child.text).join("")
    )
    .join("");
}
