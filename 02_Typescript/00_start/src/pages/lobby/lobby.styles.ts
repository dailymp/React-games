import { createStyles } from "@material-ui/core/styles";

export default () => createStyles({
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
  }
});
