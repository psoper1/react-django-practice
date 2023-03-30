function HomePage({data}) {

  let hero_call = data.filter((hero) => hero.name.includes('Superman'))
  console.log(hero_call.name)
   

    return (
        <>
        <h1>Home page</h1>
        <h1>Hero 1 is {hero_call.name}</h1>
        </>
    )
}

export default HomePage