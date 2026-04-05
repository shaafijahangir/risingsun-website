const imageBaseUrls: Record<string, string> = {
  'bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
  'chiang-mai': 'https://images.unsplash.com/photo-1600850056064-a8b380df8395',
  'islands': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
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
