export const BodyFeed = () => {
    return(
     <div className=' ml-14 shadow-gray-400 drop-shadow-md'>
     <div className='flex-row flex  items-center justify-between '> 
     <button className=" absolute w-10 h-10 rounded-full"
     style={{marginLeft:575}}>
     <img src='img/tieptheo.png' 
     className=" w-10 h-10 rounded-full"/>
     </button>
      <button className="flex flex-col bg-white mr-1 rounded-xl w-28 h-52">
       <img src='img/avatar.jpg'
        className='w-28 h-40 object-cover rounded-t-xl '/>
       <p className="ml-9 mt-5 text-xs font-semibold">
        Tạo tin
       </p>
       <img src='img/taotin.png'
       className="w-10 h-10 rounded-full absolute ml-9 mt-36  border-white border-4" />
      </button>
      
      {[
        {
           image: 'https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/337703033_743284670722589_4247561454794873871_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=hZMWvkzqj_UAX8EomVA&_nc_ht=scontent.fhan5-10.fna&oh=00_AfB_Pu4QBiIoNujSxWbVucY6LWUilYc6UIEmpApL4Wb5Mw&oe=6422BB37',
            name:'Lê Tú',
            avatar:'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/337837616_933185624479092_780916848805204103_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JUKODk7RCCMAX_XDXAL&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCk4S4ZNG0u7RLxeMPB5gOHGgAODOndYpYCxFSeurlVrw&oe=6423ADA1'
        },
        {
            image: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/337375614_102920519425168_2254238459326404513_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=nSf0gJemm_4AX9avbB3&_nc_ht=scontent.fhan5-9.fna&oh=00_AfC0D2Ijerpctlfay-NSXqCNq9IxJKttrRxmSDShnZG-Og&oe=6424834E',
             name:'Thanh Hằng',
             avatar:'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/302711237_780878736393125_6928210096477085113_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=lKzyaYLq8kAAX887X0-&_nc_ht=scontent.fhan5-11.fna&oh=00_AfA7_LezAAFeGFxZdKyAQcm_2eV_ZbAfHxB9GfuR4pT0sw&oe=6422D5DC'
         },
         {
            image: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/337556772_557527899804250_3350336072520498793_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=_OJBdGBe5NMAX_jlw4B&_nc_ht=scontent.fhan5-9.fna&oh=00_AfAVpXzoPqFlU8STw_OlnktslOLFxJniqYL7feO4mpcNAg&oe=6423E2C7',
             name:'Hà Thâm Thúy',
             avatar:'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/334575542_925616982189978_1148312915797570857_n.jpg?stp=cp6_dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=CJiF-N3uOTgAX_5_Rde&_nc_ht=scontent.fhan5-2.fna&oh=00_AfBbYRmOdDAMAyisEBkLl9IqPoEMs3Pjj-US4hc5c0Ek6w&oe=6422C271'
         },
         {
            image: 'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/337134914_753351016458313_2197541262206447261_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=1RoguyS6ahwAX9uBHAr&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDRyUVPq5lvEYwkl-NGK7YQS98taqEiS3h__-omUzGdEw&oe=6423A8B4',
             name:'Sơn Chiến',
             avatar:'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-1/124870160_1526579090872989_4265326054105922797_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_1gGr75erocAX-7-y3V&_nc_ht=scontent.fhan5-2.fna&oh=00_AfBIEEBy0H8mZn_iUOH6LHMOG8shQJWBJYF7PaIlopOAsA&oe=644626AD'
         }
      ].map(item => {
        return (
            <button className="flex flex-col rounded-xl ml-1 mr-1 w-28 h-52">
       <img src={item.image}
        className='w-28 h-52 object-cover rounded-xl '/>
       <p className="absolute text-white ml-3 mt-44 font-semibold text-sm">
        {item.name}
       </p>
       <img src={item.avatar}
       className="w-10 h-10 rounded-full absolute ml-3 mt-3 border-blue-500 border-4" />
      </button>
        )
      })}
      
     </div>
     <div className=" pl-3 pr-3 flex flex-col mt-8 rounded-xl bg-white">
     <div className="flex flex-auto mt-3">
      <button className="rounded-full w-10 h-10 mr-2">
        <img src='img/avatar.jpg'
        className="rounded-full w-10 h-10 object-cover"/>
        </button>
        <input className=" pl-3 flex-1 bg-gray-100 font-semibold text-gray-900 rounded-full "
        placeholder="Ngọc ơi, bạn đang nghĩ gì thế?">
        </input>
     </div>
     <div className="h-px mt-3 bg-slate-300">
 
     </div>
     <div className="flex flex-auto mt-3 mb-3">
      {[
        {
            image:'img/videotructiep.png',
            text:'Video trực tiếp'
        },
        {
            image:'img/anhvideo.png',
            text:'Ảnh/Video'
        },
        {
            image:'img/camxuc.png',
            text:'Cảm xúc/hoạt động'
        }
      ].map(item => {
        return(
            <button className=" justify-center flex flex-auto rounded-lg items-center">
                <img src={item.image}
                className='w-8 h-8 mt-2 mb-2 rounded-full'/>
                <p className=" text-gray-700 font-semibold">
                    {item.text}
                </p>
            </button>
        )
      }
      )}
     </div>
     </div>
     <div className=" rounded-xl bg-white pt-3 pb-3 mt-5">
     <button className=" flex flex-auto rounded-full border border-blue-100 ml-4 items-center">
        <img src='img/hopmat.png'
        className="w-7 h-7 mt-1 mb-1 ml-2 mr-2"/>
        <p className=" text-blue-600 font-semibold mr-3">
            Tạo phòng họp mặt
        </p>
     </button>
     </div>
     <div className="bg-white rounded-xl pt-3 mt-2 ">
     <div className="pl-3 flex flex-auto items-center">
      <button className="rounded-full w-10 h-10 mr-2 ">
        <img src='https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-1/300258519_2721183494693137_1634599515033013014_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KDUnkpC_5hwAX-u_hyj&_nc_ht=scontent.fhan5-2.fna&oh=00_AfA1AXcEiUWejm-ErcZ0-ngRvVdGu3YKs_RQotr7lOE82g&oe=64239ADF'
      className="w-10 h-10 rounded-full"/>
      </button>
      <div>
        <p className="font-bold ">
            Duy Hai Nguyen
        </p>
        <div className="flex flex-auto items-center">
            <button className="text-sm mr-1">
                2 giờ
            </button>
            <img src='img/chedobanbe.png' className="w-4 h-4"/>
        </div>
      </div>
      <img src="img/3cham.png" className="w-6 h-2 ml-96"/>
      <img src="img/x.png" className="w-5 h-5 ml-5"/>
     </div>
     <p className="mt-2 mb-2 ml-3">
     Các chiến binh!
     </p>
     <div className="flex items-center bg-blue-400"
     style={{height:600}}>
     <img src='https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/337080050_694127805798450_7119806830911388907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=b2qORGTIjIsAX8YOeRM&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCxseG7aZ6I3hx_-r1vGk0ywx76lf1_GN5EyR-8oM-Q8w&oe=64245089'
      className="h-96 object-cover" />
      </div>
      <div className="flex flex-auto ml-3 mt-2 mb-3">
        <button>
            <img src='img/Like.png' className="w-5 h-5"/>
        </button>
        <button>
            <img src='img/Tym.png' className="w-5 h-5"/>
        </button>
        <button className=" text-gray-600 ml-1">
            Nờ Pê và 30 người khác
        </button>
        <button className="ml-80 text-gray-600">
            4 bình luận
        </button>
      </div>
      <div className="ml-3 bg-gray-300 h-px mr-3">
      </div>
      <div className="flex-auto ml-3 mr-3 flex mt-1 mb-1 ">
      <button className=" justify-center flex flex-auto items-center rounded-md">
        <img src='img/thich.png' className="w-6 h-6 mt-1 mb-1 mr-2"/>
        <p> Thích </p>
      </button>
      <button className="justify-center flex flex-auto items-center rounded-md">
        <img src='img/binhluan.png' className="w-6 h-6 mt-1 mb-1 mr-2"/>
        <p> Bình Luận </p>
      </button>
      </div>
      <div className="ml-3 mr-3 bg-gray-300 h-px">
      </div>
      <div className="flex-auto flex mt-2 mb-2 ml-3 mr-3">
       <button className="w-9 h-9 rounded-full">
        <img src='img/avatar.jpg' className="w-9 h-9 rounded-full"/>
       </button>
       <input 
       className="pl-2 rounded-full bg-gray-200"
       placeholder="Viết bình luận..."
       >
       </input>
      </div>
    </div>
    </div>
    )
}