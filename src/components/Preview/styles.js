import { StyleSheet } from '@react-pdf/renderer';

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 900,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  bodyText: {
    fontSize: 11,
  },
  section: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: '1px solid gray',
  },
});
