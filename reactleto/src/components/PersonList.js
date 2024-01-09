import Person from "./Person";

//jsx Sprache
export default function ReturnHTML() {
  return (
    <div className="Container">
      <div class="absolute w-full h-full">
      </div>
      <div>
        <Person name="Leto" description="Lauterachn" image="https://www.w3schools.com/howto/img_avatar.png"/>
        <Person name="Flogu" description="Fussach"/>
        <Person name="Danny" description="Alberschwende"/>
      </div>
    </div>
  );
}
