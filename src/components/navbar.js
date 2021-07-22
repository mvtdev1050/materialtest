import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../assets/images/logo.png';
import InstaImage from '../assets/images/insta.png';
import FbImage from '../assets/images/fb.png';
import LineLogo from '../assets/images/line.png';
import LangIcon from '../assets/images/lang-icon.png';
import { Button, ButtonGroup, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  inputInput: {
    width: '100%',
    padding: '15px 30px',
    [theme.breakpoints.up('md')]: {
      minWidth: 500
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolBar: {
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 25
  },
  navlinkText :{
    fontFamily: 'Noto Sans TC',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: '28px',
    color: '#000000'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.1)',
    marginLeft: 0,
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      minWidth: 630
    },
  },
  RegisterBtn: {
    background: '#2D9CDB',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    fontFamily: 'Noto Sans TC',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: '28px',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    margin: '0 12px'
  },
  langBtn: {
    padding: 0,
    fontFamily: 'Noto Sans TC',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '20px',
    textAlign: 'center',
    color: '#000000',
    margin: '0 4px'
  },
  langBtnContainer: {
    margin: '-8px 0 0',
    '& :first-child': {
      borderColor: '#000000'
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <AccountCircle />
        <Typography variant="h6" className={classes.navlinkText}>Sign In</Typography>
      </MenuItem>
      <MenuItem>
        <AssignmentIcon />
        <Typography variant="h6" className={classes.navlinkText}>Orders</Typography>
      </MenuItem>
      <MenuItem>
        <ShoppingCartIcon />
        <Typography variant="h6" className={classes.navlinkText}>Cart</Typography>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" color="primary" className={classes.RegisterBtn}>
          Register
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Container maxWidth="lg">
      <AppBar color="inherit" className={classes.header}>
        <Box display="flex" justifyContent="flex-end" px={3} alignItems="center">
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.langBtnContainer}>
            <Button className={classes.langBtn}><img src={LangIcon} alt="Instagram" /></Button>
            <Button className={classes.langBtn}>ENG</Button>
          </ButtonGroup>
          <Box>
            <img src={InstaImage} alt="Instagram" />
          </Box>
          <Box>
            <img src={FbImage} alt="Facebook" />
          </Box>
          <Box>
            <img src={LineLogo} alt="Line" />
          </Box>
        </Box>
        <Toolbar className={classes.toolBar}>
          <div>
            <img src={Logo} alt="Line Logo" />
          </div>
          <div className={classes.search}>
            <InputBase
              placeholder="Search Products"
              classes={{
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.sectionDesktop}>
            <Button variant="contained" color="primary" className={classes.RegisterBtn}>
              Register
            </Button>
            <Box mx={1.5}>
              <Typography variant="h6" className={classes.navlinkText}>Sign In</Typography>
            </Box>
            <Box display="flex" alignItems="center" mx={1.5}>
              <AssignmentIcon />
              <Typography variant="h6" className={classes.navlinkText}>Orders</Typography>
            </Box>
            <Box display="flex" alignItems="center" mx={1.5}>
              <ShoppingCartIcon />
              <Typography variant="h6" className={classes.navlinkText}>Cart</Typography>
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Container>
  );
}
