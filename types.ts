
export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  client: string;
  year: number;
  imageUrl: string;
  tags: string[];
}

export interface MotionDesignVideo {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string; // Embed URL
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

export type ModalContent = { type: 'image'; src: string; alt: string } | { type: 'video'; src: string; title: string };