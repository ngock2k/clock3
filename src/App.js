import logo from './logo.svg';
import './App.css';
import { BodyLeft } from './BodyLeft'
import { BodyFeed } from './BodyFeed'
function App() {
  return (
   
    <div className='flex-auto flex flex-col '>
      {/* <Header> */}
    <div className='flex-auto flex  h-14 items-center justify-between '>
      <div className=' w-1/4 flex items-center pl-3'>
        <button
          className='w-10 h-10 rounded-full '
          type='image'>
          <img src='img/fb.png'
            className=' w-10 h-10 ' />
        </button>
        <div className='flex  flex-row ml-3 h-10 w-60 bg-gray-100 items-center rounded-full  '>
          <img src='img/timKiem.png'
            className='w-5 h-5 ml-2 rounded-full' />
          <input
            className=' text-sm ml-2 bg-gray-100 '
            type='text'
            placeholder='Tìm kiếm trên Facebook' />
        </div>
      </div>
      <div className='flex-auto flex items-center ml-14'>
        {['img/trangchu.png','img/video.png','img/marketplace.png','img/group.png','img/game.png'].map(item => {
          return(
            <button type='image'  >
          <img src={item}
            className='w-8 h-8 mr-11 ml-11 mt-3 mb-3' />
        </button>
          )
        })}
      </div>
      <div className='flex-auto flex items-center justify-end'>
        {['img/option.png','img/tinnhan.png','img/thongbao.png','img/avatar.jpg'].map(item => {
          return(
            <button type='image' className='mr-1 ml-1 rounded-full '> 
          <img src={item}
            className='w-10 h-10 rounded-full ' />
        </button>
          )
        })}
      </div>
    </div>
    {/* </Header>
    <Body> */}
    <div className='flex-auto flex bg-gray-100 '>
    <BodyLeft/>
    <BodyFeed/>
    </div>
    {/* </Body> */}
    </div>

  );
}

export default App;
