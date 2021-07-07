import { StyleSheet } from '@react-pdf/renderer';
import { Text, View } from '@react-pdf/renderer';
import globalStyles from './styles';

const Divider = ({ style, color, width, stroke, strokeStyle, mt, mb }) => {
  const _style = StyleSheet.create({
    width,
    borderBottom: `${stroke} ${strokeStyle} ${color}`,
    marginTop: mt,
    marginBottom: mb,
  });

  return <View style={[_style, ...style]} />;
};

const Section = ({ style, children }) => (
  <View style={[globalStyles.section, ...style]}>{children}</View>
);

const Title = ({ style, children }) => (
  <Text style={[globalStyles.title, ...style]}>{children}</Text>
);

const Subtitle = ({ style, children }) => (
  <Text style={[globalStyles.subtitle, ...style]}>{children}</Text>
);

const BodyText = ({ style, children }) => (
  <Text style={[globalStyles.text, ...style]}>{children}</Text>
);

const defaultProps = {
  style: [],
};

Section.defaultProps = defaultProps;
Title.defaultProps = defaultProps;
Subtitle.defaultProps = defaultProps;
BodyText.defaultProps = defaultProps;
Divider.defaultProps = {
  ...defaultProps,
  width: '100%',
  color: 'gray',
  stroke: '1px',
  strokeStyle: 'solid',
  mt: 5,
  mb: 5,
};

export { Section, Title, Subtitle, BodyText, Divider };
