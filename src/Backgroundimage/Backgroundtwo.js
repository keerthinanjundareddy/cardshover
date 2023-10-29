import React,{useState} from 'react';
import './Baackgroundtwo.css'
import imageone from '../../src/Assets/seo-search-engine-optimization-2023-05-08-23-44-00-utc.jpg'
import imagetwo from '../../src/Assets/pay-per-click-94-2022-10-26-05-23-56-utc.jpg'
import imagethree from '../../src/Assets/image-of-two-friendly-business-partner-working-on-2023-04-18-02-34-32-utc.JPG'
import imagefour from '../../src/Assets/social-media-2022-11-14-07-05-26-utc.jpg'
import imagefive from '../../src/Assets/assessment-analysis-bar-graph-presentation-2022-12-16-00-26-45-utc - Copy.jpg'
import imagesix from '../../src/Assets/image-of-start-up-business-people-discussing-over-2023-01-31-03-28-56-utc.JPG'
import imageseven from '../../src/Assets/a-man-chats-with-an-artificial-intelligence-chat-b-2023-08-29-05-17-51-utc.jpg'


const dummyData = [
  { title: imageone, heading: 'SEARCH ENGINE OPTIMIZATION (SEO)', contenttwo: "SEO, or Search Engine Optimization, is all about keywords, enhancing online presence, and on-page optimization to boost brand awareness and organic traffic. Continuous monitoring is vital for optimizing results." },
  { title: imagetwo, heading: 'PAY-PER-CLICK ADVERTISING (PPC)', contenttwo: "PPC Advertising, commonly associated with Google AdWords, is an online marketing campaign that directs clicks to a specific landing page. It aims to create impressions, generate clicks, and maximize Return on Investment (ROI)." },
  { title: imagethree, heading: 'SOCIAL MEDIA MARKETING (SMM)', content: 'Louis Phillippe', contenttwo: "SMM, or Social Media Marketing, involves building brand loyalty through strategic content creation, community management, and a strong social media presence. It often leverages influencer partnerships and engaging campaigns to connect with the target audience. enhance branding and engage the audience effectively" },
  { title: imagefour, heading: 'CONTENT MARKETING', contenttwo: "Content marketing is a strategy that focuses on creating and distributing valuable content such as blog posts, articles, and infographics. It involves optimization and tracking metrics to enhance branding and engage the audience effectively." },
  { title: imagefive, heading: 'CONVERSION RATE OPTIMIZATION (CRO)', content: 'Coco-Cola', contenttwo: "Conversion Rate Optimization (CRO) is all about optimizing websites for higher engagement and conversions. It involves techniques like A/B testing, improving user experience, and enhancing the conversion funnel, often through effective call-to-action strategies." },
  { title: imagesix, heading: 'REMARKETING AND RETARGETING', content: 'Amway', contenttwo: "Remarking and retargeting in online advertising involve personalized ads and tracking to optimize conversations and encourage conversions. It's a strategic approach within online advertising to re-engage potential customers who have shown previous interest." },
  { title: imageseven, heading: 'EMERGING TRENDS AND TECHNOLOGIES', content: 'Ummeed Finance', contenttwo: "Emerging trends and technologies encompass Artificial Intelligence, chatbots, voice search, and automation. These innovations are reshaping the digital landscape, influencing user experiences, and driving the evolution of various industries." },
];



const Backgroundtwo= () => {
    const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
   

   <div style={{textAlign:"center",color:"green",marginTop:"20px",fontSize:"20px"}}><b>OUR-OFFERS(DIGITAL AND PERFORMANCE MARKETING)</b></div>
    <div className="card-container">
       {dummyData.map((data, index) => (
       <div
       key={index}
       className="card"
   
       onMouseEnter={() => setHoveredCard(index)}
       onMouseLeave={() => setHoveredCard(null)}
     >
          <div  className='imge-sections'>
             <img src={data.title}  alt="imgone" className='imge-section-two' />
            </div>
       <div className='heading-sections'style={{textTransform:"uppercase",marginTop:"40px",textAlign:"center",}}>{data.heading}</div>
          <div className='title-sections'  style={{ opacity: hoveredCard === index ? 1: 1}}>{data.contenttwo}</div>

 
          
  </div>
      ))}
    
    <style jsx>{`
    
    .title-sections{
       
    }

`}</style>
</div>
    </>

  );
};

export default Backgroundtwo;

