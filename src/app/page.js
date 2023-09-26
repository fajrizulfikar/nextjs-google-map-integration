import Map from "../components/Map";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid">
        <div>
          <p>Gansel Rechtsanwälte</p>
        </div>
        <div className="grid">
          <p>Adresse</p>
          <p>Wallstraße 59, 10179 Berlin, Germany</p>
        </div>
      </div>
      <Map />
    </div>
  );
}
