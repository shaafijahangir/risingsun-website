const imageBaseUrls: Record<string, string> = {
  'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
  'chiang-mai': 'https://images.unsplash.com/photo-1600850056064-a8b380df8395',
  'islands': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
  'medical': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
  'luxury': 'https://images.unsplash.com/photo-1582719508461-905c673771fd',
  'family': 'https://images.unsplash.com/photo-1519046904884-53103b34b206',
  'krabi': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
  'koh-lanta': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  'koh-samui': 'https://images.unsplash.com/photo-1537956965359-7573183d1f57',
  'gulf-islands': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
  'ayutthaya': 'https://images.unsplash.com/photo-1563492065599-3520f775eeed',
  'bangkok-night': 'https://images.unsplash.com/photo-1512248177643-571b03b39fa8',
};

export const getOptimizedImageUrl = (
  imageName: string,
  width: number = 800,
  format: 'webp' | 'avif' | 'jpg' = 'jpg'
): string => {
  const baseUrl = imageBaseUrls[imageName];
  if (!baseUrl) {
    return `https://placehold.co/${width}x${Math.floor(width * 0.75)}/CCCCCC/969696?text=Image+Not+Found`;
  }
  return `${baseUrl}?q=80&w=${width}&auto=format&fit=crop&fm=${format}`;
};

export const generateSrcSet = (imageName: string, format: 'webp' | 'avif' | 'jpg' = 'webp'): string => {
  const sizes = [320, 640, 960, 1280, 1920];
  return sizes.map(size => `${getOptimizedImageUrl(imageName, size, format)} ${size}w`).join(', ');
};
