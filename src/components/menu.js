import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    background: "#fff",
    [theme.breakpoints.up("md")]: {
      height: "70px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    color: "#222",
  },
  header: {
    flexGrow: 1,
    display: "flex",
    color: "#333",
  },
  title: {
    fontFamily: "Courier,sans-serif",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#1d152d",
    padding: "6px 10px",
    background: "#e5fcc2",
    display: "none",
    "@media (min-width:470px)": {
      display: "flex",
      marginRight: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      marginRight: "10px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25px",
      marginLeft: "15px",
      marginRight: "100px",
    },
  },
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: "220px",
    },
  },
  nav: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#555",
    "&:hover": {
      color: "#000",
    },
  },
  activeNav: {
    color: "#297",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.08),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.15),
    },
    marginLeft: 0,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#111",
  },
  inputRoot: {
    color: "#111",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar className={classes.toolBar}>
          <IconButton className={classes.menuButton} aria-label="open drawer">
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <div className={classes.header}>
            <span className={classes.title}>A2Z News</span>
            <div className={classes.categories}>
              <NavLink
                to="/latest"
                className={classes.nav}
                activeClassName={classes.activeNav}
              >
                Latest
              </NavLink>
              <NavLink
                to="/trendy"
                className={classes.nav}
                activeClassName={classes.activeNav}
              >
                Trendy
              </NavLink>
              <span className={classes.nav}>More</span>
            </div>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
