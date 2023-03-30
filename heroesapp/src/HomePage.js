function HomePage({data}) {
    return (
        <>
        <h1>Home page</h1>
        <h1>Hero 1 is {data.data.filter((hero) => hero.name.includes('Superman')).map(item => (
          <div key={item.name}></div>))}</h1>
        </>
    )
}

export default HomePage