import { makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));

type HeaderProps = {
    title : string
}

const Header : FunctionComponent<HeaderProps> = ({title}) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}>
                    {title}
                </Typography>
            </Toolbar>
        </React.Fragment>
    )
}

export default Header;