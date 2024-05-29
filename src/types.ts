export interface Course {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}
export interface MenuProps {
  tags: string[];
  onTagClick: (tag: string) => void;
}
export interface GalleryProps {
  courses: Course[];
}
