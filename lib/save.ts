import html2canvas from 'html2canvas';

export default async function exportCardAsImage(
  id: string,
  filename = 'card.jpg',
) {
  const element = document.getElementById(id);
  if (!element) return;

  // Wait for all images to load
  const images = Array.from(element.querySelectorAll('img'));
  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }),
  );

  const canvas = await html2canvas(element, {
    useCORS: true,
    backgroundColor: '#000',
    scale: 2,
  });

  const dataURL = canvas.toDataURL('image/jpeg', 1.0);
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = filename;
  link.click();
}
