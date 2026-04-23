import NextImage, { ImageProps } from 'next/image';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function withBasePath(src: string): string {
  if (src.startsWith('http') || src.startsWith('//') || src.startsWith(BASE_PATH)) {
    return src;
  }
  return `${BASE_PATH}${src}`;
}

export default function Img({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === 'string' ? withBasePath(src) : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
