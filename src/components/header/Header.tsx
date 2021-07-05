import { Link } from '@material-ui/core';
import { makeStyles, Toolbar } from '@material-ui/core';
import { FunctionComponent } from 'react';

const useStyles = makeStyles((theme) => ({
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

const sections = [
  { title: 'Get Started', url: '#' },
  { title: 'Wiki', url: '#' },
  { title: 'Welcome Server', url: '#' },
  { title: 'Public Server', url: '#' },
  { title: 'Development', url: '#' },
];

const Header : FunctionComponent = () => {
    const classes = useStyles();
    return (
        <>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                      color="inherit"
                      noWrap
                      key={section.title}
                      variant="body2"
                      href={section.url}
                      className={classes.toolbarLink}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </>
    )
}

export default Header;