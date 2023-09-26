import Image from "next/image";

import Map from "../components/Map";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-cols-1 content-between">
        <div className="h-9 w-9 relative">
          <Image
            priority
            src="/icons/gmaps.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Google maps icon"
          />
        </div>
        <div className="h-fit">
          <h3 className="mb-2 mt-0 text-3xl font-medium leading-tight text-primary">
            Gansel Rechtsanwälte
          </h3>
        </div>
        <div className="grid h-fit">
          <p className="h-fit font-bold">Adresse</p>
          <p className="h-fit text-neutral-900">
            Wallstraße 59, 10179 Berlin, Germany
          </p>
        </div>
      </div>
      <Map />
    </div>
  );
}
