import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import ElIconButton from '../components/ElIconButton';

const xml = `
<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16L9.41 14.59L3.83 9L26 9V7L3.83 7L9.41 1.41L8 0L0 8L8 16Z" fill="#1F345D"/>
</svg>
`;

export default function GoBackDark() {
  const navigation = useNavigation();
  return (
    <ElIconButton onPress={() => navigation.goBack()}>
      <SvgXml xml={xml} />
    </ElIconButton>
  );
}
