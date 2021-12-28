import { Box } from '@mui/system';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import '../../../Style/Style.css'
import img from '../../../images/home.png'
import { Button, Typography } from '@mui/material';
import useFirebase from '../../../firebase/useFirebase';
import ListDrawer from '../ListDrawer/ListDrawer';

const TopNavbar = () => {
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);;
    const { user, logOut } = useFirebase()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>


                    <Box sx={{ display: { xs: 'flex', md: 'none', width: '100%' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            // keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' }, padding: "1000px"
                            }}
                        >
                            <Box sx={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'left' }}>
                                <Link className='link' to='/'><img sx={{ width: "100%" }} src={img} alt="" /></Link>
                                <Link className='link' to='/'>প্রশ্ন করুন</Link>
                                <Box className='dropdown'>
                                    <Link className='link' to='/'>প্রশ্নোত্তর <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                        <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                    </Box>
                                </Box>
                                <Link className='link' to='/'>প্রবন্ধ নিবন্ধ</Link>

                                <Box className='dropdown'>
                                    <Link className='link' to='/'>অডিও ভিডিও <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                        <Link className='link' to='/'>অডিও ভিডিও</Link>
                                        <Link className='link' to='/'>অডিও ভিডিও</Link>

                                    </Box>
                                </Box>
                                <Link className='link' to='/'>কিতাব</Link>
                                <Link className='link' to='/'>প্রকাশিত বই</Link>
                                <Box className='dropdown'>
                                    <Link className='link' to='/'>বিভাগসমূহ <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                        <Link className='link' to='/'>অডিও ভিডিও</Link>
                                        <Link className='link' to='/'>অডিও ভিডিও</Link>

                                    </Box>
                                </Box>
                                <Link className='link' to='/'>দ্বীনী খিদমায় অংশ নিন</Link>
                                <Link className='link' to='/'>সংবাদ</Link>
                            </Box>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link className='link' to='/'><i class="fas fa-home"></i></Link>
                        <Link className='link' to='/'>প্রশ্ন করুন</Link>
                        <Box className='dropdown'>
                            <Link className='link' to='/'>প্রশ্নোত্তর <i class="fas fa-caret-down"></i></Link>
                            <Box className='dropdown-content'>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                                <Link className='link' to='/'>প্রশ্নোত্তর</Link>
                            </Box>
                        </Box>
                        <Link className='link' to='/'>প্রবন্ধ নিবন্ধ</Link>

                        <Box className='dropdown'>
                            <Link className='link' to='/'>অডিও ভিডিও <i class="fas fa-caret-down"></i></Link>
                            <Box className='dropdown-content'>
                                <Link className='link' to='/'>অডিও ভিডিও</Link>
                                <Link className='link' to='/'>অডিও ভিডিও</Link>

                            </Box>
                        </Box>
                        <Link className='link' to='/'>কিতাব</Link>
                        <Link className='link' to='/'>প্রকাশিত বই</Link>
                        <Box className='dropdown'>
                            <Link className='link' to='/'>বিভাগসমূহ <i class="fas fa-caret-down"></i></Link>
                            <Box className='dropdown-content'>
                                <Link className='link' to='/'>অডিও ভিডিও</Link>
                                <Link className='link' to='/'>অডিও ভিডিও</Link>

                            </Box>
                        </Box>
                        <Link className='link' to='/'>দ্বীনী খিদমায় অংশ নিন</Link>
                        <Link className='link' to='/'>সংবাদ</Link>
                        <Button title='এখানে ক্লিক করুন ' sx={{ color: 'white' }} onClick={toggleDrawer('right', true)}>সূচিপত্র</Button>
                    </Box>
                    <ListDrawer
                        toggleDrawer={toggleDrawer}
                        state={state}
                    ></ListDrawer>
                    {user?.email && <Typography>
                        <button onClick={logOut}>log out</button>
                    </Typography>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopNavbar;