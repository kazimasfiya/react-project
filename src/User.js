function User()
{

    let name="MAhtab";
    function Apple()
{
  //return <h3>This is component within component</h3>
  alert(name)
  name="Kazim"
  alert(name)
}
    return (
        <div>
             <h1>User Function Component</h1>
             <h3>{name}</h3>
             <button onClick={Apple}>Click Me!</button>
       
        </div>
       
    )
}

export default User