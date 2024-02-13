import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  const [filteredpeople, setFilteredPeople]= useState([]);

  useEffect(()=>{
    fetch("https://659feda05023b02bfe8ad7b6.mockapi.io/person").then(
      (res) => res.json().then((data)=>{setPeople(data);
        setFilteredPeople(data);
      }));
  },[]);
  
const filterPeople = (filter)=>{
    let filtered= people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    setFilteredPeople(filtered);
}

  return (
    <div className=''>
      <div className='fixed border mb-4 bg-green-400 w-full h-28 p-4'>
      <h1>People</h1>
        <input className="border p-4"type="text" placeholder="Search" onChange={(el)=>{
            console.log(el.target.value);
            filterPeople(el.target.value)
        }}/>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
          {filteredpeople.map(person => 
          {
            return <Card name={person.name} title={person.jobtitle} imageUri={person.avatar}/>
          })}
          <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300"/>
          <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300"/>
          <Card name="Hans" title="CEO" imageUri="https://picsum.photos/200/300"/>
      </div>
    </div>
  )
}
