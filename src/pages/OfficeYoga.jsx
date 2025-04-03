export const OfficeYoga = () => {
  return (
    <section className="animate-mediumFadeIn ">
      <div className="relative w-10/12 laptop:w-9/12 mx-auto mt-40 flex flex-col text-stone-900">
        <h3 className="font-dream text-3xl mb-10">Office Yoga</h3>
        <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-20">
        <div className=" flex flex-col gap-4 laptop:w-1/2">
          <h4 className="text-2xl italic font-dream ">
          Movement & Mindfulness at Work 
          </h4>
          <p className=" text-justify">
My office yoga sessions are designed to fit seamlessly into the workday, offering a mix of gentle movement, mindful breathing, and relaxation techniques that help reset the body and mind. Sessions can be done in a conference room, a gym or whichever space you have to roll out your yoga mats. 
</p>
<h5 className="font-medium">Each class is tailormade for your needs and requests, but could typically include:</h5>
<ul className="list-disc list-inside bg-warm-white rounded-xl p-4 flex flex-col gap-3">
<li>Gentle stretches to release tension from sitting</li>
<li>Breathing exercises to improve focus and energy</li>
<li>Simple positions that support better posture and mobility</li>
<li>A short relaxation to leave everyone feeling refreshed</li>
<li>The opportunity to connect with collegues in a fun and genuine way</li>
</ul>
<p>
The practice is accessible to all levels</p>
<p className="text-justify">
The duration can be anything between <span className="font-medium">30 to 60 minutes</span>, whatever fits your office. Usually no shower is needed, so it&lsquo;s easy to fit into the work schedule.
          </p><div className="flex gap-10">
          <a
                href="mailto:therese@lightbodyyoga.se?subject=Påbörja samarbete - Kontorsyoga"
                className="flex gap-2 tablet:gap-4 items-center"
              >
                <img
                  src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1743172962/orange_mail_m06yz1.svg"
                  className="w-auto h-[90px] laptop:h-[80px]"
                  alt="mail contact"
                />
              </a>
          <p className="text-justify"><span className="font-medium italic">Do you want to bring yoga to your office?</span> Simply send me an email, and we can find a way for me to improve your workday with movement, breath and joy. </p>
        </div>
        </div>
        <video
       
         className="w-full laptop:w-1/2 h-auto aspect-[4/3] object-cover rounded-2xl"
        controls
        playsInline
  controlsList="nodownload nofullscreen noremoteplayback"
  poster="https://res.cloudinary.com/dbf8xygxz/video/upload/v1743671518/video-dc-Therese-yoga_lrqfyw.jpg" 
>
  <source
     src="https://res.cloudinary.com/dbf8xygxz/video/upload/v1743671518/video-dc-Therese-yoga_lrqfyw.mov"
    type="video/mp4"
  />
       
      </video>
      </div>
      </div>
    </section>
  );
};
