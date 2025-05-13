import { useMajorDetailStore } from '~/pages/tasting-note/[id]/_subs/tastingNoteDetail';

export function useMakeNRateHalfStar() {
  const majorDetail = useMajorDetailStore();

  onMounted(() => {
    if (majorDetail.detailData.rating == null) return;
    if (((majorDetail.detailData.rating ?? 0) / 2) % 1 === 0) return;

    const halfRates = document.getElementsByClassName('n-rate__half--active');

    if (halfRates.length > 0) {
      const lastHalfRate = halfRates.item(halfRates.length - 1);

      const iconElement = document.createElement('i');
      iconElement.classList.add('n-base-icon');

      const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgElement.setAttribute('viewBox', '0 0 512 512');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z');

      svgElement.appendChild(path);
      iconElement.appendChild(svgElement);
      if (lastHalfRate) {
        lastHalfRate.appendChild(iconElement);
      }
    }
  });
  watch(() => majorDetail.isLoading, (newValue) => {
    if (!newValue && ((majorDetail.detailData.rating ?? 0) / 2) % 1 !== 0) {
      nextTick(() => {
        const halfRates = document.getElementsByClassName('n-rate__half--active');

        if (halfRates.length > 0) {
          const lastHalfRate = halfRates.item(halfRates.length - 1);

          const iconElement = document.createElement('i');
          iconElement.classList.add('n-base-icon');

          const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svgElement.setAttribute('viewBox', '0 0 512 512');

          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z');

          svgElement.appendChild(path);
          iconElement.appendChild(svgElement);
          if (lastHalfRate) {
            lastHalfRate.appendChild(iconElement);
          }
        }
      });
    }
  });
}
