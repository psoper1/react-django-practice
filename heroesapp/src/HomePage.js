function HomePage({data}) {

  console.log(data)

  let hero_call = data.filter((hero) => hero.name.includes('Hulk'))
  // console.log(hero_call.name)

  // if (data.length === 0) return null
   

    return (
        <>
        <h1>Home page</h1>
        <h1>Hero 1 is {hero_call.name}</h1>
        </>
    )
}

export default HomePage