import type { NextPage } from "next";
import axios from "axios";
import { Video } from "../types";
import VideoCard from '../components/VideoCard'
import NorResults from '../components/NorResults'

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {

  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos.length ? (
        videos.map((video: Video) => (
          // <VideoCard post={video} key={video._id} />
          <h1>fds</h1>
        ))
      ) : (
        // <NorResults text={"No videos"} />
        <h1>fdsmas</h1>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
