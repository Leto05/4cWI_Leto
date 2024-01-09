export default function Person({name, description,image}) {
    console.log(name);
    return (
        <div className="Person"  style={{border:"solid"}}>
            <h1>{name}</h1>
            <div>{description}</div>
            <a href={image}><img src={image} alt="Bild"/></a>
            <div className="bg-green-400">Test</div>
        </div>
    );
  }
    