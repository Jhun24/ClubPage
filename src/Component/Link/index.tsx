import styles from './Link.module.css';

import LinkPreview from '../LinkPreview';

import { Facebook, Instagram, KakaoTalk, MyCampus, None } from '~/assets';

interface LinkProps {
  type: string;
  url: string;
}

const renderImage = (type: string) => {
  switch (type) {
    case 'facebook':
      return <Facebook />;
    case 'instagram':
      return <Instagram />;
    case 'kakaotalk':
      return <KakaoTalk />;
    case 'mycampus':
      return <MyCampus />;
    default:
      return <None />;
  }
};

const Link = ({ type, url }: LinkProps) => {
  return (
    <LinkPreview url={url}>
      <div className={styles.link_box}>{renderImage(type)}</div>
    </LinkPreview>
  );
};

export default Link;
