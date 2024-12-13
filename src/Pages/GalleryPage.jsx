const GalleryPage = () => {
  return (
    <div className=" flex flex-col items-center md:items-start p-4">
      <h1 className=" md:text-[10.5vw] text-[50px] font-bold  text-center md:text-start">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          GALLERY
        </span>
      </h1>
      <div className=" flex flex-wrap  gap-5 items-center justify-between">
        <img className=" h-[400px]" src="/images/1.jpg" />
        <img className=" h-[400px]" src="/images/6.jpeg" />
        <img className=" h-[400px]" src="/images/3.jpg" />
        <img className=" h-[400px]" src="/images/2.jpg" />
        <img className=" h-[400px]" src="/images/5.avif" />
        <img className=" h-[400px]" src="/images/6.jpeg" />
        <img className=" h-[400px]" src="/images/7.jpg" />

        <img className=" h-[400px]" src="/images/8.jpg" />
      </div>
    </div>
  );
};

export default GalleryPage;
