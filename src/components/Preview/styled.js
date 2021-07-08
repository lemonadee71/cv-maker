import { StyleSheet } from '@react-pdf/renderer';
import { Text, View } from '@react-pdf/renderer';
import globalStyles from './styles';

const Divider = ({ color, width, stroke, strokeStyle, mt, mb, ...style }) => {
  const _style = StyleSheet.create({
    width,
    borderBottom: `${stroke} ${strokeStyle} ${color}`,
    marginTop: mt,
    marginBottom: mb,
  });

  return <View style={[_style, style]} />;
};

const Wrapper = ({ children, wrap, fixed, ...style }) => (
  <View style={style} wrap={wrap} fixed={fixed}>
    {children}
  </View>
);

const StyledText = ({ children, ...style }) => (
  <Text style={style}>{children}</Text>
);
const Section = ({ children, ...style }) => (
  <Wrapper {...globalStyles.section} {...style}>
    {children}
  </Wrapper>
);

const Title = ({ children, wrap, fixed, ...style }) => (
  <StyledText wrap={wrap} fixed={fixed} {...globalStyles.title} {...style}>
    {children}
  </StyledText>
);

const Subtitle = ({ children, wrap, fixed, ...style }) => (
  <StyledText wrap={wrap} fixed={fixed} {...globalStyles.subtitle} {...style}>
    {children}
  </StyledText>
);

const NormalText = ({ children, wrap, fixed, ...style }) => (
  <StyledText wrap={wrap} fixed={fixed} {...globalStyles.text} {...style}>
    {children}
  </StyledText>
);

const defaultProps = {
  wrap: true,
  fixed: false,
};

Section.defaultProps = defaultProps;
Title.defaultProps = defaultProps;
Subtitle.defaultProps = defaultProps;
NormalText.defaultProps = defaultProps;
Wrapper.defaultProps = defaultProps;
Divider.defaultProps = {
  width: '100%',
  color: 'gray',
  stroke: '1px',
  strokeStyle: 'solid',
  mt: 5,
  mb: 5,
};

export { Section, Title, Subtitle, NormalText, Divider, Wrapper, StyledText };
