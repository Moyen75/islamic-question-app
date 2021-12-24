import Box from '@mui/material/Box';
import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Container } from '@mui/material';




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
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  transition:all .3s;
`;
const TopQuestions = () => {
    return (
        <Box sx={{ marginTop: '100px' }}>
            <Container>
                <TabsUnstyled defaultValue={0}>
                    <TabsList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                    </TabsList>
                    <TabPanel value={0}>First content</TabPanel>
                    <TabPanel value={1}>Second content</TabPanel>
                </TabsUnstyled>
            </Container>

        </Box>
    );
};

export default TopQuestions;