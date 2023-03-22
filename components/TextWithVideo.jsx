const TextWithVideo = () => {
  return (
    <div className="grid justify-center items-center text-center w-screen h-screen bg-[rgba(245,243,239,1)] text-[rgba(28,79,73,1)]">
      <div className="container gap-8 flex flex-col items-center">
        <h2>
          Farming Made Easy with eie.io
        </h2>
        <p>
          As Mr. McDonald, I am excited to introduce eie.io, a farming solutions start-up that aims to revolutionize the way farmers work.
        </p>
        <iframe
          className="w-screen	max-w-7xl h-[50vh]"
          src="https://www.youtube.com/embed/ig5Ly8MBFOQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default TextWithVideo;