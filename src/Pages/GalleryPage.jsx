const GalleryPage = () => {
  return (
    <section id="gallery" className=" flex flex-col items-center  ">
      <h1 className=" md:text-[10.5vw] text-[40px] font-bold  text-center ">
        OUR{" "}
        <span className=" bg-gradient-to-b from-orange-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          GALLERY
        </span>
      </h1>
      <div className=" flex flex-wrap  gap-5 items-center justify-between">
        <img className=" h-[400px]" src="/images/1.jpg" alt="ground" />
        <img
          className=" h-[400px] w-full md:w-fit"
          src="/images/6.jpeg"
          alt="football"
        />
        <img className=" h-[400px]" src="/images/3.jpg" alt="cricket" />
        <img className=" h-[400px]" src="/images/2.jpg" alt="football" />
        <img className=" h-[400px]" src="/images/5.avif" alt="cricket" />
        <img className=" h-[400px]" src="/images/cri1.jpg" alt="football" />
        <img className=" h-[400px]" src="/images/8.jpg" alt="football" />
      </div>
    </section>
  );
};

export default GalleryPage;
