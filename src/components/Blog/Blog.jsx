import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const { id, title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;

    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between mt-5'>
                <div className='flex items-center gap-3'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h2 className='font-bold'>{author}</h2>
                        <p className='font-light opacity-70'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read
                        <button onClick={() => handleAddToBookmarks(blog)}
                            className='text-2xl ml-2'><CiBookmark></CiBookmark>
                        </button>
                    </span>
                </div>
            </div>
            <h2 className="text-4xl mt-4 mb-5">{title}</h2>
            <div className=' space-x-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </div>
            <div className='mt-4'>
                <button className='text-blue-600 underline' onClick={() => handleMarkAsRead(reading_time, id)}>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;