import { makeStyles } from "@material-ui/core/styles";
import {fade} from '@material-ui/core'
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:theme.spacing(4)
  },
  title: {
    display: "inline-block",
    marginLeft: theme.spacing(8),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(6),

  },
  lastIcon: {
    marginRight: theme.spacing(8),
  },
}));
