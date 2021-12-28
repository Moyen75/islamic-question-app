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
            <List>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>অজু/গোসল/পবিত্রতা/হায়েজ/নেফাস (183)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>অপরাধ ও গোনাহ (239)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আকিদা-বিশ্বাস (304)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আখেরাত (53)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আজান ও ইকামত (42)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আদব ও আখলাক (132)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আধুনিক মাসায়েল (261)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আনন্দ/বিনোদন (51)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>আহলে হাদীস (645)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইতিহাস ও ঐতিহ্য (98)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইফতা (ফাতাওয়া) বিভাগ (2)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইলম/জ্ঞান/শব্দার্থ (68)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইলমে হাদীস (38)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইসলামী আইন/শরয়ী শাস্তিবিধান (39)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ইসলাহী/আত্মশুদ্ধি (90)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ঈমান ও আমল (241)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ওয়াকফ/মসজিদ/ঈদগাহ (72)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কসম ও মান্নত (45)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কাদিয়ানী মতবাদ (23)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কাফন-দাফন-জানাযা (72)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কিতাব/বই ও লেখক পরিচিতি (32)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কুরআন ও হাদীসের ব্যাখ্যা (94)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>কুরবানী/জবেহ/আকীকা (221)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ক্রয়-বিক্রয় (88)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খাদ্য-দ্রব্য (82)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খাব ও তাবীর/স্বপ্ন ও ব্যাখ্যা (10)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খিলাফত/ইসলামী রাষ্ট্রনীতি (58)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>খেলাধুলা/বিনোদন (57)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>চিকিৎসা/তদবীর (53)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জায়েজ নাজায়েজ (612)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জিহাদ ও কিতাল </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জিকির </ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>জুমআ ও ঈদের নামায (62)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তাবলীগ জামাত (116)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তারীখ ও সীরাত (50)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তালাক/ডিভোর্স/হুরমত (218)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>তাসাউফ (50)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দাওয়াত ও তাবলীগ (131)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দান-সদকা-হাদিয়া (64)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে আকাবির (197)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে ইসলাম (137)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দিফায়ে ফিক্বহে হানাফী (249)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>দুআ-দরূদ ও অজীফা (112)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নফল ইবাদত (132)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নাম ও বংশ/নবজাতক (48)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নামায/সালাত/ইমামত (466)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নাস্তিকদের প্রশ্নের জবাব (60)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>নির্বাচিত (76)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পরিবার ও সামাজিকতা (106)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পর্দা/দুগ্ধপান/হুরমত (85)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পাক নাপাক (109)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পাঠক/অতিথিদের কলাম (1)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>পেশা/চাকরী (91)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রকাশিত বই (1)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রবন্ধ নিবন্ধ (407)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>প্রশ্নোত্তর (3,018)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ফযীলত ও মানাকেব (120)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ফাযায়েলে আমালে সালেহা (101)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বাহাস/মুনাজারা/বিতর্ক (2)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিজ্ঞান/দর্শন (4)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিধর্মী মতবাদ (44)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিবাহ/শাদি (156)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিবিধ (31)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিভাগসমূহ (5)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>বিশেষ নোটিশ (6)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ব্যবসা-বাণিজ্য/ভাড়া (124)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ভুল ও ভ্রান্ত ধারণা নিরসন (521)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>ভ্রান্ত মতবাদ (216)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মাযহাব ও তাকলীদ (306)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মাস ও দিনের ফযীলত (31)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মিরাস/উত্তরাধিকার (53)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুআশারাত/নৈতিক গুণাবলী (7)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুখোশ উন্মোচন (348)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুজেজা/কারামত/কাশফ/ইলহাম (22)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>মুনকিরীনে হাদীস/হাদীস অস্বিকারকারী (2)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>যাকাত/সদকাতুল ফিতির (136)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>রোযা/তারাবীহ/ইতিকাফ (225)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>লেনদেন (36)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শিয়া মতবাদ (56)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শিরক ও বিদআত (147)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>শোক/ইদ্দত (11)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সফর/মুসাফির (43)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সংবাদ (71)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সমকালিন প্রসঙ্গ (43)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সাজসজ্জা/পোশাক পরিচ্ছেদ (84)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সাম্প্রতিক অডিও ভিডিও (315)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সালাফদের জীবনী (26)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সালাম-মুসাফাহা/মুআনাকা (12)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সীরাত ও মীলাদ (36)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সুন্নতে রাসূল (112)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>সেজদায়ে সাহু-সেজদায়ে তিলাওয়াত (43)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হক ও অধিকার (57)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হক ও বাতিল দল (145)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হজ্ব (61)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হাদীসের জারাহ তাদীল (155)</ListItemText>
                 </ListItem>
                 <ListItem button >
                             <FolderIcon />
                        <ListItemText>হালাল ও হারাম (140)</ListItemText>
                 </ListItem>
            </List>
        </Box>
    );
    return (
        <div>
              <React.Fragment >
                    <Button onClick={toggleDrawer('right', true)}>right</Button>
                    <Drawer
                        anchor='right'
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list('right')}
                    </Drawer>
                </React.Fragment>
        </div>
    );
};

export default ListDrawer;