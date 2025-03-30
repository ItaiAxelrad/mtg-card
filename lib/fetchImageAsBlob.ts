export const fetchImageAsBlob = async (url: string) => {
  try {
    const response = await fetch(url);
    console.log('Fetch response:', response);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();
    // const objectUrl = URL.createObjectURL(blob);
    return blob;
  } catch (err) {
    console.error('Error fetching image:', err);
  }
};
