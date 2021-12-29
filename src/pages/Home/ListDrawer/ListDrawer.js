import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FolderIcon from '@mui/icons-material/Folder';

const ListDrawer = ({toggleDrawer,state}) => {
    // const [state, setState] = React.useState({right: false});

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                        className='list'>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>অজু/গোসল/পবিত্রতা/হায়েজ/নেফাস </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>অপরাধ ও গোনাহ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আকিদা-বিশ্বাস </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আখেরাত </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আজান ও ইকামত </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আদব ও আখলাক </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আধুনিক মাসায়েল </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আনন্দ/বিনোদন </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আহলে হাদীস </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইতিহাস ও ঐতিহ্য </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইফতা (ফাতাওয়া) বিভাগ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইলম/জ্ঞান/শব্দার্থ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইলমে হাদীস </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইসলামী আইন/শরয়ী শাস্তিবিধান </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইসলাহী/আত্মশুদ্ধি </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ঈমান ও আমল</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ওয়াকফ/মসজিদ/ঈদগাহ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কসম ও মান্নত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কাদিয়ানী মতবাদ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কাফন-দাফন-জানাযা </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কিতাব/বই ও লেখক পরিচিতি </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কুরআন ও হাদীসের ব্যাখ্যা </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কুরবানী/জবেহ/আকীকা </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ক্রয়-বিক্রয়</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খাদ্য-দ্রব্য </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খাব ও তাবীর/স্বপ্ন ও ব্যাখ্যা</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খিলাফত/ইসলামী রাষ্ট্রনীতি</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খেলাধুলা/বিনোদন</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>চিকিৎসা/তদবীর</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জায়েজ নাজায়েজ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জিহাদ ও কিতাল</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জিকির</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জুমআ ও ঈদের নামায</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তাবলীগ জামাত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তারীখ ও সীরাত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তালাক/ডিভোর্স/হুরমত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তাসাউফ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দাওয়াত ও তাবলীগ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দান-সদকা-হাদিয়া</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে আকাবির</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে ইসলাম</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে ফিক্বহে হানাফী</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দুআ-দরূদ ও অজীফা</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নফল ইবাদত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নাম ও বংশ/নবজাতক</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নামায/সালাত/ইমামত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নাস্তিকদের প্রশ্নের জবাব</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নির্বাচিত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পরিবার ও সামাজিকতা</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পর্দা/দুগ্ধপান/হুরমত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পাক নাপাক</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পাঠক/অতিথিদের কলাম</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পেশা/চাকরী</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রকাশিত বই</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রবন্ধ নিবন্ধ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রশ্নোত্তর</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ফযীলত ও মানাকেব</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ফাযায়েলে আমালে সালেহা</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বাহাস/মুনাজারা/বিতর্ক</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিজ্ঞান/দর্শন</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিধর্মী মতবাদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিবাহ/শাদি</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিবিধ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিভাগসমূহ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিশেষ নোটিশ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ব্যবসা-বাণিজ্য/ভাড়া</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ভুল ও ভ্রান্ত ধারণা নিরসন</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ভ্রান্ত মতবাদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মাযহাব ও তাকলীদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মাস ও দিনের ফযীলত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মিরাস/উত্তরাধিকার</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুআশারাত/নৈতিক গুণাবলী</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুখোশ উন্মোচন</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুজেজা/কারামত/কাশফ/ইলহাম</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুনকিরীনে হাদীস/হাদীস অস্বিকারকারী</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>যাকাত/সদকাতুল ফিতির</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>রোযা/তারাবীহ/ইতিকাফ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>লেনদেন</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শিয়া মতবাদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শিরক ও বিদআত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শোক/ইদ্দত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সফর/মুসাফির</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সংবাদ </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সমকালিন প্রসঙ্গ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সাজসজ্জা/পোশাক পরিচ্ছেদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সাম্প্রতিক অডিও ভিডিও</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সালাফদের জীবনী</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সালাম-মুসাফাহা/মুআনাকা</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সীরাত ও মীলাদ</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সুন্নতে রাসূল</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সেজদায়ে সাহু-সেজদায়ে তিলাওয়াত</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হক ও অধিকার</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হক ও বাতিল দল</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হজ্ব</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হাদীসের জারাহ তাদীল</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হালাল ও হারাম</ListItemText>
                 </ListItem>
            </List>
        </Box>
    );
    return (
        <div>
              <React.Fragment 
                        className='list'>
                    <Drawer
                        anchor='right'
                        open={state['right']}
                        className='list'
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                </React.Fragment>
        </div>
    );
};

export default ListDrawer;