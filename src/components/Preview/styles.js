import { StyleSheet } from '@react-pdf/renderer';

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
  textWithDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    paddingBottom: 10,
  },
});

export default globalStyles;
