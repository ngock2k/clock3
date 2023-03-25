export const BodyLeft = () => {
    return (
        <div className='w-1/4 pl-4 pt-4'>
            {[
                {
                    image: 'img/avatar.jpg',
                    text: 'Bảo Ngọc'
                },
                {
                    image: 'img/banbe.png',
                    text: ' Bạn bè'
                },
                {
                    image: 'img/gandaynhat.png',
                    text: 'Gần đây nhất'
                },
                {
                    image: 'img/nhom.png',
                    text: 'Nhóm'
                },
                {
                    image: 'img/market.png',
                    text: 'Marketplace'
                },
                {
                    image: 'img/watch.png',
                    text: 'Watch'
                },
            ].map(item => {
                return (
                    <button className='flex-auto flex items-center font-semibold '>
                        <img src={item.image}
                            className='w-9 h-9 mr-3  mb-2 mt-2  object-cover rounded-full' />
                        <p>
                            {item.text}
                        </p>
                    </button>
                )
            })}
           
            <button className='flex-auto flex items-center font-semibold'>
                <img src='img/xemthem.png'
                    className='w-9 h-9 mr-3 mt-2 mb-2 object-cover' />
                <p>
                    Xem thêm
                </p>
            </button>
            <div className='h-px bg-gray-300'>

            </div>
            <div className='flex-auto flex mt-2'>
                <p className='font-semibold text-lg text-gray-500'>
                    Lối tắt của bạn
                </p>
                <div className='flex-auto flex rounded-md ml-28  bg-gray-200'>
                    <button type='text' className=' text-sky-500 text-base mt-1 mb-1 ml-2 mr-2'>
                        Chỉnh sửa
                    </button>
                </div>
            </div>
            {[
                {
                    image:'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/334281641_1316923808884741_8473626845691338780_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=8631f5&_nc_ohc=zMDq_WbESigAX_HNPHY&_nc_ht=scontent.fhan5-2.fna&oh=00_AfB5idrODLJHnba_3FK9-imjhH4vsYUxGUESBCWWRnnmBA&oe=64220B7B',
                    text:'Giao lưu mẫu phó nháy VN'
                },
                {
                    image:'https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-6/329159992_915883192897178_2241069437369615590_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8631f5&_nc_ohc=FHU4QyA2ZC4AX8HZurt&_nc_ht=scontent.fhan5-10.fna&oh=00_AfBhxCSLWbNGsK9_ssuXRYaBkDkR7yx363TXwGDAaULxaw&oe=64219E12',
                    text:'KHOẢNH KHẮC ĐẸP (ngôi nhà mới)'
                },
                {
                    image:'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/275484281_3140285952902206_5515200092602040483_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=SmFSa7wpiQEAX97cbps&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBzYX092erNLV47UrrwymTAp0S900ggJ5fplDXGp0St8A&oe=6422987A',
                    text:'CLB Nhiếp ảnh Nghệ thuật Việt (VietArt)'
                },
                {
                    image:'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/78552503_2192395021064554_7260279735828086784_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8631f5&_nc_ohc=yM2AXzKwipIAX_b4THf&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfDHA7S7bdbwJPVLAmDo3p_K0TlwsItNn0UUcFce1cI6Vg&oe=64450B5C',
                    text:' Casting diễn viên Việt Nam - Khu vực Miền Bắc  Film Catwalk Lookbook Tiktok Review'
                },
                {
                    image:'https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/319290036_1427587787649664_7931760487426389988_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Roi56o8USG8AX9BzMf1&_nc_ht=scontent.fsgn13-3.fna&oh=00_AfCATkcrJTlaCwukhCEgqESh3YsliItl5PpHw7sa7T0PXg&oe=64230828',
                    text:'PG HÀ NỘI - PG CHUYÊN NGHIỆP (Nhóm Chính Thức)'
                },
                {
                    image:'img/xemthem.png',
                    text:'Xem thêm'
                },
            ].map(item => {
                return(
                    <button className='flex-auto flex text-sm text-left items-center font-semibold'>
                    <img src={item.image}
                        className='w-10 h-10 object-cover rounded-xl mt-2 mb-2 mr-3' />
                    <p >
                        {item.text}
                    </p>
                </button>
                )
            })}
            <div className='flex-row flex mt-3 text-sm text-slate-600'>
                {['Quyền riêng tư','Điều khoản','Quảng cáo'].map(item => {
                    return(
                        <div className=" flex">
                        <button>
                       {item}
                    </button>
                    <p className='ml-1 mr-1'>
                        .
                    </p>
                    </div>
                    )
                })}
                <button>
                    Lựa chọn
                </button>
            </div>
            <div className='flex-auto flex items-center text-sm text-slate-600'>
            {['Quảng cáo','Cookie','Xem thêm'].map(item => {
                    return(
                        <div className=" flex">
                        <button>
                       {item}
                    </button>
                    <p className='ml-1 mr-1'>
                        .
                    </p>
                    </div>
                    )
                })}
                <p>
                    Meta © 2023
                </p>
            </div>
        </div>
    )
}

