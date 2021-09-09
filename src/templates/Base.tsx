import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { useEffect, useState } from 'react';

export interface TakeShapeProps {
  section:any,
  testimonial:any,
  offer:any,
}

const Base = () =>{
  const [data, setData] = useState<TakeShapeProps | null>(null);

  useEffect(() => {
    (async()=>{
      const newData = await getData();
      setData(newData);
    })();
  }, []);

  if(!data){
    return (
      <div>
        Could not load TakeShape data!
      </div>
    )
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero section={data?.section} />
      <VerticalFeatures testimonial={data?.testimonial} />
      <Banner offer={data?.offer} />
      <Footer />
    </div>
  );
}

export { Base };

async function getData():Promise<TakeShapeProps | null>{

  try{
    const result = await fetch(`${process.env.NEXT_PUBLIC_TAKESHAPE_ENDPOINT}`,
    {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TAKESHAPE_KEY}`
        },
        body: JSON.stringify({
          query: `query
            {
              getLandingPageArrayList {
                items {
                  _id
                  landingShapeArray {
                    ... on OfferExample {
                      callToAction
                      signupUrl
                      campaignId
                    }
                    ... on SectionExample {
                      headingExample
                      descriptionExample
                      backgroundImageExample{
                        sourceUrl
                      }
                    }
                    ... on TestimonialExample {
                      customerObject {
                        customerImage {
                          sourceUrl
                        }
                        customerName
                      }
                      quote
                    }
                  }
                }
            }            
          }`
        })
    });
    
    const resultJSON = await result.json();
    const {landingShapeArray} = resultJSON.data.getLandingPageArrayList.items[0];

    return {
      section: landingShapeArray.find((item:any)=>item.headingExample!==undefined),
      testimonial: landingShapeArray.find((item:any)=>item.customerObject!==undefined),
      offer: landingShapeArray.find((item:any)=>item.campaignId!==undefined),
    }
  } catch(error){
    console.log("Error trying to get takeshape data", error);
    return null;
  }
}
