import { StyleSheet } from '@react-pdf/renderer';
import { Text, View } from '@react-pdf/renderer';

const globalStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 900,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  text: {
    fontSize: 11,
  },
  section: {
    paddingBottom: 20,
    marginBottom: 20,
    borderBottom: '1px solid gray',
  },
});

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

export { globalStyles, Section, Title, Subtitle, BodyText };
