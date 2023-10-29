import { GALLERY_ITEMS } from './gallery.constants';
import { TaginatedGallery } from './taginated-gallery';

export const Gallery: React.FC = () => {
  return <TaginatedGallery items={GALLERY_ITEMS} />;
};
