import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Home from './home';
import Aos from 'aos'
import 'aos/dist/aos.css'
import PulseLoader from 'react-spinners/PulseLoader'
import SideBar from '../HomeComponents/SideBar/SideBar'
import Header from '../HomeComponents/Header/Header'

import Message from '../HomeComponents/Message/Message'
import TopSchool from '../HomeComponents/TopSchool/TopSchool'
import LatestNews from '../HomeComponents/LatestNews/LatestNews'
import Footer from '../HomeComponents/Footer/Footer'
import PinNotice from '../HomeComponents/PinNotice/PinNotice';




// #02a650
// #2e3192
const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 function Index({notices,newsData}) {
  
  let [loading, setLoading] = React.useState(true);
  let [color, setColor] = React.useState("#02a650");
  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 2000)
  }, [])
  React.useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  return (
    <>
      {
        loading ?
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%'



          }}>
            <PulseLoader color={color} loading={loading} css={override} size={25} />
          </div>
          :
          <Box>
            <SideBar></SideBar>
            <Header></Header>
            
           <PinNotice notices={notices}></PinNotice>
            <Message></Message>
            <TopSchool></TopSchool>
            <LatestNews news={newsData}></LatestNews>
            <Footer></Footer>
          </Box>
      }


    </>
  );
}


export default Index

export async function getStaticProps() {
  const NoticeRes = await fetch(`https://gmhsclone.herokuapp.com/notices`)
  
  const notices = await NoticeRes.json()

  const NewsRes = await fetch(`https://gmhsclone.herokuapp.com/news`)
  const newsData = await NewsRes.json()

  return { 
      props: {notices,newsData}
  }
}



