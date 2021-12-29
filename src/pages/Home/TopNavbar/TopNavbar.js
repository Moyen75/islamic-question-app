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
        <AppBar position="fixed" top="0" sx={{backgroundColor:'#0B9293  '}}>
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
                                display: { xs: 'block', md: 'none' }
                            }}
                        >
                            <Box sx={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', padding: '100px', alignItems: 'center' }}>
                                <Link onClick={handleCloseNavMenu} className='link' to='/'>প্রশ্ন করুন</Link>
                                <Box className='dropdown'>
                                    <Link className='link' to='/dashboard/questions'>সকল প্রশ্নোত্তর <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                <Link className='link' to='/dashboard/holiness'>অজু/গোসল/পবিত্রতা/হায়েজ/নেফাস</Link>
                                <Link className='link' to='/dashboard/sin'>অপরাধ ও গোনাহ</Link>
                                <Link className='link' to='/dashboard/akidah'>আকিদা ও বিশ্বাস</Link>
                                <Link className='link' to='/dashboard/akhirat'>আখিরাত</Link>
                                <Link className='link' to='/dashboard/ajan'>আজান ও ইকামাত</Link>
                                <Link className='link' to='/dashboard/adhunik'>আধুনিক মাসায়েল</Link>
                                <Link className='link' to='/dashboard/adob'>আদব ও আখলাক</Link>
                                <Link className='link' to='/dashboard/anondo'>আনন্দ বিনোদন</Link>
                                <Link className='link' to='/dashboard/ahlehadith'>আহলে হাদিস</Link>
                                <Link className='link' to='/dashboard/history'>ইতিহাস ও ঐতিহ্য</Link>
                            </Box>
                                </Box>
                                <Link onClick={handleCloseNavMenu} className='link' to='/dashboard/'>প্রবন্ধ নিবন্ধ</Link>

                                <Box className='dropdown'>
                                    <Link className='link' to='/dashboard/'>অডিও ভিডিও <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                        <Link onClick={handleCloseNavMenu} className='link' to='/dashboard/'>বয়ান</Link>
                                        <Link onClick={handleCloseNavMenu} className='link' to='/dashboard/'>গজল</Link>

                                    </Box>
                                </Box>
                                <Link onClick={handleCloseNavMenu} className='link' to='/dashboard/'>কিতাব</Link>
                                <Link onClick={handleCloseNavMenu} className='link' to='/dashboard/'>প্রকাশিত বই</Link>
                                <Link className='link' to='/dashboard/'>দ্বীনী খিদমায় অংশ নিন</Link>
                                <Link className='link' to='/dashboard/'>সংবাদ</Link>
                                <Box onClick={handleCloseNavMenu}>
                                    <Button title='এখানে ক্লিক করুন ' sx={{ color: 'white' }} onClick={toggleDrawer('right', true)}>সূচিপত্র</Button>
                                </Box>
                            </Box>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
                        <Link className='link' to='/'><i class="fas fa-home"></i></Link>
                        <Link className='link' to='/'>প্রশ্ন করুন</Link>
                        <Box className='dropdown'>
                        <Link className='link' to='/dashboard/questions'>সকল প্রশ্নোত্তর <i class="fas fa-caret-down"></i></Link>
                                    <Box className='dropdown-content'>
                                <Link className='link' to='/dashboard/holiness'>অজু/গোসল/পবিত্রতা/হায়েজ/নেফাস</Link>
                                <Link className='link' to='/dashboard/sin'>অপরাধ ও গোনাহ</Link>
                                <Link className='link' to='/dashboard/akidah'>আকিদা ও বিশ্বাস</Link>
                                <Link className='link' to='/dashboard/akhirat'>আখিরাত</Link>
                                <Link className='link' to='/dashboard/ajan'>আজান ও ইকামাত</Link>
                                <Link className='link' to='/dashboard/adhunik'>আধুনিক মাসায়েল</Link>
                                <Link className='link' to='/dashboard/adob'>আদব ও আখলাক</Link>
                                <Link className='link' to='/dashboard/anondo'>আনন্দ বিনোদন</Link>
                                <Link className='link' to='/dashboard/ahlehadith'>আহলে হাদিস</Link>
                                <Link className='link' to='/dashboard/history'>ইতিহাস ও ঐতিহ্য</Link>
                            </Box>
                        </Box>
                        <Link className='link' to='/'>প্রবন্ধ নিবন্ধ</Link>

                        <Box className='dropdown'>
                            <Link className='link' to='/'>অডিও ভিডিও <i class="fas fa-caret-down"></i></Link>
                            <Box className='dropdown-content'>
                                <Link className='link' to='/'>বয়ান</Link>
                                <Link className='link' to='/'>গজল</Link>

                            </Box>
                        </Box>
                        <Link className='link' to='/'>কিতাব</Link>
                        <Link className='link' to='/'>প্রকাশিত বই</Link>
                        <Link className='link' to='/'>দ্বীনী খিদমায় অংশ নিন</Link>
                        <Button title='এখানে ক্লিক করুন ' sx={{ color: 'white' }} onClick={toggleDrawer('right', true)}>সূচিপত্র</Button>
                    </Box>
                    <ListDrawer
                        toggleDrawer={toggleDrawer}
                        state={state}
                    ></ListDrawer>
                    {user?.email ? <Typography>
                        <button onClick={logOut}>log out</button>
                    </Typography> : <Link className='link' to='/login'>login</Link>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopNavbar;