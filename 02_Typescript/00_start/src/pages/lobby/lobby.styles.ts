import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) => createStyles({
  card: {
    width: '25%',
    maxWidth: '40rem',
    minWidth: '20rem',
    height: '90%'
  },
  cardContent: {
    marginTop: '1rem',
  },
  cardActions: {
    padding: '1rem 1.5rem',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem 0.25rem',
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.contrastText,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 1rem 0.25rem',
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.contrastText,
  }
});
