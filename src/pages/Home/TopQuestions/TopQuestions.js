import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../../../images/download.png'



const data1 = [
  {
    q: ' পুরুষের চুল কাটার সুন্নত তরিকা কয়টি এবং কি কি?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'নির্ধারিত সময়ের আগে কি যাকাত আদায় করা যাবে?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'বিতর নামাজে দুয়ায়ে কুনুত না পড়লে কি গুনাহ হবে?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  }
]
const data2 = [
  {
    q: 'জিনদের কাছে কোন কিছু জিজ্ঞেস করা বা তাদের সাহায্য নেয়া যাবে কি?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: 'যদি কোনো কারণবশত ফজরের ২ রাকাআত সুন্নত, ২ রাকাআত  ফরজের পর এবং যোহরের ৪ রাকাআত সুন্নত, ৪ রাকাআত  ফরজের পর আদায় করি তাহলে কি হবে?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: ' পুরুষের চুল কাটার সুন্নত তরিকা কয়টি এবং কি কি?',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'view'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  },
  {
    q: 'osjdflsjflfdsfjsl',
    a: 'lsjflsdjflsjfdlksjflk',
    d: '5 oct 2021',
    s: 'new'
  }
]


const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 26px 16px;
    border: none;
    display: flex;
    justify-content: center;
    transition:all .6s;
    &:hover {
      background-color: #e5d8ca;
      color: #7b654d;
    cursor: pointer;
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      color: #fff;
      outline: none;
      background-color: #e5d8ca;
    cursor: unset;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: #e5d8ca;
      color: #7b654d;
      cursor: unset;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #7b654d;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  transition:all .3s;
`;
const TopQuestions = () => {
  return (
    <Box sx={{ marginTop: '100px' }} className='main-top-question'>
      <Container>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>নির্বাচিত প্রশ্ন</Tab>
            <Tab>নতুন প্রশ্ন </Tab>
          </TabsList>
          <TabPanel value={0}>
            <Grid container sx={{ backgroundColor: 'white', paddingTop: "20px" }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ borderRight: { xs: 'none', md: '1px solid #E4E2DF', padding: '2px 10px' } }}>
                  {data1.slice(0, 3).map(data => <Box>
                    <Box className='questions'>
                      <Box className='question-box'>
                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography>
                          {data.q}
                        </Typography>
                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                      </Box>
                    </Box>
                  </Box>)}
                </Box>

              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ borderRight: { xs: 'none', md: '1px solid #E4E2DF', padding: '2px 10px' } }}>
                  {data1.slice(0, 3).map(data => <Box>
                    <Box className='questions'>
                      <Box className='question-box'>
                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography>
                          {data.q}
                        </Typography>
                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                      </Box>
                    </Box>
                  </Box>)}
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'left', paddingLeft: '15px' }}>
                  <Typography>
                    তারিখঃ২৩/১২/২০২১
                  </Typography>
                  <Typography variant='h4'>
                    গোবরে লেপা ঘরে বা উঠানে নামাজ পরার বিধান ...
                  </Typography>
                  <Typography>
                    প্রশ্নঃ যদি বাড়ির উঠান গোবর দিয়ে লেপা হয় তাহলে সেখানে নামাজ পড়া যাবে কি?
                  </Typography>
                  <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={1}>
            <Grid container  sx={{ backgroundColor: 'white', paddingTop: "20px" }}>
              <Grid item xs={12} md={4}>
                <Box sx={{ borderRight: { xs: 'none', md: '1px solid #E4E2DF', padding: '2px 10px' } }}>
                  {data2.slice(0, 3).map(data => <Box>
                    <Box className='questions'>
                      <Box className='question-box'>
                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography>
                          {data.q}
                        </Typography>
                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                      </Box>
                    </Box>
                  </Box>)}
                </Box>

              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ borderRight: { xs: 'none', md: '1px solid #E4E2DF', padding: '2px 10px' } }}>
                  {data2.slice(0, 3).map(data => <Box>
                    <Box className='questions'>
                      <Box className='question-box'>
                        <Link to='/'><img style={{ width: "100%", height: '100%' }} src={img} alt="" /></Link>
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography>
                          {data.q}
                        </Typography>
                        <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                      </Box>
                    </Box>
                  </Box>)}
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sx={{order:{xs:'1',md:'3'}}}>
                <Box sx={{ textAlign: 'left', paddingLeft: '15px'  }}>
                  <Typography>
                    তারিখঃ২৩/১২/২০২১
                  </Typography>
                  <Typography variant='h4'>
                    সাপ,ইদুর ও অন্যান্য ক্ষতিকর প্রানি মারার বিধান  ...
                  </Typography>
                  <Typography>
                    প্রশ্নঃ সাপ,ইদুর ও অন্যান্য ক্ষতিকর প্রানি মারা যাবে কি?
                  </Typography>
                  <Link className='question-link' to={`/selected/`}><i class="fas fa-angle-right"></i> বিস্তারিত </Link>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </TabsUnstyled>
      </Container>

    </Box>
  );
};

export default TopQuestions;