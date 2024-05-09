import style from "../css/Reviews.module.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import googlelogo from "../Assets/googlelogo.svg";


const Reviews = () => {
  const data = [
    {
      name: "John Doe",
      about: "Adventurous traveler, nature lover",
      review:
        "Had an amazing experience with DASA holidays! The trip was well-organized, and the guides were knowledgeable. Would highly recommend!",
    },
    {
      name: "Alice Smith",
      about: "Beach enthusiast, photography enthusiast",
      review:
        "DASA holidays provided a fantastic beach getaway! The accommodations were excellent, and the activities were enjoyable. Can't wait for my next trip with them!",
    },
    {
      name: "Michael Johnson",
      about: "History buff, cultural explorer",
      review:
        "My trip with DASA holidays exceeded all expectations! The historical sites we visited were fascinating, and the local cuisine was delicious. A memorable experience!",
    },
    {
      name: "Emily Brown",
      about: "Adventure seeker, adrenaline junkie",
      review:
        "DASA holidays delivered an adrenaline-packed adventure! From thrilling activities to breathtaking landscapes, every moment was unforgettable. I'll definitely be booking another trip!",
    },
    {
      name: "David Wilson",
      about: "Foodie, culinary adventurer",
      review:
        "As a food enthusiast, I was impressed by the culinary tour organized by DASA holidays! From street food to fine dining, every meal was a delight. Highly recommended for fellow foodies!",
    },
    {
      name: "Sarah Taylor",
      about: "Nature lover, wildlife enthusiast",
      review:
        "DASA holidays provided an immersive wildlife experience! The safari was incredible, and I had the opportunity to see some amazing animals up close. Truly unforgettable!",
    },
    {
      name: "Robert Martinez",
      about: "Mountain lover, hiking enthusiast",
      review:
        "My mountain trek with DASA holidays was nothing short of spectacular! The scenery was breathtaking, and the guides were experienced. Can't wait to explore more mountains with them!",
    },
    {
      name: "Olivia Rodriguez",
      about: "City explorer, architecture admirer",
      review:
        "DASA holidays offered an insightful city tour! I got to explore iconic landmarks and learn about the rich history and culture of the city. A fantastic experience from start to finish!",
    },
  ];

  return (
    <div className={style.container} id="reviews">
      <Carousel className="w-[70%]">
        <CarouselContent className="ml-1">
          {data.map((x, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card key={index} className="w-[90%] rounded-[50px] h-[400px] overflow-ellipsis justify-center">
                  <div className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between p-1">
                      <div className="flex flex-col gap-1">
                        <CardTitle className="text-black">{x.name}</CardTitle>
                        <CardDescription>{x.about}</CardDescription>
                      </div>
                      <img
                        src={googlelogo}
                        alt="google"
                        className="rounded size-[40px] ml-2"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="w-full text-lg text-[#000] mt-[10px]">
                    {x.review}
                  </CardContent>
                  </div>
                  
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Reviews;