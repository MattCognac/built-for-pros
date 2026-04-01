/**
 * Scroll position so a section is centered in the viewport band below the fixed
 * header when the section fits; otherwise the section top sits just under the header.
 */
function getScrollYForSectionTarget(element: HTMLElement): number {
  const header = document.querySelector("header");
  const topInset = header?.getBoundingClientRect().height ?? 0;
  const vh = window.innerHeight;
  const avail = Math.max(1, vh - topInset);

  const rect = element.getBoundingClientRect();
  const sectionTop = rect.top + window.scrollY;
  const sectionHeight = rect.height;

  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - vh,
  );

  let targetY: number;
  if (sectionHeight <= avail) {
    const visibleCenterFromDocumentTop = topInset + avail / 2;
    const sectionCenter = sectionTop + sectionHeight / 2;
    targetY = sectionCenter - visibleCenterFromDocumentTop;
  } else {
    targetY = sectionTop - topInset;
  }

  return Math.min(maxScroll, Math.max(0, targetY));
}

export function scrollToSectionTarget(
  element: HTMLElement,
  behavior: ScrollBehavior,
): void {
  const y = getScrollYForSectionTarget(element);
  window.scrollTo({ top: y, behavior });
}
