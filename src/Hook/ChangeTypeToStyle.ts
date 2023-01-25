import styles from '../Component/Css/font.module.css';

const ChangeTypeToStyle = (type: string) => {
  switch (type) {
    case 'medium':
      return styles.medium;
    case 'bold':
      return styles.bold;
    case 'extraLight':
      return styles.extraLight;
    case 'light':
      return styles.light;
    case 'regular':
      return styles.regular;
    case 'semiBold':
      return styles.semiBold;
    case 'thin':
      return styles.thin;
    default:
      return styles.medium;
  }
};

export default ChangeTypeToStyle;
